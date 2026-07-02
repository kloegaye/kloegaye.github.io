// Kloe Gaye — UGC creator page entry.
//
// Separate, unlinked entry point (see ugc.html). Same global-bundle setup as
// main.jsx: React/ReactDOM and window.KloeGayeDesignSystem_152bdb are loaded as
// classic <script> tags before this module, so they're available as globals.
//
// Content is real: numbers are pulled from Kloe's Ling analytics (Q4 2025 UGC
// ad set, filtered to her own on-camera creatives) and her CV. The reel tiles
// play real creatives from public/reels/ (compressed from her Drive portfolio).

import './ds/styles.css';
import './app.css';
import './ugc.css';

const {
  Kicker, Badge, Button, SectionHeader, Tag,
  Stat, Quote, Avatar, Marquee, Card,
} = window.KloeGayeDesignSystem_152bdb;

const CONTAINER = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' };

/* ------------------------------------------------------------------ *
 * Header — minimal, links back to the main portfolio.
 * ------------------------------------------------------------------ */
function Header() {
  return (
    <header style={{ borderBottom: '1px solid var(--divider)' }}>
      <div style={{ ...CONTAINER, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <a href="/" className="kgp-navlink" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.02em', fontSize: 20, color: 'var(--text)', textDecoration: 'none' }}>
          Kloe&nbsp;Gaye
        </a>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
          UGC&nbsp;/&nbsp;Creator
        </span>
        <Button variant="ghost" size="sm" arrow href="mailto:kloegayem@gmail.com">Work with me</Button>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ *
 * Hero — positioning + the single strongest number.
 * ------------------------------------------------------------------ */
function Hero() {
  return (
    <section style={{ paddingTop: 'clamp(2.5rem,6vw,5rem)' }}>
      <div style={CONTAINER}>
        <div className="kgp-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.9fr', gap: 'clamp(2rem,5vw,5rem)', alignItems: 'center', paddingBottom: 'clamp(2rem,5vw,4.5rem)' }}>
          <div>
            <Kicker rule>UGC &middot; Short-form video that sells</Kicker>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 0.98, fontSize: 'clamp(3rem, 7vw, 6rem)', margin: '22px 0 0' }}>
              Ads that don&rsquo;t<br /><em style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--accent)' }}>feel</em> like ads.
            </h1>
            <p style={{ fontSize: 'clamp(1.05rem,1.5vw,1.25rem)', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '46ch', marginTop: 26 }}>
              I&rsquo;m Kloe, an on-camera UGC creator and content strategist. I write, shoot
              and edit native-feeling short-form video that stops the scroll and drives real
              purchases. Then I test my way to the winners.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 34, flexWrap: 'wrap' }}>
              <Button size="lg" arrow href="#reels">Watch the reels</Button>
              <Button variant="ghost" arrow href="#results">See the numbers</Button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 32 }}>
              <Badge variant="success" dot>Open to UGC briefs</Badge>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--text-faint)', textTransform: 'uppercase' }}>Chiang Mai, Thailand &middot; Remote</span>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'var(--surface-sunken)' }}>
              <img src="/images/ugc-hero.jpg" alt="Kloe Gaye on camera in a Ling UGC ad" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.02) contrast(1.02)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(37,28,30,0) 60%, rgba(37,28,30,0.25))' }} />
            </div>
            <div style={{ position: 'absolute', bottom: -18, left: -18, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '14px 18px', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 30, fontWeight: 600, lineHeight: 1, color: 'var(--text)' }}>$344K+</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>revenue driven &middot; Meta Ads</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)', padding: '20px 0' }}>
        <Marquee items={[
          <>Native-speaker <em>hooks</em></>, <>Before &amp; after</>, <>Competitor <em>switch</em></>,
          'App demos', 'Testimonials', <>Multilingual <em>UGC</em></>, 'Paid-ready edits',
        ]} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Trusted-by — one honest logo line.
 * ------------------------------------------------------------------ */
