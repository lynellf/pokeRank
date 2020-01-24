const ABILITIES_ADV = [
  "Air Lock",
  "Battle Armor",
  "Blaze",
  "Chlorophyll",
  "Clear Body",
  "Cloud Nine",
  "Drizzle",
  "Drought",
  "Flash Fire",
  "Flash Fire (activated)",
  "Forecast",
  "Guts",
  "Huge Power",
  "Hustle",
  "Hyper Cutter",
  "Intimidate",
  "Levitate",
  "Marvel Scale",
  "Overgrow",
  "Pure Power",
  "Rain Dish",
  "Sand Stream",
  "Sand Veil",
  "Shell Armor",
  "Soundproof",
  "Swarm",
  "Swift Swim",
  "Thick Fat",
  "Torrent",
  "Volt Absorb",
  "Water Absorb",
  "White Smoke",
  "Wonder Guard",
  "Pressure"
];

const ABILITIES_DPP = [
  "Adaptability",
  "Bad Dreams",
  "Download",
  "Dry Skin",
  "Filter",
  "Flower Gift",
  "Gluttony",
  "Heatproof",
  "Ice Body",
  "Iron Fist",
  "Klutz",
  "Magic Guard",
  "Mold Breaker",
  "Motor Drive",
  "Normalize",
  "Poison Heal",
  "Reckless",
  "Scrappy",
  "Simple",
  "Skill Link",
  "Slow Start",
  "Sniper",
  "Snow Cloak",
  "Snow Warning",
  "Solar Power",
  "Solid Rock",
  "Technician",
  "Tinted Lens",
  "Unaware"
];

const ABILITIES_BW = [
  "Analytic",
  "Contrary",
  "Defeatist",
  "Defiant",
  "Flare Boost",
  "Infiltrator",
  "Lightning Rod",
  "Multiscale",
  "Overcoat",
  "Sand Force",
  "Sand Rush",
  "Sap Sipper",
  "Sheer Force",
  "Storm Drain",
  "Teravolt",
  "Toxic Boost",
  "Turboblaze",
  "Unnerve"
];

const ABILITIES_XY = [
  "Aerilate",
  "Aura Break",
  "Bulletproof",
  "Dark Aura",
  "Delta Stream",
  "Desolate Land",
  "Fairy Aura",
  "Fur Coat",
  "Mega Launcher",
  "Parental Bond",
  "Pixilate",
  "Primordial Sea",
  "Protean",
  "Refrigerate",
  "Strong Jaw",
  "Tough Claws"
];

const ABILITIES_SM = [
  "Electric Surge",
  "Psychic Surge",
  "Grassy Surge",
  "Misty Surge",
  "Merciless",
  "Stakeout",
  "Water Bubble",
  "Steelworker",
  "Liquid Voice",
  "Galvanize",
  "Fluffy",
  "RKS System",
  "Shadow Shield",
  "Prism Armor",
  "Full Metal Body",
  "Slush Rush",
  "Surge Surfer",
  "Neuroforce",
  "Power Construct"
];

const ABILITIES_SS = [
  "Libero",
  "Ice Scales",
  "Power Spot",
  "Intrepid Sword",
  "Gorilla Tactics",
  "Punk Rock"
];

