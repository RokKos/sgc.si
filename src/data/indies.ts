export interface Indie {
  /** Game title — shown as the card heading. */
  game: string;
  /** Studio / developer name. */
  studio: string;
  /** Country the studio is from. */
  country: string;
  /** Year, shown in the eyebrow line. Defaults to '2027' when omitted. */
  year?: string;
  /** Path under /public, e.g. '/IndieLogos/mygame.png'. */
  logo: string;
  description: string;
  /** Optional trailer link (YouTube, Vimeo, etc.) — shown as "Trailer →". */
  trailer?: string;
  /** Optional store / website link — shown as "Learn more →". */
  link?: string;
}

// Registered indie games & studios exhibiting at SGC 2027.
//
// To add one: drop the logo in `public/IndieLogos/` and add an entry below.
// `trailer` and `link` are optional — omit them if not available.
// Logos are placeholders until the real artwork is supplied.
export const indies: Indie[] = [
  {
    game: 'Pixel Art Academy',
    studio: 'Retronator',
    country: 'Slovenia',
    logo: '/IndieLogos/pixel-art-academy.png',
    description:
      'Learn how to draw pixel art with a video game! Start from zero and develop real art skills in a relaxing way. Complete interactive tutorials, draw pixel art sprites, and play the games you create. Everyone can do this!',
    trailer: 'https://www.youtube.com/watch?v=jsuzi_UXCMo',
    link: 'https://store.steampowered.com/app/2330360/Pixel_Art_Academy_Learn_Mode',
  },
  {
    game: 'Kagebunshin',
    studio: 'Mad Gear Games',
    country: 'Spain',
    logo: '/IndieLogos/kagebunshin.png',
    description:
      "Sora is a little red panda that's scared of everything, but thanks to their unique abilities, they can create shadow clones of themselves! Once they find out the kingdom is in danger, they don't hesitate to… stay at home drinking tea! And send some of their clones to help instead!",
    trailer: 'https://youtu.be/3Ls7Z0-M4MM',
    link: 'https://bsky.app/profile/madgeargames.bsky.social',
  },
  {
    game: 'Wild Terrain',
    studio: 'TigerDog Games',
    country: 'Slovenia',
    logo: '/IndieLogos/wild-terrain.webp',
    description:
      'Animal adventure where you play as a wild boar searching for your piglets.',
    trailer: 'https://www.youtube.com/watch?v=JC8PAkjIz9Y',
    link: 'https://store.steampowered.com/app/3301300/Wild_Terrain/',
  },
  {
    game: 'Crab Raid Tactics',
    studio: 'Ex Tenebris',
    country: 'Slovenia',
    logo: '/IndieLogos/crab-raid-tactics.png',
    description:
      'Imagine an MMO raid as a real-time strategy, where you are the Raid Leader and everyone is a crab! Command crustaceans in real-time tactical battles, help them combine their powers and manage their squabbles over loot just like in your favorite MMO — now as a roguelike dungeon crawl!',
    trailer: 'https://youtu.be/EDuZ5NYJU8M',
    link: 'https://store.steampowered.com/app/2374290/Crab_Raid_Tactics/',
  },
  {
    game: 'Poliklinika: Physician Simulator',
    studio: 'Pavel Shishkin',
    country: 'Italy',
    logo: '/IndieLogos/poliklinika.png',
    description:
      'A pixel-art simulation game where you work as an underpaid doctor in a district clinic. Every patient is a clinical case: order tests, prescribe, refer or refuse, while paying off a loan and dealing with an AI assistant that is sometimes confidently wrong.',
    trailer: 'https://www.youtube.com/watch?v=i8muEOIH-_c',
    link: 'https://store.steampowered.com/app/4548710',
  },
  {
    game: 'God of Stocks',
    studio: 'Obys Byte Games',
    country: 'Slovenia',
    logo: '/IndieLogos/god-of-stocks.webp',
    description:
      'An incremental management game about manipulating the market to get filthy rich. Buy low, sell high, chain absurd combos and earn divine blessings from stock market gods. Will you play it safe or risk everything?',
    trailer: 'https://www.youtube.com/watch?v=LJVmsc1i6hI',
    link: 'https://store.steampowered.com/app/4637090/God_of_Stocks/',
  },
];
