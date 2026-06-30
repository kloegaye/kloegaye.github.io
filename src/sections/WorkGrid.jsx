// Kloe Gaye portfolio — selected work grid with filters
const { SectionHeader, Tag, WorkCard, Button } = window.KloeGayeDesignSystem_152bdb;

const WORK = [
  { id: 1, cat: 'Social', image: 'kgwork11', category: 'Social + Video', year: '2026', title: <>The launch that <em>landed</em></>, tags: ['Strategy', 'Reels', 'Paid'] },
  { id: 2, cat: 'Podcast', image: 'kgwork22', category: 'Podcast', year: '2025', title: <>A show people <em>finish</em></>, tags: ['Production', 'Booking', 'Clips'] },
  { id: 3, cat: 'Video', image: 'kgwork33', category: 'Long-form video', year: '2025', title: <>Founder series, <em>binged</em></>, tags: ['Script', 'Edit', 'YouTube'] },
  { id: 4, cat: 'Social', image: 'kgwork44', category: 'Social', year: '2024', title: <>From quiet to <em>sold out</em></>, tags: ['Calendar', 'Hooks', 'Analytics'] },
];
const FILTERS = ['All', 'Social', 'Video', 'Podcast'];

function WorkGrid() {
  const [f, setF] = React.useState('All');
  const shown = f === 'All' ? WORK : WORK.filter((w) => w.cat === f);
  return (
    <section id="work" style={{ paddingBlock: 'var(--section-y)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <SectionHeader kicker="Selected Work" title={<>Proof, not <em>promises</em></>}
          lede="A few programs I&rsquo;ve led end-to-end — strategy through to the published, performing work."
          action={<Button variant="link" arrow>All case studies</Button>} />
        <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
          {FILTERS.map((x) => (
            <Tag key={x} active={f === x} onClick={() => setF(x)}>{x}</Tag>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(1.5rem,3vw,3rem)', marginTop: 38 }} className="kgp-work-grid">
          {shown.map((w, i) => (
            <WorkCard key={w.id} image={`https://picsum.photos/seed/${w.image}/900/680`}
              index={String(i + 1).padStart(2, '0')} category={w.category} year={w.year}
              title={w.title} tags={w.tags} />
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WorkGrid });
