export interface Speaker {
  name: string;
  role: string;
  company: string;
  slug: string;
  /** Path under /public, e.g. '/speakers/name.jpg'. Omit to show an initials placeholder. */
  image?: string;
  /** Short teaser shown on preview cards. */
  bioShort: string;
  /** Full bio shown on the speaker detail page. */
  bio: string;
  /** Session kind — used as the label above the title. Defaults to 'Talk'. */
  sessionType?: 'Talk' | 'Workshop';
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
  {
    name: 'V Buckenham',
    role: 'Game Designer & Creative Technologist',
    company: 'Downpour',
    slug: 'v-buckenham',
    image: '/speakers/VBuckenham.jpg',
    bioShort:
      'Game designer, creative technologist, and potter — creator of Downpour and Cheap Bots, Done Quick!, with a special interest in games with a physical presence.',
    bio:
      'v is a practicing game designer, creative technologist, and potter. She is the creator of Downpour, an app that makes it easy to make hypertext collages on your phone, and she previously made Cheap Bots, Done Quick!, a platform that made it easy to make artistic Twitterbots with your browser. She has a special interest in making games with a physical presence, having worked on the digital-physical stacking game Beasts of Balance, as a lead game designer on location-aware games at Niantic, and on custard-punching game Punch The Custard. She’s also a keen potter, who has been recently focusing on porcelain jewellery.',
    sessionType: 'Workshop',
    talkTitle: 'Craft a game together with Downpour',
    talkDescription:
      'This is a casual session to make a game with Downpour! Use craft materials, collage, go take some photos around the venue — and then put it together into a videogame on your phone using Downpour, an approachable game making app (that I made). And then, using the power of hyperlinks, we will link them all together into a single game for everyone to play.',
    location: 'London, UK',
  },
  {
    name: 'Dragan Jerosimović',
    role: 'Game & Engine Developer',
    company: 'Ontomorphosis Interactive',
    slug: 'dragan-jerosimovic',
    image: '/speakers/DraganJerosimovic.jpg',
    bioShort:
      'Over 25 years building games and the technologies to make them — from MetaHuman Creator at 3Lateral/Epic Games to his new studio Ontomorphosis Interactive.',
    bio:
      'Dragan has over a quarter of century of professional experience in building games and technologies for making them, and almost decade and a half more prior to that as a hobbyist game developer, starting with 8-bit platforms in mid-80s. He has worked for 7 years on MetaHuman Creator and MetaHuman Animator at 3Lateral/Epic Games, now used by over a million of developers and filmmakers. Before that he worked at TabTale, LevelBit, Supersonic Parachute (part of Prelovac Media, later Devana Technologies). He was, for the first three years, the lead developer of Metamorf Studio, leading a team of developers through the process of designing and completing an entire network-enabled game engine from scratch, together with the world and visual script editors used for production of Genesis Rising: The Universal Crusade. He produced three experimental programming languages for making games, the last of which was used in production of a published game. He was a co-founder of an indie studio Emerging Dreams, and has recently founded Ontomorphosis Interactive in an attempt to solve the long standing problem of emergent interactive narrative.',
    talkTitle: 'The Anatomy of a Narrative Simulation',
    talkDescription:
      'Writing narratives for interactive environments poses unique challenges that linear media writers never encounter: interactivity introduces choice, which branches the narrative into different storylines at choice-making points. This leads to exponential growth of the number of story branches, which quickly becomes unmanageable for a human writer. Narrative designers and game developers have been struggling with this problem for almost half a century, coming up with solutions that were mostly patching and/or avoiding the core issue of interactive storytelling — the combinatorial explosion of possibilities introduced by interactivity.\n\nIn this talk, we will explain why the approaches the developers usually take for interactive storytelling rarely work well for them, and investigate what is required to solve the problem from a different angle, bottom-up and emergently, from the simulation to the story structure, weaving the story structure out of player’s choices dynamically, using the elements of classical drama applied to a new, interactive context.\n\nThis is NOT an LLM talk because LLMs haven’t (yet) achieved the level of coherency necessary for storytelling, but we will mention in what ways they can help once the main narrative structure is generated from the simulation using symbolic computations.',
    location: 'Novi Sad, Serbia',
  },
  {
    name: 'Aleksander Kauch',
    role: 'Technical Director',
    company: '11 bit studios',
    slug: 'aleksander-kauch',
    image: '/speakers/AleksanderKauch.jpg',
    bioShort:
      'Technical Director at 11 bit studios with 15+ years across This War of Mine, Frostpunk, and Frostpunk 2, now leading technology on Frostpunk 1886.',
    bio:
      'Aleksander Kauch is Technical Director at 11 bit studios, where he has spent over 15 years working on almost every major production, including the Anomaly series, This War of Mine, Frostpunk, and Frostpunk 2. Having served as Lead Programmer on Frostpunk and Senior Technology Lead on Frostpunk 2, he currently leads the technology team on Frostpunk 1886. His expertise spans programming, game architecture, technical leadership, and game production. Over the years, his focus has evolved from hands-on gameplay and tools programming to building technology, processes, and teams capable of delivering complex games. He regularly shares his experience with the game development community as an international conference speaker, academic tutor, and project mentor. Outside game development, he collects old video games and is an enthusiast of their history.',
    talkTitle: 'Vision in Game Development',
    talkDescription:
      'What is the vision for a game? Where does it come from? What are the first steps in going from an idea to a game? How can you maintain the vision throughout production? I will explain how 11 bit studios carries its vision for a game through the development process, beginning from the idea and its inspirations and ending with a game that delivers its vision through story, gameplay mechanics and narration.',
    location: 'Warsaw, Poland',
  },
  {
    name: 'Mark Loboda',
    role: 'Game Engine & Simulation Developer',
    company: 'Guardiaris',
    slug: 'mark-loboda',
    bioShort:
      'Game engine and simulation developer at Guardiaris, fascinated by physics, vehicle dynamics, and rendering natural phenomena like clouds.',
    bio:
      'Mark is a game engine and simulation developer at Guardiaris, working across engine architecture, physics simulation, and real-time rendering. He’s fascinated by all aspects of game engine and simulation development, particularly physics, vehicle dynamics, and rendering natural phenomena like clouds. He enjoys bringing together technical problem-solving, physical realism, and visual artistry to create virtual worlds that both behave and look convincing.',
    sessionType: 'Workshop',
    talkTitle: 'The Art of Raymarching',
    talkDescription:
      'In this hands-on workshop, we’ll explore the art of raymarching and use it to render volumetric phenomena in real time. Working with a minimal rendering framework and a preconfigured GPU shader pipeline, we’ll implement raymarching techniques, experiment with volumetric rendering, and bring effects such as clouds to life. We’ll explore the underlying rendering algorithms and see how they can be used to create rich, visually compelling volumetric effects in real time.',
    location: 'Domžale, Slovenia',
  },
];

/** Total number of speaker cards to show (confirmed speakers + "coming soon" placeholders). */
export const totalSlots = 10;

/** How many empty placeholder cards to render so the grid always shows `totalSlots` cards. */
export const placeholderCount = Math.max(0, totalSlots - speakers.length);
