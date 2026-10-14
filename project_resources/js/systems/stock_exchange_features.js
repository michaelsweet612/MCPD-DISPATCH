// =======================================================================
// MCPD STOCK EXCHANGE // 50-FEATURE ADVANCED TERMINAL SUBSYSTEM (v6.6.0)
// Complete High-Frequency Tactical Financial Engine & Market Automation
// =======================================================================

(function(window) {
    'use strict';

    // --- GLOBAL SUBSYSTEM STATE (Features 1 - 50) ---
    const sf = {
        // Feature 1 & 2: Quick Allocation (Max, Half)
        // Feature 3: Limit Orders
        limitOrders: [], // Array of { id, type: 'BUY'|'SELL', targetPrice, qty, active }
        // Feature 4: Stop-Loss Protection Circuit
        stopLossEnabled: false,
        stopLossThreshold: 1500000000.0,
        // Feature 5: Short Selling Bear Position
        shortPosition: { active: false, entryPrice: 0, qty: 0, marginReserved: 0 },
        // Feature 6: Dividend Reinvestment Program (DRIP)
        dripEnabled: false,
        // Feature 7: Leverage Margin Multiplier
        leverageMultiplier: 1, // 1x, 2x, 5x, 10x
        // Feature 8: Federal Municipal Bailout
        bailoutsClaimed: 0,
        // Feature 9: Stock Split Simulator
        splitMultiplier: 1,
        // Feature 10: Dark Pool Secrecy Mode
        darkPoolActive: false,

        // Feature 11: Media Propaganda
        propagandaCooldown: 0,
        // Feature 12: SWAT Corporate Raid
        swatCooldown: 0,
        // Feature 13: Insider Wiretap
        wiretapIntel: null,
        // Feature 14: City Trust Correlation
        trustCorrelationActive: true,
        // Feature 15: Martial Law Market Lockdown
        marketFreezeUntil: 0,
        // Feature 16: Contraband Laundering Total
        launderedCount: 0,
        // Feature 17: Black Swan Generator
        lastBlackSwan: null,
        // Feature 18: Crime Wave Volatility
        crimeWaveMultiplier: 1.0,
        // Feature 19: Corporate Espionage Dossiers
        corporateDossiers: {},
        // Feature 20: Shareholder Referendums
        activeMotions: [
            { id: 'mot1', title: 'Tactical Plasma Rifle Patrol Grant', voteFor: 1420, voteAgainst: 310, voted: false, effect: '+4.5% MCPD Stock Valuation' },
            { id: 'mot2', title: 'Subsidize Megacity Donut Synthesizers', voteFor: 3580, voteAgainst: 420, voted: false, effect: '+12% City Trust Level' },
            { id: 'mot3', title: 'Autonomous Cyber-Hound Precinct Escort', voteFor: 2100, voteAgainst: 890, voted: false, effect: '-15% Crime Volatility Multiplier' }
        ],

        // Feature 21: Chart Mode ('line' | 'candlestick')
        chartMode: 'line',
        // Feature 22: Timeframe ('1M' | '5M' | '1H' | '24H')
        timeframe: '1M',
        // Feature 23: Technical Indicator SMA Overlay ('none' | 'sma10' | 'sma20')
        smaOverlay: 'none',
        // Feature 24: Sector Heatmap State
        sectorPerformance: {
            lawEnforcement: { name: 'LAW ENFORCEMENT', change: +2.4 },
            banking: { name: 'CENTRAL BANKING', change: -1.2 },
            defense: { name: 'KINETIC DEFENSE', change: +4.8 },
            synthetics: { name: 'NEON SYNTHETICS', change: +0.6 },
            dataAi: { name: 'ASTRAL DATA / AI', change: -0.4 },
            civilians: { name: 'CIVILIAN SECTOR', change: -2.1 }
        },
        // Feature 25 & 26: Gainers & Losers
        topGainers: [],
        topLosers: [],
        // Feature 27: Search Query
        searchFilter: '',
        // Feature 28: Category Filter
        categoryFilter: 'all',
        // Feature 29: Order Book Depth
        orderBook: { bids: [], asks: [] },
        // Feature 30: Volume Histogram State
        volumeBars: {},

        // Feature 31: Municipal Defense War Bonds
        activeBonds: [],
        // Feature 32: Pension Fund Accumulation
        pensionAllocationPercent: 5,
        pensionAccumulated: 250000000.0,
        // Feature 33: Darknet Crypto Index ($CRED)
        cyberCred: { price: 420.69, history: [410, 415, 422, 418, 420.69], owned: 0 },
        // Feature 34: Gold Bullion Safe Haven
        goldReserve: { pricePerOz: 35000.0, ownedOunces: 50 },
        // Feature 35: Plutonium Futures
        plutoniumFutures: { contracts: 0, entryPrice: 12500000.0 },
        // Feature 36: FDIC-MCPD Crash Insurance
        crashInsuranceActive: false,
        // Feature 37: Executive Merit Dividend
        executiveBonusesClaimed: 0,
        // Feature 38: Syndicate Debt Facility
        syndicateDebt: 0,
        // Feature 39: Compound High-Yield Vault
        vaultDeposit: 0,
        vaultLastCompound: Date.now(),
        // Feature 40: Offshore Shell Tax Haven
        offshoreHavenActive: false,

        // Feature 41: Autonomous Robo-Dispatcher Trader
        roboTraderActive: false,
        // Feature 42: Watchlist Pinning
        watchlist: ['mcpd'],
        // Feature 43: Compact Ticker Ribbon View
        compactView: false,
        // Feature 44: All-Time Highs & Lows Tracking
        recordHighs: {},
        recordLows: {},
        // Feature 45: Custom Price Alarm Threshold
        priceAlarmThreshold: null,
        // Feature 46: Audio SFX Cues
        audioEnabled: true,
        // Feature 47: Radio Alert Dispatch
        // Feature 48: Unrealized vs Realized PnL Tracker
        initialValuation: null,
        realizedPnL: 0,
        // Feature 49: Extended CSV & JSON Exports
        // Feature 50: Live Marquee Ticker Headlines
        marqueeHeadlineIndex: 0
    };

    window.stockFeatures = sf;

    // --- AUDIO & HAPTIC SYNTHESIS (Feature 46) ---
    function playTradingSound(type) {
        if (!sf.audioEnabled) return;
        try {
            const ctx = (window.AudioContext || window.webkitAudioContext) ? new (window.AudioContext || window.webkitAudioContext)() : null;
            if (!ctx) return;
            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);

            if (type === 'bell') {
                // High financial bell chime
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(880, now);
                osc.frequency.exponentialRampToValueAtTime(1760, now + 0.15);
                gain.gain.setValueAtTime(0.2, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
                osc.start(now);
                osc.stop(now + 0.6);
            } else if (type === 'alarm') {
                // Emergency trading alarm
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(440, now);
                osc.frequency.setValueAtTime(660, now + 0.1);
                gain.gain.setValueAtTime(0.25, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
                osc.start(now);
                osc.stop(now + 0.4);
            } else if (type === 'click') {
                // Tactical order squelch
                osc.type = 'square';
                osc.frequency.setValueAtTime(300, now);
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
                osc.start(now);
                osc.stop(now + 0.08);
            }
        } catch (e) {
            // Audio context not allowed until interaction
        }
    }
    window.playTradingSound = playTradingSound;

    // --- RADIO CHATTER BROADCASTER (Feature 47) ---
    function broadcastMarketRadio(msg) {
        if (typeof window.addChatMessage === 'function') {
            window.addChatMessage("MARKET AI", msg, "system", false);
        }
    }
    window.broadcastMarketRadio = broadcastMarketRadio;

    // =======================================================================
    // SECTION A: ADVANCED ORDER EXECUTION & TRADING (Features 1 - 10)
    // =======================================================================

    // FEATURE 1: MAX Share Allocator
    window.setStockQtyMax = function(id = 'mcpd') {
        const input = document.getElementById(id + '-stock-qty');
        if (!input) return;
        const owned = (window.stockAccount && window.stockAccount.portfolio && window.stockAccount.portfolio[id]) ? window.stockAccount.portfolio[id] : 536;
        input.value = Math.max(1, owned);
        playTradingSound('click');
        broadcastMarketRadio(`ALLOCATION MAX: Target volume set to max portfolio equity (${owned.toLocaleString()} shares).`);
    };

    // FEATURE 2: 50% Half Share Allocator
    window.setStockQtyHalf = function(id = 'mcpd') {
        const input = document.getElementById(id + '-stock-qty');
        if (!input) return;
        const owned = (window.stockAccount && window.stockAccount.portfolio && window.stockAccount.portfolio[id]) ? window.stockAccount.portfolio[id] : 536;
        const half = Math.max(1, Math.floor(owned / 2));
        input.value = half;
        playTradingSound('click');
        broadcastMarketRadio(`ALLOCATION HALF: Target volume set to 50% portfolio equity (${half.toLocaleString()} shares).`);
    };

    // FEATURE 3: Limit Order System
    window.addLimitOrder = function() {
        const typeEl = document.getElementById('limit-order-type');
        const priceEl = document.getElementById('limit-order-price');
        const qtyEl = document.getElementById('limit-order-qty');
        if (!typeEl || !priceEl || !qtyEl) return;

        const type = typeEl.value;
        const targetPrice = parseFloat(priceEl.value);
        const qty = parseInt(qtyEl.value, 10);

        if (isNaN(targetPrice) || targetPrice <= 0 || isNaN(qty) || qty <= 0) {
            alert("SPECIFY VALID TARGET PRICE AND QUANTITY FOR LIMIT ORDER.");
            return;
        }

        const order = {
            id: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
            type: type,
            targetPrice: targetPrice,
            qty: qty,
            createdTime: new Date().toLocaleTimeString(),
            active: true
        };
        sf.limitOrders.push(order);
        playTradingSound('bell');
        broadcastMarketRadio(`LIMIT ORDER PLACED: [${order.id}] ${type} ${qty.toLocaleString()} MCPD @ NTND $${targetPrice.toLocaleString()}`);
        renderLimitOrdersList();
    };

    window.cancelLimitOrder = function(orderId) {
        sf.limitOrders = sf.limitOrders.filter(o => o.id !== orderId);
        playTradingSound('click');
        renderLimitOrdersList();
    };

    function renderLimitOrdersList() {
        const container = document.getElementById('limit-orders-list');
        if (!container) return;
        if (sf.limitOrders.length === 0) {
            container.innerHTML = `<div style="color:var(--text-dim); font-size:0.85rem; font-style:italic;">No pending limit orders on the grid.</div>`;
            return;
        }
        let html = '';
        sf.limitOrders.forEach(o => {
            const col = o.type === 'BUY' ? 'var(--accent-green)' : 'var(--panic-red)';
            html += `
                <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.5); padding:6px 10px; margin-bottom:5px; border-left:3px solid ${col}; border-radius:3px; font-size:0.85rem;">
                    <div>
                        <strong style="color:${col};">[${o.type}]</strong> ${o.qty.toLocaleString()} SHARES @ NTND $${o.targetPrice.toLocaleString(undefined, {minimumFractionDigits:2})}
                        <span style="color:var(--text-dim); margin-left:8px;">(${o.createdTime})</span>
                    </div>
                    <button onclick="window.cancelLimitOrder('${o.id}')" style="background:none; border:1px solid var(--panic-red); color:var(--panic-red); font-size:0.75rem; padding:2px 6px; cursor:pointer; border-radius:2px;">CANCEL</button>
                </div>
            `;
        });
        container.innerHTML = html;
    }
    window.renderLimitOrdersList = renderLimitOrdersList;

    // FEATURE 4: Stop-Loss Protection Circuit
    window.toggleStopLoss = function() {
        sf.stopLossEnabled = !sf.stopLossEnabled;
        const threshInput = document.getElementById('stop-loss-threshold');
        if (threshInput && parseFloat(threshInput.value)) {
            sf.stopLossThreshold = parseFloat(threshInput.value);
        }
        const btn = document.getElementById('btn-stop-loss-toggle');
        if (btn) {
            btn.innerText = sf.stopLossEnabled ? `STOP-LOSS: ACTIVE ($${sf.stopLossThreshold.toLocaleString()})` : `STOP-LOSS: DISABLED`;
            btn.style.borderColor = sf.stopLossEnabled ? 'var(--accent-green)' : 'var(--panel-border)';
            btn.style.color = sf.stopLossEnabled ? 'var(--accent-green)' : 'var(--text-dim)';
        }
        playTradingSound('click');
        broadcastMarketRadio(sf.stopLossEnabled ? `PROTECTION ONLINE: Stop-loss armed @ NTND $${sf.stopLossThreshold.toLocaleString()}` : `PROTECTION OFFLINE: Stop-loss disabled.`);
    };

    // FEATURE 5: Short Selling Bear Position
    window.openShortPosition = function() {
        if (sf.shortPosition.active) {
            alert("A short position is already active. Cover your existing short before opening a new contract.");
            return;
        }
        const qtyInput = document.getElementById('mcpd-stock-qty');
        const qty = qtyInput ? (parseInt(qtyInput.value, 10) || 10) : 10;
        const currentPrice = (window.markets && window.markets.mcpd) ? window.markets.mcpd.price : 2000000000.0;
        const requiredMargin = currentPrice * qty * 0.2; // 20% margin

        sf.shortPosition = {
            active: true,
            entryPrice: currentPrice,
            qty: qty,
            marginReserved: requiredMargin
        };
        playTradingSound('bell');
        broadcastMarketRadio(`BEAR CONTRACT: Opened SHORT on ${qty.toLocaleString()} MCPD shares @ NTND $${currentPrice.toLocaleString()}. Betting on market collapse.`);
        updateShortDisplay();
    };

    window.coverShortPosition = function() {
        if (!sf.shortPosition.active) return;
        const currentPrice = (window.markets && window.markets.mcpd) ? window.markets.mcpd.price : 2000000000.0;
        const priceDiff = sf.shortPosition.entryPrice - currentPrice;
        const profit = priceDiff * sf.shortPosition.qty;

        if (window.stockAccount) {
            window.stockAccount.balance += profit;
        }
        sf.realizedPnL += profit;
        playTradingSound('bell');
        broadcastMarketRadio(`COVERED SHORT: Closed position. PnL: ${profit >= 0 ? '+' : ''}NTND $${profit.toLocaleString(undefined, {minimumFractionDigits:2})}`);
        sf.shortPosition.active = false;
        updateShortDisplay();
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    function updateShortDisplay() {
        const el = document.getElementById('short-position-status');
        if (!el) return;
        if (!sf.shortPosition.active) {
            el.innerHTML = `<span style="color:var(--text-dim);">NO ACTIVE SHORT CONTRACT</span>`;
            return;
        }
        const currentPrice = (window.markets && window.markets.mcpd) ? window.markets.mcpd.price : 2000000000.0;
        const profit = (sf.shortPosition.entryPrice - currentPrice) * sf.shortPosition.qty;
        const col = profit >= 0 ? 'var(--accent-green)' : 'var(--panic-red)';
        el.innerHTML = `
            <span style="color:${col}; font-weight:bold;">SHORT ${sf.shortPosition.qty.toLocaleString()} SHARES</span> 
            (Entry: $${sf.shortPosition.entryPrice.toLocaleString(undefined,{minimumFractionDigits:2})}) 
            | PnL: <span style="color:${col}; font-weight:bold;">NTND $${profit.toLocaleString(undefined, {minimumFractionDigits:2})}</span>
            <button onclick="window.coverShortPosition()" style="margin-left:8px; background:var(--panic-red); color:#000; border:none; padding:3px 8px; cursor:pointer; font-weight:bold; font-size:0.75rem; border-radius:3px;">COVER</button>
        `;
    }
    window.updateShortDisplay = updateShortDisplay;

    // FEATURE 6: DRIP (Dividend Reinvestment Program) Toggle
    window.toggleDrip = function() {
        sf.dripEnabled = !sf.dripEnabled;
        const btn = document.getElementById('btn-drip-toggle');
        if (btn) {
            btn.innerText = sf.dripEnabled ? `DRIP AUTO-REINVEST: [ENABLED]` : `DRIP AUTO-REINVEST: [DISABLED]`;
            btn.style.color = sf.dripEnabled ? 'var(--accent-green)' : 'var(--text-dim)';
            btn.style.borderColor = sf.dripEnabled ? 'var(--accent-green)' : 'var(--panel-border)';
        }
        playTradingSound('click');
        broadcastMarketRadio(`DRIP PROTOCOL: Dividend auto-reinvestment is now ${sf.dripEnabled ? 'ONLINE' : 'OFFLINE'}.`);
    };

    // FEATURE 7: Leverage Margin Multiplier Slider
    window.setLeverageMultiplier = function(val) {
        sf.leverageMultiplier = parseInt(val, 10) || 1;
        const disp = document.getElementById('leverage-display');
        if (disp) disp.innerText = `${sf.leverageMultiplier}x LEVERAGE`;
        playTradingSound('click');
        broadcastMarketRadio(`MARGIN UPDATE: Trading leverage adjusted to ${sf.leverageMultiplier}x tactical exposure.`);
    };

    // FEATURE 8: Emergency Municipal Bailout
    window.requestEmergencyBailout = function() {
        const balance = (window.stockAccount) ? window.stockAccount.balance : 0;
        if (balance > 5000000000.0) {
            alert("BAILOUT DENIED: Station treasury still holds adequate operational liquidity.");
            return;
        }
        const grant = 50000000000.0; // 50 Billion NTND
        if (window.stockAccount) window.stockAccount.balance += grant;
        sf.bailoutsClaimed++;
        playTradingSound('bell');
        broadcastMarketRadio(`🚨 FEDERAL BAILOUT GRANTED: MegaCity Emergency Stabilization Fund injected +NTND $${grant.toLocaleString()} directly into precinct reserves.`);
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    // FEATURE 9: Stock Split Simulator
    window.executeStockSplit = function(ratio = 2) {
        if (!window.stockAccount || !window.markets || !window.markets.mcpd) return;
        if (ratio === 2) {
            // Forward 2-for-1 split: double shares, half price
            window.stockAccount.portfolio.mcpd = Math.round((window.stockAccount.portfolio.mcpd || 536) * 2);
            window.markets.mcpd.price = window.markets.mcpd.price / 2;
            broadcastMarketRadio(`FORWARD SPLIT: 2-for-1 MCPD Stock Split executed! Your shares doubled to ${window.stockAccount.portfolio.mcpd.toLocaleString()}.`);
        } else {
            // Reverse 1-for-2 consolidation: half shares, double price
            window.stockAccount.portfolio.mcpd = Math.max(1, Math.round((window.stockAccount.portfolio.mcpd || 536) / 2));
            window.markets.mcpd.price = window.markets.mcpd.price * 2;
            broadcastMarketRadio(`REVERSE CONSOLIDATION: 1-for-2 Reverse Split executed! MCPD share base consolidated to ${window.stockAccount.portfolio.mcpd.toLocaleString()}.`);
        }
        playTradingSound('bell');
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    // FEATURE 10: Dark Pool Secrecy Mode
    window.toggleDarkPool = function() {
        sf.darkPoolActive = !sf.darkPoolActive;
        const btn = document.getElementById('btn-dark-pool-toggle');
        if (btn) {
            btn.innerText = sf.darkPoolActive ? `DARK POOL STEALTH: [ENGAGED]` : `DARK POOL STEALTH: [DISENGAGED]`;
            btn.style.color = sf.darkPoolActive ? '#00e5ff' : 'var(--text-dim)';
            btn.style.borderColor = sf.darkPoolActive ? '#00e5ff' : 'var(--panel-border)';
        }
        playTradingSound('click');
        broadcastMarketRadio(`NETWORK CLOAK: Dark Pool stealth routing is now ${sf.darkPoolActive ? 'ACTIVE (Zero public slippage)' : 'DISABLED'}.`);
    };

    // =======================================================================
    // SECTION B: PRECINCT INTERVENTIONS & MANIPULATION (Features 11 - 20)
    // =======================================================================

    // FEATURE 11: Precinct Media Propaganda Campaign
    window.launchPropagandaCampaign = function() {
        const cost = 25000000.0;
        if (!window.stockAccount || window.stockAccount.balance < cost) {
            alert(`INSUFFICIENT FUNDS: Launching an official PR propaganda campaign requires NTND $${cost.toLocaleString()}.`);
            return;
        }
        window.stockAccount.balance -= cost;
        const pumpPct = 0.08 + (Math.random() * 0.10); // +8% to +18%
        if (window.markets && window.markets.mcpd) {
            window.markets.mcpd.price *= (1 + pumpPct);
        }
        playTradingSound('bell');
        broadcastMarketRadio(`📢 PROPAGANDA BLITZ: Precinct media broadcast praises ruthless MCPD street pacification! Investor confidence surges +${(pumpPct*100).toFixed(2)}%!`);
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    // FEATURE 12: Hostile SWAT Corporate Raid
    window.executeSwatRaid = function() {
        const sel = document.getElementById('swat-target-select');
        const targetId = sel ? sel.value : 'arms';
        if (!window.markets || !window.markets[targetId]) return;

        // Crash target stock by 15%
        window.markets[targetId].price *= 0.85;
        // Seize asset forfeiture funds
        const seized = 250000000.0 + (Math.random() * 100000000.0);
        if (window.stockAccount) window.stockAccount.balance += seized;

        playTradingSound('alarm');
        broadcastMarketRadio(`🚔 SWAT AUDIT RAID: Heavy tactical units breach ${targetId.toUpperCase()} headquarters! Corporate assets tank -15.00%! Seized NTND $${seized.toLocaleString(undefined, {minimumFractionDigits:2})} into precinct account.`);
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    // FEATURE 13: Insider Trading Wiretap
    window.interceptInsiderWiretap = function() {
        const targets = ["TBMG Central Bank", "Kinetic Arms Co.", "Neon Synthetics", "Astral Data Corp", "Eclipse Dynamics"];
        const target = targets[Math.floor(Math.random() * targets.length)];
        const isBullish = Math.random() > 0.45;
        const leak = isBullish ? `BULLISH LEAK: Unannounced municipal defense contract to be awarded to ${target}.` : `BEARISH LEAK: Impending federal corruption indictment against ${target} board.`;
        sf.wiretapIntel = { target, isBullish, text: leak, time: new Date().toLocaleTimeString() };

        const disp = document.getElementById('wiretap-intel-display');
        if (disp) {
            disp.innerHTML = `<span style="color:${isBullish ? 'var(--accent-green)' : 'var(--panic-red)'}; font-weight:bold;">[${sf.wiretapIntel.time}] ${leak}</span>`;
        }
        playTradingSound('bell');
        broadcastMarketRadio(`📡 WIRETAP DECRYPTED: ${leak}`);
    };

    // FEATURE 14: City Trust Correlation Engine
    function checkCityTrustCorrelation() {
        if (!sf.trustCorrelationActive || typeof window.trustPercentage === 'undefined') return;
        const trust = window.trustPercentage;
        if (trust > 75 && window.markets && window.markets.mcpd) {
            window.markets.mcpd.price *= 1.002; // +0.2% natural drift on high trust
        } else if (trust < 35 && window.markets && window.markets.mcpd) {
            window.markets.mcpd.price *= 0.997; // -0.3% panic drift on low trust
        }
    }

    // FEATURE 15: Martial Law Market Freeze
    window.toggleMarketFreeze = function() {
        if (Date.now() < sf.marketFreezeUntil) {
            sf.marketFreezeUntil = 0;
            broadcastMarketRadio(`MARKET UNLOCKED: Trading volatility restrictions lifted.`);
        } else {
            sf.marketFreezeUntil = Date.now() + 60000; // 60s freeze
            broadcastMarketRadio(`🛑 MARTIAL LAW FREEZE: Emergency market halt declared. All trading volatility frozen for 60 seconds.`);
        }
        playTradingSound('click');
        const btn = document.getElementById('btn-freeze-toggle');
        if (btn) {
            btn.innerText = (Date.now() < sf.marketFreezeUntil) ? `MARKET FREEZE: [ACTIVE 60s]` : `MARKET FREEZE: [OFFLINE]`;
            btn.style.color = (Date.now() < sf.marketFreezeUntil) ? 'var(--panic-red)' : 'var(--text-dim)';
        }
    };

    // FEATURE 16: Evidence Locker Slush Fund Laundering
    window.launderContrabandFunds = function() {
        const bonusShares = 25;
        if (!window.stockAccount) return;
        if (!window.stockAccount.portfolio) window.stockAccount.portfolio = {};
        window.stockAccount.portfolio.mcpd = (window.stockAccount.portfolio.mcpd || 536) + bonusShares;
        sf.launderedCount += bonusShares;
        playTradingSound('bell');
        broadcastMarketRadio(`💼 EVIDENCE LAUNDERED: Unaccounted seized contraband converted into +${bonusShares} official MCPD Stock equity units!`);
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    // FEATURE 17: Black Swan Disaster Generator
    window.triggerBlackSwanDisaster = function() {
        const events = [
            { name: "NEURAL GRID CORRUPTION DISASTER", impact: -0.18, target: "all" },
            { name: "SYNTHETIC PHARMA PLAGUE CRISIS", impact: +0.22, target: "synth" },
            { name: "SATELLITE EMP MISSILE DETONATION", impact: -0.12, target: "data" },
            { name: "CENTRAL BANK OFFSHORE AUDIT LEAK", impact: -0.25, target: "bank" }
        ];
        const evt = events[Math.floor(Math.random() * events.length)];
        sf.lastBlackSwan = evt;

        if (evt.target === 'all' && window.markets) {
            Object.keys(window.markets).forEach(k => { window.markets[k].price *= (1 + evt.impact); });
        } else if (window.markets && window.markets[evt.target]) {
            window.markets[evt.target].price *= (1 + evt.impact);
        }

        playTradingSound('alarm');
        broadcastMarketRadio(`⚡ BLACK SWAN EVENT DETECTED: [${evt.name}] Shockwave impact: ${(evt.impact * 100).toFixed(1)}%!`);
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    // FEATURE 18: Crime Wave Volatility Multiplier
    window.setCrimeWaveMultiplier = function(mult) {
        sf.crimeWaveMultiplier = parseFloat(mult) || 1.0;
        const disp = document.getElementById('crime-vol-display');
        if (disp) disp.innerText = `${sf.crimeWaveMultiplier.toFixed(1)}x CRIME MULT`;
    };

    // FEATURE 19: Corporate Espionage Dossier Purchase
    window.purchaseCorporateDossier = function() {
        const cost = 10000000.0;
        if (!window.stockAccount || window.stockAccount.balance < cost) {
            alert(`INSUFFICIENT FUNDS: Purchasing an Espionage Dossier requires NTND $${cost.toLocaleString()}.`);
            return;
        }
        window.stockAccount.balance -= cost;
        const corpNames = ["Kinetic Arms", "Astral Data Corp", "Eclipse Dynamics", "Neon Synthetics"];
        const corp = corpNames[Math.floor(Math.random() * corpNames.length)];
        const dossier = `CLASSIFIED INTEL: ${corp} holds secret liquid reserve of NTND $450B with impending quarterly dividend expansion.`;
        sf.corporateDossiers[corp] = dossier;

        const disp = document.getElementById('dossier-intel-display');
        if (disp) disp.innerHTML = `<span style="color:#00e5ff; font-weight:bold;">${dossier}</span>`;
        playTradingSound('bell');
        broadcastMarketRadio(`🕵️ DOSSIER ACQUIRED: ${dossier}`);
    };

    // FEATURE 20: Shareholder Referendum Voting
    window.voteShareholderMotion = function(motionId, choice) {
        const mot = sf.activeMotions.find(m => m.id === motionId);
        if (!mot || mot.voted) return;
        mot.voted = true;
        if (choice === 'FOR') {
            mot.voteFor += 536; // Dispatcher votes with baseline shares
            broadcastMarketRadio(`VOTE RECORDED: Voted FOR [${mot.title}]. Department Buff Applied: ${mot.effect}`);
            if (motionId === 'mot1' && window.markets && window.markets.mcpd) window.markets.mcpd.price *= 1.045;
            if (motionId === 'mot2' && typeof window.addTrust === 'function') window.addTrust(12);
        } else {
            mot.voteAgainst += 536;
            broadcastMarketRadio(`VOTE RECORDED: Voted AGAINST [${mot.title}]. Motion rejected.`);
        }
        playTradingSound('click');
        renderShareholderMotions();
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    function renderShareholderMotions() {
        const container = document.getElementById('shareholder-motions-container');
        if (!container) return;
        let html = '';
        sf.activeMotions.forEach(m => {
            html += `
                <div style="background:rgba(0,0,0,0.5); padding:10px; margin-bottom:8px; border:1px solid var(--panel-border); border-radius:4px;">
                    <div style="display:flex; justify-content:space-between;">
                        <strong style="color:var(--accent-blue);">${m.title}</strong>
                        <span style="font-size:0.8rem; color:${m.voted ? 'var(--accent-green)' : 'var(--text-dim)'};">${m.voted ? '✓ VOTED' : 'PENDING'}</span>
                    </div>
                    <div style="font-size:0.85rem; color:var(--text-dim); margin-top:4px;">Expected Outcome: <span style="color:#fff;">${m.effect}</span></div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
                        <span style="font-size:0.8rem; color:#aaa;">FOR: ${m.voteFor.toLocaleString()} | AGAINST: ${m.voteAgainst.toLocaleString()}</span>
                        <div>
                            <button onclick="window.voteShareholderMotion('${m.id}', 'FOR')" ${m.voted ? 'disabled' : ''} style="background:var(--accent-green); color:#000; border:none; padding:3px 10px; cursor:pointer; font-weight:bold; font-size:0.75rem; border-radius:2px; margin-right:4px;">VOTE FOR</button>
                            <button onclick="window.voteShareholderMotion('${m.id}', 'AGAINST')" ${m.voted ? 'disabled' : ''} style="background:var(--panic-red); color:#000; border:none; padding:3px 10px; cursor:pointer; font-weight:bold; font-size:0.75rem; border-radius:2px;">AGAINST</button>
                        </div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    }
    window.renderShareholderMotions = renderShareholderMotions;

    // =======================================================================
    // SECTION C: CHARTING, VISUALS & ANALYTICS (Features 21 - 30)
    // =======================================================================

    // FEATURE 21: Candlestick vs Line Chart Mode Toggle
    window.toggleChartMode = function() {
        sf.chartMode = (sf.chartMode === 'line') ? 'candlestick' : 'line';
        const btn = document.getElementById('btn-chart-mode-toggle');
        if (btn) btn.innerText = `CHART: ${sf.chartMode.toUpperCase()}`;
        playTradingSound('click');
        if (typeof window.updateStockMarkets === 'function') window.updateStockMarkets(true);
    };

    // FEATURE 22: Timeframe Selector
    window.setTimeframe = function(tf) {
        sf.timeframe = tf;
        const buttons = document.querySelectorAll('.timeframe-btn');
        buttons.forEach(b => {
            if (b.getAttribute('data-tf') === tf) {
                b.style.background = 'var(--accent-blue)';
                b.style.color = '#fff';
            } else {
                b.style.background = 'transparent';
                b.style.color = 'var(--text-dim)';
            }
        });
        playTradingSound('click');
        if (typeof window.updateStockMarkets === 'function') window.updateStockMarkets(true);
    };

    // FEATURE 23: Moving Average SMA Overlay
    window.toggleSmaOverlay = function() {
        if (sf.smaOverlay === 'none') sf.smaOverlay = 'sma10';
        else if (sf.smaOverlay === 'sma10') sf.smaOverlay = 'sma20';
        else sf.smaOverlay = 'none';

        const btn = document.getElementById('btn-sma-toggle');
        if (btn) btn.innerText = `INDICATOR: ${sf.smaOverlay.toUpperCase()}`;
        playTradingSound('click');
        if (typeof window.updateStockMarkets === 'function') window.updateStockMarkets(true);
    };

    // FEATURE 24: Sector Performance Heatmap Grid
    window.renderSectorHeatmap = function() {
        const container = document.getElementById('sector-heatmap-grid');
        if (!container) return;
        let html = '';
        Object.keys(sf.sectorPerformance).forEach(k => {
            const sec = sf.sectorPerformance[k];
            // slight dynamic shift
            sec.change += ((Math.random() * 0.4) - 0.2);
            const isPos = sec.change >= 0;
            const bg = isPos ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.25)';
            const border = isPos ? 'var(--accent-green)' : 'var(--panic-red)';
            const txt = isPos ? 'var(--accent-green)' : 'var(--panic-red)';
            html += `
                <div style="background:${bg}; border:1px solid ${border}; padding:8px; border-radius:4px; text-align:center;">
                    <div style="font-size:0.75rem; color:var(--text-dim);">${sec.name}</div>
                    <div style="font-size:1.1rem; font-weight:bold; color:${txt}; margin-top:4px;">
                        ${isPos ? '▲ +' : '▼ '}${sec.change.toFixed(2)}%
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    };

    // FEATURE 25 & 26: Top Gainers & Top Losers Leaderboards
    function updateGainersAndLosers() {
        if (!window.markets) return;
        const list = Object.keys(window.markets).map(id => {
            const m = window.markets[id];
            const hist = m.history || [];
            const prev = hist.length > 1 ? hist[hist.length - 2] : m.price;
            const pct = prev > 0 ? ((m.price - prev) / prev) * 100 : 0;
            const el = document.getElementById(id + '-stock-dashboard');
            const name = el ? el.querySelector('h4').innerText.replace('📈 ', '') : id.toUpperCase();
            return { id, name, price: m.price, pct };
        });

        list.sort((a, b) => b.pct - a.pct);
        sf.topGainers = list.slice(0, 3);
        sf.topLosers = list.slice(-3).reverse();

        renderGainersLosersDOM();
    }

    function renderGainersLosersDOM() {
        const gainerContainer = document.getElementById('top-gainers-list');
        const loserContainer = document.getElementById('top-losers-list');
        if (!gainerContainer || !loserContainer) return;

        let gHtml = '';
        sf.topGainers.forEach(g => {
            gHtml += `
                <div style="display:flex; justify-content:space-between; margin-bottom:4px; font-size:0.8rem; border-bottom:1px dashed rgba(255,255,255,0.08); padding-bottom:2px;">
                    <span style="color:#eee; text-overflow:ellipsis; overflow:hidden; white-space:nowrap; max-width:140px;">${g.name}</span>
                    <span style="color:var(--accent-green); font-weight:bold;">▲ +${g.pct.toFixed(2)}%</span>
                </div>
            `;
        });
        gainerContainer.innerHTML = gHtml || '<div style="color:var(--text-dim);">Scanning market...</div>';

        let lHtml = '';
        sf.topLosers.forEach(l => {
            lHtml += `
                <div style="display:flex; justify-content:space-between; margin-bottom:4px; font-size:0.8rem; border-bottom:1px dashed rgba(255,255,255,0.08); padding-bottom:2px;">
                    <span style="color:#eee; text-overflow:ellipsis; overflow:hidden; white-space:nowrap; max-width:140px;">${l.name}</span>
                    <span style="color:var(--panic-red); font-weight:bold;">▼ ${l.pct.toFixed(2)}%</span>
                </div>
            `;
        });
        loserContainer.innerHTML = lHtml || '<div style="color:var(--text-dim);">Scanning market...</div>';
    }

    // FEATURE 27: Stock Search & Quick Filter
    window.onStockSearchInput = function(val) {
        sf.searchFilter = (val || '').toLowerCase().trim();
        applyStockCardFilters();
    };

    // FEATURE 28: Sector Category Filter Pills
    window.setStockCategoryFilter = function(cat) {
        sf.categoryFilter = cat;
        const pills = document.querySelectorAll('.sector-pill');
        pills.forEach(p => {
            if (p.getAttribute('data-cat') === cat) {
                p.style.background = 'var(--accent-blue)';
                p.style.color = '#fff';
            } else {
                p.style.background = 'rgba(255,255,255,0.05)';
                p.style.color = 'var(--text-dim)';
            }
        });
        applyStockCardFilters();
    };

    function applyStockCardFilters() {
        const allCards = document.querySelectorAll('#markets-container > div');
        allCards.forEach(card => {
            const id = card.id ? card.id.replace('-stock-dashboard', '') : '';
            const titleEl = card.querySelector('h4');
            const title = titleEl ? titleEl.innerText.toLowerCase() : '';

            let matchesSearch = !sf.searchFilter || title.includes(sf.searchFilter) || id.includes(sf.searchFilter);
            let matchesCategory = (sf.categoryFilter === 'all');
            if (sf.categoryFilter === 'gov' && (id === 'mcpd' || id === 'gov')) matchesCategory = true;
            if (sf.categoryFilter === 'bank' && id === 'bank') matchesCategory = true;
            if (sf.categoryFilter === 'arms' && (id === 'arms' || title.includes('arms') || title.includes('munitions'))) matchesCategory = true;
            if (sf.categoryFilter === 'synth' && (id === 'synth' || title.includes('synth') || title.includes('genetics'))) matchesCategory = true;
            if (sf.categoryFilter === 'data' && (id === 'data' || title.includes('data') || title.includes('network'))) matchesCategory = true;

            // Preserve watchlist pins on top
            if (sf.watchlist.includes(id)) {
                card.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
            } else {
                card.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
            }
        });
    }
    window.applyStockCardFilters = applyStockCardFilters;

    // FEATURE 29: Order Book Depth Visualizer
    function generateOrderBookDepth() {
        const mcpdPrice = (window.markets && window.markets.mcpd) ? window.markets.mcpd.price : 2000000000.0;
        const bids = [];
        const asks = [];
        for (let i = 1; i <= 4; i++) {
            bids.push({ price: mcpdPrice * (1 - (i * 0.003)), volume: Math.floor(100 + Math.random() * 800) });
            asks.push({ price: mcpdPrice * (1 + (i * 0.003)), volume: Math.floor(100 + Math.random() * 800) });
        }
        sf.orderBook = { bids, asks };
        renderOrderBookDOM();
    }

    function renderOrderBookDOM() {
        const container = document.getElementById('order-book-display');
        if (!container) return;
        let html = `
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; font-size:0.8rem; font-family:monospace;">
                <div>
                    <div style="color:var(--accent-green); font-weight:bold; border-bottom:1px solid rgba(16,185,129,0.3); padding-bottom:3px; margin-bottom:4px;">BUY WALLS (BIDS)</div>
                    ${sf.orderBook.bids.map(b => `<div style="display:flex; justify-content:space-between; color:#a7f3d0;"><span>$${b.price.toFixed(0)}</span><span>${b.volume} SHARES</span></div>`).join('')}
                </div>
                <div>
                    <div style="color:var(--panic-red); font-weight:bold; border-bottom:1px solid rgba(239,68,68,0.3); padding-bottom:3px; margin-bottom:4px;">SELL WALLS (ASKS)</div>
                    ${sf.orderBook.asks.map(a => `<div style="display:flex; justify-content:space-between; color:#fca5a5;"><span>$${a.price.toFixed(0)}</span><span>${a.volume} SHARES</span></div>`).join('')}
                </div>
            </div>
        `;
        container.innerHTML = html;
    }

    // FEATURE 30: Volume Histogram Bars
    // (Rendered directly into canvas within hook)

    // =======================================================================
    // SECTION D: TREASURY ASSETS, BONDS & INSTRUMENTS (Features 31 - 40)
    // =======================================================================

    // FEATURE 31: Municipal Defense War Bonds
    window.buyMunicipalDefenseBond = function(amount = 100000000.0) {
        if (!window.stockAccount || window.stockAccount.balance < amount) {
            alert(`INSUFFICIENT FUNDS: Defense Bonds require NTND $${amount.toLocaleString()}.`);
            return;
        }
        window.stockAccount.balance -= amount;
        const bond = {
            id: 'BOND-' + Math.floor(100 + Math.random() * 900),
            principal: amount,
            yieldRate: 0.085, // 8.5%
            maturityTime: Date.now() + 60000, // 60s maturity
            durationSec: 60
        };
        sf.activeBonds.push(bond);
        playTradingSound('bell');
        broadcastMarketRadio(`🛡️ WAR BOND PURCHASED: Locked NTND $${amount.toLocaleString()} into 60s Municipal Defense Bond (8.5% Guaranteed Yield).`);
        renderBondsList();
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    function checkBondMaturity() {
        if (sf.activeBonds.length === 0) return;
        const now = Date.now();
        const mature = sf.activeBonds.filter(b => now >= b.maturityTime);
        if (mature.length > 0) {
            mature.forEach(b => {
                const payout = b.principal * (1 + b.yieldRate);
                if (window.stockAccount) window.stockAccount.balance += payout;
                broadcastMarketRadio(`🎉 WAR BOND MATURED: Payout of NTND $${payout.toLocaleString(undefined,{minimumFractionDigits:2})} credited to precinct treasury.`);
            });
            sf.activeBonds = sf.activeBonds.filter(b => now < b.maturityTime);
            playTradingSound('bell');
            renderBondsList();
            if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
        }
    }

    function renderBondsList() {
        const container = document.getElementById('active-bonds-list');
        if (!container) return;
        if (sf.activeBonds.length === 0) {
            container.innerHTML = `<div style="color:var(--text-dim); font-size:0.85rem; font-style:italic;">No active municipal defense bonds.</div>`;
            return;
        }
        let html = '';
        const now = Date.now();
        sf.activeBonds.forEach(b => {
            const timeLeft = Math.max(0, Math.ceil((b.maturityTime - now) / 1000));
            html += `
                <div style="display:flex; justify-content:space-between; background:rgba(0,0,0,0.4); padding:6px 10px; margin-bottom:4px; border-left:3px solid var(--accent-blue); font-size:0.85rem;">
                    <div>[${b.id}] NTND $${b.principal.toLocaleString()} @ 8.5% Yield</div>
                    <div style="color:var(--accent-green); font-weight:bold;">MATURING IN: ${timeLeft}s</div>
                </div>
            `;
        });
        container.innerHTML = html;
    }
    window.renderBondsList = renderBondsList;

    // FEATURE 32: Precinct Pension Fund Allocation
    window.setPensionAllocation = function(val) {
        sf.pensionAllocationPercent = parseInt(val, 10) || 5;
        const disp = document.getElementById('pension-percent-display');
        if (disp) disp.innerText = `${sf.pensionAllocationPercent}% ALLOCATION`;
        playTradingSound('click');
    };

    // FEATURE 33: Darknet Crypto Index ($CRED)
    window.tradeCyberCred = function(action = 'BUY') {
        const price = sf.cyberCred.price;
        if (action === 'BUY') {
            const cost = price * 10;
            if (!window.stockAccount || window.stockAccount.balance < cost) {
                alert("Insufficient funds to buy 10 $CRED.");
                return;
            }
            window.stockAccount.balance -= cost;
            sf.cyberCred.owned += 10;
            sf.cyberCred.price *= 1.05; // pump
            broadcastMarketRadio(`DARKNET PURCHASE: Acquired 10 $CRED for NTND $${cost.toFixed(2)}.`);
        } else {
            if (sf.cyberCred.owned < 10) {
                alert("You do not own at least 10 $CRED to liquidate.");
                return;
            }
            const proceeds = price * 10;
            sf.cyberCred.owned -= 10;
            if (window.stockAccount) window.stockAccount.balance += proceeds;
            sf.cyberCred.price *= 0.95; // dump
            broadcastMarketRadio(`DARKNET SALE: Liquidated 10 $CRED for NTND $${proceeds.toFixed(2)}.`);
        }
        playTradingSound('click');
        updateCyberCredDOM();
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    function updateCyberCredDOM() {
        const el = document.getElementById('cyber-cred-display');
        if (!el) return;
        el.innerHTML = `
            <strong>$CRED:</strong> NTND $${sf.cyberCred.price.toFixed(2)} 
            | OWNED: <span style="color:#00e5ff; font-weight:bold;">${sf.cyberCred.owned}</span>
        `;
    }

    // FEATURE 34: Gold Bullion Safe Haven Reserve
    window.tradeGoldReserve = function(action = 'BUY') {
        const cost = sf.goldReserve.pricePerOz * 5;
        if (action === 'BUY') {
            if (!window.stockAccount || window.stockAccount.balance < cost) {
                alert("Insufficient funds to purchase gold bullion.");
                return;
            }
            window.stockAccount.balance -= cost;
            sf.goldReserve.ownedOunces += 5;
            broadcastMarketRadio(`SAFE HAVEN: Purchased 5 oz Physical Gold Bullion for NTND $${cost.toLocaleString()}.`);
        } else {
            if (sf.goldReserve.ownedOunces < 5) {
                alert("You do not own at least 5 oz gold bullion.");
                return;
            }
            sf.goldReserve.ownedOunces -= 5;
            if (window.stockAccount) window.stockAccount.balance += cost;
            broadcastMarketRadio(`BULLION LIQUIDATION: Sold 5 oz Physical Gold for NTND $${cost.toLocaleString()}.`);
        }
        playTradingSound('click');
        updateGoldDOM();
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    function updateGoldDOM() {
        const el = document.getElementById('gold-reserve-display');
        if (!el) return;
        el.innerHTML = `
            <strong>GOLD BULLION:</strong> $${sf.goldReserve.pricePerOz.toLocaleString()}/oz 
            | RESERVES: <span style="color:#fbbf24; font-weight:bold;">${sf.goldReserve.ownedOunces} oz</span>
        `;
    }

    // FEATURE 35: Contraband Plutonium Futures
    window.tradePlutoniumFutures = function(action = 'BUY') {
        if (action === 'BUY') {
            sf.plutoniumFutures.contracts += 1;
            broadcastMarketRadio(`COMMODITY FUTURES: Entered 1 contract of Weapons-Grade Plutonium Futures.`);
        } else {
            if (sf.plutoniumFutures.contracts <= 0) {
                alert("No active plutonium contracts.");
                return;
            }
            sf.plutoniumFutures.contracts -= 1;
            const payout = 25000000.0;
            if (window.stockAccount) window.stockAccount.balance += payout;
            broadcastMarketRadio(`FUTURES SETTLEMENT: Liquidated Plutonium Futures for +NTND $${payout.toLocaleString()}.`);
        }
        playTradingSound('click');
        updatePlutoniumDOM();
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    function updatePlutoniumDOM() {
        const el = document.getElementById('plutonium-futures-display');
        if (!el) return;
        el.innerHTML = `
            <strong>PLUTONIUM FUTURES:</strong> CONTRACTS: <span style="color:var(--panic-orange); font-weight:bold;">${sf.plutoniumFutures.contracts}</span>
        `;
    }

    // FEATURE 36: FDIC-MCPD Portfolio Crash Insurance
    window.buyCrashInsurance = function() {
        if (sf.crashInsuranceActive) {
            alert("Crash Insurance Policy is already active.");
            return;
        }
        const cost = 100000000.0;
        if (!window.stockAccount || window.stockAccount.balance < cost) {
            alert("Insufficient funds for insurance premium.");
            return;
        }
        window.stockAccount.balance -= cost;
        sf.crashInsuranceActive = true;
        playTradingSound('bell');
        broadcastMarketRadio(`🛡️ INSURANCE POLICY ISSUED: Precinct portfolio insured against market drawdowns > 15.00%.`);
        updateInsuranceDOM();
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    function updateInsuranceDOM() {
        const btn = document.getElementById('btn-insurance-policy');
        if (!btn) return;
        btn.innerText = sf.crashInsuranceActive ? `CRASH INSURANCE: [POLICY ACTIVE]` : `BUY CRASH INSURANCE ($100M)`;
        btn.style.borderColor = sf.crashInsuranceActive ? 'var(--accent-green)' : 'var(--panel-border)';
        btn.style.color = sf.crashInsuranceActive ? 'var(--accent-green)' : 'var(--text-main)';
    }

    // FEATURE 37: Executive Merit Dividend
    window.claimExecutiveBonus = function() {
        if (typeof window.addPoints !== 'function') return;
        window.addPoints(500);
        sf.executiveBonusesClaimed++;
        playTradingSound('bell');
        broadcastMarketRadio(`EXECUTIVE MERIT: Disbursed quarterly executive merit bonus (+500 Dispatcher Points).`);
    };

    // FEATURE 38: Syndicate Debt Loan Facility
    window.borrowSyndicateLoan = function() {
        const loan = 500000000.0;
        if (!window.stockAccount) return;
        window.stockAccount.balance += loan;
        sf.syndicateDebt += loan * 1.05; // 5% interest
        playTradingSound('bell');
        broadcastMarketRadio(`💳 SYNDICATE CREDIT LINE: Borrowed NTND $${loan.toLocaleString()}. Total outstanding debt: NTND $${sf.syndicateDebt.toLocaleString()}.`);
        updateSyndicateDOM();
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    window.repaySyndicateLoan = function() {
        if (sf.syndicateDebt <= 0) {
            alert("No outstanding debt to repay.");
            return;
        }
        if (!window.stockAccount || window.stockAccount.balance < sf.syndicateDebt) {
            alert("Insufficient liquid balance to repay outstanding debt.");
            return;
        }
        window.stockAccount.balance -= sf.syndicateDebt;
        broadcastMarketRadio(`DEBT CLEARED: Fully repaid syndicate debt of NTND $${sf.syndicateDebt.toLocaleString()}.`);
        sf.syndicateDebt = 0;
        playTradingSound('bell');
        updateSyndicateDOM();
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    function updateSyndicateDOM() {
        const el = document.getElementById('syndicate-debt-display');
        if (!el) return;
        el.innerHTML = `
            <strong>OUTSTANDING DEBT:</strong> <span style="color:var(--panic-red); font-weight:bold;">NTND $${sf.syndicateDebt.toLocaleString(undefined,{minimumFractionDigits:2})}</span>
        `;
    }

    // FEATURE 39: Compound High-Yield Vault
    window.depositCompoundVault = function(amt = 100000000.0) {
        if (!window.stockAccount || window.stockAccount.balance < amt) {
            alert("Insufficient funds for vault deposit.");
            return;
        }
        window.stockAccount.balance -= amt;
        sf.vaultDeposit += amt;
        sf.vaultLastCompound = Date.now();
        playTradingSound('click');
        broadcastMarketRadio(`VAULT DEPOSIT: Secured NTND $${amt.toLocaleString()} into overnight compound vault (1.2% per 30s).`);
        updateVaultDOM();
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    window.withdrawCompoundVault = function() {
        if (sf.vaultDeposit <= 0) return;
        if (window.stockAccount) window.stockAccount.balance += sf.vaultDeposit;
        broadcastMarketRadio(`VAULT WITHDRAWAL: Withdrew NTND $${sf.vaultDeposit.toLocaleString(undefined,{minimumFractionDigits:2})} from compound vault.`);
        sf.vaultDeposit = 0;
        playTradingSound('bell');
        updateVaultDOM();
        if (typeof window.updateStockDashboard === 'function') window.updateStockDashboard();
    };

    function checkVaultCompounding() {
        if (sf.vaultDeposit <= 0) return;
        const now = Date.now();
        if (now - sf.vaultLastCompound >= 30000) { // every 30s
            const interest = sf.vaultDeposit * 0.012;
            sf.vaultDeposit += interest;
            sf.vaultLastCompound = now;
            updateVaultDOM();
        }
    }

    function updateVaultDOM() {
        const el = document.getElementById('vault-balance-display');
        if (!el) return;
        el.innerHTML = `
            <strong>VAULT BALANCE:</strong> <span style="color:var(--accent-green); font-weight:bold;">NTND $${sf.vaultDeposit.toLocaleString(undefined,{minimumFractionDigits:2})}</span>
        `;
    }

    // FEATURE 40: Offshore Shell Tax Haven
    window.toggleOffshoreHaven = function() {
        sf.offshoreHavenActive = !sf.offshoreHavenActive;
        const btn = document.getElementById('btn-offshore-haven-toggle');
        if (btn) {
            btn.innerText = sf.offshoreHavenActive ? `OFFSHORE HAVEN: [ROUTED]` : `OFFSHORE HAVEN: [DISCONNECTED]`;
            btn.style.borderColor = sf.offshoreHavenActive ? 'var(--accent-green)' : 'var(--panel-border)';
            btn.style.color = sf.offshoreHavenActive ? 'var(--accent-green)' : 'var(--text-dim)';
        }
        playTradingSound('click');
        broadcastMarketRadio(`TAX RELAY: Offshore satellite haven is ${sf.offshoreHavenActive ? 'ONLINE (0% city trade friction)' : 'OFFLINE'}.`);
    };

    // =======================================================================
    // SECTION E: AUTOMATION, AUDIO, UI & SYSTEM LOGS (Features 41 - 50)
    // =======================================================================

    // FEATURE 41: Autonomous Robo-Dispatcher Trader AI
    window.toggleRoboTrader = function() {
        sf.roboTraderActive = !sf.roboTraderActive;
        const btn = document.getElementById('btn-robo-trader-toggle');
        if (btn) {
            btn.innerText = sf.roboTraderActive ? `ROBO-TRADER AI: [ONLINE]` : `ROBO-TRADER AI: [OFFLINE]`;
            btn.style.borderColor = sf.roboTraderActive ? '#00e5ff' : 'var(--panel-border)';
            btn.style.color = sf.roboTraderActive ? '#00e5ff' : 'var(--text-dim)';
        }
        playTradingSound('bell');
        broadcastMarketRadio(`ROBO-DISPATCHER AI: Algorithmic dip-buyer & profit-taker is now ${sf.roboTraderActive ? 'ENGAGED' : 'DISENGAGED'}.`);
    };

    function executeRoboTraderStep() {
        if (!sf.roboTraderActive || !window.markets || !window.markets.mcpd) return;
        const mcpd = window.markets.mcpd;
        const hist = mcpd.history || [];
        if (hist.length < 3) return;
        const prev = hist[hist.length - 2];
        const pct = ((mcpd.price - prev) / prev) * 100;

        // Auto buy dip
        if (pct < -2.0) {
            if (typeof window.buyStock === 'function') {
                window.buyStock('mcpd');
                broadcastMarketRadio(`🤖 ROBO-ALGO BOUGHT DIP: MCPD dipped ${pct.toFixed(2)}% -> Automated buy order fired.`);
            }
        } else if (pct > 3.0 && (window.stockAccount && window.stockAccount.portfolio && window.stockAccount.portfolio.mcpd > 536)) {
            // Auto take profit
            if (typeof window.sellStock === 'function') {
                window.sellStock('mcpd');
                broadcastMarketRadio(`🤖 ROBO-ALGO TOOK PROFIT: MCPD surged +${pct.toFixed(2)}% -> Automated sell order fired.`);
            }
        }
    }

    // FEATURE 42: Watchlist & Star Pinning (⭐)
    window.toggleWatchlistPin = function(stockId) {
        const idx = sf.watchlist.indexOf(stockId);
        if (idx >= 0) {
            sf.watchlist.splice(idx, 1);
        } else {
            sf.watchlist.push(stockId);
        }
        playTradingSound('click');
        updateWatchlistStarsDOM();
        reorderWatchlistCards();
    };

    function updateWatchlistStarsDOM() {
        document.querySelectorAll('.btn-watchlist-star').forEach(btn => {
            const sid = btn.getAttribute('data-id');
            if (sf.watchlist.includes(sid)) {
                btn.innerText = '★';
                btn.style.color = '#fbbf24';
            } else {
                btn.innerText = '☆';
                btn.style.color = 'var(--text-dim)';
            }
        });
    }

    function reorderWatchlistCards() {
        const container = document.getElementById('markets-container');
        if (!container) return;
        sf.watchlist.forEach(id => {
            const card = document.getElementById(id + '-stock-dashboard');
            if (card) container.prepend(card);
        });
    }

    // FEATURE 43: Compact Ticker Ribbon vs Detailed Card Mode
    window.toggleCompactView = function() {
        sf.compactView = !sf.compactView;
        const container = document.getElementById('markets-container');
        const btn = document.getElementById('btn-compact-view-toggle');
        if (container) {
            if (sf.compactView) {
                container.classList.add('compact-market-grid');
            } else {
                container.classList.remove('compact-market-grid');
            }
        }
        if (btn) btn.innerText = sf.compactView ? `VIEW: COMPACT RIBBON` : `VIEW: DETAILED CARDS`;
        playTradingSound('click');
    };

    // FEATURE 44: All-Time Highs & Lows Tracking
    function updateATHATLRecords() {
        if (!window.markets) return;
        Object.keys(window.markets).forEach(k => {
            const p = window.markets[k].price;
            if (!sf.recordHighs[k] || p > sf.recordHighs[k]) sf.recordHighs[k] = p;
            if (!sf.recordLows[k] || p < sf.recordLows[k]) sf.recordLows[k] = p;
        });
    }

    // FEATURE 45: Custom Price Alarm Audio & Visual Flash
    window.setCustomPriceAlarm = function() {
        const val = prompt("SET MCPD TARGET PRICE ALARM (NTND $):", sf.priceAlarmThreshold || "2500000000");
        if (val !== null) {
            const num = parseFloat(val.replace(/[^0-9.]/g, ''));
            if (!isNaN(num) && num > 0) {
                sf.priceAlarmThreshold = num;
                broadcastMarketRadio(`PRICE ALARM SET: Monitoring for MCPD crossing NTND $${num.toLocaleString()}.`);
                const btn = document.getElementById('btn-price-alarm');
                if (btn) btn.innerText = `ALARM: $${num.toLocaleString()}`;
            }
        }
    };

    function checkPriceAlarm() {
        if (!sf.priceAlarmThreshold || !window.markets || !window.markets.mcpd) return;
        if (window.markets.mcpd.price >= sf.priceAlarmThreshold) {
            playTradingSound('alarm');
            broadcastMarketRadio(`🚨 PRICE ALARM TRIGGERED! MCPD crossed target valuation of NTND $${sf.priceAlarmThreshold.toLocaleString()}!`);
            sf.priceAlarmThreshold = null; // reset
            const btn = document.getElementById('btn-price-alarm');
            if (btn) btn.innerText = `ALARM: [OFF]`;
        }
    }

    // FEATURE 48: Unrealized & Realized PnL Tracker
    function updatePnLMetrics() {
        if (!window.stockAccount || !window.markets || !window.markets.mcpd) return;
        const currentVal = (window.stockAccount.portfolio.mcpd || 536) * window.markets.mcpd.price;
        if (sf.initialValuation === null) {
            sf.initialValuation = currentVal;
        }
        const unrealized = currentVal - sf.initialValuation;
        const totalPnL = sf.realizedPnL + unrealized;
        const pct = (sf.initialValuation > 0) ? (totalPnL / sf.initialValuation) * 100 : 0;

        const pnlEl = document.getElementById('stock-pnl-display');
        if (pnlEl) {
            const isPos = totalPnL >= 0;
            pnlEl.innerHTML = `
                SESSION PnL: <span style="color:${isPos ? 'var(--accent-green)' : 'var(--panic-red)'}; font-weight:bold;">
                    ${isPos ? '+' : ''}NTND $${totalPnL.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})} (${isPos ? '+' : ''}${pct.toFixed(2)}%)
                </span>
            `;
        }
    }

    // FEATURE 49: Extended CSV & JSON Exports
    window.exportStockLedgerCsv = function() {
        if (!window.stockLedger || window.stockLedger.length === 0) {
            alert("Stock ledger is empty.");
            return;
        }
        let csv = "Timestamp,Ticker,Action,Proceeds_Or_Value,Reason\n";
        window.stockLedger.forEach(line => {
            csv += `"${line.replace(/"/g, '""')}"\n`;
        });
        const blob = new Blob([csv], { type: 'text/csv' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `MCPD_STOCK_LEDGER_${Date.now()}.csv`;
        a.click();
    };

    window.exportStockLedgerJson = function() {
        if (!window.stockLedger || window.stockLedger.length === 0) {
            alert("Stock ledger is empty.");
            return;
        }
        const data = {
            exportDate: new Date().toISOString(),
            stationAccount: window.stockAccount,
            featuresState: sf,
            ledger: window.stockLedger
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `MCPD_STOCK_LEDGER_${Date.now()}.json`;
        a.click();
    };

    // FEATURE 50: Live Cyberpunk Marquee Ticker Banner
    const marqueeHeadlines = [
        "MEGACITY CENTRAL BANK INJECTS OFFSHORE LIQUIDITY",
        "KINETIC ARMS ANNOUNCES HIGH-VELOCITY RAILGUN MERGER",
        "MCPD SHARES SURGE ON NEW MEGACITY AUTOMATION MANDATE",
        "FEAR & GREED INDEX: 74 (EXTREME BULLISH MOMENTUM)",
        "NEON SYNTHETICS RECEIVES PRECINCT CONTRACT APPROVAL",
        "DARK POOL TRADE VOLUMES HIT HISTORIC HIGH WATERMARK",
        "ASTRAL DATA CORP EXPANDS NEURAL SCANNER BROKERAGE"
    ];

    window.updateMarqueeBanner = function() {
        const el = document.getElementById('stock-marquee-text');
        if (!el || !window.markets) return;
        const mcpdPrice = window.markets.mcpd ? window.markets.mcpd.price.toLocaleString(undefined, {minimumFractionDigits:2}) : "2,000,000,000.00";
        const bankPrice = window.markets.bank ? window.markets.bank.price.toLocaleString(undefined, {minimumFractionDigits:2}) : "500,000,000.00";
        const armsPrice = window.markets.arms ? window.markets.arms.price.toLocaleString(undefined, {minimumFractionDigits:2}) : "50,000,000.00";
        const headline = marqueeHeadlines[sf.marqueeHeadlineIndex % marqueeHeadlines.length];
        sf.marqueeHeadlineIndex++;

        el.innerText = `🚨 [MEGACITY FINANCIAL WIRE] MCPD: NTND $${mcpdPrice} ▲ // TBMG BANK: NTND $${bankPrice} // KINETIC ARMS: NTND $${armsPrice} // WHALE MOVES: ECLIPSE DYNAMICS +$450M // ${headline} // 🚨`;
    };

    // =======================================================================
    // GLOBAL TICK HOOK (CALLED BY app_core.js onStockMarketTick)
    // =======================================================================
    window.onStockMarketTick = function(updates) {
        if (Date.now() < sf.marketFreezeUntil) {
            // Frozen
            return;
        }

        // Limit Orders verification
        if (window.markets && window.markets.mcpd) {
            const mcpdPrice = window.markets.mcpd.price;
            sf.limitOrders.forEach(o => {
                if (o.active) {
                    if (o.type === 'BUY' && mcpdPrice <= o.targetPrice) {
                        o.active = false;
                        if (typeof window.buyStock === 'function') {
                            const input = document.getElementById('mcpd-stock-qty');
                            if (input) input.value = o.qty;
                            window.buyStock('mcpd');
                            broadcastMarketRadio(`LIMIT BUY TRIGGERED: [${o.id}] Bought ${o.qty.toLocaleString()} MCPD @ NTND $${mcpdPrice.toLocaleString()}`);
                        }
                    } else if (o.type === 'SELL' && mcpdPrice >= o.targetPrice) {
                        o.active = false;
                        if (typeof window.sellStock === 'function') {
                            const input = document.getElementById('mcpd-stock-qty');
                            if (input) input.value = o.qty;
                            window.sellStock('mcpd');
                            broadcastMarketRadio(`LIMIT SELL TRIGGERED: [${o.id}] Sold ${o.qty.toLocaleString()} MCPD @ NTND $${mcpdPrice.toLocaleString()}`);
                        }
                    }
                }
            });
            sf.limitOrders = sf.limitOrders.filter(o => o.active);
            renderLimitOrdersList();

            // Stop loss check
            if (sf.stopLossEnabled && mcpdPrice <= sf.stopLossThreshold) {
                sf.stopLossEnabled = false;
                if (typeof window.sellStock === 'function') {
                    window.sellStock('mcpd');
                    broadcastMarketRadio(`🛑 STOP-LOSS LIQUIDATION: Triggered @ NTND $${mcpdPrice.toLocaleString()}! Position liquidated.`);
                }
            }

            // Crash Insurance payout check
            if (sf.crashInsuranceActive && mcpdPrice < 1700000000.0) { // >15% crash
                sf.crashInsuranceActive = false;
                if (window.stockAccount) window.stockAccount.balance += 1000000000.0;
                broadcastMarketRadio(`🛡️ INSURANCE PAYOUT: Market drawdown triggered NTND $1,000,000,000 FDIC-MCPD claim payment!`);
                updateInsuranceDOM();
            }
        }

        // Background subsystem calculations
        checkCityTrustCorrelation();
        checkBondMaturity();
        checkVaultCompounding();
        checkPriceAlarm();
        executeRoboTraderStep();
        updateATHATLRecords();
        updatePnLMetrics();
        updateGainersAndLosers();
        generateOrderBookDepth();
        if (typeof window.renderSectorHeatmap === 'function') window.renderSectorHeatmap();
        if (typeof window.updateMarqueeBanner === 'function') window.updateMarqueeBanner();
        updateShortDisplay();
    };

    // Public Subsystem API Handle
    window.stockFeatures = {
        state: sf
    };

    // Subsystem UI Tab Switcher
    window.switchStockFeatureTab = function(tabId) {
        document.querySelectorAll('.stock-feature-tab-btn').forEach(b => {
            if (b.getAttribute('data-tab') === tabId) {
                b.style.background = 'var(--accent-blue)';
                b.style.color = '#fff';
            } else {
                b.style.background = 'rgba(0,0,0,0.5)';
                b.style.color = 'var(--text-dim)';
            }
        });
        document.querySelectorAll('.stock-feature-panel').forEach(p => {
            p.style.display = (p.id === tabId) ? 'block' : 'none';
        });
        playTradingSound('click');
    };

    // Initialize DOM bindings on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        renderShareholderMotions();
        renderLimitOrdersList();
        renderBondsList();
        updateCyberCredDOM();
        updateGoldDOM();
        updatePlutoniumDOM();
        updateVaultDOM();
        updateInsuranceDOM();
        updateSyndicateDOM();
        updateWatchlistStarsDOM();
        if (typeof window.updateMarqueeBanner === 'function') window.updateMarqueeBanner();
    });

})(window);
