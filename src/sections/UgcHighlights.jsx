// Kloe Gaye portfolio - highlighted UGC work (sits under the hero marquee)
const { SectionHeader, Button } = window.KloeGayeDesignSystem_152bdb;

// Videos play from Kloe's Google Drive (file must stay shared as "Anyone
// with the link"). `driveId: null` renders a "coming soon" placeholder tile.
const HIGHLIGHTS = [
  { brand: 'Monsoon Tea One Nimman', driveId: '182oi-TLCozQbuRjOBgb1OmZMYtTW4TzQ' },
  { brand: 'CHAAN Tea House', driveId: '1-z3F8FojGD3TvIyg6SWkR9CWUWbBG87-' },
  { brand: 'Cafe Slow Hoi An', driveId: '1cpgf5vr1H9ZIl-xOTr8Un6r4I5JTY3T8' },
];

// Homepage version of HIGHLIGHTS (first tile uses a different video).
const HOME_HIGHLIGHTS = [
  { brand: 'Monsoon Tea One Nimman', driveId: '1fCOgfkBSJiw762m6yC3URBFlc53Y82I2' },
  ...HIGHLIGHTS.slice(1),
];

// Vertical (9:16) second row - shown on the UGC page under HIGHLIGHTS.
const VERTICALS = [
  { brand: 'Monsoon Tea One Nimman', driveId: '1g0T4SsKpj1UCFA7Xmpl_81t1lFraYd4D' },
  { brand: 'Ge Cafe Da Nang', driveId: '11XVChIDo8H5gWUBjpLOm94WupmpwqQLb' },
  { brand: 'Hello Cola', driveId: '1dpoYEWP7PHCrqIgNH9BrbVLwyYOUwqEh' },
  { brand: 'Monsoon Tea Jing Jai', driveId: '1uqrLVHI5pQ2Hbcu1ioP6YOg8NNc0yXnj' },
];


// ICRC TikToks (vertical) - "Capture your brand's message" section.
const ICRC_VIDEOS = [
  { brand: 'ICRC TikTok 1', driveId: '1nE6xl0PgYIBaGqWx4d0eAaHm_EKYDYCi' },
  { brand: 'ICRC TikTok 2', driveId: '1jlf6shWKsZZL4wKiMTlsQxaMHycm4dYs' },
  { brand: 'ICRC TikTok 3', driveId: '1mlEA66Ke_pRNG1Qx-453xbEIxiaJhMfG' },
  { brand: 'ICRC TikTok 4', driveId: '1spCNT0JO0YXvmuQK7qgoHPQklX6KOdX1' },
];

// Organic videos (vertical) - "Share your brand's message" section, UGC page.
const ORGANIC_VIDEOS = [
  { brand: 'Organic video 1', driveId: '1nE6xl0PgYIBaGqWx4d0eAaHm_EKYDYCi' },
  { brand: 'Organic video 2', driveId: '1zVOj8ULp9wCN4W7xSAsiUW4hvTtdpfYp' },
  { brand: 'Organic video 3', driveId: '1mlEA66Ke_pRNG1Qx-453xbEIxiaJhMfG' },
  { brand: 'Organic video 4', driveId: '1D6m3pEx_YaQhsKAFPkEScr7kzzjix0v3' },
  { brand: 'Organic video 5', driveId: '1spCNT0JO0YXvmuQK7qgoHPQklX6KOdX1' },
  { brand: 'Organic video 6', driveId: '1NENOmL0NkkrwQgHq7CUlqdBEuExXXn1y' },
  { brand: 'Organic video 7', driveId: '1xhd7BrkYQI7SPJvg7qHrPjKriSsGi7N2' },
  { brand: 'Organic video 8', driveId: '1fx46Do2pDACxcTTSSuDVA9Ust1fUVnQ9' },
];

/*
 * Same look as the ds ReelCard (reuses its .kg-reel classes). Shows the Drive
 * thumbnail; on click swaps in Drive's embedded player.
 */
