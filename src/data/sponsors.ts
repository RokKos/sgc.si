export type SponsorTier = 'General' | 'Platinum' | 'Gold' | 'Silver' | 'Bronze';

export interface Sponsor {
  name: string;
  tier: SponsorTier;
  logo: string;
  url: string;
  description: string;
}

// Tiers render top-to-bottom in this order. Only tiers with sponsors are shown.
export const tierOrder: SponsorTier[] = ['General', 'Platinum', 'Gold', 'Silver', 'Bronze'];

// TODO: descriptions and website URLs to be provided — fill in `description` and `url`.
export const sponsors: Sponsor[] = [
  {
    name: 'Guardiaris',
    tier: 'General',
    logo: '/SponsorLogos/GuardiarisLogo.png',
    url: 'https://www.guardiaris.com',
    description:
      'Guardiaris is a defense technology company that designs and manufactures advanced military training simulators built on proprietary LED technology and a scientific approach to training. With over 18 years on the market, they deliver customizable solutions for small arms, vehicles, anti-armor, and anti-aircraft systems, combining cutting-edge audio-visual technology and biometric analytics to enhance soldier readiness and combat effectiveness.',
  },
  {
    name: 'UL FRI — Faculty of Computer and Information Science',
    tier: 'Platinum',
    logo: '/SponsorLogos/UL_FRI_logoHOR-RGB_crna.png',
    url: 'https://www.fri.uni-lj.si/sl',
    description:
      'The Faculty of Computer and Information Science at the University of Ljubljana is Slovenia\'s leading educational and research institution for computer and information science. Founded in 1996, it educates undergraduate and graduate computer science experts while conducting research that tackles contemporary challenges. Through its academic programs, public events, and community outreach, the faculty plays a central role in advancing digital literacy and innovation across Slovenia.',
  },
];
