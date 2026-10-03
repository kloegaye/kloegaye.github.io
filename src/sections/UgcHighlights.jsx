// Kloe Gaye portfolio - highlighted UGC work (sits under the hero marquee)
const { SectionHeader } = window.KloeGayeDesignSystem_152bdb;

// Videos play from Kloe's Google Drive (file must stay shared as "Anyone
// with the link"). `driveId: null` renders a "coming soon" placeholder tile.
const HIGHLIGHTS = [
  { brand: 'Monsoon Tea One Nimman', driveId: '182oi-TLCozQbuRjOBgb1OmZMYtTW4TzQ' },
  { brand: 'CHAAN Tea House', driveId: null },
  { brand: 'Cafe Slow Hoi An', driveId: null },
];

/*
 * Same look as the ds ReelCard (reuses its .kg-reel classes). Shows the Drive
 * thumbnail; on click swaps in Drive's embedded player.
 */
function HighlightReel({ brand, driveId }) {
  const [open, setOpen] = React.useState(false);
  const [thumbOk, setThumbOk] = React.useState(true);

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
      <div className="kg-reel kgp-highlight">
        <iframe src={`https://drive.google.com/file/d/${driveId}/preview`} title={`${brand} UGC video`}
          allow="autoplay; fullscreen" allowFullScreen />
      </div>
    );
  }

  return (
    <div className="kg-reel kgp-highlight" role="button" tabIndex={0}
      aria-label={`Play ${brand} video`}
      onClick={() => setOpen(true)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(true); } }}>
      {thumbOk && (
        <img src={`https://drive.google.com/thumbnail?id=${driveId}&sz=w800`} alt="" loading="lazy"
          referrerPolicy="no-referrer" onError={() => setThumbOk(false)} />
      )}
      <div className="kg-reel__scrim" />
      <div className="kg-reel__top"><span className="kg-reel__platform">UGC</span></div>
      <div className="kg-reel__play" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
      </div>
      <div className="kg-reel__bottom">
        <div className="kg-reel__title">{brand}</div>
        <div className="kg-reel__stat">Tap to play &middot; sound on</div>
      </div>
    </div>
  );
}

function UgcHighlights() {
  return (
    <section id="ugc" style={{ paddingBlock: 'var(--section-y)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <SectionHeader kicker="UGC highlights" title={<>Capture your brand&rsquo;s <em>essence</em></>} />
        <div className="kgp-highlight-grid">
          {HIGHLIGHTS.map((h) => <HighlightReel key={h.brand} {...h} />)}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { UgcHighlights });
