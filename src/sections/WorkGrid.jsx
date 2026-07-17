// Kloe Gaye portfolio - selected work grid with filters
const { SectionHeader, Tag, WorkCard, Button } = window.KloeGayeDesignSystem_152bdb;

// Real programs from Kloe's CV. The UGC card uses a real still from the
// program and links to the in-depth UGC page; external cards open the live
// channels she ran. Non-UGC images are placeholders until Kloe supplies stills.
const WORK = [
  {
    id: 1, cat: 'Video', image: '/reels/thai-native.jpg', category: 'UGC · Paid social', year: '2025–26',
    title: <>The UGC program that <em>converts</em></>, tags: ['Meta Ads', 'On-camera', '160 creatives'],
    href: '/ugc.html',
  },
  {
    id: 2, cat: 'Social', image: '/images/work-organic.jpg', category: 'Organic social · Ling', year: '2024–26',
    title: <>+150% market share, all <em>organic</em></>, tags: ['Instagram', 'YouTube', 'Strategy'],
    href: 'https://www.instagram.com/ling_app/', external: true,
  },
  {
    id: 3, cat: 'Social', image: '/images/work-icrc.jpg', category: 'Social · Nonprofit', year: '2021–23',
    title: <>The ICRC&rsquo;s global <em>TikTok</em> task force</>, tags: ['TikTok', 'Team training', 'Global campaigns'],
    href: 'https://www.tiktok.com/@icrc', external: true,
  },
  {
    id: 4, cat: 'ASO', image: '/images/work-aso.png', category: 'App Store Optimization · Ling', year: '2024–26',
    title: <>Two markets, <em>found</em> in the stores</>, tags: ['ASO', 'Apple Search Ads', 'UK & AU'],
    href: 'https://apps.apple.com/gb/app/language-learning-with-ling/id1403783779', external: true,
  },
];
const FILTERS = ['All', 'Social', 'Video', 'ASO'];

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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(1.5rem,3vw,3rem)', marginTop: 38 }} className="kgp-work-grid">
          {shown.map((w, i) => (
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