function HighlightReel({ brand, driveId, fit = false, showTitle = true, platform = 'UGC', stat }) {
  const [open, setOpen] = React.useState(false);
  const [thumbOk, setThumbOk] = React.useState(true);
  const [ratio, setRatio] = React.useState(null);
  const fitStyle = fit && ratio ? { aspectRatio: `${ratio.w} / ${ratio.h}`, '--r': ratio.w / ratio.h } : undefined;
  const cls = `kg-reel kgp-highlight${fit ? ' kgp-highlight--fit' : ''}`;

  if (!driveId) {
    return (
      <div className="kg-reel kgp-highlight kgp-highlight--soon">
        <div className="kg-reel__top"><span className="kg-reel__platform">UGC</span></div>
        <div className="kg-reel__bottom">
          <div className="kg-reel__title">{brand}</div>
          <div className="kg-reel__stat">Coming soon</div>
        </div>
      </div>
    );
  }

  if (open) {
    return (
      <div className={cls} style={fitStyle}>
        <iframe src={`https://drive.google.com/file/d/${driveId}/preview`} title={`${brand} UGC video`}
          allow="autoplay; fullscreen" allowFullScreen />
      </div>
    );
  }

  return (
    <div className={cls} style={fitStyle} role="button" tabIndex={0}
      aria-label={`Play ${brand} video`}
      onClick={() => setOpen(true)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(true); } }}>
      {thumbOk && (
        <img src={`https://drive.google.com/thumbnail?id=${driveId}&sz=w800`} alt="" loading="lazy"
          referrerPolicy="no-referrer" onError={() => setThumbOk(false)}
          onLoad={(e) => { const { naturalWidth: w, naturalHeight: h } = e.currentTarget; if (w && h) setRatio({ w, h }); }} />
      )}
      <div className="kg-reel__scrim" />
      <div className="kg-reel__top"><span className="kg-reel__platform">{platform}</span></div>
      <div className="kg-reel__play" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
      </div>
      <div className="kg-reel__bottom">
        {showTitle && <div className="kg-reel__title">{brand}</div>}
        <div className="kg-reel__stat">{stat ?? <>Tap to play &middot; sound on</>}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * UGC ad reels - shared by the UGC page ("Scroll-stopping UGC", all of
 * them) and the home page ("Capture your brand's audience", top 4).
 * Local videos are compressed in public/reels/; Drive ones play embedded.
 * ------------------------------------------------------------------ */
// `stat` = ad-set performance where the creative maps to a concept in the
// Jan 2025 - Sep 2026 performance export (same de-identified figures as the case-study
// table below - exact revenue/ROAS withheld at the brand's request). Organic
// and ICRC tiles carry no revenue claim.
// Sorted by purchases (highest first); titles are "Language: hook".
// Drive tiles play from Kloe's Google Drive (must stay shared as "Anyone with the link").
const REELS = [
  { slug: 'not-an-ai', platform: 'Meta Ads', duration: '0:34', stat: <>Top seller &middot; 3,150+ purchases</>, title: <>English: &ldquo;I&rsquo;m not an AI&rdquo;</> },
  { slug: 'thai-native', platform: 'Meta Ads', duration: '0:49', stat: <>1,650+ purchases</>, title: <>Thai: a native reacts to your accent</> },
  { slug: 'tagalog-native', platform: 'Meta Ads', duration: '0:38', stat: <>1,550+ purchases</>, title: <>Tagalog: a native reacts to your accent</> },
  { slug: 'drive-3', platform: 'Meta Ads', driveId: '1y3hzQswvv-wlMaj-JWA4jSWLBwgnYFlG', stat: <>1,550+ purchases</>, title: 'Thai × Tagalog: native reaction remix' }, // Kloe_NativeThai_Tagalog_EN1
  { slug: 'drive-1', platform: 'Meta Ads', driveId: '1o67JmxUUMphhxTEUVgWecN7Gc-Evw3Fb', stat: <>1,100+ purchases</>, title: 'Tagalog: the basics' }, // Kloe_Script #1 - Basic
  { slug: 'tagalog-greetings', platform: 'Meta Ads', duration: '0:23', stat: <>750+ purchases</>, title: <>Tagalog: formal vs casual greetings</> },
  { slug: 'drive-2', platform: 'Meta Ads', driveId: '1-tuUNtnCw1icCsLY2IYs-9dq43p2QICV', stat: <>350+ purchases</>, title: 'Tagalog: more everyday basics' }, // Kloe_Script #26 - Basic
  { slug: 'tagalog-beginner-expert', platform: 'Meta Ads', duration: '0:26', title: <>Tagalog: beginner vs expert</> },
];

/*
 * Same look as the ds ReelCard (reuses its .kg-reel classes), but wraps a
 * real <video>: poster still, click/keyboard to toggle, one playing at a time.
 */
