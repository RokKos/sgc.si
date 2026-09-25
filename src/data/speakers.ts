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
  {
    name: 'Philip Tarpov',
    role: 'Cinematographer & Community Organizer',
    company: 'Sofia Game Jam',
    slug: 'philip-tarpov',
    image: '/speakers/Philip Tarpov.jpg',
    bioShort:
      'Cinematographer and game dev community organizer who spent eight years running Sofia Game Jam and watching hundreds of games get made.',
    bio:
      'Philip is a cinematographer and a game development community organizer from Bulgaria. He has shot two short films and worked as a cinematographer and editor on a range of film projects. For eight years, he was the head, mind, and soul behind Sofia Game Jam’s events, from hackathons and game art exhibitions to conferences and career fairs.\n\nNot a game developer himself, he has spent years around game jams, getting a close look at how teams form, ideas evolve, and games get made. Basically, he’s spent a lot of time watching people make games. Now he wants to talk about why some games never make it to the finish line, and what makes others succeed.',
    talkTitle: '100+ Games Later: Why Your Game Might Die Before You Make It',
    talkDescription:
      'After eight years of watching hundreds of games being made, Philip has seen a pattern: projects that stand out are rarely the ones with the most features. They’re often the ones with an unconventional idea, a focused scope, and a team that knows what it is actually trying to make.\n\nGame jams are one of the best places to learn how to make games. Instead of spending months alone at home trying to build your dream game, you can test an idea, make mistakes, get feedback, and discover what works. SUPERHOT, for example, started as a game jam prototype before growing into a full game.\n\nSo what can we learn from the strange little games that have come out of game jams in Sofia over the years? A 1980s spy thriller where the entire game is about listening in on rooms and waiting for a mafia deal to unfold. An FMV bar-management game with customers from all over the world, where you have to figure out what they want to drink despite language barriers and drunken rambling.\n\nThis talk explores what successful teams do differently, which mistakes can kill a project before it gets going, and why making a smaller game can give you room to make a bigger, stranger, more memorable idea.',
    location: 'Sofia, Bulgaria',
  },
  {
    name: 'Ian Stewart',
    role: 'Communications Director',
    company: 'Crinkle Cut Games',
    slug: 'ian-stewart',
    image: '/speakers/Ian Stewart.webp',
    bioShort:
      'Communications Director at Crinkle Cut Games (Discounty), specializing in engaging short-form video and social content for games.',
    bio:
      'Ian is the Communications Director for Crinkle Cut Games (Discounty) and specializes in creating engaging short-form video & social content for games. He has previously worked for Studio Fizbin, A MAZE. Festival, and Fein Games.',
    talkTitle: 'Why I Scrolled Past Your Post: Storytelling on Social Media',
    talkDescription:
      'Algorithmically-driven platforms dominate the social media landscape. With millions of people all vying for each other’s attention, what chance does a small indie developer have? Many people believe they need to become social media experts, learning everything about the algorithm, optimizing hashtags, or keeping up with all the viral trends — but in this talk I will demonstrate that the most important factor for succeeding on social media is, and will always be, authentic storytelling.',
    location: 'Munich, Germany',
  },
  {
    name: 'Fer Rodríguez Álvarez',
    role: 'Game Programmer',
    company: 'Kitty Powers’ Matchmaker Makeover',
    slug: 'fer-rodriguez-alvarez',
    image: '/speakers/FerRodriguezAlvarez.png',
    bioShort:
      'Game programmer and one of the developers behind indie hit ONE BTN BOSSES, currently working on live title Kitty Powers’ Matchmaker Makeover.',
    bio:
      'Fer Rodríguez is a game programmer graduated at ITU Copenhagen.\nHe was one of the programmers for the indie hit ONE BTN BOSSES and is currently a developer on the live title Kitty Powers’ Matchmaker Makeover.',
    talkTitle: 'One Button, Infinite Bosses: Roguelike Fight Generation on Rails',
    talkDescription:
      'In ONE BTN BOSSES, players only have one button to interact with the game. They can’t decide where to move, only how and when they do it.\n\nONE BTN BOSSES features a roguelike game mode where fights are randomly generated but still need to be fair and engaging for players with very little agency. In this talk, I will go through what challenges came up when procedurally generating fights, how we approached and iterated on them, and what went right and wrong.',
    location: 'Vigo, Spain',
  },
];

/** Total number of speaker cards to show (confirmed speakers + "coming soon" placeholders). */
export const totalSlots = 10;

/** How many empty placeholder cards to render so the grid always shows `totalSlots` cards. */
export const placeholderCount = Math.max(0, totalSlots - speakers.length);
