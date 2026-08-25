export type FeatureIcon =
  | "biomes"
  | "structures"
  | "end"
  | "jobs"
  | "aircraft"
  | "trade"
  | "skins";

export interface ServerFeature {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
  href?: string;
  icon: FeatureIcon;
}

export const SERVER_FEATURES: ServerFeature[] = [
  {
    id: "biomes",
    title: "50+ Unique Biomes",
    description:
      "Explore lush forests, frozen tundras, and alien wastelands across 50+ hand-crafted biomes from Biomes O' Plenty.",
    href: "https://biomesoplenty.fandom.com/wiki/Biomes_List",
    icon: "biomes",
    imageAlt: "Lush green forest biome at sunset with glowing trees",
  },
  {
    id: "structures",
    title: "Beautiful Overworld Structures",
    description:
      "Discover massive dungeon systems and cozy taverns scattered across the landscape — from Dungeons and Taverns and Towns and Towers.",
    icon: "structures",
    imageAlt: "Stone dungeon entrance with torches and ivy on a hillside",
  },
  {
    id: "end-structures",
    title: "Amazing New End Structures",
    description:
      "The End dimension has been reimagined with towering void citadels, lost cities, and hidden vaults from Moog's End Structures.",
    icon: "end",
    imageAlt: "Massive obsidian tower floating in a purple void with glowing accents",
  },
  {
    id: "jobs",
    title: "Jobs Skills",
    description:
      "Pick your profession and earn while you play — Alchemist, Builder, Digger, Enchanter, Farmer, Fisherman, Hunter, Lumberjack, Miner, or Smith.",
    href: "https://daqem.com/projects/jobsplus",
    icon: "jobs",
    imageAlt: "Player mining ore deep underground with a pickaxe and floating XP orbs",
  },
  {
    id: "aircraft",
    title: "Aircraft Ready",
    description:
      "Build and fly custom biplanes, helicopters, and blimps from Immersive Aircraft — take to the skies above the basement.",
    href: "https://modrinth.com/mod/immersive-aircraft",
    icon: "aircraft",
    imageAlt: "Wooden biplane flying over a green landscape with floating islands",
  },
  {
    id: "trade-cycling",
    title: "Easy Villager Trade Cycling",
    description:
      "Click to cycle villager trades instantly — no need to break and replace the workstation. The Trade Cycling mod makes trading a breeze.",
    href: "https://modrinth.com/mod/trade-cycling",
    icon: "trade",
    imageAlt: "Player trading with a villager in a wooden market stall with emerald particles",
  },
  {
    id: "skins",
    title: "Custom Minecraft Skins",
    description:
      "Change your skin in-game with a quick command — no restart, no website visit. Just `/skin <name>` and you're someone new.",
    icon: "skins",
    imageAlt: "Three player characters with different custom skins standing at spawn",
  },
];
