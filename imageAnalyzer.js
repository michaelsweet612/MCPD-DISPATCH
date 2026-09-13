// IMAGE ANALYZER (NO AI)
// Simulates visual detection by parsing image metadata and generating procedural officer reactions.

document.addEventListener('DOMContentLoaded', () => {
    const btnUpload = document.getElementById('btn-upload-image');
    const fileInput = document.getElementById('dispatch-image-upload');

    if (!btnUpload || !fileInput) return;

    btnUpload.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const imgData = event.target.result;
            const fileName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
            
            addChatImage('DISPATCH', imgData, fileName);
            
            setTimeout(() => {
                simulateImageReaction(fileName, file);
            }, 3000 + Math.random() * 5000);
        };
        reader.readAsDataURL(file);
        
        fileInput.value = '';
    });
});

function addChatImage(sender, imgData, fileName) {
    const unifiedLogEl = document.getElementById('unified-log');
    if (!unifiedLogEl) return;
    
    const div = document.createElement('div');
    div.className = `chat-msg dispatch-msg`;
    div.style.position = 'relative'; 

    let timeStr = "";
    if (typeof getCurrentTimeStr !== 'undefined') timeStr = getCurrentTimeStr();

    const contentHtml = `
        <span class="time" style="color: #666; font-size: 0.8rem; margin-right: 5px;">${timeStr}</span>
        <span class="sender">[DISPATCH]</span><br>
        <div style="margin-top: 10px;">
            <img src="${imgData}" style="max-width: 100%; max-height: 250px; border-radius: 4px; border: 1px solid var(--accent-blue); box-shadow: 0 0 10px rgba(0, 230, 118, 0.2);">
            <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 5px;">[IMAGE ATTACHMENT ANALYZED: ${fileName.toUpperCase()}]</div>
        </div>
    `;
    div.innerHTML = contentHtml;
    unifiedLogEl.appendChild(div);
    if (typeof scrollToBottom !== 'undefined') scrollToBottom(unifiedLogEl);
}

