// Kloe Gaye portfolio - selected work grid with filters
const { SectionHeader, Tag, WorkCard, Button } = window.KloeGayeDesignSystem_152bdb;

// Real programs from Kloe's CV. The UGC card uses a real still from the
// program and links to the in-depth UGC page; external cards open the live
// channels she ran. Non-UGC images are placeholders until Kloe supplies stills.
const WORK = [
  {
    id: 1, cat: 'Video', image: '/images/work-ugc.jpg', category: 'UGC · Paid social', year: '2025–26',
    title: <>The UGC program that <em>converts</em></>, tags: ['Meta Ads', 'On-camera', '170+ creatives'],
    href: '/ugc.html',
  },
  {
    id: 2, cat: 'Social', image: '/images/work-organic-heart.jpg', category: 'Organic social · Ling', year: '2024–26',
    title: <>+200% market share, all <em>organic</em></>, tags: ['Instagram', 'YouTube', 'Strategy'],
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
    title: <>Tagalog Tea Time, <em>produced</em> end to end</>,
    body: 'Ling’s podcast for Tagalog learners. I produce it from start to finish: planning each episode, recording, editing and publishing it to YouTube.',
    tags: ['Podcast', 'YouTube', 'Production'],
  },
];
const FILTERS = ['All', 'Social', 'Video', 'ASO'];

/* Wide feature row under the cards: the full 16:9 YouTube thumbnail with the
 * write-up beside it. Same ds WorkCard pieces; clicking the thumbnail swaps in
 * YouTube's player right there. */
function VideoFeature({ youtube, index, category, year, title, body, tags = [] }) {
  const [playing, setPlaying] = React.useState(false);
  const [thumb, setThumb] = React.useState(`https://i.ytimg.com/vi/${youtube}/maxresdefault.jpg`);
  const play = () => setPlaying(true);
  return (
    <div className="kg-work kgp-work-feature">
      <div className={`kg-work__media${playing ? ' is-playing' : ''}`}
        {...(playing ? {} : {
          role: 'button', tabIndex: 0, 'aria-label': 'Play Tagalog Tea Time video', onClick: play,
          onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); } },
        })}>
        {playing ? (
          <iframe src={`https://www.youtube-nocookie.com/embed/${youtube}?autoplay=1&rel=0`}
            title="Tagalog Tea Time on YouTube"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
        ) : (
          <>
            {index != null && <span className="kg-work__index">{index}</span>}
            {thumb && (
              <img src={thumb} alt="" loading="lazy"
                onLoad={(e) => { if (e.currentTarget.naturalWidth <= 120) setThumb(`https://i.ytimg.com/vi/${youtube}/hqdefault.jpg`); }}
                onError={() => setThumb((t) => (t.includes('maxres') ? `https://i.ytimg.com/vi/${youtube}/hqdefault.jpg` : null))} />
            )}
            <div className="kg-reel__play" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </>
        )}
      </div>
      <div className="kgp-work-feature__text">
        {(category || year) && (
          <div className="kg-work__meta">
            {category && <span>{category}</span>}
            {category && year && <span style={{ color: 'var(--text-faint)' }}>/</span>}
            {year && <span style={{ color: 'var(--text-muted)' }}>{year}</span>}
          </div>
        )}
        <h3 className="kg-work__title">{title}</h3>
        {body && <p className="kgp-work-feature__body">{body}</p>}
        {tags.length > 0 && (
          <div className="kg-work__tags">
            {tags.map((t) => <span key={t} className="kg-work__tag">{t}</span>)}
          </div>
        )}
        <div style={{ marginTop: 8 }}>
          <Button variant="link" arrow href={`https://www.youtube.com/watch?v=${youtube}`} target="_blank" rel="noopener">
            Watch on YouTube
          </Button>
        </div>
      </div>
    </div>
  );
}

function WorkGrid() {
  const [f, setF] = React.useState('All');
  const shown = f === 'All' ? WORK : WORK.filter((w) => w.cat === f);
  const cards = shown.filter((w) => !w.youtube);
  const features = shown.filter((w) => w.youtube);
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 'clamp(1.25rem,2.5vw,2.25rem)', marginTop: 38 }} className="kgp-work-grid">
          {cards.map((w, i) => (
            <WorkCard key={w.id} image={w.image}
              index={String(i + 1).padStart(2, '0')} category={w.category} year={w.year}
              title={w.title} tags={w.tags} href={w.href}
              {...(w.external ? { target: '_blank', rel: 'noopener' } : {})} />
          ))}
        </div>
        {features.map((w, i) => (
          <VideoFeature key={w.id} youtube={w.youtube}
            index={String(cards.length + i + 1).padStart(2, '0')} category={w.category} year={w.year}
            title={w.title} body={w.body} tags={w.tags} />
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { WorkGrid });
