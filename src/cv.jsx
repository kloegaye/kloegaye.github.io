// Kloe Gaye - CV page entry.
//
// Same global-bundle setup as main.jsx: React/ReactDOM and
// window.KloeGayeDesignSystem_152bdb are loaded as classic <script> tags
// before this module. Content is Kloe's CV (Oct 2026). Her phone number is
// left off on purpose (public page); the "[Add a result]" placeholders in the
// source CV are omitted.

import './ds/styles.css';
import './app.css';
import './cv.css';

const { Kicker, Button, Tag } = window.KloeGayeDesignSystem_152bdb;

const CONTAINER = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' };

const SKILLS = [
  ['Strategy and leadership', ['Organic social strategy', 'Team leadership', 'Brand guidelines', 'Staff training', 'Analytics and reporting']],
  ['Channels', ['Instagram', 'YouTube', 'TikTok', 'Facebook', 'LinkedIn', 'Threads', 'Spotify']],
  ['Content', ['Short-form and long-form video', 'On-camera presenting', 'Scriptwriting', 'Video editing', 'Podcast production', 'UGC']],
  ['Growth and performance', ['Meta Ads creative', 'SEO and video SEO', 'App Store Optimization', 'App Store Connect', 'Google Play Console', 'Apple Search Ads']],
  ['Tools', ['Hootsuite', 'Vista Social', 'Amplitude', 'AppsFlyer', 'vidIQ', 'AppTweak', 'CapCut', 'Canva', 'Claude (AI-assisted workflows)']],
];

const EXPERIENCE = [
  {
    org: 'Ling', orgNote: 'Language-learning app',
    lede: 'Promoted twice in two years, from content creator to team lead.',
    roles: [
      { title: 'Social Media Team Lead, Organic Content', dates: 'March 2026 – Present', points: [
        'Own the organic strategy across Facebook, Instagram, YouTube, Threads and Spotify, covering 6+ brand profiles.',
        'Lead a team of three freelance creators producing content for all profiles.',
        'Run the YouTube and Facebook channels end to end: content strategy, production, search optimization, analytics and reporting.',
        'Created and produce the Tagalog Tea Time podcast on Spotify, from concept to publishing.',
      ] },
      { title: 'Social Media Marketer & Junior ASO Specialist', dates: 'November 2024 – March 2026', points: [
        'Generated multiple six-figures in revenue (in USD) through Meta Ads creatives.',
        'Managed Ling’s main Instagram account (@ling_app) and grew it by 150% through organic content.',
        'Managed App Store Optimization on iOS and Android, including custom store listings for the UK and Australian markets.',
        'Managed Apple Search Ads for the UK and Australian markets.',
      ] },
      { title: 'Social Media Content Creator', dates: 'March 2024 – November 2024', points: [
        'Produced TikTok and Instagram videos to attract and engage the target audience.',
        'Developed platform-specific strategies aligned with brand objectives, informed by trend and competitor research.',
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
        'Spearheaded the redesign of the global Instagram page (@icrc), writing the ICRC’s social media branding guidelines and building reusable templates.',
        'Trained Global Communications staff in social media video and graphics.',
      ] },
    ],
  },
  {
    org: 'SME Growth Services',
    roles: [
      { title: 'Social Media Marketing Specialist', dates: 'November 2020 – November 2021', points: [
        'Managed the social media pages of seven Australian small and medium businesses on Facebook and LinkedIn.',
        'Grew company and client pages through content creation, paid media and engagement.',
        'Supported the Head of Marketing in implementing the marketing strategy.',
      ] },
    ],
  },
  {
    org: 'Freelance',
    roles: [
      { title: 'Social Media Manager', dates: '2020 – 2022', points: [
        'Planned and created Facebook and Instagram content for business-to-consumer companies in Singapore.',
      ] },
    ],
  },
  {
    org: 'CNN Philippines',
    roles: [
      { title: 'Trainee', dates: '2019', points: [
        'Researched and compiled business stories for the weekly program Business RoundUp, liaising with business analysts.',
        'Wrote short news stories for the weekly episodes.',
        'Produced a broadcast package on the economic impact of global warming in the Philippines and wrote an online article on Manila’s ranking among the top cities for fintechs.',
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
            <Kicker rule>Social media marketer / Content creator</Kicker>
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
            Social media lead with 6 years of experience across a global humanitarian organisation (ICRC),
            a language-learning app start-up (Ling) and agency clients in Australia and Singapore. Promoted
            twice in two years at Ling, now leading organic strategy across five platforms and a team of three
            creators. Generated multiple six-figures in revenue (in USD) through Meta Ads creatives and wrote
            the ICRC&rsquo;s global social media branding guidelines. Works on camera and behind it, with
            hands-on skills in video, SEO, App Store Optimization and analytics.
          </p>
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

        <Block label="Projects & publications">
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
            <Points items={['naked. (poems and prose)', 'when i knew it was over (short stories)', 'Featured in Preview Magazine and Candy Magazine']} />
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
