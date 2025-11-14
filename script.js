const story = {
    start: {
        text: `The scent of saddle leather and pine smoke hangs in the air as you finish your coffee at the polished mahogany bar. A ranch owner named Ben Carter approaches, his cowboy boots making soft thuds on the wooden floor.`,
        dialogue: [
            `"Mr. O'Donnell? Heard tell you're the one to see when the law moves slower'n molasses in January."`,
            `He slides a photo across the weathered wooden table. It shows a rugged man in his forties with a honest face.`,
            `"My foreman, Jim Weaver. Good man, solid as they come. Disappeared three days back while checkin' fences up in the Gros Ventre. Sheriff says he probably just took off, but hell—Jim wouldn't abandon his horses. Just ain't in his nature."`,
            `Ben's calloused hands grip his hat nervously. He's the real deal—a Wyoming rancher through and through.`
        ],
        image: "https://images.pexels.com/photos/15090856/pexels-photo-15090856.jpeg",
        choices: [
            { text: `"Ranch folk don't spook easy. Tell me what's got you worried."`, next: "takeCase" },
            { text: `"Appreciate you coming by, Ben, but I'm working another case right now."`, next: "walkAway" },
            { text: `"Before I commit, I need to know what Jim was into lately."`, next: "askQuestions" }
        ]
    },
    takeCase: {
        text: `You nod, finishing the last of your coffee. Ben's relief is palpable.`,
        dialogue: [
            `<span class="ann-speech">"Alright Ben, I'm in. Start from the beginning—what's got Jim spooked?"</span>`,
            `He leans in, voice dropping. <span class="character-speech">"Jim's ex-military, like yourself. Lately he'd been noticin' strange doings out on the back forty—truck movements after dark, fellas who don't look like they belong out here. Last week, he found evidence of illegal diggin' on federal land borderin' the ranch."</span>`,
            `<span class="character-speech">"He was supposed to meet with a BLM ranger about it, but never showed. That ain't like him, Mr. O'Donnell. Not one bit."</span>`,
            `Ben hands you a slip of paper with coordinates and a set of keys. <span class="character-speech">"These are Jim's last known whereabouts and the keys to his cabin. Whatever you find... well, I'd appreciate discretion. We take care of our own out here."</span>`
        ],
        image: "https://images.pexels.com/photos/2376988/pexels-photo-2376988.jpeg",
        choices: [
            { text: `"I'll start at Jim's cabin. See what he left behind."`, next: "searchCabin" },
            { text: `"I'm heading straight to those coordinates. Time's wasting."`, next: "checkCoordinates" },
            { text: `"First, I'll talk to that BLM ranger Jim was meeting."`, next: "talkRanger" }
        ],
        instinct: 1
    },
    walkAway: {
        text: `You shake your head gently. Ben's face falls, but he maintains his Wyoming stoicism.`,
        dialogue: [
            `<span class="ann-speech">"I appreciate you thinking of me, Ben, but I'm wrapped up in another missing persons case over in Dubois."</span>`,
            `He nods, tucking the photo back into his jacket. <span class="character-speech">"Understood. Can't blame a fella for tryin'. If you change your mind..."</span>`,
            `As he leaves, you notice two men in expensive outdoor gear watching from the end of the bar. They're too clean for ranch hands, too focused for tourists. They watched your entire conversation. One makes a phone call, his eyes never leaving you.`,
            `The bartender, an old-timer named Gus, leans over. <span class="character-speech">"Them boys ain't from around here, O'Donnell. Been askin' questions 'bout Jim Weaver all week. Somethin' don't sit right."</span>`
        ],
        image: "https://images.pexels.com/photos/19124746/pexels-photo-19124746.jpeg",
        choices: [
            { text: `"Thanks Gus. Think I'll see where those boys are headed."`, next: "followMen" },
            { text: `"Hell with it." You catch up to Ben outside. "Changed my mind."`, next: "changeMind" },
            { text: `"Let's see if they've got the guts to approach me." You order another coffee.`, next: "waitApproach" }
        ]
    },
    askQuestions: {
        text: `You study Ben carefully. Something about this doesn't add up.`,
        dialogue: [
            `<span class="ann-speech">"Ben, if your foreman's missing, why come to me? You've got law enforcement."</span>`,
            `He glances around before leaning in. <span class="character-speech">"Because the sheriff's department ain't lookin' too hard. They say he just took off. But Jim found something out there—old artifacts, maybe valuable. He was meeting with a historian from the university."</span>`,
            `<span class="character-speech">"Between you and me, I think my foreman stumbled onto something somebody wants kept quiet. And I think our sheriff might be in on it."</span>`,
            `He slides the envelope closer. <span class="character-speech">"You helped the Henderson boy when nobody else would. I need someone who ain't from around here. Someone who don't answer to the local power structure."</span>`
        ],
        image: "https://images.pexels.com/photos/2416597/pexels-photo-2416597.jpeg",
        choices: [
            { text: `"Alright, you've got me curious. Tell me everything."`, next: "takeCase" },
            { text: `"Sounds like more trouble than it's worth. I'm moving on."`, next: "walkAway" },
            { text: `"Show me what Jim found. Then I'll decide."`, next: "seeArtifact" }
        ],
        investigation: 1
    },
    searchCabin: {
        text: `Jim's cabin is military-neat, everything in its place. But someone's been here before you—drawers not quite closed, books slightly out of alignment. Professional.`,
        dialogue: [
            `<span class="ann-speech">"Someone's tossed this place. Good, but not good enough."</span>`,
            `Under a loose floorboard beneath his bed, you find a journal. Detailed notes about illegal mining operations, coordinates, and photos of men who look more like corporate security than outdoorsmen.`,
            `One entry catches your eye: <span class="character-speech">"Found what looks like an old German bunker in the Teton Wilderness. Dates to WWII? Richter's men everywhere. They know I'm onto them."</span>`,
            `As you're photographing the journal, you hear a vehicle approaching. Through the window, you see two men getting out of a black SUV. They're heading straight for the cabin.`
        ],
        image: "https://images.pexels.com/photos/4227153/pexels-photo-4227153.jpeg",
        choices: [
            { text: `"Time for some direct questions." You step outside to meet them.`, next: "confrontMen" },
            { text: `"Teton Wilderness it is." You slip out the back and head for the location.`, next: "tetonWilderness" },
            { text: `"Sheriff Davis is clean. Time to get official backup." You call him with the evidence.`, next: "trustedSheriff" }
        ],
        investigation: 2
    },
    checkCoordinates: {
        text: `The coordinates lead to a remote area in the Gros Ventre Wilderness. The air smells of pine and disturbed earth.`,
        dialogue: [
            `<span class="ann-speech">"Well, now. This isn't your average poaching operation."</span>`,
            `You find recent tire tracks from heavy vehicles and evidence of excavation carefully hidden under pine branches. They've been digging for something—and recently. The scale is industrial.`,
            `As you're examining the site, you hear engines approaching. Two black SUVs that definitely don't belong out here are bouncing along the rough track straight toward you.`,
            `One of the drivers spots you and shouts to his partner in German-accented English: <span class="character-speech">"He's here! The investigator!"</span>`
        ],
        image: "https://images.pexels.com/photos/5338516/pexels-photo-5338516.jpeg",
        choices: [
            { text: `"Let's see what they're up to." You melt into the trees to observe.`, next: "hideObserve" },
            { text: `"Time to even the odds." You set up an ambush position.`, next: "ambush" },
            { text: `"Too many. Time to call this in." You retreat and radio for backup.`, next: "callBackup" }
        ],
        instinct: 1
    },
    followMen: {
        text: `You follow the men from the bar to a remote compound near Kelly. High fences, security cameras—the works.`,
        dialogue: [
            `<span class="ann-speech">"This isn't any hunting lodge I've ever seen."</span>`,
            `Through the trees, you see men loading crates into trucks. One crate drops, revealing military-grade weapons. A man in charge barks orders in German.`,
            `<span class="character-speech">"Schneller! We don't have all day! Richter wants this shipment gone by nightfall!"</span>`,
            `An old ranch hand from a neighboring spread approaches cautiously. <span class="character-speech">"You that fella Ben hired? They got Jim in there. Saw 'em bring him in three days ago. Them Germans ain't diggin' for arrowheads, I'll tell you that much."</span>`
        ],
        image: "https://images.pexels.com/photos/2836719/pexels-photo-2836719.jpeg",
        choices: [
            { text: `"This needs proper law enforcement." You head to the state police.`, next: "statePolice" },
            { text: `"I'm going in after dark. See what they're hiding."`, next: "sneakIn" },
            { text: `"Ben needs to see this." You head back to find him.`, next: "findBen" }
        ],
        investigation: 1
    },
    confrontMen: {
        text: `You step into their path as they approach Jim's cabin. The lead man's hand goes to his weapon.`,
        dialogue: [
            `<span class="ann-speech">"Looking for something, boys? Or should I say, 'Jungs'?"</span>`,
            `The lead man snarls in a thick German accent: <span class="character-speech">"The journal. Give it to us and we might let you walk away."</span>`,
            `<span class="ann-speech">"Not how this works."</span> Your military training kicks in—you disarm him with two precise moves, have him on the ground before he knows what happened.`,
            `The second man freezes when he sees your stance. Under interrogation, he reveals: <span class="character-speech">"We work for Klaus Richter! Jim is at the compound! We were sent for his journal!"</span>`,
            `<span class="ann-speech">"Much obliged."</span> You zip-tie them to the cabin porch rail.`
        ],
        image: "https://images.pexels.com/photos/2542008/pexels-photo-2542008.jpeg",
        outcome: "Two hostiles neutralized. Information extracted.",
        choices: [
            { text: `"Time to pay Mr. Richter a visit." You head for the compound.`, next: "compound" },
            { text: `"Call Sheriff Davis. He's clean. Get official backup."`, next: "callSheriff" },
            { text: `"Confront Klaus Richter directly at his operation site."`, next: "confrontRichter" }
        ],
        combat: 2
    },
    compound: {
        text: `The compound is heavily guarded. Eight men, professional security. Jim is being held in a bunker on the north side.`,
        dialogue: [
            `<span class="ann-speech">"Alright Richter, let's see what you're made of."</span>`,
            `You neutralize the perimeter guards using the terrain to your advantage. Inside the fence, you find excavation equipment and crates of artifacts—they're looting historical sites on an industrial scale.`,
            `A captured guard confirms: <span class="character-speech">"Richter's ex-Stasi! He's been lootin' historical sites all over Wyoming! The local sheriff's on his payroll!"</span>`,
            `You reach the bunker where two guards watch over a bound but conscious Jim Weaver. Through the window, you hear one say: <span class="character-speech">"Richter says we ship him out tonight. Permanent-like."</span>`
        ],
        image: "https://images.pexels.com/photos/15088315/pexels-photo-15088315.jpeg",
        choices: [
            { text: `"Create a diversion using the excavation equipment."`, next: "createDiversion" },
            { text: `"Direct assault. Take out both guards quickly."`, next: "directAssault" },
            { text: `"Wait for nightfall. Use the darkness as cover."`, next: "waitNight" }
        ]
    },
    directAssault: {
        text: `You burst through the bunker door. The element of surprise is yours.`,
        dialogue: [
            `<span class="ann-speech">"Evening, gentlemen. Party's over."</span>`,
            `First guard goes down with a precise strike to the throat. Second guard gets a shot off that ricochets off the concrete wall. You disable him, free Jim.`,
            `Jim coughs, rubbing his wrists. <span class="character-speech">"O'Donnell? Ben sent you? Thank Christ. Richter's ex-Stasi, runnin' an artifact smugglin' ring. The sheriff's dirty as a spring pasture."</span>`,
            `Suddenly, alarms blare through the compound. Richter's voice echoes over a PA system: <span class="character-speech">"Find them! I want them alive!"</span>`,
            `Jim grabs a fallen weapon. <span class="character-speech">"Well, hell. Reckon we're doin' this the hard way."</span>`
        ],
        image: "https://images.pexels.com/photos/5316675/pexels-photo-5316675.jpeg",
        choices: [
            { text: `"We fight our way out. Use their weapons against them."`, next: "fightWayOut" },
            { text: `"Hide in the excavation tunnels. Wait for an opening."`, next: "hideTunnels" },
            { text: `"Surrender. Play captured to get to Richter."`, next: "surrender" }
        ],
        combat: 1
    },
    fightWayOut: {
        text: `You arm yourselves with weapons from the guards. Jim may be injured but he's still military.`,
        dialogue: [
            `<span class="ann-speech">"Jim, you take left flank. I've got right. Watch for crossfire."</span>`,
            `Jim chambers a round. <span class="character-speech">"Just like old times, Lieutenant. Let's give these boys a Wyoming welcome."</span>`,
            `You use the compound's layout to your advantage, creating choke points. Richter's men aren't prepared for coordinated military tactics.`,
            `After fighting through two squads, you reach the vehicle compound. Just as you're about to commandeer a truck, Klaus Richter appears with more men. He's holding Ben Carter hostage.`,
            `Richter sneers: <span class="character-speech">"Ah, the famous Mr. O'Donnell. So predictable. Drop your weapons or the rancher dies."</span>`
        ],
        image: "https://images.pexels.com/photos/10411425/pexels-photo-10411425.jpeg",
        choices: [
            { text: `"Negotiate. Offer the evidence for Ben."`, next: "negotiate" },
            { text: `"Take the shot. One clean opportunity."`, next: "takeShot" },
            { text: `"Create chaos. Use the excavation explosives."`, next: "createChaos" }
        ]
    },
    takeShot: {
        text: `You take a rifle from one of the disabled guards, finding elevation on a rocky outcrop.`,
        dialogue: [
            `<span class="ann-speech">"Jim, when I move, create a distraction. Ben, when you hear shooting, get clear."</span>`,
            `Jim nods. <span class="character-speech">"You got one shot, Lieutenant. Make it count."</span>`,
            `You steady your breathing. One shot. Through Richter's shoulder. Non-lethal but disabling.`,
            `Richter screams and drops. <span class="character-speech">"Mein Arm! You bastard!"</span>`,
            `His men scatter as he goes down. In the confusion, you extract Ben and Jim. The state police arrive—the ones you called earlier.`,
            `The lead trooper approaches. <span class="character-speech">"O'Donnell? Hell of a mess you made. We'll take it from here."</span>`,
            `Ben clasps your shoulder. <span class="character-speech">"Mr. O'Donnell, I don't know how to thank you. You saved my foreman and probably my ranch."</span>`,
            `<span class="ann-speech">"Just doing my job, Ben. Just doing my job."</span>`
        ],
        image: "https://images.pexels.com/photos/7226889/pexels-photo-7226889.jpeg",
        outcome: "Case closed. Justice served in the Tetons.",
        choices: [],
        instinct: 2,
        combat: 1,
        investigation: 2
    },
    gameOver: {
        text: `Without your involvement, the investigation stalls.`,
        dialogue: [
            `Jim Weaver is never found. The official report lists him as "voluntarily missing."`,
            `Ben Carter loses his ranch to mysterious "accidents" and bank pressure he can't explain.`,
            `The artifact smuggling operation continues, stripping Wyoming of its historical treasures for years to come.`,
            `Sometimes the mountains keep their secrets because good people look the other way. Sometimes justice needs a push.`
        ],
        image: "https://images.pexels.com/photos/33386929/pexels-photo-33386929.jpeg",
        choices: []
    }
};

