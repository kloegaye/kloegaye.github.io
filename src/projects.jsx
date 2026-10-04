// Kloe Gaye - personal projects page entry.
//
// Same global-bundle setup as main.jsx: React/ReactDOM and
// window.KloeGayeDesignSystem_152bdb are loaded as classic <script> tags
// before this module. Spoken word pieces use Instagram's official embed
// (blockquote + embed.js), as do the advocacy posts; without the script they
// degrade to plain links.

import './ds/styles.css';
import './app.css';
import './projects.css';

const { SectionHeader, Button, Kicker } = window.KloeGayeDesignSystem_152bdb;

const CONTAINER = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' };

const BOOKS = [
  { title: 'naked.', subtitle: 'the ugly parts of you', kind: 'Poems and prose', cover: '/images/book-naked.jpg',
    blurb: 'My debut collection: poems, phone notes written in traffic and scribbles from the margins of school notebooks, charting a healing journey.' },
  { title: 'when i knew it was over', kind: 'Novel', cover: '/images/book-when-i-knew-it-was-over.jpg',
    blurb: 'My first novel, written, designed and published independently.' },
];

const FEATURES = [
  { outlet: 'Candy Magazine', year: '2021',
    title: 'This 22-year-old author published her own book, here’s how she did it',
    href: 'https://www.candymag.com/features/how-this-22-year-old-writer-published-her-own-book-a00306-20210820-lfrm' },
  { outlet: 'Preview Magazine', year: '2021',
    title: 'Here’s how this 22-year-old Filipina self-published her book',
    href: 'https://www.preview.ph/culture/naked-bunny-post-publishing-a00268-20210706-lfrm' },
];

const POEMS = [
  'https://www.instagram.com/p/DY8pXQexhVC/',
  'https://www.instagram.com/p/Dck22U2Rrpx/',
  'https://www.instagram.com/p/DUKVwjKEbcY/',
];

const ADVOCACY = [
  'https://www.instagram.com/p/Ddit_KmEvKg/',
  'https://www.instagram.com/p/DdEljvHEpfP/',
  'https://www.instagram.com/p/DbOHtYHkjsh/',
];

const SPOTIFY_URL = 'https://open.spotify.com/show/033LR0sDePGK4ooQQHcmMY';
const YOUTUBE_URL = 'https://youtube.com/playlist?list=PLYTiZTRo_jY4';

function Header() {
  return (
    <header style={{ borderBottom: '1px solid var(--divider)' }}>
      <div style={{ ...CONTAINER, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72, gap: 16 }}>
        <a href="/" className="kgp-navlink" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.02em', fontSize: 20, color: 'var(--text)', textDecoration: 'none' }}>
          Kloe&nbsp;<em style={{ fontStyle: 'italic', fontWeight: 500 }}>Gaye</em>
        </a>
        <span className="kgp-pj-headtag" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
          Personal&nbsp;projects
        </span>
        <Button variant="ghost" size="sm" arrow href="/">Portfolio</Button>
      </div>
    </header>
  );
}

function Section({ id, children }) {
  return (
    <section id={id} className="kgp-pj-section">
      <div style={CONTAINER}>{children}</div>
    </section>
  );
}

function InstagramEmbed({ url }) {
  return (
    <div className="kgp-pj-poem">
      <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14"
        style={{ margin: 0, width: '100%', minWidth: 0, maxWidth: '100%' }}>
        <a href={url} target="_blank" rel="noopener noreferrer">View on Instagram</a>
      </blockquote>
    </div>
  );
}

function loadScript(src) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement('script');
  s.src = src;
  s.async = true;
  document.body.appendChild(s);
}

function Projects() {
  React.useEffect(() => {
    if (window.instgrm) window.instgrm.Embeds.process();
    else loadScript('https://www.instagram.com/embed.js');
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <div style={CONTAINER}>
          <div className="kgp-pj-top">
            <Kicker rule>Outside the day job</Kicker>
            <h1 className="kgp-pj-title">Personal <em>projects</em></h1>
            <p className="kgp-pj-lede">
              The work I make for myself: books I wrote and published on my own, poems I perform,
              causes I speak up for, and a podcast I host.
            </p>
          </div>
        </div>

        <Section id="books">
          <SectionHeader kicker="Self-published works" title={<>Written, designed and <em>published</em> by me</>} />
          <div className="kgp-pj-books">
            {BOOKS.map((b) => (
              <article key={b.title} className="kgp-pj-book">
                <div className="kgp-pj-cover">
                  <img src={b.cover} alt={`Cover of ${b.title} by Kloe Gaye`} loading="lazy" width="440" height="690" />
                </div>
                <div>
                  <span className="kgp-pj-meta">{b.kind}</span>
                  <h3 className="kgp-pj-booktitle">{b.title}</h3>
                  {b.subtitle && <p className="kgp-pj-subtitle">{b.subtitle}</p>}
                  <p className="kgp-pj-text">{b.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="press">
          <SectionHeader kicker="Magazine features" title={<>As featured <em>in</em></>} />
          <div className="kgp-pj-press">
            {FEATURES.map((f) => (
              <a key={f.href} className="kgp-pj-feature" href={f.href} target="_blank" rel="noopener noreferrer">
                <span className="kgp-pj-meta">{f.outlet} &middot; {f.year}</span>
                <span className="kgp-pj-feature-title">&ldquo;{f.title}&rdquo;</span>
                <span className="kgp-pj-readlink">Read the feature <span aria-hidden="true">&rarr;</span></span>
              </a>
            ))}
          </div>
        </Section>

        <Section id="spoken-word">
          <SectionHeader kicker="Spoken word poetry" title={<>Poems, out <em>loud</em></>} />
          <div className="kgp-pj-poems">
            {POEMS.map((u) => <InstagramEmbed key={u} url={u} />)}
          </div>
        </Section>

        <Section id="advocacy">
          <SectionHeader kicker="Advocacy" title={<>Causes I speak <em>up</em> for</>} />
          <div className="kgp-pj-poems">
            {ADVOCACY.map((u) => <InstagramEmbed key={u} url={u} />)}
          </div>
        </Section>

        <Section id="podcast">
          <div className="kgp-podcast-grid" style={{
            display: 'grid', gridTemplateColumns: 'minmax(0, 320px) 1fr',
            gap: 'clamp(2rem,5vw,5rem)', alignItems: 'center',
          }}>
            <a className="kgp-podcast-cover" href={SPOTIFY_URL} target="_blank" rel="noopener"
              aria-label="Politis on Spotify">
              <img src="/images/politis-cover.jpg" alt="Politis podcast cover art" loading="lazy" />
            </a>
            <div>
              <SectionHeader kicker="The Podcast" title={<>My own show, <em>Politis</em></>}
                lede="The show where we talk about the language of politics and the politics of language. Booked, recorded, edited and shipped by me." />
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
                <Button variant="secondary" arrow href={SPOTIFY_URL} target="_blank" rel="noopener">
                  Listen on Spotify
                </Button>
                <Button variant="secondary" arrow href={YOUTUBE_URL} target="_blank" rel="noopener">
                  Watch on YouTube
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <div style={{ ...CONTAINER }} className="kgp-pj-end">
          <Button variant="secondary" arrow href="/">See my work</Button>
          <Button variant="ghost" arrow href="mailto:kloegayem@gmail.com">Get in touch</Button>
        </div>
      </main>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Projects />);