function TrustedBy() {
  return (
    <section style={{ paddingBlock: 'clamp(2rem,4vw,3rem)' }}>
      <div style={{ ...CONTAINER, display: 'flex', alignItems: 'center', gap: 'clamp(1.5rem,4vw,3rem)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Currently creating for</span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(1.5rem,3vw,2rem)', letterSpacing: '-0.02em', color: 'var(--text)' }}>Ling</span>
        <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>the language-learning app, 10M+ downloads</span>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Results — the numbers band (dark). Straight from the analytics.
 * ------------------------------------------------------------------ */
function Results() {
  return (
    <section id="results" style={{ background: 'var(--bg-invert)', color: 'var(--text-invert)' }}>
      <div style={CONTAINER}>
        <div style={{ paddingBlock: 'var(--section-y)' }}>
          <Kicker tone="invert" rule>The numbers</Kicker>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.14, fontSize: 'clamp(1.9rem, 4.2vw, 3.4rem)', maxWidth: '22ch', margin: '24px 0 0', color: 'var(--text-invert)', textWrap: 'balance' }}>
            I don&rsquo;t guess. I ship, <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>test</em>, and scale what converts.
          </p>
          <div className="kgp-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(1.5rem,3vw,3rem)', marginTop: 'clamp(2.5rem,5vw,4.5rem)', paddingTop: 'clamp(2rem,4vw,3rem)', borderTop: '1px solid var(--border-invert)' }}>
            <Stat tone="invert" value="$344" suffix="K+" label="Revenue driven via Meta Ads creatives" />
            <Stat tone="invert" value="300" suffix="%+" label="Peak ROAS on top-performing creatives" />
            <Stat tone="invert" value="1,267" label="App purchases from one quarter of UGC" />
            <Stat tone="invert" value="160" label="UGC creatives written, shot &amp; tested" />
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border-invert)', padding: '18px 0' }}>
        <Marquee tone="invert" reverse items={[
          'Thai', 'Tagalog', 'Khmer', 'Cebuano', 'Filipino', <>and <em>more</em></>, 'Native accents that convert',
        ]} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Reels — curated best work first (best-practice: hooks up top).
 * Real videos, compressed for web, in public/reels/. Click to play.
 * ------------------------------------------------------------------ */
// `stat` = ad-set performance where the creative maps to a concept in the
// Q4 2025 ROAS export (same figures as the case-study table below). Organic
// and ICRC tiles carry no revenue claim.
const REELS = [
  { slug: 'thai-native', platform: 'Meta Ads', duration: '0:49', stat: <>$20K+ revenue &middot; 742 purchases</>, title: <>&ldquo;A native Thai reacts to your accent&rdquo;</> },
  { slug: 'tagalog-native', platform: 'Meta Ads', duration: '0:38', stat: <>$7K revenue &middot; 252 purchases</>, title: <>The winning hook, cut for Tagalog</> },
  { slug: 'not-an-ai', platform: 'Meta Ads', duration: '0:34', stat: <>161 purchases</>, title: <>Real voices, not an AI</> },
  { slug: 'tagalog-beginner-expert', platform: 'Meta Ads', duration: '0:26', title: <>Beginner vs expert: Tagalog</> },
  { slug: 'tagalog-greetings', platform: 'Meta Ads', duration: '0:23', title: <>Tagalog greetings: formal vs casual</> },
  { slug: 'filipino-romantic-names', platform: 'TikTok', duration: '0:36', title: <>&ldquo;Mahal ko&rdquo; &amp; other pet names</> },
  { slug: 'tagalog-cebuano', platform: 'TikTok', duration: '0:20', title: <>Tagalog vs Cebuano: emotions</> },
  { slug: 'icrc-finger-down', platform: 'TikTok · ICRC', duration: '0:52', title: <>Put a finger down, conflict edition</> },
];

/*
 * Same look as the ds ReelCard (reuses its .kg-reel classes), but wraps a
 * real <video>: poster still, click/keyboard to toggle, one playing at a time.
 */
function VideoReel({ slug, platform, title, duration, stat }) {
  const ref = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      document.querySelectorAll('.kgp-reel-live video').forEach((o) => { if (o !== v) o.pause(); });
      v.play();
    } else {
      v.pause();
    }
  };

  return (
    <div
      className={`kg-reel kgp-reel-live${playing ? ' is-playing' : ''}`}
      role="button" tabIndex={0}
      aria-label={playing ? 'Pause video' : 'Play video'}
      onClick={toggle}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } }}
    >
      <video
        ref={ref}
        src={`/reels/${slug}.mp4`}
        poster={`/reels/${slug}.jpg`}
        preload="none" playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => { setPlaying(false); if (ref.current) ref.current.currentTime = 0; }}
      />
      <div className="kg-reel__scrim" />
      <div className="kg-reel__top">
        <span className="kg-reel__platform">{platform}</span>
      </div>
      <div className="kg-reel__play" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
      </div>
      <div className="kg-reel__bottom">
        <div className="kg-reel__title">{title}</div>
        <div className="kg-reel__stat">{stat ?? <><b>{duration}</b> &middot; sound on</>}</div>
      </div>
    </div>
  );
}

