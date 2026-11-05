export interface TeamMember {
  name: string;
  /** Their role in organising SGC / in the Slovenia Games Association. */
  role: string;
  /** Path under /public, e.g. '/TeamPhotos/jane.jpg'. */
  photo: string;
  /** Optional short bio. */
  bio?: string;
  /** Optional LinkedIn (or other) profile link. */
  linkedin?: string;
}

// Members of the Slovenia Games Association who organise SGC 2027.
//
// To add a member: drop a square photo in public/TeamPhotos/ and add an entry
// below. `bio` and `linkedin` are optional.
//
// TODO: replace the placeholders with the real organising team.
export const team: TeamMember[] = [
  { name: 'Team Member', role: 'Conference Lead', photo: '/TeamPhotos/placeholder.svg' },
  { name: 'Team Member', role: 'Programme', photo: '/TeamPhotos/placeholder.svg' },
  { name: 'Team Member', role: 'Partnerships & Sponsors', photo: '/TeamPhotos/placeholder.svg' },
  { name: 'Team Member', role: 'Marketing & Communications', photo: '/TeamPhotos/placeholder.svg' },
  { name: 'Team Member', role: 'Logistics & Venue', photo: '/TeamPhotos/placeholder.svg' },
  { name: 'Team Member', role: 'Volunteer Coordinator', photo: '/TeamPhotos/placeholder.svg' },
];
