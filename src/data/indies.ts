export interface Indie {
  name: string;
  /** Path under /public, e.g. '/IndieLogos/mystudio.png'. */
  logo: string;
  description: string;
  /** Optional studio / game website. */
  website?: string;
  /** Optional trailer link (YouTube, Vimeo, etc.). */
  trailer?: string;
}

// Registered indie developers & studios exhibiting at SGC 2027.
//
// To add one: drop the logo in `public/IndieLogos/` and add an entry below.
// `website` and `trailer` are optional — omit them if not available.
//
// TODO: replace the placeholder example below with real registered indies.
export const indies: Indie[] = [
  {
    name: 'Example Indie Studio',
    logo: '/IndieLogos/placeholder.svg',
    description:
      'A short description of the studio and the game(s) they are bringing to Slovenia Games Conference 2027. Replace this placeholder with a real registered indie.',
    website: 'https://example.com',
    trailer: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];
