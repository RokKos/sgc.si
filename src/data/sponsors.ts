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
    description: '',
  },
  {
    name: 'UL FRI — Faculty of Computer and Information Science',
    tier: 'Platinum',
    logo: '/SponsorLogos/UL_FRI_logoHOR-RGB_crna.png',
    url: 'https://www.fri.uni-lj.si/sl',
    description: '',
  },
];