const redundancies = [
    "Adaptability",
    "Aftermath",
    "Analytic",
    "Anticipation",
    "Arena Trap",
    "Aroma Veil",
    "Ball Fetch",
    "Battery",
    "Battle Armor",
    "Berserk",
    "Big Pecks",
    "Blaze",
    "Bulletproof",
    "Cheek Pouch",
    "Chlorophyll",
    "Clear Body",
    "Cloud Nine",
    "Competitive",
    "Compoundeyes",
    "Contrary",
    "Corrosion",
    "Cotton Down",
    "Cursed Body",
    "Cute Charm",
    "Damp",
    "Dauntless Shield",
    "Defiant",
    "Disguise",
    "Drizzle",
    "Drought",
    "Dry Skin",
    "Early Bird",
    "Effect Spore",
    "Electric Surge",
    "Emergency Exit",
    "Filter",
    "Flame Body",
    "Flare Boost",
    "Flash Fire",
    "Flower Gift",
    "Fluffy",
    "Forewarn",
    "Friend Guard",
    "Frisk",
    "Full Metal Body",
    "Fur Coat",
    "Gluttony",
    "Gooey",
    "Gorilla Tactics",
    "Grassy Surge",
    "Gulp Missile",
    "Guts",
    "Harvest",
    "Healer",
    "Heatproof",
    "Heavy Metal",
    "Honey Gather",
    "Huge Power",
    "Hunger Switch",
    "Hustle",
    "Hydration",
    "Hyper Cutter",
    "Ice Body",
    "Ice Face",
    "Ice Scales",
    "Illuminate",
    "Immunity",
    "Imposter",
    "Infiltrator",
    "Innards Out",
    "Inner Focus",
    "Insomnia",
    "Intimidate",
    "Intrepid Sword",
    "Iron Barbs",
    "Iron Fist",
    "Justified",
    "Keen Eye",
    "Klutz",
    "Leaf Guard",
    "Levitate",
    "Libero",
    "Light Metal",
    "Lightning Rod",
    "Limber",
    "Liquid Voice",
    "Long Reach",
    "Magic Bounce",
    "Magic Guard",
    "Magnet Pull",
    "Marvel Scale",
    "Merciless",
    "Mimicry",
    "Minus",
    "Mirror Armor",
    "Misty Surge",
    "Mold Breaker",
    "Moody",
    "Moxie",
    "Mummy",
    "Natural Cure",
    "Neutralizing Gas",
    "No Guard",
    "Oblivious",
    "Overcoat",
    "Overgrow",
    "Own Tempo",
    "Pastel Veil",
    "Perish Body",
    "Pickpocket",
    "Pickup",
    "Pixilate",
    "Plus",
    "Poison Point",
    "Poison Touch",
    "Power Spot",
    "Prankster",
    "Pressure",
    "Prism Armor",
    "Propeller Tail",
    "Psychic Surge",
    "Punk Rock",
    "Queenly Majesty",
    "Quick Feet",
    "Rain Dish",
    "Rattled",
    "Receiver",
    "Reckless",
    "Regenerator",
    "Ripen",
    "Rivalry",
    "RKS System",
    "Rock Head",
    "Run Away",
    "Sand Force",
    "Sand Rush",
    "Sand Spit",
    "Sand Stream",
    "Sand Veil",
    "Sap Sipper",
    "Schooling",
    "Scrappy",
    "Screen Cleaner",
    "Serene Grace",
    "Shadow Shield",
    "Shadow Tag",
    "Shed Skin",
    "Sheer Force",
    "Shell Armor",
    "Shield Dust",
    "Simple",
    "Skill Link",
    "Slush Rush",
    "Sniper",
    "Snow Cloak",
    "Snow Warning",
    "Solar Power",
    "Solid Rock",
    "Soundproof",
    "Speed Boost",
    "Stakeout",
    "Stall",
    "Stalwart",
    "Stamina",
    "Stance Change",
    "Static",
    "Steadfast",
    "Steam Engine",
    "Steelworker",
    "Steely Spirit",
    "Stench",
    "Sticky Hold",
    "Storm Drain",
    "Strong Jaw",
    "Sturdy",
    "Suction Cups",
    "Super Luck",
    "Surge Surfer",
    "Swarm",
    "Sweet Veil",
    "Swift Swim",
    "Symbiosis",
    "Synchronize",
    "Tangled Feet",
    "Tangling Hair",
    "Technician",
    "Telepathy",
    "Teravolt",
    "Thick Fat",
    "Tinted Lens",
    "Torrent",
    "Tough Claws",
    "Trace",
    "Truant",
    "Turboblaze",
    "Unaware",
    "Unburden",
    "Unnerve",
    "Vital Spirit",
    "Volt Absorb",
    "Wandering Spirit",
    "Water Absorb",
    "Water Bubble",
    "Water Veil",
    "Weak Armor",
    "White Smoke",
    "Wimp Out",
    "Wonder Guard",
    "Wonder Skin",
    "Zen Mode",
  ]

const abilities = Array.from(
  new Set([
    ...ABILITIES_ADV,
    ...ABILITIES_DPP,
    ...ABILITIES_BW,
    ...ABILITIES_XY,
    ...ABILITIES_SM,
    ...ABILITIES_SS,
    ...redundancies
  ])
);

export default abilities