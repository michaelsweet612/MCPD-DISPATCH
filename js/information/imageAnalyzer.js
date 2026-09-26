
// IMAGE ANALYZER (NO AI) - V2 (ENHANCED REALISM & EXPANDED CHATTER)
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
    
    const isInappropriate = /nsfw|nude|porn|sexy|boob|xxx|onlyfans|lewd|naked|bikini|shirtless/.test(nameStr);
    const isAnimal = /dog|cat|pet|bird|kitten|puppy|fish|hamster|parrot|snake|lizard|bunny|rabbit|bear|wolf|fox|furry|fursona/.test(nameStr);
    const isSuspect = /suspect|wanted|criminal|perp|fugitive|target|bolo|mugshot/.test(nameStr);
    const isWeapon = /gun|weapon|knife|blade|rifle|pistol|shotgun|bomb|explosive|grenade|sword|ammo/.test(nameStr);
    const isVehicle = /car|truck|van|vehicle|motorcycle|bike|sedan|suv|pickup|hovercraft|cruiser/.test(nameStr);
    const isCrime = /crime|scene|evidence|blood|murder|assault|robbery|theft|drugs|contraband|stash/.test(nameStr);
    const isFood = /food|pizza|burger|taco|noodle|sandwich|coffee|donut|doughnut|lunch|dinner|breakfast|meal/.test(nameStr);
    const isSelfie = /selfie|me|self|face|portrait|headshot|photo of me/.test(nameStr);
    const isLandscape = /city|skyline|building|street|road|bridge|sunset|sunrise|sky|mountain|ocean|beach|park|view/.test(nameStr);
    const isMeme = /meme|funny|lol|lmao|bruh|shitpost|cursed|joke|pepe|troll/.test(nameStr);
    const isScreenshot = /screenshot|screen|desktop|monitor|phone|chat|text|log/.test(nameStr);
    const isPerson = /person|man|woman|guy|girl|people|crowd|group|dude|kid|child|baby/.test(nameStr);
    const isMap = /map|location|gps|coordinates|sector|grid|satellite|layout/.test(nameStr);
    const isDark = /dark|night|shadow|black|creepy|scary|horror|alley/.test(nameStr);
    
    let replies = [];
    
    if (isInappropriate) {
        replies = [
            "Dispatch, what the hell is this? This is a secure tactical channel.",
            "I'm reporting this to Internal Affairs right now. Completely unacceptable.",
            "Is your terminal hacked, Dispatch? Because if not, you're fired.",
            "Wow. Just wow. Keep that garbage off the radio.",
            "10-4, evidence logged. Wait... this isn't evidence. What are you doing?",
            "Dispatch, my partner was looking over my shoulder! Are you kidding me?",
            "I'm clearing my terminal cache immediately.",
            "Someone come check on Dispatch, they're losing it.",
            "This violates about seven different corporate IT policies.",
            "Dispatch, please keep your personal files off the network.",
            "I did not need to see that during my lunch break."
        ];
    } else if (isSuspect) {
        replies = [
            "10-4 Dispatch. Pinging suspect facial recognition data now.",
            "Copy that. BOLO is active. We have eyes peeled in all sectors.",
            "That's the guy from the convenience store robbery last week.",
            "Got it. Loading suspect profile into the cruiser HUD.",
            "We have a 98% facial match on file. Target is considered armed and dangerous.",
            "I've arrested him before. He usually hangs around Sector 4.",
            "Suspect acquired. Units be advised, he's known to run on foot.",
            "10-4. I'll pass this image to the anti-gang unit.",
            "Does he have any known gang affiliations? Running the tattoos through the database.",
            "Copy that. Distributing suspect photo to all patrol units in the grid.",
            "Wait, I just saw this guy ten minutes ago near the transit hub!"
        ];
    } else if (isWeapon) {
        replies = [
            "10-4. Running serial numbers through the armory database.",
            "That's military-grade hardware. Where did a street thug get that?",
            "Copy. Weapons confirmed. All units, upgrade threat level to Lethal.",
            "That looks like a modified plasma rifle. Highly illegal.",
            "10-4, evidence logged. Secure the weapon before the media gets here.",
            "Make sure you bag that properly. The serial is scratched off.",
            "I haven't seen a weapon like that since the corporate wars.",
            "Dispatch, verify if that weapon type is registered to any local security firms.",
            "That's heavy ordinance. We might need SWAT for this one.",
            "Copy. Weapon identified. Looks jammed, but treat it as loaded."
        ];
    } else if (isCrime) {
        replies = [
            "10-4 Dispatch. Crime scene photos logged into the central database.",
            "That's a mess. Send the forensic drones to process the area.",
            "Copy that. Secure the perimeter and don't let anyone touch the evidence.",
            "Looks like a professional hit. No casings left behind.",
            "10-4. I'm seeing multiple points of entry. This was coordinated.",
            "Make sure the coroner gets a copy of these photos.",
            "Dispatch, check if there are any CCTV cameras covering that exact angle.",
            "That's gruesome. Remind me why I signed up for this job again?",
            "Evidence uploaded. The detectives are going to have a field day with this.",
            "Copy. Ensure the chain of custody is maintained for all items in that photo."
        ];
    } else if (isVehicle) {
        replies = [
            "10-4. Running the plates through the DMV database.",
            "Copy. Vehicle matches the description from the hit-and-run.",
            "That vehicle is registered to a shell corporation. Typical.",
            "10-4. I'll put out a BOLO for that make and model.",
            "Looks like it has illegal tint and modified exhaust. Pull it over if spotted.",
            "Dispatch, check the toll-booth cameras to see if that vehicle left the city.",
            "That's a high-end luxury vehicle. Probably stolen.",
            "Copy. Scanning for thermal signatures inside the vehicle.",
            "Vehicle secured. Waiting for the tow truck to take it to impound.",
            "10-4. Be advised, vehicles like that are often rigged with EMP countermeasures."
        ];
    } else if (isAnimal) {
        replies = [
            "10-4 Dispatch. Is... is this relevant to an investigation?",
            "Copy that. Is Animal Control responding to this?",
            "Aw, it's actually kind of cute. Wait, is it aggressive?",
            "Dispatch, why are you sending me animal pictures? I'm in the middle of a raid.",
            "I'm a police officer, not a vet. Call animal control.",
            "10-4. Logging image as... biological hazard? I don't even know.",
            "Is it rabid? Keep your distance, those things carry diseases.",
            "My partner says it looks delicious. Ignore him, he's crazy.",
            "Copy that. Do you want me to arrest it?",
            "Dispatch, please keep the tactical channel clear of pet photos."
        ];
    } else if (isFood) {
        replies = [
            "10-4 Dispatch. Now I'm starving. Thanks a lot.",
            "Is this evidence, or are you just taunting me with your lunch?",
            "Copy that. I'm confiscating that as 'civil forfeiture'.",
            "That looks way better than the sludge they serve in the cafeteria.",
            "Dispatch, stop transmitting food pics. My stomach is growling over the radio.",
            "I'll trade you my half-eaten protein bar for whatever that is.",
            "10-4. Is that from the new place on 5th street? I've been meaning to try it.",
            "If you drop some of that off at my cruiser, I'll ignore your next parking ticket.",
            "Copy. Logging image as 'Cruel and Unusual Punishment' for hungry officers.",
            "Dispatch, we are 12 hours into a shift. Don't do this to us."
        ];
    } else if (isMeme) {
        replies = [
            "10-4. Forwarding to the precinct meme board.",
            "Dispatch, keep memes off the tactical net. The captain is listening.",
            "I literally laughed out loud and blew my cover. Thanks, Dispatch.",
            "Copy that. Morale increased by 0.5%. Still tired though.",
            "That's the most accurate representation of my career I've ever seen.",
            "I'm saving this to my personal drive. Don't tell IT.",
            "Dispatch, if you have time to send memes, you have time to approve my PTO.",
            "10-4. I'll pretend I didn't see that.",
            "My partner doesn't get the joke. Explain it to him.",
            "This is highly unprofessional. I love it."
        ];
    } else if (isScreenshot) {
        replies = [
            "10-4 Dispatch. What exactly am I looking at here?",
            "Copy that. Screenshot received. Should I forward this to cyber-crimes?",
            "Dispatch, I can see your other tabs open. You might want to crop that next time.",
            "Is this a glitch in the dispatch terminal?",
            "10-4. I'll have the tech guys analyze the code in that screenshot.",
            "I have no idea what this means. I'm a cop, not a hacker.",
            "Copy. Looks like an encrypted chat log. We'll need a decryption key.",
            "Dispatch, my terminal is having trouble parsing this image resolution.",
            "10-4. I'm logging this as digital evidence.",
            "This screenshot proves absolutely nothing. Get me real evidence."
        ];
    } else if (isSelfie) {
        replies = [
            "10-4 Dispatch. Nice photo. Now get back to work.",
            "Copy that. Did you mean to send this to the tactical channel?",
            "I'm not sure what I'm supposed to do with this image.",
            "Dispatch, please stop using the secure network for your social media updates.",
            "10-4. You look tired, Dispatch. Get some coffee.",
            "I'll add this to the suspect board just to mess with the detectives.",
            "Copy. Is this a cry for help?",
            "Looking good, Dispatch. But seriously, we have actual crimes to solve.",
            "10-4. Image received. Deleting immediately to save server space.",
            "Dispatch, you know the Captain monitors all uploads, right?"
        ];
    } else if (isMap) {
        replies = [
            "10-4 Dispatch. Coordinates received. Plotting route now.",
            "Copy that. Looks like a maze. I'll need drone support to navigate that sector.",
            "That map is outdated. Half those buildings were demolished last year.",
            "10-4. I'm sharing the tactical layout with all responding units.",
            "Copy. Looks like there are multiple choke points. We need to proceed with caution.",
            "Dispatch, can you highlight the primary target location on that map?",
            "10-4. It's deep in Syndicate territory. We'll need heavy backup.",
            "Copy that. I see three possible escape routes. Sealing them off.",
            "That area is a known radio dead zone. We might lose comms once we're inside.",
            "10-4. Map logged. ETA to the waypoint is 4 minutes."
        ];
    } else if (isLandscape) {
        replies = [
            "10-4 Dispatch. Beautiful view. Almost makes you forget how corrupt the city is.",
            "Copy that. Is there a crime happening somewhere in that photo, or are we just admiring the scenery?",
            "That skyline always looks better from a distance.",
            "10-4. I patrolled that street last week. It smells worse than it looks.",
            "Copy. I can see the smog from here.",
            "Dispatch, are you scouting for a new precinct location?",
            "10-4. The neon lights really pop in this image.",
            "Copy that. Sending a drone to sweep the area just in case.",
            "It's quiet out there. Too quiet.",
            "10-4. Reminds me of why I wanted to be a cop in the first place."
        ];
    } else {
        // Generic Realistic Responses
        replies = [
            "10-4 Dispatch. Image received and logged into the central database.",
            "Copy that. Running analysis on the image metadata.",
            "Dispatch, what is the context for this image?",
            "10-4. I'm sharing this with the other units in my sector.",
            "Copy. It's a bit blurry. Do you have a higher resolution version?",
            "10-4. Image is corrupt on my end. Can you resend?",
            "Copy that. I've appended the image to the current incident report.",
            "Dispatch, my terminal is taking forever to download this file.",
            "10-4. I see it. Proceeding with caution.",
            "Copy. I'll have the forensics team take a look at it when I get back to the precinct.",
            "10-4 Dispatch. Keep the intel coming.",
            "Copy that. It doesn't look like much, but I'll keep it on file.",
            "10-4. Forwarding to the detectives division. It's above my paygrade.",
            "Copy. I'll keep an eye out for anything matching this description.",
            "10-4 Dispatch. Good work."
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
                "Dispatch, if you're going to send images, at least make them useful.",
                "I can neither confirm nor deny that this image is relevant to anything I'm investigating.",
                "Same image came across my feed. Cross-referencing with my active cases now.",
                "I'll add my report to " + reactor + "'s. We'll figure this out.",
                "Dispatch, stop spamming the comms. We are actively taking fire.",
                "I'm printing a copy of this for the break room wall."
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
                "If I see one more pointless image, I'm quitting the force.",
                "Are we cops or art critics? Focus on the job, people.",
                "I'm muting my radio. Call me if there's an actual emergency.",
                "This is why the Mayor wants to defund us."
            ];
            setTimeout(() => {
                addChatMessage(thirdReactor, _iaGetRandom(thirdReplies), 'joking', false);
            }, 6000 + Math.random() * 5000);
        }
    }
}
