// Kloe Gaye - CV tailored for marketing-manager roles (first used for a
// Sony Music Thailand application, Oct 2026). Hidden, unlinked, noindex.
//
// Same setup and layout as cv.jsx; only the wording and emphasis differ.
// Everything here is drawn from Kloe's main CV and the portfolio site, just
// framed around campaigns, audience growth, creative and partners.

import './ds/styles.css';
import './app.css';
import './cv.css';

const { Kicker, Button, Tag } = window.KloeGayeDesignSystem_152bdb;

const CONTAINER = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' };

const STRENGTHS = [
  ['Full campaign lifecycle', 'Positioning, audience definition, channel strategy, launch and post-campaign analysis, for an app, a global NGO and seven small-business clients.'],
  ['Identity, pillars and creative', 'Build a clear identity and core pillars, then the tools to match: video, artwork, ad assets and templates. Wrote the ICRC’s global social media brand guidelines.'],
  ['Data-driven optimisation', 'Read content and ad performance in-flight and move budget to what works. Multiple six figures (USD) in revenue from Meta Ads creative; 4,400+ purchases from Thai-language ads alone.'],
  ['Audience growth beyond core fans', 'Grew Ling’s main Instagram by 200% in market share organically, with localised campaigns for Thai, Tagalog, UK and Australian audiences.'],
  ['Team standards at scale', 'Lead and brief a team of creators across 6+ brand profiles and 8+ languages, with clear briefs and quality standards so output can grow without losing quality.'],
  ['The talent’s side', 'Podcast host on Spotify, published author and on-camera creator. I know first-hand what it takes for an artist to build an audience, and I love helping local talent do it.'],
];

const SKILLS = [
  ['Marketing strategy', ['Campaign planning', 'Audience growth', 'Brand identity and pillars', 'Creative direction', 'Launch planning', 'Budget allocation', 'Post-campaign analysis']],
  ['Leadership and partners', ['Team leadership', 'Briefing creators', 'Talent and client relationships', 'Staff training', 'Reporting to leadership']],
  ['Paid and performance', ['Meta Ads creative', 'Apple Search Ads', 'App Store Optimization', 'SEO and video SEO', 'Analytics and reporting']],
  ['Content', ['Short-form and long-form video', 'On-camera presenting', 'Scriptwriting', 'Video editing', 'Podcast production', 'UGC']],
  ['Channels', ['TikTok', 'Instagram', 'YouTube', 'Facebook', 'Threads', 'Spotify', 'LinkedIn']],
  ['Tools', ['Meta Ads Manager', 'Hootsuite', 'Vista Social', 'Amplitude', 'AppsFlyer', 'vidIQ', 'AppTweak', 'CapCut', 'Canva', 'Claude (AI-assisted workflows)']],
];