let currentScene = 'start';
let stats = {
    instinct: 8,
    combat: 9,
    investigation: 7
};

const storyTextElement = document.getElementById('story-text');
const storyImageElement = document.getElementById('story-image');
const imageContainer = document.querySelector('.image-container');
const imageLoading = document.querySelector('.image-loading');
const choicesContainer = document.getElementById('choices-container');
const instinctValueElement = document.getElementById('instinct-value');
const combatValueElement = document.getElementById('combat-value');
const investigationValueElement = document.getElementById('investigation-value');
const instinctBarElement = document.getElementById('instinct-bar');
const combatBarElement = document.getElementById('combat-bar');
const investigationBarElement = document.getElementById('investigation-bar');
const restartButton = document.getElementById('restart-btn');

function initGame() {
    currentScene = 'start';
    stats = {
        instinct: 8,
        combat: 9,
        investigation: 7
    };
    updateStatsDisplay();
    showScene(currentScene);
    restartButton.classList.add('hidden');
}

function updateStatsDisplay() {
    instinctValueElement.textContent = stats.instinct;
    combatValueElement.textContent = stats.combat;
    investigationValueElement.textContent = stats.investigation;
    
    instinctBarElement.style.width = `${stats.instinct * 10}%`;
    combatBarElement.style.width = `${stats.combat * 10}%`;
    investigationBarElement.style.width = `${stats.investigation * 10}%`;
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
    });
}

