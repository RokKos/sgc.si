export interface Speaker {
  name: string;
  role: string;
  company: string;
  slug: string;
  image: string;
  /** Short teaser shown on preview cards. */
  bioShort: string;
  /** Full bio shown on the speaker detail page. */
  bio: string;
  talkTitle?: string;
  talkDescription?: string;
  location?: string;
}

export const speakers: Speaker[] = [
  {
    name: 'Charlene Putney',
    role: 'Games Writer & Teacher',
    company: 'NEON AURELIUS',
    slug: 'charlene-putney',
    image: '/speakers/CharlenePutneyBioPic.jpg',
    bioShort:
      'Award-winning games writer and teacher whose credits include Divinity: Original Sin 2, Baldur’s Gate 3, NUTS, and Saltsea Chronicles.',
    bio:
      'Charlene Putney is an award-winning games writer and teacher. After working at Google and Facebook in management positions, she’s been writing for video games since 2013, including writing for Divinity: Original Sin 2, Baldur’s Gate 3, NUTS, and Saltsea Chronicles. These days, she is making games with her partner Martin Pichlmair as micro-studio NEON AURELIUS, including upcoming deckbuilder Sparrow Warfare. She has taught writing for games at Trinity College, DIT, ITU Copenhagen, KADK Copenhagen, and many conferences and events (including teaching quantum scientists at CERN about interactive fiction!).',
    talkTitle: 'Writing For Games: A Few Tricks To Catch Lightning',
    talkDescription:
      'With over a decade of experience writing for games, Charlene’s work has always been infused with a “genuine cosmic weirdness” (VICE review). In this talk, she will offer some tips, tricks, and rituals for writing soul into your games: from the professional to the downright bizarre. Grounded with real examples, quick-hit inspiration, practical techniques and audience participation, the hope is for each attendee to leave the session with at least one gotta-do-it-now idea liberated from their own subconscious.',
    location: 'Copenhagen, Denmark',
  },
  {
    name: 'Eris Desquilbet',
    role: 'Game Developer',
    company: 'Punkcake Délicieux',
    slug: 'eris-desquilbet',
    image: '/speakers/ErisDesquilbetPic.jpg',
    bioShort:
      'Game Developer at Punkcake Délicieux who sees video games as a powerful tool to convey ideas, change minds, and make the world a little better.',
    bio:
      'Passionate about video game making since they’re 11, Eris works today as a Game Developer at Punkcake Délicieux. In their opinion, as the biggest entertainment industry, video game is a powerful tool to convey ideas, change minds, and make the world a little better.',
    talkTitle: 'With great power comes great responsibility',
    talkDescription:
      'Let’s talk about why video games are political and why you should care!',
    location: 'Angoulême, France',
  },
];

/** Total number of speaker cards to show (confirmed speakers + "coming soon" placeholders). */
export const totalSlots = 10;

/** How many empty placeholder cards to render so the grid always shows `totalSlots` cards. */
export const placeholderCount = Math.max(0, totalSlots - speakers.length);
