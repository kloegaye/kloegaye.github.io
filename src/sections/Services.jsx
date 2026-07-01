// Kloe Gaye portfolio — services (accordion)
const { SectionHeader, Accordion } = window.KloeGayeDesignSystem_152bdb;

const SERVICES = [
  { index: '01', title: 'Social media strategy', body: 'Channel plans, positioning, hooks and posting calendars, plus the weekly reporting that proves it&rsquo;s working.' },
  { index: '02', title: 'Short & long-form video', body: 'Reels, shorts and YouTube. Scripted, shot-listed, edited and scheduled: a steady drumbeat, not one-off hits.' },
  { index: '03', title: 'Podcast production', body: 'The whole show: guest booking, run-of-show, edit, publish and clips. It ships every week without you chasing it.' },
  { index: '04', title: 'Content calendars', body: 'One calendar across every channel, mapped to launches and goals, so nothing ships late or off-brand.' },
  { index: '05', title: 'Marketing data & analytics', body: 'Dashboards that track what matters: reach, saves, retention, conversion, and the read on what to do next.' },
  { index: '06', title: 'Teams & schedules', body: 'Hiring, training and managing freelancers and the production schedule, so the engine keeps running when you scale.' },
];

function Services() {
  return (
    <section id="services" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'clamp(2rem,5vw,5rem)', paddingBlock: 'var(--section-y)', alignItems: 'start' }} className="kgp-services-grid">
          <div style={{ position: 'sticky', top: 100 }}>
            <SectionHeader kicker="Services" title={<>What I <em>run</em></>}
              lede="One operator, the whole content function, from the strategy doc to the last published frame." />
          </div>
          <Accordion items={SERVICES} defaultOpen={0} />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services });
