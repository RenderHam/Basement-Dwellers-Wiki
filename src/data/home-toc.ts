export interface TocEntry {
  href: string;
  name: string;
  description: string;
}

export const HOME_TOC: TocEntry[] = [
  {
    href: "/",
    name: "Home",
    description: "Overview and starting point for the wiki.",
  },
  {
    href: "/tutorial",
    name: "Tutorial",
    description: "Install the launcher, grab the modpack, connect and play.",
  },
  {
    href: "/blue-map",
    name: "Blue Map",
    description: "The live world map — explore every corner of the server.",
  },
  {
    href: "/faq",
    name: "FAQ",
    description: "Quick answers to the questions dwellers ask most.",
  },
  {
    href: "/about",
    name: "About",
    description: "Our story, values, and how the server is run.",
  },
  {
    href: "/tabs",
    name: "Tabs hub",
    description: "Getting started, rules, and resources on one screen.",
  },
];
