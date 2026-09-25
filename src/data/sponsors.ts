export type SponsorTier = 'General' | 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Venue';

export interface Sponsor {
  name: string;
  tier: SponsorTier;
  logo: string;
  url: string;
  description: string;
}

// Regular sponsorship tiers, rendered top-to-bottom in this order.
// 'Venue' is handled separately in its own special section, so it is not listed here.
export const tierOrder: SponsorTier[] = ['General', 'Platinum', 'Gold', 'Silver', 'Bronze'];

// TODO: descriptions and website URLs to be provided — fill in `description` and `url`.
export const sponsors: Sponsor[] = [
  {
    name: 'Guardiaris',
    tier: 'General',
    logo: '/SponsorLogos/GuardiarisLogo.png',
    url: 'https://www.guardiaris.com',
    description: `Guardiaris is the main sponsor of Slovenia Games Conference 2027.

Guardiaris develops end-to-end training simulators for land, air, and sea defence systems, powered by GUARD®, its own proprietary simulation engine. Today, Guardiaris is one of Europe's leading defence technology companies, with solutions deployed across 28+ markets worldwide.

It didn't start there. In 2010, Guardiaris was a game studio, building real-time engines and interactive graphics, including its own game, Prison Break. That work caught the attention of the defence sector, and a single simulator project turned a game studio into a company solving some of the hardest real-time and simulation challenges in the industry.

Today, Guardiaris is a tribe of 190+ engineers, programmers, and hardware specialists, spanning software development, 3D and simulation engineering, hardware integration, and systems design, all built around one core focus: realistic, science-based training that performs when it matters most.

As main sponsor of SGC 2027, Guardiaris is back in the industry where it all began, to meet the developers, engineers, and students who could be building the next generation of real-time technology alongside them.`,
  },
  {
    name: 'UL FRI — Faculty of Computer and Information Science',
    tier: 'Venue',
    logo: '/SponsorLogos/UL_FRI_logoHOR-RGB_crna.png',
    url: 'https://www.fri.uni-lj.si/sl',
    description:
      'The Faculty of Computer and Information Science at the University of Ljubljana is Slovenia\'s leading educational and research institution for computer and information science. Founded in 1996, it educates undergraduate and graduate computer science experts while conducting research that tackles contemporary challenges. Through its academic programs, public events, and community outreach, the faculty plays a central role in advancing digital literacy and innovation across Slovenia.',
  },
  {
    name: 'Triternion',
    tier: 'Platinum',
    logo: '/SponsorLogos/triternion-logo1.png',
    url: 'https://triternion.com',
    description:
      'Triternion is an independent game studio based in Ljubljana, Slovenia, best known for Mordhau, the acclaimed medieval multiplayer combat game. With a small, dedicated international team pushing the boundaries of what melee combat can feel like in games, Triternion continues to build on its reputation for polish and craftsmanship from right here in Slovenia.',
  },
];
