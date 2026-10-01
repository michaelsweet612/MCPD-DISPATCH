// ==========================================
// MCPD DISPATCH AUDIO & RADIO ENGINE (V1.0)
// ==========================================

window.MCPDAudio = (function() {
    let audioCtx = null;
    let ttsEnabled = true;
    let sfxEnabled = true;
    
    // Initialize Audio Context on first user interaction
    function initContext() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }

    // Bind to document to unlock audio on first click
    document.addEventListener('click', initContext, { once: true });
    document.addEventListener('keydown', initContext, { once: true });

    // Generate Radio Squelch (Mic Click / Static)
    function playSquelch() {
        if (!sfxEnabled || !audioCtx) return;
        initContext();
        
        const bufferSize = audioCtx.sampleRate * 0.1; // 100ms
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1; // White noise
        }
        
        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;
        
        // Bandpass filter to make it sound like a radio
        const bandpass = audioCtx.createBiquadFilter();
        bandpass.type = 'bandpass';
        bandpass.frequency.value = 1000;
        bandpass.Q.value = 0.5;
        
        // Envelope to make it click/fade
        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        
        noise.connect(bandpass);
        bandpass.connect(gain);
        gain.connect(audioCtx.destination);
        
        noise.start();
    }

    // Generate Priority Alert Tone (e.g. 10-33 or Major Incident)
    function playAlertTone(type = 'priority') {
        if (!sfxEnabled || !audioCtx) return;
        initContext();
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        if (type === 'priority') {
            // Three rapid high pitched beeps
            osc.type = 'square';
            osc.frequency.setValueAtTime(800, audioCtx.currentTime); // 800hz
            gain.gain.setValueAtTime(0, audioCtx.currentTime);
            
            // Beep 1
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime + 0.1);
            gain.gain.setValueAtTime(0, audioCtx.currentTime + 0.2);
            // Beep 2
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime + 0.3);
            gain.gain.setValueAtTime(0, audioCtx.currentTime + 0.4);
            // Beep 3
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime + 0.5);
            gain.gain.setValueAtTime(0, audioCtx.currentTime + 0.8);
            
            osc.start(audioCtx.currentTime);
            osc.stop(audioCtx.currentTime + 1.0);
        } else if (type === 'casual') {
            // Single soft blip
            osc.type = 'sine';
            osc.frequency.setValueAtTime(500, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
            
            osc.start(audioCtx.currentTime);
            osc.stop(audioCtx.currentTime + 0.3);
        }
    }

    // Text-to-Speech Engine
    function speakTTS(text, priority = false) {
        if (!ttsEnabled || !('speechSynthesis' in window)) return;
        
        // Strip emoji and html before speaking
        let cleanText = text.replace(/<[^>]+>/g, '').replace(/[\u{1F600}-\u{1F6FF}\u{1F300}-\u{1F5FF}\u{1F900}-\u{1F9FF}]/gu, '');
        
        const utterance = new SpeechSynthesisUtterance(cleanText);
        
        // Try to find a robotic or distinct voice (Google US English, or Microsoft David)
        const voices = window.speechSynthesis.getVoices();
        let targetVoice = voices.find(v => v.name.includes('Google US English')) || 
                          voices.find(v => v.name.includes('David')) || 
                          voices.find(v => v.lang === 'en-US');
                          
        if (targetVoice) {
            utterance.voice = targetVoice;
        }
        
        // Adjust pitch and rate to sound more like a radio dispatcher
        utterance.pitch = 0.9;
        utterance.rate = 1.1;
        
        // Squelch before speaking
        playSquelch();
        
        // If priority, play the alert tone first
        if (priority) {
            playAlertTone('priority');
            setTimeout(() => {
                window.speechSynthesis.speak(utterance);
            }, 1000); // wait for tone
        } else {
            window.speechSynthesis.speak(utterance);
        }
        
        utterance.onend = function() {
            setTimeout(playSquelch, 200); // squelch after speaking
        };
    }
    
    // Toggle audio manually
    function toggleAudio(state) {
        ttsEnabled = state;
        sfxEnabled = state;
        return ttsEnabled;
    }

    return {
        playSquelch,
        playAlertTone,
        speakTTS,
        toggleAudio
    };
})();
