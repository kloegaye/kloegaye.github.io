// Kloe Gaye portfolio - selected work grid with filters
const { SectionHeader, Tag, WorkCard, Button } = window.KloeGayeDesignSystem_152bdb;

// Real programs from Kloe's CV. The UGC card uses a real still from the
// program and links to the in-depth UGC page; external cards open the live
// channels she ran. Non-UGC images are placeholders until Kloe supplies stills.
const WORK = [
  {
    id: 1, cat: 'Video', image: '/images/work-ugc.jpg', category: 'UGC · Paid social', year: '2025–26',
    title: <>The UGC program that <em>converts</em></>, tags: ['Meta Ads', 'On-camera', '160 creatives'],
    href: '/ugc.html',
  },
  {
    id: 2, cat: 'Social', image: '/images/work-organic-heart.jpg', category: 'Organic social · Ling', year: '2024–26',
    title: <>+150% market share, all <em>organic</em></>, tags: ['Instagram', 'YouTube', 'Strategy'],
    href: 'https://www.instagram.com/ling_app/', external: true,
  },
  {
    id: 3, cat: 'Social', image: '/images/work-icrc-tiktok.jpg', category: 'Social · Nonprofit', year: '2021–23',
    title: <>The ICRC&rsquo;s global <em>TikTok</em> task force</>, tags: ['TikTok', 'Team training', 'Global campaigns'],
    href: 'https://www.tiktok.com/@icrc', external: true,
  },
  {
    id: 4, cat: 'ASO', image: '/images/work-aso.png', category: 'App Store Optimization · Ling', year: '2024–26',
    title: <>Two markets, <em>found</em> in the stores</>, tags: ['ASO', 'Apple Search Ads', 'UK & AU'],
    href: 'https://apps.apple.com/gb/app/language-learning-with-ling/id1403783779', external: true,
  },
  {
    id: 5, cat: 'Video', youtube: 'rjpmPK3ATEc', category: 'Podcast · Ling',
    title: <>Tagalog Tea Time, <em>produced</em> end to end</>, tags: ['Podcast', 'YouTube', 'Production'],
  },
];
const FILTERS = ['All', 'Social', 'Video', 'ASO'];

/* Same look as the ds WorkCard, but the thumbnail plays the YouTube video
 * in a lightbox on the page instead of linking away. */
function VideoWorkCard({ youtube, index, category, year, title, tags = [] }) {
  const [open, setOpen] = React.useState(false);
  const [thumb, setThumb] = React.useState(`https://i.ytimg.com/vi/${youtube}/maxresdefault.jpg`);
  const close = () => setOpen(false);
  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);
  return (
    <>
      <div className="kg-work kgp-work-video" role="button" tabIndex={0}
        aria-label="Play Tagalog Tea Time video"
        onClick={() => setOpen(true)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(true); } }}>
        <div className="kg-work__media">
          {index != null && <span className="kg-work__index">{index}</span>}
          {thumb && (
            <img src={thumb} alt="" loading="lazy"
              onLoad={(e) => { if (e.currentTarget.naturalWidth <= 120) setThumb(`https://i.ytimg.com/vi/${youtube}/hqdefault.jpg`); }}
              onError={() => setThumb((t) => (t.includes('maxres') ? `https://i.ytimg.com/vi/${youtube}/hqdefault.jpg` : null))} />
          )}
          <div className="kg-reel__play" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
        </div>
        {(category || year) && (
          <div className="kg-work__meta">
            {category && <span>{category}</span>}
            {category && year && <span style={{ color: 'var(--text-faint)' }}>/</span>}
            {year && <span style={{ color: 'var(--text-muted)' }}>{year}</span>}
          </div>
        )}
        <h3 className="kg-work__title">{title}</h3>
        {tags.length > 0 && (
          <div className="kg-work__tags">
            {tags.map((t) => <span key={t} className="kg-work__tag">{t}</span>)}
          </div>
        )}
      </div>
      {open && ReactDOM.createPortal(
        <div className="kgp-lightbox" role="dialog" aria-modal="true" aria-label="Tagalog Tea Time video" onClick={close}>
          <button type="button" className="kgp-lightbox__close" aria-label="Close video" onClick={close}>&times;</button>
          <div className="kgp-lightbox__frame" onClick={(e) => e.stopPropagation()}>
            <iframe src={`https://www.youtube-nocookie.com/embed/${youtube}?autoplay=1&rel=0`}
              title="Tagalog Tea Time on YouTube"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}

function WorkGrid() {
  const [f, setF] = React.useState('All');
  const shown = f === 'All' ? WORK : WORK.filter((w) => w.cat === f);
  return (
    <section id="work" style={{ paddingBlock: 'var(--section-y)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <SectionHeader kicker="Selected Work" title={<>Proof, not <em>promises</em></>}
          lede="A few programs I&rsquo;ve led end to end, from strategy through to the published, performing work."
          action={<Button variant="link" arrow href="/ugc.html">The UGC program in depth</Button>} />
        <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
          {FILTERS.map((x) => (
            <Tag key={x} active={f === x} onClick={() => setF(x)}>{x}</Tag>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 'clamp(1.25rem,2.5vw,2.25rem)', marginTop: 38 }} className="kgp-work-grid">
          {shown.map((w, i) => w.youtube ? (
            <VideoWorkCard key={w.id} youtube={w.youtube}
              index={String(i + 1).padStart(2, '0')} category={w.category} year={w.year}
              title={w.title} tags={w.tags} />
          ) : (
            <WorkCard key={w.id} image={w.image}
              index={String(i + 1).padStart(2, '0')} category={w.category} year={w.year}
              title={w.title} tags={w.tags} href={w.href}
              {...(w.external ? { target: '_blank', rel: 'noopener' } : {})} />
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WorkGrid });
