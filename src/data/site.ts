// Path of the landing page that hosts the #about / #speakers / #venue sections
// used by the floating SectionScrollNav.
//
// The nav pills on sub-pages (sponsors, speakers, invite, speaker detail) link
// to `${NAV_HOME_BASE}#about` etc. so they jump to those sections on the
// landing page.
//
// ⚠️ GO-LIVE: when the current `/backup` page replaces the homepage and is
// served from `/`, change this to '/'. That makes the links resolve to
// `/#about`, `/#speakers`, `/#venue`. Nothing else needs to change — the
// landing page itself renders <SectionScrollNav> with no `base`, so it keeps
// using bare same-page hashes for smooth scrolling.
export const NAV_HOME_BASE = '/backup';
