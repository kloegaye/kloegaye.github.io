// Kloe Gaye portfolio - highlighted UGC work (sits under the hero marquee)
const { SectionHeader, Button } = window.KloeGayeDesignSystem_152bdb;

// Videos play from Kloe's Google Drive (file must stay shared as "Anyone
// with the link"). `driveId: null` renders a "coming soon" placeholder tile.
const HIGHLIGHTS = [
  { brand: 'Monsoon Tea One Nimman', driveId: '182oi-TLCozQbuRjOBgb1OmZMYtTW4TzQ' },
  { brand: 'CHAAN Tea House', driveId: null },
  { brand: 'Cafe Slow Hoi An', driveId: null },
];

// Vertical (9:16) second row - shown on the UGC page under HIGHLIGHTS.
const VERTICALS = [
  { brand: 'Monsoon Tea One Nimman', driveId: '1g0T4SsKpj1UCFA7Xmpl_81t1lFraYd4D' },
  { brand: 'Ge Cafe Da Nang', driveId: null },
  { brand: 'Hello Cola', driveId: null },
  { brand: 'Monsoon Tea Jing Jai', driveId: '1uqrLVHI5pQ2Hbcu1ioP6YOg8NNc0yXnj' },
];

// UGC ads that earned 6-figure revenue. Tiles keep each video's own shape
// (read from the Drive thumbnail) instead of forcing 9:16.
const REVENUE_ADS = [
  { brand: 'UGC ad 1', driveId: '1w_zEibZ5wJhoW3zGJIWhmKxAFf9f39Fb' },
  { brand: 'UGC ad 2', driveId: '1OZGOSytlmbtSSg_q3ybA12vBHuudvNmj' },
  { brand: 'UGC ad 3', driveId: '1zQQ0EpAzYGqExW22Hp7JYx77ZEwxRpIT' },
  { brand: 'UGC ad 4', driveId: '1yWq_FH7YzBpKjloj8uKJvnfSyQkCHZQN' },
];

/*
 * Same look as the ds ReelCard (reuses its .kg-reel classes). Shows the Drive
 * thumbnail; on click swaps in Drive's embedded player.
 */
function HighlightReel({ brand, driveId, fit = false, showTitle = true }) {
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
      <div className="kg-reel__top"><span className="kg-reel__platform">UGC</span></div>
      <div className="kg-reel__play" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
      </div>
      <div className="kg-reel__bottom">
        {showTitle && <div className="kg-reel__title">{brand}</div>}
        <div className="kg-reel__stat">Tap to play &middot; sound on</div>
      </div>
    </div>
  );
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
        <SectionHeader kicker="UGC highlights" title={<>Capture your brand&rsquo;s <em>essence</em></>} />
        <div className="kgp-highlight-grid">
          {HIGHLIGHTS.map((h) => <HighlightReel key={h.brand} {...h} />)}
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
        <SectionHeader kicker="UGC highlights" title={<>Capture your brand&rsquo;s <em>essence</em></>} />
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
        <div className="kgp-highlight-row">
          {REVENUE_ADS.map((h) => <HighlightReel key={h.driveId} {...h} fit showTitle={false} />)}
        </div>
        <UgcProgramButton />
      </div>
    </section>
  );
}

Object.assign(window, { UgcHighlights, UgcAds, UgcEssence });
