export type FaqIcon = "compass" | "wrench" | "shield" | "server";

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategoryData {
  id: string;
  category: string;
  icon: FaqIcon;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategoryData[] = [
  {
    id: "getting-started",
    category: "Getting started",
    icon: "compass",
    items: [
      {
        q: "Do I need the modpack to join?",
        a: "Yes. Basement Dwellers is a modded Fabric server, so connecting with vanilla Minecraft will fail or leave you missing most of the world. The fastest route is Path A on the Tutorial page — import our official .mrpack into Prism Launcher and every required mod lands in place automatically.",
      },
      {
        q: "Is the server Java or Bedrock?",
        a: "Java Edition only. We don't run Geyser or any Bedrock crossplay, so you'll need Minecraft: Java Edition tied to a Microsoft account.",
      },
      {
        q: "Can I use my own client or launcher?",
        a: "Any launcher works as long as the mod list matches ours — Prism Launcher is simply what we document. Performance tweakers and shader loaders are fine. What's not fine: X-ray, flight, or any cheat/utility client. That's an instant ban.",
      },
      {
        q: "Where do I get the pack?",
        a: "Right here on the site. The Tutorial page links the official BasementDweller-ModPack.mrpack for one-click importing, plus the complete mod list with exact download links if you'd rather assemble your instance by hand.",
      },
      {
        q: "It crashes on launch — what should I try first?",
        a: "Ninety percent of crashes come down to three things: the wrong Java version (modern Minecraft needs Java 21 — Prism can install it for you), a broken import (delete the instance and re-import a fresh .mrpack), or stray jars sitting in the mods folder (keep exactly one copy of each mod, no duplicates). Still stuck? Drop your latest log in the Discord and someone will dig in.",
      },
    ],
  },
  {
    id: "gameplay-mods",
    category: "Gameplay & mods",
    icon: "wrench",
    items: [
      {
        q: "What kind of server is this?",
        a: "Cozy, community-driven modded survival. We care about craftsmanship, exploration and good company more than efficiency — build something you're proud of, take a job with JobsPlus, take an Immersive Aircraft up for a spin, and don't treat the world like a spreadsheet.",
      },
      {
        q: "Which mods are actually required to connect?",
        a: "The standard set from the Tutorial page. The load-bearing ones are Fabric API, Biomes O' Plenty (plus TerraBlender), JobsPlus and the custom JAB/Rinku pair — and skipping even the small library mods (owo-lib, YAML Config, Architectury API, ItemRestriction, Arc Lib, UI Lib) will crash your game just as thoroughly.",
      },
      {
        q: "Can I stream or record on the server?",
        a: "Absolutely — streams and videos are welcome, and we're happy to shout them out on Discord. Just respect other players' privacy: ask before featuring someone's base up close, and keep personal details out of chat.",
      },
      {
        q: "Are the custom JAB and Rinku mods safe? Why aren't they on Modrinth?",
        a: "They're our own custom content, so they can't live on public repositories — MediaFire hosting is the workaround. They're required to play. Only ever grab them from the exact links on our Tutorial page; if you find them anywhere else, don't trust it.",
      },
      {
        q: "What happens when the modpack updates?",
        a: "Updates are announced on Discord with patch notes. Usually you delete your old instance and import the fresh .mrpack (about five minutes), or update individual mods through Prism if you went down the Path B route. Your single-player worlds are untouched either way.",
      },
    ],
  },
  {
    id: "rules-community",
    category: "Rules & community",
    icon: "shield",
    items: [
      {
        q: "What's the policy on griefing and theft?",
        a: "Zero tolerance. Taking so much as a block from someone else's build, raiding chests, or trashing terrain gets an instant ban — there's no warning ladder for this one. When in doubt, don't touch what isn't yours.",
      },
      {
        q: "What's expected in chat?",
        a: "Keep it friendly and civil: no slurs, harassment, spam or politics. Main chat is English so everyone can follow along, and light banter is fine — just read the room. If someone asks you to stop, stop.",
      },
      {
        q: "Is there an age requirement?",
        a: "No hard age gate, but we expect maturity. It's a small, cozy community, and younger players who can't keep things pleasant in chat will be asked to leave. Think of it as being a good guest in someone's basement.",
      },
      {
        q: "How do I report a player?",
        a: "Message a moderator or admin on Discord with names, screenshots or clips, and roughly when it happened. Don't retaliate in-game — evidence plus a calm report gets resolved far faster, and staff will handle it privately.",
      },
      {
        q: "Are there land claims or base protections?",
        a: "We lean on trust, active moderation and rollbacks rather than heavy claim plugins. Grief gets reverted and thieves get banned, so build freely — but do ask before settling right next to someone, and don't wall off resources everyone needs.",
      },
    ],
  },
  {
    id: "server-tech",
    category: "Server & tech",
    icon: "server",
    items: [
      {
        q: "Where is the live map?",
        a: "Our world is streamed live through BlueMap. Open the Blue Map page in the navigation (or the map link in the footer) to explore every rendered chunk from your browser — handy for planning routes or showing off your roofline.",
      },
      {
        q: "What's the server address?",
        a: "Multiplayer → Direct Connect, then paste in our address — there's a copyable field at the bottom of this page and in the site footer. If the server looks offline, check Discord first; announcements land there before anywhere else.",
      },
      {
        q: "Is there a whitelist? How do I get access?",
        a: "Access is sorted out through Discord — drop in, introduce yourself, and ask for access. An admin will get you added and can answer any setup questions while you're at it.",
      },
      {
        q: "Do you keep backups? Can griefing be rolled back?",
        a: "Yes — the world is backed up on a regular schedule, and staff can restore builds or regions from recent backups. Report damage as soon as you spot it; the fresher the incident, the cleaner the rollback.",
      },
    ],
  },
];