function Reels() {
  return (
    <section id="reels" style={{ paddingBlock: 'var(--section-y)' }}>
      <div style={CONTAINER}>
        <SectionHeader kicker="Selected reels" title={<>Scroll-stopping <em>UGC</em></>}
          lede="A curated set of the hooks and formats that performed best. Vertical, native, and built to be watched with the sound on."
          action={<Button variant="link" arrow href="mailto:kloegayem@gmail.com">Request full reel</Button>} />
        <div className="kgp-reel-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(1rem,2vw,1.75rem)', marginTop: 38 }}>
          {REELS.map((r) => (
            <VideoReel key={r.slug} {...r} />
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', color: 'var(--text-faint)', marginTop: 20, textTransform: 'uppercase' }}>
          A selection from 160+ creatives. Full library on request.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Case study — the flagship concept, with the real performance table.
 * ------------------------------------------------------------------ */
const CASE_ROWS = [
  { concept: 'Native Thai (flagship)', variants: '“A native reacts to your accent”, 8+ language cuts', revenue: '$20,776', purchases: '742', roas: '97%' },
  { concept: 'Native Thai × Tagalog', variants: 'Cross-language remix of the winning hook', revenue: '$7,056', purchases: '252', roas: '101%' },
  { concept: 'Leave Duolingo', variants: 'Competitor-switch narrative, AI iteration', revenue: '$4,508', purchases: '161', roas: '88%' },
  { concept: 'Native Thai EN-TH', variants: 'Tightest edit, best sustained ROAS', revenue: '$1,316', purchases: '47', roas: '124%' },
];

function CaseStudy() {
  return (
    <section style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}>
      <div style={CONTAINER}>
        <div className="kgp-services-grid" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'clamp(2rem,5vw,4rem)', paddingBlock: 'var(--section-y)', alignItems: 'start' }}>
          <div>
            <SectionHeader kicker="Case study" title={<>One hook, <em>tested</em> to scale</>}
              lede="The “native speaker reacts to your accent” concept became the account’s top earner. I cut it across 8+ languages and ad angles, then let spend follow the winners." />
            <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
              <Tag>Q4 2025</Tag>
              <Tag>Ling &middot; Meta Ads</Tag>
              <Tag>On-camera + edit</Tag>
            </div>
          </div>
          <Card tone="default" shadow style={{ overflow: 'hidden', padding: 0 }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="kgp-table">
                <thead>
                  <tr>
                    <th>Creative concept</th>
                    <th style={{ textAlign: 'right' }}>Revenue</th>
                    <th style={{ textAlign: 'right' }}>Purchases</th>
                    <th style={{ textAlign: 'right' }}>ROAS</th>
                  </tr>
                </thead>
                <tbody>
                  {CASE_ROWS.map((row) => (
                    <tr key={row.concept}>
                      <td>
                        <div style={{ fontWeight: 600, color: 'var(--text)' }}>{row.concept}</div>
                        <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 3 }}>{row.variants}</div>
                      </td>
                      <td style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', color: 'var(--text)' }}>{row.revenue}</td>
                      <td style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', color: 'var(--text)' }}>{row.purchases}</td>
                      <td style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontWeight: 600 }}>{row.roas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ padding: '14px 20px', borderTop: '1px solid var(--divider)', fontSize: 12.5, color: 'var(--text-muted)' }}>
              First-purchase revenue, Meta Ads, Q4 2025. Top deliveries peaked above 300% ROAS.
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Content types — the formats I make (derived from real creatives).
 * ------------------------------------------------------------------ */
const FORMATS = [
  { title: 'Native-speaker hooks', body: 'Authority-led openers, like “a native reacts to your accent,” that earn trust in the first second.' },
  { title: 'Before &amp; after', body: 'Transformation arcs that show the product working, from day one to fluent-enough-to-flex.' },
  { title: 'Competitor switch', body: '“Why I left [competitor]” narratives that reframe the category and win the comparison.' },
  { title: 'App &amp; product demos', body: 'Screen-in-hand walkthroughs and minigame clips that make the feature the hero.' },
  { title: 'Phrase &amp; testimonial', body: 'Quick-teach and word-of-mouth formats: the everyday UGC that feels like a friend’s rec.' },
  { title: 'Multilingual cuts', body: 'The same winning hook re-shot for Thai, Tagalog, Khmer, Cebuano, Filipino and more.' },
];

function Formats() {
  return (
    <section style={{ paddingBlock: 'var(--section-y)' }}>
      <div style={CONTAINER}>
        <SectionHeader kicker="What I make" title={<>Formats that <em>earn</em> the scroll</>}
          lede="Every brief gets the format that fits it. Scripted, shot-listed, shot and edited paid-ready." />
        <div className="kgp-format-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(1rem,2vw,1.5rem)', marginTop: 38 }}>
          {FORMATS.map((f, i) => (
            <Card key={f.title} tone="tint" hover style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)' }}>{String(i + 1).padStart(2, '0')}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, letterSpacing: '-0.01em', margin: 0 }} dangerouslySetInnerHTML={{ __html: f.title }} />
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }} dangerouslySetInnerHTML={{ __html: f.body }} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * About + testimonial.
 * ------------------------------------------------------------------ */
function About() {
  return (
    <section style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}>
      <div style={CONTAINER}>
        <div className="kgp-about-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(2rem,5vw,5rem)', alignItems: 'center', paddingBlock: 'var(--section-y)' }}>
          <div style={{ aspectRatio: '5/6', borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'var(--surface-sunken)' }}>
            <img src="/images/ugc-filming.jpg" alt="Kloe filming herself on a phone" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.02) contrast(1.02)' }} />
          </div>
          <div>
            <Kicker rule>About</Kicker>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.08, fontSize: 'clamp(2rem,3.6vw,3rem)', margin: '18px 0 0' }}>
              Creator <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>and</em> the strategist reading the dashboard.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 24, fontSize: 17, lineHeight: 1.65, color: 'var(--text-muted)', maxWidth: '52ch' }}>
              <p>I&rsquo;ve spent seven years in social, from the ICRC&rsquo;s global channels to
                start-up growth teams. Today I run YouTube and Meta content for Ling, a language app,
                and lead a small team of creators.</p>
              <p>What makes my UGC work: I&rsquo;m on camera <em>and</em> in the analytics. I know why a
                hook lands, what a good ROAS looks like, and how to iterate a concept until it scales.</p>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 26, flexWrap: 'wrap' }}>
              <Tag>7 yrs in social</Tag>
              <Tag>On-camera + editor</Tag>
              <Tag>Analytics-led</Tag>
              <Tag>Multilingual</Tag>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 920, margin: '0 auto', paddingBottom: 'var(--section-y)' }}>
          <Quote align="center" name="Shay Davidovich" role="Managed Kloe at the ICRC &middot; Strategic Communications Specialist"
            avatar={<Avatar name="Shay Davidovich" size="sm" />}>
            One of the most creative individuals I&rsquo;ve ever collaborated with. Her ability to
            generate <em>fresh and compelling content ideas</em> is truly exceptional&hellip; Kloe not
            only stays on top of things but excels, showcasing an impressive ability to swiftly
            conceive and execute ideas with efficiency.
          </Quote>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Contact CTA.
 * ------------------------------------------------------------------ */
function Contact() {
  return (
    <section style={{ paddingBlock: 'var(--section-y)' }}>
      <div style={{ ...CONTAINER, textAlign: 'center' }}>
        <Kicker rule>Let&rsquo;s work</Kicker>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05, fontSize: 'clamp(2.4rem,5vw,4rem)', margin: '20px 0 0' }}>
          Got a product that deserves<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>better</em> UGC?
        </h2>
        <p style={{ fontSize: 'clamp(1.05rem,1.5vw,1.2rem)', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '44ch', margin: '22px auto 0' }}>
          Send me the brief. I&rsquo;ll come back with hooks, formats and a shoot plan built to convert.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
          <Button size="lg" arrow href="mailto:kloegayem@gmail.com">kloegayem@gmail.com</Button>
          <Button variant="ghost" size="lg" arrow href="https://www.linkedin.com/in/kloegaye/">LinkedIn</Button>
        </div>
      </div>
    </section>
  );
}

function UGC() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <TrustedBy />
      <Results />
      <Reels />
      <CaseStudy />
      <Formats />
      <About />
      <Contact />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<UGC />);
