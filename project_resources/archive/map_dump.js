const ROAD_WIDTH = 30;
const SIDEWALK_OFFSET = (ROAD_WIDTH / 2) + 8;

let roadX = [];
let roadY = [];
let cityBlocks = [];

if (tabMap && mapLogEl) {
    tabMap.addEventListener('click', () => {
        if(typeof hideAllTabs !== 'undefined') hideAllTabs();
        tabMap.classList.add('active');
        tabMap.style.color = 'var(--text-main)';
        mapLogEl.style.display = 'block';
        if (typeof chatInputArea !== 'undefined' && chatInputArea) chatInputArea.style.display = 'none';
        
        if (!mapInitialized) {
            initCityMap();
            mapInitialized = true;
        } else {
            if(!animationId) animationId = requestAnimationFrame(drawCityMap);
        }
    });
}

if (typeof window.oldHideAllTabsMap === 'undefined') {
    window.oldHideAllTabsMap = window.hideAllTabs || function(){};
    window.hideAllTabs = function() {
        window.oldHideAllTabsMap();
        if(tabMap) { tabMap.classList.remove('active'); tabMap.style.color = 'var(--text-dim)'; }
        if(mapLogEl) mapLogEl.style.display = 'none';
        if(animationId) { cancelAnimationFrame(animationId); animationId = null; }
    };
    if(typeof hideAllTabs !== 'undefined') {
        hideAllTabs = window.hideAllTabs;
    }
}

function generateCityLayout() {
    roadX = [];
    roadY = [];
    cityBlocks = [];
    
    // Generate Irregular Vertical Roads
    let cx = Math.random() * 50 + 20;
    while (cx < mapWidth - 20) {
        roadX.push(cx);
        cx += 100 + Math.random() * 200; // Variable block width 100-300px
    }
    
    // Generate Irregular Horizontal Roads
    let cy = Math.random() * 50 + 20;
    while (cy < mapHeight - 20) {
        roadY.push(cy);
        cy += 100 + Math.random() * 200; // Variable block height 100-300px
    }
    
    // Generate Block Properties (Districts)
    for (let i = 0; i <= roadX.length; i++) {
        for (let j = 0; j <= roadY.length; j++) {
            let left = i === 0 ? 0 : roadX[i-1] + ROAD_WIDTH/2;
            let right = i === roadX.length ? mapWidth : roadX[i] - ROAD_WIDTH/2;
            let top = j === 0 ? 0 : roadY[j-1] + ROAD_WIDTH/2;
            let bottom = j === roadY.length ? mapHeight : roadY[j] - ROAD_WIDTH/2;
            
            let w = right - left;
            let h = bottom - top;
            
            let type = 'commercial';
            let roll = Math.random();
            if (roll < 0.1) type = 'water';
            else if (roll < 0.25) type = 'park';
            else if (roll < 0.5) type = 'residential';
            else if (roll < 0.65) type = 'industrial';
            
            // Randomly generated sub-buildings inside the block
            let buildings = [];
            if (type !== 'water' && type !== 'park') {
                let numB = Math.floor(Math.random() * 5) + 1;
                for(let b=0; b<numB; b++) {
                    buildings.push({
                        bx: left + 5 + Math.random() * (w - 30),
                        by: top + 5 + Math.random() * (h - 30),
                        bw: 15 + Math.random() * 40,
                        bh: 15 + Math.random() * 40,
                        color: type === 'commercial' ? '#1c252d' : (type === 'industrial' ? '#2a2626' : '#222')
                    });
                }
            }
            
            let trees = [];
            if (type === 'park' || type === 'residential') {
                let numT = type === 'park' ? Math.floor(Math.random() * 20) + 10 : Math.floor(Math.random() * 5);
                for(let t=0; t<numT; t++) {
                    trees.push({
                        tx: left + 10 + Math.random() * (w - 20),
                        ty: top + 10 + Math.random() * (h - 20),
                        r: 3 + Math.random() * 6
                    });
                }
            }

            cityBlocks.push({
                left: left, right: right, top: top, bottom: bottom, w: w, h: h,
                type: type, buildings: buildings, trees: trees
            });
        }
    }
}