const EXPERIENCE = [
  {
    org: 'Ling', orgNote: 'Language-learning app',
    lede: 'Promoted twice in two years, from content creator to team lead.',
    roles: [
      { title: 'Social Media Team Lead, Organic Content', dates: 'March 2026 – Present', points: [
        'Own the organic marketing strategy across Facebook, Instagram, YouTube, Threads and Spotify, covering 6+ brand profiles, each with its own audience and identity.',
        'Lead and brief a team of three freelance creators, setting the direction and standards for everything they produce.',
        'Run the YouTube and Facebook channels end to end: content strategy, production, search optimization, analytics and reporting.',
        'Created and launched the Tagalog Tea Time podcast on Spotify, from concept and positioning to publishing.',
      ] },
      { title: 'Social Media Marketer & Junior ASO Specialist', dates: 'November 2024 – March 2026', points: [
        'Generated multiple six figures in revenue (USD) through Meta Ads creative: cut winning hooks across 8+ languages and moved spend to the best performers. The Native Thai ads alone drove 4,400+ purchases.',
        'Managed Ling’s main Instagram account (@ling_app) and grew it by 200% in market share through organic content.',
        'Localised the app’s store presence with custom listings for the UK and Australian markets, on iOS and Android.',
        'Managed Apple Search Ads campaigns for the UK and Australian markets.',
      ] },
      { title: 'Social Media Content Creator', dates: 'March 2024 – November 2024', points: [
        'Produced TikTok and Instagram videos to attract and engage the target audience.',
        'Built platform-specific strategies aligned with brand objectives, informed by trend and competitor research.',
        'Managed community engagement across comments, messages and mentions.',
      ] },
    ],
  },
  {
    org: 'International Committee of the Red Cross (ICRC)',
    roles: [
      { title: 'Social Media Officer', dates: 'November 2021 – November 2023', points: [
        'Planned, created and curated content for the ICRC’s global English-language social media pages.',
        'Led a team of creators producing content for the ICRC TikTok (@icrc) and YouTube channels.',
        'Spearheaded the rebrand of the global Instagram page (@icrc): wrote the ICRC’s social media branding guidelines and built reusable templates.',
        'Trained Global Communications staff in social media video and graphics.',
      ] },
    ],
  },
  {
    org: 'SME Growth Services',
    roles: [
      { title: 'Social Media Marketing Specialist', dates: 'November 2020 – November 2021', points: [
        'Day-to-day point person for seven Australian small and medium businesses, managing their Facebook and LinkedIn marketing and paid media.',
        'Grew company and client pages through content creation, paid media and engagement.',
        'Supported the Head of Marketing in implementing the marketing strategy.',
      ] },
    ],
  },
  {
    org: 'Freelance',
    roles: [
      { title: 'Social Media Manager', dates: '2020 – 2022', points: [
        'Planned and created Facebook and Instagram content for consumer brands in Singapore.',
      ] },
    ],
  },
  {
    org: 'CNN Philippines',
    roles: [
      { title: 'Trainee', dates: '2019', points: [
        'Researched and compiled business stories for the weekly program Business RoundUp, liaising with business analysts.',
        'Wrote short news stories and produced a broadcast package on the economic impact of global warming in the Philippines.',
      ] },
    ],
  },
];

function Header() {
  return (
    <header className="kgp-cv-noprint" style={{ borderBottom: '1px solid var(--divider)' }}>
      <div style={{ ...CONTAINER, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72, gap: 16 }}>
        <a href="/" className="kgp-navlink" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.02em', fontSize: 20, color: 'var(--text)', textDecoration: 'none' }}>
          Kloe&nbsp;<em style={{ fontStyle: 'italic', fontWeight: 500 }}>Gaye</em>
        </a>
        <span className="kgp-cv-headtag" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
          Curriculum&nbsp;Vitae
        </span>
        <Button variant="ghost" size="sm" arrow href="/">Portfolio</Button>
      </div>
    </header>
  );
}

function Block({ label, children }) {
  return (
    <section className="kgp-cv-block">
      <div className="kgp-cv-label"><Kicker>{label}</Kicker></div>
      <div>{children}</div>
    </section>
  );
}

function Points({ items }) {
  return <ul className="kgp-svc-wins kgp-cv-points">{items.map((p) => <li key={p}>{p}</li>)}</ul>;
}