async function showScene(sceneId) {
    const scene = story[sceneId];
    
    if (!scene) {
        console.error(`Scene ${sceneId} not found!`);
        return;
    }
    
    let storyHTML = '';
    if (scene.dialogue) {
        storyHTML = `<p>${scene.text}</p>`;
        scene.dialogue.forEach(line => {
            if (line.includes('class=')) {
                storyHTML += `<div class="dialogue">${line}</div>`;
            } else {
                storyHTML += `<p>${line}</p>`;
            }
        });
    } else {
        storyHTML = `<p>${scene.text}</p>`;
    }
    
    storyTextElement.innerHTML = storyHTML;
    
    const existingOutcome = document.querySelector('.outcome');
    if (existingOutcome) {
        existingOutcome.remove();
    }

    if (scene.outcome) {
        const outcomeElement = document.createElement('div');
        outcomeElement.className = 'outcome';
        outcomeElement.textContent = scene.outcome;
        storyTextElement.after(outcomeElement);
    }

    storyImageElement.classList.add('hidden');
    imageLoading.classList.remove('hidden');
    
    try {
        await loadImage(scene.image);
        
        storyImageElement.src = scene.image;
        storyImageElement.classList.remove('hidden');
        imageLoading.classList.add('hidden');
    } catch (error) {
        console.error('Image loading error:', error);
        imageLoading.textContent = "Wyoming scene loading...";
    }

    if (scene.instinct) stats.instinct += scene.instinct;
    if (scene.combat) stats.combat += scene.combat;
    if (scene.investigation) stats.investigation += scene.investigation;
    updateStatsDisplay();

    choicesContainer.innerHTML = '';

    if (scene.choices && scene.choices.length > 0) {
        scene.choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.innerHTML = choice.text;
            button.dataset.next = choice.next;
            button.addEventListener('click', () => {
                if (choice.next === 'takeShot' || choice.next === 'gameOver') {
                    restartButton.classList.remove('hidden');
                }
                showScene(choice.next);
            });
            choicesContainer.appendChild(button);
        });
    } else {

        restartButton.classList.remove('hidden');
    }
}

restartButton.addEventListener('click', initGame);

initGame();