window.mapZones = [];
window.isDrawingZone = false;
window.startDragX = 0;
window.startDragY = 0;
window.currentMouseX = 0;
window.currentMouseY = 0;
window.activeZoneMode = null;
window.radarGridlines = false;
window.radarHeatmap = false;
window.radarEntityIds = false;
window.radarPatrolRoutes = false;


function initCityMap() {
    cityCanvas = document.getElementById('city-map-canvas');
    if (!cityCanvas) return;
    ctx = cityCanvas.getContext('2d');
    
    const container = document.getElementById('live-map-container');
    mapWidth = container.clientWidth;
    mapHeight = container.clientHeight || 600;
    cityCanvas.width = mapWidth;
    cityCanvas.height = mapHeight;
    
    generateCityLayout();
    
    entities = [];
    for(let i=0; i<120; i++) spawnEntity('civ');
    for(let i=0; i<30; i++) spawnEntity('police');
    // Assign generic IDs
    entities.forEach((e, idx) => { if(!e.id) e.id = (e.faction==='police' ? 'PD-' : 'CIV-') + (1000+idx); });

    animationId = requestAnimationFrame(drawCityMap);
    
    
    // --- Massive Map Drawing Listeners ---
    const allToolBtns = document.querySelectorAll('.map-tool-btn');
    allToolBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.activeZoneMode = btn.getAttribute('data-mode');
            const btnColor = btn.style.borderColor;
            // Reset all
            allToolBtns.forEach(b => {
                b.style.background = 'rgba(0,0,0,0.5)';
                b.style.color = b.style.borderColor;
            });
            // Set active
            btn.style.background = btnColor;
            btn.style.color = '#000';
        });
    });

    // Radar Toggles
    const toggleBtns = [
        {id: 'toggle-gridlines', var: 'radarGridlines'},
        {id: 'toggle-heatmap', var: 'radarHeatmap'},
        {id: 'toggle-entity-ids', var: 'radarEntityIds'},
        {id: 'toggle-patrol-routes', var: 'radarPatrolRoutes'}
    ];
    toggleBtns.forEach(t => {
        const btn = document.getElementById(t.id);
        if (btn) {
            btn.addEventListener('click', () => {
                window[t.var] = !window[t.var];
                if (window[t.var]) {
                    btn.style.background = 'var(--accent-blue)';
                    btn.style.color = '#000';
                    btn.innerText = btn.innerText.replace('[OFF]', '[ON]');
                } else {
                    btn.style.background = 'rgba(0,0,0,0.5)';
                    btn.style.color = '#aaa';
                    btn.innerText = btn.innerText.replace('[ON]', '[OFF]');
                }
            });
        }
    });

    // Spawners
    const swatBtn = document.getElementById('spawn-swat-btn');
    if (swatBtn) {
        swatBtn.addEventListener('click', () => {
            if (typeof entities !== 'undefined') {
                entities.push({
                    faction: 'police', isVehicle: true, x: mapWidth/2, y: mapHeight/2, dir: 'N', speed: 3.5, emoji: '🚐', id: 'SWAT-01'
                });
            }
        });
    }
    const medicBtn = document.getElementById('spawn-medic-btn');
    if (medicBtn) {
        medicBtn.addEventListener('click', () => {
            if (typeof entities !== 'undefined') {
                entities.push({
                    faction: 'medic', isVehicle: true, x: mapWidth/2, y: mapHeight/2, dir: 'S', speed: 2.5, emoji: '🚑', id: 'EMS-01'
                });
            }
        });
    }

    if (cityCanvas) {
        cityCanvas.addEventListener('mousedown', (e) => {
            const rect = cityCanvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Check if clicking existing zone to delete
            let clickedExisting = false;
            for (let i = window.mapZones.length - 1; i >= 0; i--) {
                let z = window.mapZones[i];
                let zX = Math.min(z.x, z.x + z.w);
                let zY = Math.min(z.y, z.y + z.h);
                let zW = Math.abs(z.w);
                let zH = Math.abs(z.h);
                if (x >= zX && x <= zX + zW && y >= zY && y <= zY + zH) {
                    window.mapZones.splice(i, 1);
                    clickedExisting = true;
                    break;
                }
            }

            if (!clickedExisting && window.activeZoneMode) {
                window.isDrawingZone = true;
                window.startDragX = x;
                window.startDragY = y;
                window.currentMouseX = x;
                window.currentMouseY = y;
            }
        });

        cityCanvas.addEventListener('mousemove', (e) => {
            if (window.isDrawingZone) {
                const rect = cityCanvas.getBoundingClientRect();
                window.currentMouseX = e.clientX - rect.left;
                window.currentMouseY = e.clientY - rect.top;
            }
        });

        cityCanvas.addEventListener('mouseup', () => {
            if (window.isDrawingZone) {
                window.isDrawingZone = false;
                let w = window.currentMouseX - window.startDragX;
                let h = window.currentMouseY - window.startDragY;
                if (Math.abs(w) > 10 && Math.abs(h) > 10) {
                    window.mapZones.push({
                        x: window.startDragX,
                        y: window.startDragY,
                        w: w,
                        h: h,
                        type: window.activeZoneMode
                    });
                }
            }
        });
    }

    window.addEventListener('resize', () => {
        if(container.clientWidth > 0 && container.clientWidth !== mapWidth) {
            mapWidth = container.clientWidth;
            mapHeight = container.clientHeight || 600;
            cityCanvas.width = mapWidth;
            cityCanvas.height = mapHeight;
            generateCityLayout(); // Re-layout on major resize
        }
    });
}