function CV() {
  return (
    <React.Fragment>
      <Header />
      <main style={{ ...CONTAINER, maxWidth: 1080 }}>
        <div className="kgp-cv-top">
          <div>
            <Kicker rule>Marketing Manager / Campaigns, creative &amp; audience growth</Kicker>
            <h1 className="kgp-cv-name">Kloe <em>Gaye</em></h1>
          </div>
          <div className="kgp-cv-contact">
            <a href="mailto:kloegayem@gmail.com">kloegayem@gmail.com</a>
            <a href="https://www.linkedin.com/in/kloegaye/" target="_blank" rel="noopener noreferrer">linkedin.com/in/kloegaye</a>
            <a href="https://kloegaye.github.io/">kloegaye.github.io</a>
            <div className="kgp-cv-noprint" style={{ marginTop: 10 }}>
              <Button size="sm" variant="secondary" onClick={() => window.print()}>Save as PDF</Button>
            </div>
          </div>
        </div>

        <Block label="About me">
          <p className="kgp-cv-lede">
            Marketing and social media lead with 6 years of experience building audiences and running
            content-led campaigns for a fast-growing app (Ling), a global humanitarian organisation (ICRC)
            and agency clients in Australia and Singapore. I own campaigns end to end, from positioning and
            audience to launch and post-campaign analysis; lead and brief creative teams; and use platform
            data to sharpen what works while it&rsquo;s live. Generated multiple six figures (USD) in revenue
            through Meta Ads creative, grew Ling&rsquo;s main Instagram by 200% in market share, and wrote the
            ICRC&rsquo;s global social media brand guidelines. I know the streaming and short-form landscape
            from both sides: as a marketer, and as a creator myself (podcast host on Spotify, published author,
            on-camera talent). A relationship-driven team player who loves music and supporting local talent.
            Based in Chiang Mai, Thailand.
          </p>
        </Block>

        <Block label="What I bring">
          <div className="kgp-cv-strengths">
            {STRENGTHS.map(([t, d]) => (
              <div key={t}>
                <h3 className="kgp-cv-sublabel">{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block label="Experience">
          {EXPERIENCE.map((e) => (
            <div key={e.org} className="kgp-cv-org">
              <h2 className="kgp-cv-orgname">{e.org}{e.orgNote && <span> &middot; {e.orgNote}</span>}</h2>
              {e.lede && <p className="kgp-cv-orglede">{e.lede}</p>}
              {e.roles.map((r) => (
                <div key={r.title} className="kgp-cv-role">
                  <div className="kgp-cv-rolehead">
                    <h3>{r.title}</h3>
                    <span className="kgp-cv-dates">{r.dates}</span>
                  </div>
                  <Points items={r.points} />
                </div>
              ))}
            </div>
          ))}
        </Block>

        <Block label="Core skills">
          {SKILLS.map(([group, items]) => (
            <div key={group} className="kgp-cv-skill">
              <h3 className="kgp-cv-sublabel">{group}</h3>
              <div className="kgp-cv-tags">{items.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </div>
          ))}
        </Block>

        <Block label="Education">
          <div className="kgp-cv-rolehead">
            <h3>Bachelor of Communications, Major in Media Production</h3>
            <span className="kgp-cv-dates">Graduated 2020</span>
          </div>
          <p className="kgp-cv-orglede">Assumption College, San Lorenzo</p>
        </Block>

        <Block label="Languages">
          <div className="kgp-cv-tags">
            <Tag>English &middot; Native</Tag>
            <Tag>Tagalog &middot; Native</Tag>
            <Tag>Thai &middot; Basic</Tag>
          </div>
        </Block>

        <Block label="Creative projects">
          <div className="kgp-cv-role">
            <h3>UGC creator, @kloe.creates</h3>
            <p className="kgp-cv-orglede">On-camera content for brands.</p>
            <Points items={['Nomis: budget-tracking app', 'Monsoon Tea: forest-tea brand', 'Surviving Success: self-help book']} />
          </div>
          <div className="kgp-cv-role">
            <h3>Host, POLITIS podcast</h3>
            <p className="kgp-cv-orglede">The language of politics and the politics of language.</p>
          </div>
          <div className="kgp-cv-role">
            <h3>Author</h3>
            <Points items={['naked. (poems and prose)', 'when i knew it was over (novel)', 'Featured in Preview Magazine and Candy Magazine']} />
          </div>
          <div className="kgp-cv-role">
            <h3>Founder, The Foster Gays (2021)</h3>
            <p className="kgp-cv-orglede">Self-funded trap-neuter-foster-adopt organisation that has rehomed 11 cats.</p>
          </div>
        </Block>

        <Block label="References">
          <p className="kgp-cv-lede" style={{ margin: 0 }}>Upon request.</p>
        </Block>

        <div className="kgp-cv-end kgp-cv-noprint">
          <Button variant="secondary" arrow href="/">See my work</Button>
          <Button variant="ghost" arrow href="mailto:kloegayem@gmail.com">Get in touch</Button>
        </div>
      </main>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CV />);
