// Path of the landing page that hosts the #about / #speakers / #venue sections
// used by the floating SectionScrollNav.
//
// The nav pills on sub-pages (sponsors, speakers, invite, speaker detail) link
// to `${NAV_HOME_BASE}#about` etc. so they jump to those sections on the
// landing page.
//
// The landing page is served from `/`, so sub-page nav pills link to
// `/#about`, `/#speakers`, `/#venue`. The landing page itself renders
// <SectionScrollNav> with no `base`, so it uses bare same-page hashes for
// smooth scrolling.
export const NAV_HOME_BASE = '/';
