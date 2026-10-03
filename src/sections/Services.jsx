// Kloe Gaye portfolio - services (accordion)
const { SectionHeader, Tag } = window.KloeGayeDesignSystem_152bdb;

// `wins` and `tools` come from Kloe's CV - keep them factual.
const SERVICES = [
  { index: '01', title: 'Social media strategy',
    body: 'Channel plans, positioning, hooks and posting calendars, plus the weekly reporting that proves it’s working.',
    wins: [
      'Own the organic strategy for Ling across Facebook, Instagram, YouTube, Threads and Spotify, covering 6+ brand profiles.',
      'Grew Ling’s main Instagram (@ling_app) by 150% through organic content.',
      'Wrote the ICRC’s global social media branding guidelines and led the redesign of its global Instagram (@icrc).',
      'Ran the social pages of seven Australian small and medium businesses on Facebook and LinkedIn.',
    ],
    tools: ['Hootsuite', 'Vista Social', 'Canva', 'Claude'] },
  { index: '02', title: 'Short & long-form video',
    body: 'Reels, shorts and YouTube. Scripted, shot-listed, edited and scheduled: a steady drumbeat, not one-off hits.',
    wins: [
      'Generated $344K+ in revenue from Meta Ads video creatives.',
      'Run Ling’s YouTube and Facebook channels end to end: strategy, production, video SEO and reporting.',
      'Led the creator team behind the ICRC’s TikTok (@icrc) and YouTube channels.',
      'On camera and behind it: presenting, scriptwriting and editing.',
    ],
    tools: ['CapCut', 'vidIQ', 'Canva'] },
  { index: '03', title: 'Podcast production',
    body: 'The whole show: guest booking, run-of-show, edit, publish and clips. It ships every week without you chasing it.',
    wins: [
      'Created and produce Ling’s Tagalog Tea Time podcast on Spotify, from concept to publishing.',
      'Host of POLITIS, a podcast on the language of politics and the politics of language.',
      'Broadcast training at CNN Philippines: researched, wrote and produced segments for Business RoundUp.',
    ],
    tools: ['Spotify', 'CapCut', 'Canva'] },
  { index: '04', title: 'Content calendars',
    body: 'One calendar across every channel, mapped to launches and goals, so nothing ships late or off-brand.',
    wins: [
      'Plan and schedule content for 6+ brand profiles across five platforms at Ling.',
      'Planned, created and curated content for the ICRC’s global English-language pages.',
      'Planned Facebook and Instagram content for consumer brands in Singapore.',
    ],
    tools: ['Hootsuite', 'Vista Social', 'Claude'] },
  { index: '05', title: 'Marketing data & analytics',
    body: 'Dashboards that track what matters: reach, saves, retention, conversion, and the read on what to do next.',
    wins: [
      'Ran App Store Optimization on iOS and Android, including custom store listings for the UK and Australia.',
      'Managed Apple Search Ads for the UK and Australian markets.',
      'Own analytics and reporting for Ling’s YouTube and Facebook channels.',
    ],
    tools: ['Amplitude', 'AppsFlyer', 'AppTweak', 'App Store Connect', 'Google Play Console', 'Apple Search Ads', 'vidIQ'] },
  { index: '06', title: 'Teams & schedules',
    body: 'Hiring, training and managing freelancers and the production schedule, so the engine keeps running when you scale.',
    wins: [
      'Promoted twice in two years at Ling, from content creator to team lead.',
      'Lead a team of three freelance creators producing content for every Ling profile.',
      'Trained the ICRC’s Global Communications staff in social media video and graphics.',
    ],
    tools: ['Vista Social', 'Hootsuite', 'Claude'] },
];

/*
 * Same look as the ds Accordion (reuses its .kg-acc classes), but the panel
 * animates real content height via the grid-template-rows 0fr/1fr technique.
 * The ds version tweens max-height to a fixed 320px, so switching items made
 * the section balloon and snap while empty space collapsed.
 */
function ServicesAccordion({ items }) {
  const [open, setOpen] = React.useState(0);
  return (
    <div className="kg-acc">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.index} className={`kg-acc__item${isOpen ? ' kg-acc__item--open' : ''}`}>
            <button className="kg-acc__head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
              <span className="kg-acc__ix">{it.index}</span>
              <span className="kg-acc__title">{it.title}</span>
              <span className="kg-acc__sign" />
            </button>
            <div className="kgp-acc-panel" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
              <div style={{ overflow: 'hidden', minHeight: 0 }}>
                <div className="kg-acc__panel-inner">
                  <div className="kg-acc__body">{it.body}</div>
                  <ul className="kgp-svc-wins">
                    {it.wins.map((w) => <li key={w}>{w}</li>)}
                  </ul>
                  <div className="kgp-svc-tools">
                    <span className="kgp-svc-label">Tools</span>
                    {it.tools.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Services() {
  return (
    <section id="services" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'clamp(2rem,5vw,5rem)', paddingBlock: 'var(--section-y)', alignItems: 'start' }} className="kgp-services-grid">
          <div style={{ position: 'sticky', top: 100 }}>
            <SectionHeader kicker="Services" title={<>What I <em>run</em></>}
              lede="I can fully operate as a team of one for the whole content function: from the strategy doc to the last published frame down to the performance tracking." />
          </div>
          <ServicesAccordion items={SERVICES} />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services });
