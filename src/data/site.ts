export const SITE = {
  name: "Basement Dwellers",
  tagline: "The best adventures start below the surface.",
  description:
    "A cozy, community-driven modded Minecraft server built around craftsmanship, exploration, and good company. Grab your pickaxe — the basement awaits.",
  serverIp: "basement.atbp.fun",
  blueMapUrl: "http://basement.atbp.fun:26122",
  discordUrl: "https://discord.gg/M3t4ttvFBe",
  githubUrl: "https://github.com/RenderHam/Basement-Dwellers-Wiki",
} as const;

export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/tutorial", label: "Tutorial" },
  { href: "/blue-map", label: "Blue Map" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];
