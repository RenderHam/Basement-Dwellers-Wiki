import { SITE } from "./site";

export interface HubStep {
  title: string;
  description: string;
}

export const HUB_STEPS: HubStep[] = [
  {
    title: "Install Prism Launcher",
    description:
      "Download Prism — a clean, lightweight launcher that manages modded instances for you.",
  },
  {
    title: "Get the modpack",
    description:
      "Import the official Basement Dwellers pack into Prism with a single pasted link.",
  },
  {
    title: "Connect & play",
    description:
      "Add the server IP, hit join, and climb down the ladder into the basement.",
  },
];

export interface HubRule {
  title: string;
  detail: string;
}

export const HUB_RULES: HubRule[] = [
  {
    title: "Respect builds — no griefing",
    detail:
      "If you didn't build it, don't break it. Always ask before touching someone else's work.",
  },
  {
    title: "No stealing",
    detail:
      "Chests, farms, materials — nothing leaves a base without the owner's blessing.",
  },
  {
    title: "No hacks or X-ray",
    detail:
      "Fair eyes only. Client-side utility mods need staff approval before you log in.",
  },
  {
    title: "Be decent in chat",
    detail:
      "Keep it kind and spam-free. Banter is welcome; harassment never is.",
  },
  {
    title: "No lag machines",
    detail:
      "Big redstone and mob farms are fine — until the tick rate begs for mercy. Build responsibly.",
  },
  {
    title: "Zero pay-to-win",
    detail:
      "Nothing that affects gameplay is for sale, ever. Donations cover cosmetics and hosting.",
  },
];

export type HubResourceId = "map" | "chat" | "cube" | "play";

export interface HubResource {
  icon: HubResourceId;
  title: string;
  description: string;
  href: string;
  external?: boolean;
}

export const HUB_RESOURCES: HubResource[] = [
  {
    icon: "map",
    title: "Live Blue Map",
    description:
      "Fly over the whole world in your browser — claims, roads, and mega-builds included.",
    href: SITE.blueMapUrl,
    external: true,
  },
  {
    icon: "chat",
    title: "Discord community",
    description:
      "Ask questions, show off builds, and hear about events before anyone else.",
    href: SITE.discordUrl,
    external: true,
  },
  {
    icon: "cube",
    title: "Mod list",
    description:
      "Every mod in the pack, with install steps in the tutorial.",
    href: "/tutorial",
  },
  {
    icon: "play",
    title: "Video setup guide",
    description:
      "Prefer to watch? A start-to-finish walkthrough of getting connected.",
    href: "https://www.youtube.com/watch?v=Jpe85Pu7LrU",
    external: true,
  },
];
