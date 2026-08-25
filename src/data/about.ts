// Owner-editable content for the About page.
// All copy below is placeholder-flavored — rewrite freely; the page reads everything from here.

export const ABOUT_LEAD =
  "Basement Dwellers is a lightweight, carefully curated modpack server where building matters more than grinding. Whether you're automating your first machine, mapping out sprawling cave cities, or just hanging out by the furnace with friends, our community welcomes players who love to tinker, explore, and build together. With an always-on live map, fair rules, and zero pay-to-win nonsense, it's Minecraft the way it was meant to be played — just a little deeper underground.";

export type ValueIcon = "hammer" | "scale" | "wrench" | "users";

export interface AboutValue {
  icon: ValueIcon;
  title: string;
  description: string;
}

export const VALUES: AboutValue[] = [
  {
    icon: "hammer",
    title: "Building over grinding",
    description:
      "Progress here is measured in what you've made, not how many hours you've mined. Your time goes into creations, not chores.",
  },
  {
    icon: "scale",
    title: "Fair play, always",
    description:
      "Zero pay-to-win and nothing you can buy your way past. Every dweller digs with the same tools, under the same short list of rules.",
  },
  {
    icon: "wrench",
    title: "Crafted modpack",
    description:
      "Curated, lightweight and performance-friendly. Every mod earns its slot, so the pack loads fast and runs smoothly on modest machines.",
  },
  {
    icon: "users",
    title: "Good company",
    description:
      "A cozy community of tinkerers and explorers who trade builds, share tips, and wander the deep places together.",
  },
];

export const STORY_HEADING = {
  eyebrow: "The story",
  title: "From one basement to yours",
} as const;

export const STORY_PARAGRAPHS: string[] = [
  "Basement Dwellers began the way most good worlds do — a few friends, one modpack too many, and a server humming away in an actual basement. It was never meant to be more than a place to build silly things together after work.",
  "Friends invited friends, invitations turned into regulars, and eventually the basement ran out of floor space. Along the way we sanded the modpack down to what mattered: lightweight, curated, and kind to almost any computer.",
  "Today the hatch is open to anyone who plays fair and builds something they're proud of. The rules are short, the live map is always on, and the furnace by spawn is still warm.",
];

export interface CrewMember {
  name: string;
  handle: string;
  role: string;
  tag: string;
}

export const CREW: CrewMember[] = [
  { name: "Keyam", handle: "@keyam", role: "Owner", tag: "Owner" },
  { name: "ALovelyTrash", handle: "@alovelytrash", role: "Admin", tag: "Admin" },
  { name: "Hikari", handle: "@hikari", role: "Moderator", tag: "Mod" },
  { name: "", handle: "", role: "Moderator", tag: "Mod" },
];
