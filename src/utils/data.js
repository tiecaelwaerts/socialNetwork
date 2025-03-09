const usernames = [
    'ByteBandit42',
    'ShadowSyntax',
    'GlitchWizard',
    'EchoNomad',
    'CodePhantomX',
    'FrostbittenLogic',
    'RogueDebugger',
    'QuantumQuirk',
    'PixelPioneer',
    'TurboTinker'
];

const thoughts = [
    'If you clean a vacuum, does that make you the vacuum cleaner?',
    'Why do our brains ignore typos until after we hit send?',
    'If time travel is possible, where are all the tourists from the future?',
    'What if dogs think we’re the pets?',
    'If you say “nobody’s perfect,” doesn’t that mean imperfection is perfect?',
    'Why do we call it fast food when it takes forever in the drive-thru?',
    'If you borrow money from a bank, do you technically own negative money?',
    'If tomatoes are fruit, does that make ketchup a smoothie?',
    'Is AI the ghost of the internet?',
    'If I have deja vu, does that mean I’ve time-traveled slightly?'
];
    
const reactions = [
    'Wait… that actually makes sense. Kinda unsettling.',
    'Bruh, my brain just blue-screened.',
    'Hold up, let me process this real quick.',
    'Nah, that’s cursed information.',
    'I feel like I shouldn’t agree, but I totally do.',
    'Plot twist: You just cracked the matrix.',
    'Gonna pretend I didn’t read that so I can sleep tonight.',
    'That’s the kind of fact that changes a person.',
    'I was today years old when I learned this.',
    'Bro, you just activated my existential crisis mode.'
];
    
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

const getRandomUsername = () => `${getRandomItem(usernames)}`;

const getRandomThought = (number) => {
    let results = [];
    for (let i = 0; i < number; i++) {
        results.push({
            thoughtText: getRandomItem(thoughts),
            username: usernames[i],
            reactions: [...getRandomReactions(3)]
        });
    }
    return results;
};

const getRandomReactions = (number) => {
    let results = [];
    for (let i = 0; i < number; i++) {
        results.push({
            reactionBody: getRandomItem(reactions),
            username: getRandomUsername()
        });
    }
    return results;
};

export { usernames, getRandomUsername, getRandomThought };