function _iaGetRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function simulateImageReaction(rawFileName, file) {
    if (typeof getActiveCallsigns === 'undefined' || typeof addChatMessage === 'undefined') return;
    const active = getActiveCallsigns();
    if (active.length === 0) return;
    
    const reactor = active[Math.floor(Math.random() * active.length)];
    const nameStr = rawFileName.toLowerCase();
    
    const fileSizeKB = file ? Math.floor(file.size / 1024) : Math.floor(Math.random() * 5000);
    
    const isInappropriate = /nsfw|nude|porn|sexy|boob|xxx|onlyfans|lewd|naked/.test(nameStr);
    const isAnimal = /dog|cat|pet|bird|kitten|puppy|fish|hamster|parrot|snake|lizard|bunny|rabbit/.test(nameStr);
    const isSuspect = /suspect|wanted|criminal|perp|fugitive|target|bolo/.test(nameStr);
    const isWeapon = /gun|weapon|knife|blade|rifle|pistol|shotgun|bomb|explosive|grenade|sword/.test(nameStr);
    const isVehicle = /car|truck|van|vehicle|motorcycle|bike|sedan|suv|pickup|hovercraft/.test(nameStr);
    const isCrime = /crime|scene|evidence|blood|murder|assault|robbery|theft|drugs|contraband/.test(nameStr);
    const isFood = /food|pizza|burger|taco|noodle|sandwich|coffee|donut|doughnut|lunch|dinner|breakfast/.test(nameStr);
    const isSelfie = /selfie|me|self|face|portrait|headshot|photo of me/.test(nameStr);
    const isLandscape = /city|skyline|building|street|road|bridge|sunset|sunrise|sky|mountain|ocean|beach|park/.test(nameStr);
    const isMeme = /meme|funny|lol|lmao|bruh|shitpost|cursed/.test(nameStr);
    const isScreenshot = /screenshot|screen|desktop|monitor|phone|chat|text/.test(nameStr);
    const isPerson = /person|man|woman|guy|girl|people|crowd|group|dude|kid|child|baby/.test(nameStr);
    const isMap = /map|location|gps|coordinates|sector|grid|satellite/.test(nameStr);
    const isDark = /dark|night|shadow|black|creepy|scary|horror/.test(nameStr);
    
    let replies = [];
    
    if (isInappropriate) {
        replies = [
            "Hey we're trying to do our job can you stop sending us a adult material This is not a group chat this is an official job where people's life all depend on you",
            /* INAPP_ARRAY */
        ];
    } else if (isWeapon) {
        replies = [
            "10-4, weapon identified in image. Running ballistic profile against the MCPD weapons database now.",
            "Is that a modified Kessler-9? Those are banned in 47 sectors. Flagging for weapons enforcement.",
            "That's a serious piece of hardware. Where was this confiscated? I want one.",
            "Dispatch, that weapon matches a stolen firearms report from last week. Good find.",
            "I've seen that exact model in the black market sector. Someone's running guns again.",
            "10-4, image logged. That firearm has been tagged as Evidence Item #" + Math.floor(1000 + Math.random() * 9000) + ".",
            "That thing could punch through a hover-vehicle's armor plating. Where'd you get this image?",
            "Cross-referencing against known arms dealers in Sectors %RANDOM_SECTOR% through %RANDOM_SECTOR%.",
        ];
    } else if (isSuspect) {
        replies = [
            "10-4, running facial recognition against the TBMG civilian database. Stand by for results.",
            "I think I've seen this person before. They match a BOLO from Sector %RANDOM_SECTOR%.",
            "Dispatching image to all active units. If anyone spots this individual, detain on sight.",
            "Facial scan complete. 73% match to a wanted fugitive. Sending patrol to last known location.",
            "That face is familiar. Pretty sure I arrested them last week. They must've posted bail already.",
            "Running image through the criminal database... 4,231 partial matches found. This city is messed up.",
            "10-4, suspect image received. Broadcasting BOLO to all " + active.length + " active units now.",
            "I recognize this person. They owe me money from a card game. Also they're probably a criminal.",
        ];
    } else if (isVehicle) {
        replies = [
            "Running plates through NCIC... Stand by. That vehicle matches a stolen report from Precinct " + Math.floor(1 + Math.random() * 47) + ".",
            "10-4, vehicle image received. That model is frequently used in street racing in the lower sectors.",
            "I just saw that exact vehicle fleeing Sector %RANDOM_SECTOR% about 20 minutes ago!",
            "Nice ride. Too bad it's probably stolen. Flagging for traffic enforcement.",
            "Vehicle scan complete. Registration expired " + Math.floor(1 + Math.random() * 36) + " months ago. Insurance: VOID.",
            "That's a modified hover-vehicle. Those aftermarket thrusters are illegal in 12 districts.",
            "Broadcasting vehicle description to all patrol units. If you see it, pull it over immediately.",
            "I've been chasing a vehicle matching that description for 3 weeks. Where was this taken?!",
        ];
    } else if (isCrime) {
        replies = [
            "10-4, crime scene image logged. Forensic drones being dispatched to the area now.",
            "That's a lot of evidence in one photo. Tagging everything visible for the case file.",
            "Dispatch, this image shows clear signs of forced entry. Sending a unit to secure the scene.",
            "Cross-referencing this scene with open cases in the district. Multiple matches found.",
            "I've been to that exact location before. Last time there were 3 bodies. What's there now?",
            "Evidence collection team has been notified. ETA 8 minutes to the scene.",
            "That image just became Exhibit A in case MC-" + Math.floor(100000000 + Math.random() * 899999999) + ".",
            "Gruesome. I've seen worse though. Last Tuesday was... never mind. Logging the image.",
        ];
    } else if (isAnimal) {
        replies = [
            "Why is dispatch sending us images of animals? Is this the new K9 unit? Actually... it's kind of cute.",
            "Aww. That's adorable. But I'm in the middle of a stakeout, Dispatch. Keep the channel professional.",
            "Is that a synth-pet or a real one? Either way, I want to pet it. Dispatch, can I pet it?",
            "10-4... animal sighting confirmed. Should I arrest it? I'm going to arrest it.",
            "My ex-wife got custody of our dog. This image is bringing up painful memories, Dispatch.",
            "That animal looks suspicious. Running it through the K9 database just to be safe.",
            "Cute. But is it licensed? Unlicensed pets carry a 50,000 NTND fine in this sector.",
            "I'm forwarding this to the entire precinct. Everyone needs to see this immediately.",
        ];
    } else if (isFood) {
        replies = [
            "Are you serious right now? I've been on patrol for 14 hours and you're sending me food pics?",
            "That looks incredible. Where is that from? I'm rerouting my patrol through there RIGHT NOW.",
            "Dispatch, I am STARVING. This is cruel and unusual punishment. I'm filing a grievance.",
            "My wife never cooks anything that good. Actually, my wife never cooks at all.",
            "10-4, food image received. Analyzing for potential contraband ingredients... looks clean. And delicious.",
            "If that's from the noodle stand in Sector %RANDOM_SECTOR%, I'm leaving my post immediately.",
            "That donut looks regulation. I'm confiscating it as evidence. Send location.",
            "I haven't eaten since yesterday. This image physically hurts me. Thanks, Dispatch.",
        ];
    } else if (isSelfie) {
        replies = [
            "Did you just... send a selfie over the official dispatch channel? This isn't social media, officer.",
            "Nice face. Now get back to work. There's a 10-31 in progress in Sector %RANDOM_SECTOR%.",
            "I'm forwarding this to IA under 'Misuse of Department Resources.' Have a nice day.",
            "Is this your MCPD ID photo? Because it looks terrible. You look exhausted. We all do.",
            "Running facial recognition on your selfie... congratulations, you matched yourself. Great detective work.",
            "Why do you look like you haven't slept in 6 days? Actually, I already know the answer.",
            "That's a bold move using the tactical channel for selfies. I respect the audacity.",
            "10-4, image received of... you. I don't know what to do with this information.",
        ];
    } else if (isMeme) {
        replies = [
            "Did you just send a meme on the official dispatch channel? During an active patrol? Incredible.",
            "LMAO. Okay that's actually funny. But if IA sees this, we're both getting written up.",
            "I'm saving this to the precinct shared drive. The night shift needs to see this immediately.",
            "Dispatch, please keep memes off the secure channel. That said, forward it to my personal terminal.",
            "I've seen funnier things happen on actual patrol. Last week a suspect slipped on a banana peel.",
            "10-4, meme received. Morale has increased by 0.3%. Still not enough to cover the overtime.",
            "You know Corporate monitors these channels, right? Bold move. I approve.",
            "Bro I literally just spit out my synth-coffee. Warn me next time.",
        ];
    } else if (isLandscape) {
        replies = [
            "Nice shot. If you ignore the acid rain and the 47 active crime scenes, this city is actually beautiful.",
            "That skyline view is incredible. You can almost forget about the systemic corruption from up there.",
            "10-4, landscape image received. Cross-referencing location with surveillance grid coverage.",
            "I patrolled that area last week. It's not as pretty in person. There were 3 shootouts.",
            "Beautiful. Makes me want to retire to the Gulf of TBMG. If I survive this shift.",
            "That building in the background is a known safehouse for the Downtown Syndicate. Just FYI.",
            "Great photography skills, Dispatch. Wrong career though. Should've been a photographer instead.",
            "Sector identified from image. Dispatching a drone for aerial surveillance of the area.",
        ];
    } else if (isScreenshot) {
        replies = [
            "Why are you sending screenshots over the tactical channel? Is your terminal malfunctioning?",
            "10-4, screenshot received. I'm going to pretend I understand what I'm looking at.",
            "Is this a screenshot of the dispatch terminal? Are you taking pictures of yourself working?",
            "I can see your browser tabs in that screenshot. Interesting browsing history, Dispatch.",
            "Forwarding this to IT. Either your terminal is broken or you're just bored. Probably both.",
            "That screenshot shows sensitive information. Please redact before sharing on open channels.",
            "10-4. I've examined the screenshot closely. I have no idea what any of it means.",
            "Are you filing a bug report via the radio channel? That's a new one.",
        ];
    } else if (isPerson) {
        replies = [
            "Running facial recognition... Stand by. " + Math.floor(Math.random() * 100) + "% match confidence.",
            "Is this person a suspect, a witness, or just someone you think looks suspicious? In this city, it's all three.",
            "10-4, image of unknown individual logged. Broadcasting to all units for identification.",
            "That person looks like they're having a worse day than me. And I'm on hour 16 of my shift.",
            "Face doesn't match any active BOLOs. But I'm flagging them as 'person of interest' anyway.",
            "I think I pulled that person over last week for a broken tail light. Or was it armed robbery? Hard to remember.",
            "Scanning against the civilian registry... 1 of 5,000 citizens matched. Pulling dossier now.",
            "That individual is either a witness or a suspect. In this precinct, there's really no difference.",
        ];
    } else if (isMap) {
        replies = [
            "10-4, location data received. Cross-referencing with active patrol routes and surveillance grids.",
            "That sector has been a hotspot for the past 72 hours. Increasing drone coverage immediately.",
            "I know that area. I've been shot at there 4 times this month alone.",
            "GPS coordinates logged. Dispatching nearest available unit to investigate.",
            "That location is in a dead zone for radio comms. Sending backup as a precaution.",
            "Satellite imagery confirms movement in that area. Could be gang activity.",
            "10-4, tactical map received. Overlaying with known criminal territory boundaries.",
            "That's deep in Syndicate territory. Any unit going in there needs heavy backup.",
        ];
    } else if (isDark) {
        replies = [
            "I can barely see anything in this image. Did you take this with a potato?",
            "That's... unsettling. What exactly am I looking at, Dispatch?",
            "Enhancing image brightness... still can't see anything. This is useless.",
            "10-4, dark image received. Switching to thermal overlay mode. Still creepy.",
            "Whatever is in that image, I don't want to know. I've seen enough horror on patrol.",
            "That image gives me the same feeling as patrolling the lower levels at 3 AM.",
            "Running low-light enhancement algorithms... Oh. Oh no. I wish I hadn't done that.",
            "Is this a crime scene photo? Because the lighting says 'crime scene' and the vibe says 'run.'",
        ];
    } else {
        replies = [
            /* NORMAL_ARRAY */
        ];
    }
    
    const reply = _iaGetRandom(replies);
    addChatMessage(reactor, reply, 'serious', false);
    
    // 40% chance a second officer also reacts
    if (Math.random() < 0.4 && active.length >= 2) {
        const otherUnits = active.filter(u => u !== reactor);
        const secondReactor = otherUnits[Math.floor(Math.random() * otherUnits.length)];
        if (secondReactor) {
            const secondReplies = [
                "Wait, what is that? Dispatch, zoom in on that. I think I see something.",
                reactor + " is right. That image is weird. Why are we looking at this?",
                "I've got a better angle from my sector if you need a second opinion on this.",
                "Can confirm, I've seen something similar in Sector %RANDOM_SECTOR% last week.",
                "10-4, I'm pulling up the same image on my terminal. Let me take a closer look.",
                "That's the second time today Dispatch has sent something questionable over the channel.",
                "I agree with " + reactor + ". This is either critical evidence or a complete waste of time.",
                reactor + ", you should run that through the facial recognition system just in case.",
                "My partner just looked over at my screen and said 'what the hell is that?' So yeah.",
                "Dispatch, if you're going to send images, at least make them useful. Or funny. That was neither.",
                "I can neither confirm nor deny that this image is relevant to anything I'm investigating.",
                "Same image came across my feed. Cross-referencing with my active cases now.",
            ];
            setTimeout(() => {
                addChatMessage(secondReactor, _iaGetRandom(secondReplies), 'serious', false);
            }, 2000 + Math.random() * 4000);
        }
    }

    // 15% chance a third officer chimes in with something funny
    if (Math.random() < 0.15 && active.length >= 3) {
        const otherUnits = active.filter(u => u !== reactor);
        const thirdReactor = otherUnits[Math.floor(Math.random() * otherUnits.length)];
        if (thirdReactor) {
            const thirdReplies = [
                "Can you guys stop talking about images? I'm trying to eat my lunch in peace.",
                "I've been on patrol for 19 hours straight. I do NOT have the mental capacity for this right now.",
                "Guys, there's literally a bank robbery happening in my sector and y'all are analyzing photos.",
                "My wife sends me better images than this. Actually no, she doesn't send me anything. We're getting divorced.",
                "I swear this channel gets weirder every single day.",
                "%RANDOM_UNIT%, can you go check on my wife while Dispatch is busy sending us pictures?",
            ];
            setTimeout(() => {
                addChatMessage(thirdReactor, _iaGetRandom(thirdReplies), 'joking', false);
            }, 6000 + Math.random() * 5000);
        }
    }
}