function spawnEntity(faction) {
    if(roadX.length === 0 || roadY.length === 0) return;
    const isVehicle = Math.random() < 0.7; // 70% vehicles
    
    // Pick a random road
    let onVertical = Math.random() < 0.5;
    let rX = roadX[Math.floor(Math.random() * roadX.length)];
    let rY = roadY[Math.floor(Math.random() * roadY.length)];
    
    let x, y, dir;
    if (onVertical) {
        x = rX;
        y = Math.random() * mapHeight;
        dir = Math.random() < 0.5 ? 'N' : 'S';
        if (!isVehicle) x += (Math.random()<0.5 ? SIDEWALK_OFFSET : -SIDEWALK_OFFSET);
    } else {
        y = rY;
        x = Math.random() * mapWidth;
        dir = Math.random() < 0.5 ? 'E' : 'W';
        if (!isVehicle) y += (Math.random()<0.5 ? SIDEWALK_OFFSET : -SIDEWALK_OFFSET);
    }
    
    let emoji = faction === 'police' ? (isVehicle ? '🚓' : '👮') : (isVehicle ? (Math.random()<0.2?'🚚':'🚗') : (Math.random()<0.5?'🚶':'🏃'));

    entities.push({
        faction: faction,
        isVehicle: isVehicle,
        x: x, y: y,
        dir: dir,
        speed: isVehicle ? (faction === 'police' ? 1.8 : 1.2) : 0.4,
        emoji: emoji
    });
}


function getZoneColor(type) {
    switch(type) {
        case 'Hostile': return {fill: 'rgba(244, 67, 54, 0.3)', stroke: 'rgba(244, 67, 54, 0.8)'};
        case 'Military Base': return {fill: 'rgba(255, 235, 59, 0.2)', stroke: '#ffeb3b'};
        case 'Restricted Zone': return {fill: 'rgba(255, 152, 0, 0.3)', stroke: 'var(--panic-orange)'};
        case 'Police Only': return {fill: 'rgba(0, 150, 255, 0.2)', stroke: 'var(--accent-blue)'};
        case 'Safe Civilian': return {fill: 'rgba(255, 255, 255, 0.1)', stroke: '#ffffff'};
        case 'City Park': return {fill: 'rgba(76, 175, 80, 0.3)', stroke: 'var(--accent-green)'};
        case 'Quarantine': return {fill: 'rgba(118, 255, 3, 0.3)', stroke: '#76ff03'};
        case 'Riot Control': return {fill: 'rgba(61, 90, 254, 0.3)', stroke: '#3d5afe'};
        case 'Sniper Overwatch': return {fill: 'rgba(213, 0, 0, 0.3)', stroke: '#d50000'};
        case 'Traffic Checkpoint': return {fill: 'rgba(255, 145, 0, 0.3)', stroke: '#ff9100'};
        case 'Evacuation': return {fill: 'rgba(0, 229, 255, 0.3)', stroke: '#00e5ff'};
        case 'EMP Blast': return {fill: 'rgba(224, 64, 251, 0.3)', stroke: '#e040fb'};
        case 'Corporate VIP': return {fill: 'rgba(255, 215, 0, 0.3)', stroke: '#ffd700'};
        case 'Media Blackout': return {fill: 'rgba(0, 0, 0, 0.95)', stroke: '#424242'};
        case 'Minefield': return {fill: 'rgba(183, 28, 28, 0.4)', stroke: '#ff5252'};
        case 'Syndicate Turf': return {fill: 'rgba(101, 31, 255, 0.3)', stroke: '#b388ff'};
        default: return {fill: 'rgba(255, 255, 255, 0.1)', stroke: '#ffffff'};
    }
}

