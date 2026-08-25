export type ModHost = "MODRINTH" | "MEDIAFIRE";

export interface ModEntry {
  name: string;
  url: string;
  host: ModHost;
  requires?: ModEntry[];
}

export type BadgeVariant = "amber" | "moss" | "neutral";

export interface InstallPath {
  id: string;
  title: string;
  badgeLabel: string;
  badgeVariant: BadgeVariant;
  intro: string[];
  actions: string[];
  outro?: string;
  mods?: ModEntry[];
}

export type StepBlock =
  | { kind: "text"; body: string }
  | { kind: "actions"; items: string[] }
  | { kind: "paths"; paths: InstallPath[] }
  | { kind: "server-address"; helper: string };

export interface TutorialStep {
  id: string;
  depth: string;
  title: string;
  blocks: StepBlock[];
}

export const VIDEO_WALKTHROUGH = {
  url: "https://www.youtube.com/watch?v=Jpe85Pu7LrU",
  title: "Prefer to watch?",
  description: "Follow along with the community's step-by-step video guide on YouTube.",
} as const;

export const TUTORIAL_STEPS: TutorialStep[] = [
  {
    id: "install-prism",
    depth: "Y 64",
    title: "Install Prism Launcher",
    blocks: [
      {
        kind: "text",
        body: "Basement Dwellers is a **Fabric** server, and [Prism Launcher](https://prismlauncher.org) is the friendliest way to run a modded instance — it handles game versions, Java, and mod folders for you.",
      },
      {
        kind: "actions",
        items: [
          "Download the installer for your operating system from [prismlauncher.org](https://prismlauncher.org) — Windows, macOS and Linux are all covered.",
          "Run the setup wizard: choose your **language**, then let Prism detect or install a suitable **Java version**.",
          "Log in with your **Microsoft / Minecraft account**.",
        ],
      },
    ],
  },
  {
    id: "choose-method",
    depth: "Y 32",
    title: "Choose your installation method",
    blocks: [
      {
        kind: "text",
        body: "Two ways to get the mods onto your machine. Most dwellers should take **Path A** — it's one download and always matches the server. **Path B** is for players who like to tinker.",
      },
      {
        kind: "paths",
        paths: [
          {
            id: "path-a",
            title: "Path A · Official pack",
            badgeLabel: "Recommended",
            badgeVariant: "amber",
            intro: [
              "One `.mrpack` file carries every server-standard mod at pinned versions — import it and you're done.",
            ],
            actions: [
              "Download **BasementDweller-ModPack.mrpack** from the [MediaFire mirror](https://www.mediafire.com/file/8s7p1l2rqa813mb/BasementDweller-ModPack.mrpack/file).",
              "In Prism, click **Add Instance** (top-left), then choose **Import from file** in the sidebar.",
              "Browse to the downloaded `.mrpack` and confirm with **OK**.",
            ],
            outro: "The instance auto-generates with all server-standard mods — skip ahead to Step 3.",
          },
          {
            id: "path-b",
            title: "Path B · Custom build (Fabric)",
            badgeLabel: "Advanced",
            badgeVariant: "neutral",
            intro: [
              "Assemble the instance by hand. Same destination, more scenery — pick this if you want full control over your mods folder.",
            ],
            actions: [
              "Click **Add Instance** in Prism, select the **Fabric** loader with the correct Minecraft version, and name it — e.g. “Basement Dwellers”.",
              "Install the public mods below via Prism's built-in downloader (**Edit instance → Mods tab → Download mods**) or drag in jars you've downloaded in your browser.",
              "Grab the two **custom MediaFire mods** (not on public repositories) and drop their jars into the instance's `mods` folder — open it via the instance's **Folder button → mods**.",
            ],
            mods: [
              {
                name: "Fabric API",
                url: "https://modrinth.com/mod/fabric-api",
                host: "MODRINTH",
              },
              {
                name: "Immersive Aircraft",
                url: "https://modrinth.com/mod/immersive-aircraft",
                host: "MODRINTH",
              },
              {
                name: "Biomes O' Plenty",
                url: "https://modrinth.com/mod/biomes-o-plenty",
                host: "MODRINTH",
                requires: [
                  { name: "TerraBlender", url: "https://modrinth.com/mod/terrablender", host: "MODRINTH" },
                ],
              },
              {
                name: "VinURL",
                url: "https://modrinth.com/mod/vinurl",
                host: "MODRINTH",
                requires: [{ name: "owo-lib", url: "https://modrinth.com/mod/owo-lib", host: "MODRINTH" }],
              },
              {
                name: "JobsPlus",
                url: "https://modrinth.com/mod/jobsplus",
                host: "MODRINTH",
                requires: [
                  { name: "YAML Config", url: "https://modrinth.com/mod/yaml-config", host: "MODRINTH" },
                  { name: "Architectury API", url: "https://modrinth.com/mod/architectury-api", host: "MODRINTH" },
                  { name: "ItemRestriction", url: "https://modrinth.com/mod/item-restrictions", host: "MODRINTH" },
                  { name: "Arc Lib", url: "https://modrinth.com/mod/arc", host: "MODRINTH" },
                  { name: "UI Lib", url: "https://modrinth.com/mod/ui-lib", host: "MODRINTH" },
                ],
              },
              {
                name: "JAB Mod",
                url: "https://www.mediafire.com/file/x5j47xyqksdtmxk/jab-mod-1.0.0.jar/file",
                host: "MEDIAFIRE",
                requires: [
                  {
                    name: "Rinku",
                    url: "https://www.mediafire.com/file/ox8e4rkopftxroq/rinku_fabric_3.0.1_MC_1.21.11.jar/file",
                    host: "MEDIAFIRE",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "launch-and-play",
    depth: "Y 0",
    title: "Launch and play",
    blocks: [
      {
        kind: "text",
        body: "The pack is in. Close any open explorer windows, take a breath, and light the lantern.",
      },
      {
        kind: "actions",
        items: [
          "Close any leftover file windows, then **double-click the instance** in Prism to launch Minecraft.",
          "Once the game loads, open the **Mods menu** and check that everything shows green and loaded.",
          "Join the server — Multiplayer → **Direct Connect** — using the address below.",
        ],
      },
      {
        kind: "server-address",
        helper: "Paste this into Multiplayer → Direct Connect (or save it as a server). See you in the basement.",
      },
    ],
  },
];
