// ==========================================
// MASSIVE NPC PERSONALITY ENGINE v3
// ==========================================
// Handles highly realistic reactions based on word boundaries, tone, length, and content.

window.handleDispatchChatReactions = function(text, reactionSender, senderUnit, typingDiv) {
    const lowerText = text.toLowerCase();
    const length = text.length;
    let isYelling = (text === text.toUpperCase() && text.match(/[A-Z]/));
    let isQuestion = text.trim().endsWith("?");

    let response = "";

    // 1. Tone Checks
    if (length > 150) {
        response = "Dispatch, keep it brief. We can't read a novel while driving.";
    } else if (isYelling) {
        response = "No need to shout over the radio, we hear you loud and clear.";
    } else if (isQuestion) {
        response = "I don't have an answer to that right now, Dispatch. We are a bit busy.";
    }
    
    // 2. Strict Intent Regex Checks (\b for word boundaries)
    else if (/\b(bored|boring)\b/.test(lowerText)) {
        response = "If you're bored, you can come down here and do this paperwork.";
    } else if (/\b(joke|funny)\b/.test(lowerText)) {
        response = "Not the time for jokes, Dispatch. Focus on the comms.";
    } else if (/\b(radio check|comms check)\b/.test(lowerText)) {
        response = "Loud and clear, Dispatch. Signal is 5 by 5.";
    } else if (/\b(order|orders|command)\b/.test(lowerText)) {
        response = "We copy the orders. Proceeding as directed.";
    } else if (/\b(thanks|thank you)\b/.test(lowerText)) {
        response = "You're welcome, Dispatch. Just doing our jobs.";
    } else if (/\b(hello|hi|hey)\b/.test(lowerText)) {
        response = "Go ahead, Dispatch. We're listening.";
    } else {
        // Fallback
        response = "10-4. Copy.";
    }

    typingDiv.querySelector('.text').innerHTML = response;

    // Multi-Officer Banter (40% chance another officer chimes in)
    if (Math.random() < 0.4 && typeof getActiveCallsigns === 'function') {
        const active = getActiveCallsigns();
        if (active.length > 1) {
            let secondSender = active[Math.floor(Math.random() * active.length)];
            while (secondSender === reactionSender && active.length > 1) {
                secondSender = active[Math.floor(Math.random() * active.length)];
            }
            
            setTimeout(() => {
                if (typeof addChatMessage === 'function') {
                    addChatMessage(secondSender, "I completely agree with that.", 'serious', false);
                }
            }, 3000 + Math.random() * 2000);
        }
    }
};
