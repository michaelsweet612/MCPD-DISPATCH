const REALISTIC_DEBATES = [
    [ "I swear the coffee in the break room is just brown water.", "You're just noticing that? It's been like that since 2019.", "I'm bringing my own french press tomorrow. I can't take it anymore." ],
    [ "Has anyone seen my favorite pen?", "You mean the blue one? I think Miller took it.", "If I find out he chewed on it again, I'm writing him up." ],
    [ "Why is the AC in cruiser 44 always broken?", "Because you keep blasting it on max, it freezes the coils.", "Well maybe if it actually worked I wouldn't have to put it on max!" ],
    [ "Can we talk about the new paperwork forms?", "Don't even get me started. They added three new pages for a simple traffic stop.", "It's ridiculous. I spend more time writing than patrolling." ],
    [ "Who took my assigned parking spot?", "Probably one of the rookies. They don't know the unspoken rules yet.", "I'm going to tow them next time. Watch me." ],
    [ "I can't believe they changed the cafeteria menu again.", "What's wrong with it now?", "They got rid of the synth-burgers. It's a tragedy." ],
    [ "Is it just me, or is the radio static worse today?", "It's the solar flares, or so dispatch says.", "I can barely hear a 10-4 over this noise." ],
    [ "I need a vacation.", "Where to? You've got no PTO left.", "I don't care, I'll take unpaid leave if I have to." ],
    [ "These new boots are killing my heels.", "You have to break them in, rookie.", "I've been wearing them for a month!" ],
    [ "Anyone else pulling a double shift today?", "Yeah, covering for Davis. He called in sick.", "Sick? I saw him at the cyber-club last night." ],
    [ "Do we really need to log every single interaction?", "According to the new captain, yes. Accountability.", "It's just micro-management under a different name." ],
    [ "I think my cruiser needs a realigned suspension.", "Stop jumping the curbs in Sector 3 then.", "Sometimes you gotta take the shortcut!" ],
    [ "Has anyone tried the new donut shop on 5th?", "Yeah, it's overpriced and dry.", "Good to know, I'll stick to the vending machine." ],
    [ "Why do we have to wear these high-vis vests?", "Because people can't see us in the dark, genius.", "I feel like a giant glowstick." ],
    [ "Who left their half-eaten sandwich in the fridge?", "It's a science experiment now. Leave it.", "I'm throwing it out. It smells like ozone." ],
    [ "I swear my body armor is shrinking.", "Sure, your armor is shrinking. It has nothing to do with the donuts.", "Hey, I have a slow metabolism!" ],
    [ "Is it Friday yet?", "It's Tuesday, man. Pace yourself.", "It's been a long week already." ],
    [ "Did they fix the coffee machine yet?", "No, it's still spitting out error codes.", "I'm going to throw it out the window." ],
    [ "Who's got the speed trap on Route 9 today?", "I do. It's been dead quiet.", "Lucky you. I'm stuck doing domestic calls." ],
    [ "I can't find the keys to the armory.", "Check the Sergeant's desk. He always hoards them.", "I'm not going near his desk, he's in a mood." ],
    [ "Are we getting new radios soon?", "Next quarter, allegedly.", "They've been saying 'next quarter' for two years." ],
    [ "I think I left my radio charger at home.", "Rookie mistake. Your battery is going to die by 1400.", "Can I borrow yours?" ],
    [ "Who is responsible for cleaning the cruisers?", "We are. Did you not read the memo?", "I'm a cop, not a janitor." ],
    [ "I'm so tired of the rain.", "It washes the scum off the streets.", "It also ruins my freshly shined boots." ],
    [ "Has anyone seen my citation book?", "You probably left it on the roof of your car again.", "Shut up, that only happened once." ],
    [ "I think my siren is broken. It sounds like a dying goose.", "Put in a maintenance request. They'll fix it in a month.", "I'll just use the horn instead." ],
    [ "Do we get holiday pay for tomorrow?", "Only if you work the full 12 hours.", "Guess I'm staying late then." ],
    [ "I can't believe how much traffic there is today.", "There's a game downtown. It's going to be gridlock.", "I'm taking the long way around." ],
    [ "Who drank the last of the milk?", "It was expired anyway.", "Still, it's the principle of the thing!" ],
    [ "I think my partner is ignoring me.", "Maybe you talk too much.", "I barely say a word!" ],
    [ "Are we allowed to listen to music in the cruiser?", "Only at a low volume, and no offensive lyrics.", "So, basically just classical?" ],
    [ "I hate night shift.", "I love it. Less traffic, fewer bosses.", "But all the weirdos come out at night." ],
    [ "Who keeps turning the thermostat down?", "It's boiling in here! We need the AC.", "I'm wearing three layers and I'm still freezing." ],
    [ "I think I lost my badge.", "You're kidding, right?", "No, seriously, I can't find it." ],
    [ "Has anyone tried the new energy drinks in the machine?", "Yeah, they taste like battery acid.", "Perfect, I need a boost." ],
    [ "Why do we have to do these mandatory training modules?", "Liability. If you screw up, they can say they trained you.", "I just click through them as fast as possible." ],
    [ "I think my vest is defective.", "Why, what's wrong with it?", "It's itchy." ],
    [ "Who's buying lunch today?", "Not me, I bought yesterday.", "Guess we're going Dutch." ],
    [ "I can't wait for this shift to end.", "Three more hours. Hang in there.", "I'm counting the seconds." ],
    [ "Have you seen the new patrol routes?", "Yeah, they make absolutely no sense.", "I think a computer generated them." ],
    [ "I think I'm getting sick.", "Don't bring your germs in here.", "I'll just suffer in silence then." ],
    [ "Who left the lights on in the briefing room?", "Does it matter? Just turn them off.", "It wastes electricity!" ],
    [ "I can't find my flashlight.", "Did you check your belt?", "Oh. Never mind." ],
    [ "Are we getting a bonus this year?", "Ha! Good one.", "A guy can dream, right?" ],
    [ "I think my cruiser smells like old cheese.", "Did you check under the seats?", "I'm afraid to look." ],
];


function triggerRealisticDebate(sender) {
    const active = getActiveCallsigns();
    if (active.length < 3) return;

    let normalUnit1 = sender;
    let normalUnit2 = getRandomItem(active.filter(c => c !== normalUnit1));

    const debate = getRandomItem(REALISTIC_DEBATES);

    addChatMessage(normalUnit1, debate[0], "serious");

    setTimeout(() => {
        addChatMessage(normalUnit2, debate[1], "serious");

        setTimeout(() => {
            addChatMessage(normalUnit1, debate[2], "serious");
        }, 3000 + Math.random() * 2000);
    }, 3000 + Math.random() * 2000);
}