function VideoReel({ slug, platform, title, duration, stat }) {
  const ref = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      document.querySelectorAll('.kgp-reel-live video').forEach((o) => { if (o !== v) o.pause(); });
      v.play();
    } else {
      v.pause();
    }
  };

  return (
    <div
      className={`kg-reel kgp-reel-live${playing ? ' is-playing' : ''}`}
      role="button" tabIndex={0}
      aria-label={playing ? 'Pause video' : 'Play video'}
      onClick={toggle}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } }}
    >
      <video
        ref={ref}
        src={`/reels/${slug}.mp4`}
        poster={`/reels/${slug}.jpg`}
        preload="none" playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => { setPlaying(false); if (ref.current) ref.current.currentTime = 0; }}
      />
      <div className="kg-reel__scrim" />
      <div className="kg-reel__top">
        <span className="kg-reel__platform">{platform}</span>
      </div>
      <div className="kg-reel__play" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
      </div>
      <div className="kg-reel__bottom">
        <div className="kg-reel__title">{title}</div>
        <div className="kg-reel__stat">{stat ?? <><b>{duration}</b> &middot; sound on</>}</div>
      </div>
    </div>
  );
}

// Picks the right tile for a REELS entry (local video vs Drive embed).
function ReelTile(r) {
  return r.driveId
    ? <HighlightReel brand={r.title} platform={r.platform} driveId={r.driveId} stat={r.stat} />
    : <VideoReel {...r} />;
}

function UgcProgramButton() {
  return (
    <div style={{ marginTop: 32 }}>
      <Button arrow href="/ugc">The UGC program in depth</Button>
    </div>
  );
}

function UgcHighlights() {
  return (
    <section id="ugc" style={{ paddingBlock: 'var(--section-y)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <SectionHeader kicker="UGC highlights" title={<>Capture your brand&rsquo;s <em>essence</em></>}
          lede="Aesthetic, scroll-stopping UGC for cafés and lifestyle brands" />
        <div className="kgp-highlight-grid">
          {HOME_HIGHLIGHTS.map((h) => <HighlightReel key={h.brand} {...h} />)}
        </div>
        <UgcProgramButton />
      </div>
    </section>
  );
}

// UGC page version: same section plus a second row of vertical videos.
function UgcEssence() {
  return (
    <section id="ugc-highlights" style={{ paddingBlock: 'var(--section-y)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <SectionHeader kicker="UGC highlights" title={<>Capture your brand&rsquo;s <em>essence</em></>}
          lede="Aesthetic, scroll-stopping UGC for cafés and lifestyle brands" />
        <div className="kgp-highlight-grid">
          {HIGHLIGHTS.map((h) => <HighlightReel key={h.brand} {...h} />)}
        </div>
        <div className="kgp-highlight-grid kgp-highlight-grid--vertical">
          {VERTICALS.map((h) => <HighlightReel key={h.brand} {...h} />)}
        </div>
      </div>
    </section>
  );
}

// "Capture your brand's audience" - its own section (Services follows it).
function UgcAds() {
  return (
    <section id="ugc-ads" style={{ paddingBlock: 'var(--section-y)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <SectionHeader kicker="UGC ads" title={<>Capture your brand&rsquo;s <em>audience</em></>}
          lede="UGC ads that earned 6-figure revenue in USD" />
        <div className="kgp-highlight-grid kgp-highlight-grid--vertical">
          {REELS.slice(0, 4).map((r) => <ReelTile key={r.slug} {...r} />)}
        </div>
        <UgcProgramButton />
      </div>
    </section>
  );
}

// "Capture your brand's message" - ICRC TikTok work, under UgcAds.
function IcrcMessage() {
  return (
    <section id="icrc" style={{ paddingBlock: 'var(--section-y)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <SectionHeader kicker="International Committee of the Red Cross" title={<>Capture your brand&rsquo;s <em>message</em></>}
          lede="Educational and engaging organic short-form content" />
        <div className="kgp-highlight-grid kgp-highlight-grid--vertical">
          {ICRC_VIDEOS.map((h) => <HighlightReel key={h.driveId} {...h} platform="TikTok" showTitle={false} />)}
        </div>
        <div style={{ marginTop: 32 }}>
          <Button arrow href="https://www.tiktok.com/@icrc" target="_blank" rel="noopener noreferrer">See the ICRC on TikTok</Button>
        </div>
      </div>
    </section>
  );
}

// "Share your brand's message" - organic short-form work, UGC page.
function UgcMessage() {
  return (
    <section id="ugc-message" style={{ paddingBlock: 'var(--section-y)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <SectionHeader kicker="Organic content" title={<>Share your brand&rsquo;s <em>message</em></>}
          lede="Educational and engaging organic short-form content that informs, entertains and builds a community around your brand." />
        <div className="kgp-highlight-grid kgp-highlight-grid--vertical">
          {ORGANIC_VIDEOS.map((h) => <HighlightReel key={h.driveId} {...h} platform="Organic" showTitle={false} />)}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HighlightReel, UgcHighlights, UgcAds, UgcEssence, IcrcMessage, UgcMessage });

export { REELS, ReelTile };