function drawCityMap() {
    if (!mapLogEl || mapLogEl.style.display === 'none') {
        animationId = null;
        return;
    }

    // 1. Draw Background
    ctx.fillStyle = '#0f1418';
    ctx.fillRect(0, 0, mapWidth, mapHeight);

    // 2. Draw Blocks (Districts)
    for (let b of cityBlocks) {
        if (b.type === 'water') {
            ctx.fillStyle = '#0a192f'; // Dark water
        } else if (b.type === 'park') {
            ctx.fillStyle = '#112211'; // Dark grass
        } else if (b.type === 'commercial') {
            ctx.fillStyle = '#12161a';
        } else {
            ctx.fillStyle = '#16181a';
        }
        ctx.fillRect(b.left, b.top, b.w, b.h);
        
        // Draw buildings
        for (let bld of b.buildings) {
            ctx.fillStyle = bld.color;
            ctx.shadowColor = 'rgba(0,0,0,0.5)';
            ctx.shadowBlur = 5;
            ctx.fillRect(bld.bx, bld.by, bld.bw, bld.bh);
            ctx.shadowBlur = 0; // reset
        }
        
        // Draw trees
        ctx.fillStyle = 'rgba(0, 255, 128, 0.2)';
        for (let t of b.trees) {
            ctx.beginPath();
            ctx.arc(t.tx, t.ty, t.r, 0, Math.PI*2);
            ctx.fill();
        }
    }

    // 3. Draw Roads
    ctx.fillStyle = '#1a1a1a';
    for (let x of roadX) ctx.fillRect(x - ROAD_WIDTH/2, 0, ROAD_WIDTH, mapHeight);
    for (let y of roadY) ctx.fillRect(0, y - ROAD_WIDTH/2, mapWidth, ROAD_WIDTH);
    
    // Draw Center lines
    ctx.strokeStyle = 'rgba(255, 204, 0, 0.3)';
    ctx.setLineDash([8, 12]);
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x of roadX) { ctx.moveTo(x, 0); ctx.lineTo(x, mapHeight); }
    for (let y of roadY) { ctx.moveTo(0, y); ctx.lineTo(mapWidth, y); }
    ctx.stroke();
    ctx.setLineDash([]);

    
    // --- Radar Overlays ---
    if (window.radarGridlines) {
        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < mapWidth; i += 50) { ctx.moveTo(i, 0); ctx.lineTo(i, mapHeight); }
        for (let i = 0; i < mapHeight; i += 50) { ctx.moveTo(0, i); ctx.lineTo(mapWidth, i); }
        ctx.stroke();
    }
    if (window.radarPatrolRoutes) {
        ctx.strokeStyle = 'rgba(0,150,255,0.1)';
        ctx.lineWidth = 20;
        ctx.beginPath();
        for (let x of roadX) { ctx.moveTo(x, 0); ctx.lineTo(x, mapHeight); }
        for (let y of roadY) { ctx.moveTo(0, y); ctx.lineTo(mapWidth, y); }
        ctx.stroke();
    }

    
    // --- Heatmap Radar Overlay ---
    if (window.radarHeatmap) {
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        const time = Date.now() / 1000;
        // Generate pseudo-random crime hotspots
        for (let i = 0; i < 5; i++) {
            let cx = (Math.sin(time * 0.1 + i) * 0.4 + 0.5) * mapWidth;
            let cy = (Math.cos(time * 0.15 + i*2) * 0.4 + 0.5) * mapHeight;
            let rad = 100 + Math.sin(time + i) * 30;
            
            let grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
            grad.addColorStop(0, 'rgba(255, 0, 0, 0.4)');
            grad.addColorStop(0.5, 'rgba(255, 0, 0, 0.1)');
            grad.addColorStop(1, 'rgba(255, 0, 0, 0)');
            
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(cx, cy, rad, 0, Math.PI*2);
            ctx.fill();
        }
        ctx.restore();
    }

    // 4. Update & Draw Entities
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let e of entities) {
        // Move
        if (e.dir === 'N') e.y -= e.speed;
        if (e.dir === 'S') e.y += e.speed;
        if (e.dir === 'E') e.x += e.speed;
        if (e.dir === 'W') e.x -= e.speed;

        // Check Intersections
        if (e.dir === 'N' || e.dir === 'S') {
            for (let ry of roadY) {
                let targetY = e.isVehicle ? ry : ry + (e.y > ry ? SIDEWALK_OFFSET : -SIDEWALK_OFFSET);
                if (Math.abs(e.y - targetY) <= e.speed) {
                    if (Math.random() < 0.25) { // 25% chance to turn
                        e.y = targetY; // snap
                        e.dir = Math.random() < 0.5 ? 'E' : 'W';
                        // Snap X to horizontal road rules
                        e.x = e.isVehicle ? e.x : (e.x + (Math.random()<0.5?1:-1));
                    }
                    break;
                }
            }
        } else {
            for (let rx of roadX) {
                let targetX = e.isVehicle ? rx : rx + (e.x > rx ? SIDEWALK_OFFSET : -SIDEWALK_OFFSET);
                if (Math.abs(e.x - targetX) <= e.speed) {
                    if (Math.random() < 0.25) {
                        e.x = targetX;
                        e.dir = Math.random() < 0.5 ? 'N' : 'S';
                    }
                    break;
                }
            }
        }

        // Screen Wrap
        if (e.x < -20) e.x = mapWidth + 20;
        if (e.x > mapWidth + 20) e.x = -20;
        if (e.y < -20) e.y = mapHeight + 20;
        if (e.y > mapHeight + 20) e.y = -20;

        // Glow for police
        if (e.faction === 'police') {
            ctx.fillStyle = 'rgba(0, 150, 255, 0.5)';
            ctx.beginPath(); ctx.arc(e.x, e.y, 14, 0, Math.PI*2); ctx.fill();
        }

        
        // --- Massive Zone Collisions ---
        if (typeof window.mapZones !== 'undefined' && e.speed > 0) {
            for (let z of window.mapZones) {
                let zX = Math.min(z.x, z.x + z.w);
                let zY = Math.min(z.y, z.y + z.h);
                let zW = Math.abs(z.w);
                let zH = Math.abs(z.h);
                if (e.x >= zX && e.x <= zX + zW && e.y >= zY && e.y <= zY + zH) {
                    
                    if (z.type === 'Media Blackout') {
                        // Drawing logic handles this later
                    }
                    else if (z.type === 'Quarantine' && e.faction === 'civ') {
                        e.emoji = '🤢'; e.speed = 0.2;
                    }
                    else if (z.type === 'Riot Control') {
                        if (e.faction === 'police') e.speed = 2.5;
                        if (e.faction === 'civ') { e.emoji = '🔗'; e.speed = 0; }
                    }
                    else if (z.type === 'Sniper Overwatch' && e.faction === 'civ') {
                        if (['⚠️', '🔪', '🔫', '🏃'].includes(e.emoji)) { e.emoji = '💀'; e.speed = 0; }
                    }
                    else if (z.type === 'Traffic Checkpoint' && e.isVehicle) {
                        e.speed = 0;
                    }
                    else if (z.type === 'Evacuation' && e.faction === 'civ') {
                        e.speed = 3.0; // Run super fast
                    }
                    else if (z.type === 'EMP Blast' && e.isVehicle) {
                        e.emoji = '💥'; e.speed = 0;
                    }
                    else if (z.type === 'Corporate VIP') {
                        if (e.faction === 'civ') {
                            if (e.dir === 'N') { e.dir = 'S'; e.y += 10; } else if (e.dir === 'S') { e.dir = 'N'; e.y -= 10; } else if (e.dir === 'E') { e.dir = 'W'; e.x -= 10; } else if (e.dir === 'W') { e.dir = 'E'; e.x += 10; }
                        }
                    }
                    else if (z.type === 'Minefield') {
                        if (Math.random() < 0.005) { e.emoji = '💥'; e.speed = 0; }
                    }
                    else if (z.type === 'Syndicate Turf' && e.faction === 'civ') {
                        e.emoji = '👤'; e.speed = 1.5;
                    }
                    else if (z.type === 'Military Base' && e.faction === 'civ') {
                        e.emoji = '💀'; e.speed = 0; break;
                    }
                    else if (z.type === 'Hostile' && e.faction === 'civ') {
                        const roeCheckbox = document.getElementById('roe-toggle');
                        if (roeCheckbox && !roeCheckbox.checked) { e.emoji = '💀'; e.speed = 0; } else { e.emoji = '🔗'; e.speed = 0; } break;
                    }
                    else if (z.type === 'Restricted Zone' && e.faction === 'civ') {
                        e.emoji = '⚠️';
                    }
                    else if (z.type === 'Police Only' && e.faction === 'civ') {
                        if (e.dir === 'N') { e.dir = 'S'; e.y += 10; } else if (e.dir === 'S') { e.dir = 'N'; e.y -= 10; } else if (e.dir === 'E') { e.dir = 'W'; e.x -= 10; } else if (e.dir === 'W') { e.dir = 'E'; e.x += 10; } break;
                    }
                    else if (z.type === 'Safe Civilian' && e.faction === 'police') {
                        if (e.dir === 'N') { e.dir = 'S'; e.y += 10; } else if (e.dir === 'S') { e.dir = 'N'; e.y -= 10; } else if (e.dir === 'E') { e.dir = 'W'; e.x -= 10; } else if (e.dir === 'W') { e.dir = 'E'; e.x += 10; } break;
                    }
                    else if (z.type === 'City Park' && e.faction === 'civ') {
                        e.speed = e.speed * 0.5;
                    }
                }
            }
        }

        // Draw Emoji
        ctx.save();
        ctx.translate(e.x, e.y);
        if (e.isVehicle) {
            if (e.dir === 'N') ctx.rotate(-Math.PI/2);
            if (e.dir === 'S') ctx.rotate(Math.PI/2);
            if (e.dir === 'W') ctx.rotate(Math.PI);
        }
        ctx.fillText(e.emoji, 0, 0);

        ctx.restore();
    }

    // --- Draw Map Zones ---
    if (typeof window.mapZones !== 'undefined') {
        ctx.font = '12px Courier New';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let z of window.mapZones) {
            let zX = Math.min(z.x, z.x + z.w);
            let zY = Math.min(z.y, z.y + z.h);
            let zW = Math.abs(z.w);
            let zH = Math.abs(z.h);

            const colors = getZoneColor(z.type);
            ctx.fillStyle = colors.fill;
            ctx.strokeStyle = colors.stroke;
            ctx.fillRect(zX, zY, zW, zH);
            ctx.lineWidth = 2;
            ctx.strokeRect(zX, zY, zW, zH);
            ctx.fillStyle = ctx.strokeStyle;
            ctx.fillText(z.type.toUpperCase() + " ZONE", zX + zW/2, zY + 10);
        }

        if (window.isDrawingZone && window.activeZoneMode) {
            let zX = Math.min(window.startDragX, window.currentMouseX);
            let zY = Math.min(window.startDragY, window.currentMouseY);
            let zW = Math.abs(window.currentMouseX - window.startDragX);
            let zH = Math.abs(window.currentMouseY - window.startDragY);

            const drawColors = getZoneColor(window.activeZoneMode);
            ctx.fillStyle = drawColors.fill;
            ctx.strokeStyle = drawColors.stroke;
            ctx.fillRect(zX, zY, zW, zH);
            ctx.lineWidth = 2;
            ctx.strokeRect(zX, zY, zW, zH);
        }
    }

    animationId = requestAnimationFrame(drawCityMap);
}
// ==========================================




// ==========================================
