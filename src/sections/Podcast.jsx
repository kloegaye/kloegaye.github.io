// Kloe Gaye portfolio - Politis podcast feature band
const { SectionHeader, Button } = window.KloeGayeDesignSystem_152bdb;

const SPOTIFY_URL = 'https://open.spotify.com/show/033LR0sDePGK4ooQQHcmMY';

function Podcast() {
  return (
    <section id="podcast" style={{ borderTop: '1px solid var(--divider)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div className="kgp-podcast-grid" style={{
          display: 'grid', gridTemplateColumns: 'minmax(0, 320px) 1fr',
          gap: 'clamp(2rem,5vw,5rem)', alignItems: 'center', paddingBlock: 'var(--section-y)',
        }}>
          <a className="kgp-podcast-cover" href={SPOTIFY_URL} target="_blank" rel="noopener"
            aria-label="Politis on Spotify">
            <img src="/images/politis-cover.jpg" alt="Politis podcast cover art" loading="lazy" />
          </a>
          <div>
            <SectionHeader kicker="The Podcast" title={<>My own show, <em>Politis</em></>}
              lede="The show where we talk about the language of politics and the politics of language. Booked, recorded, edited and shipped by me — the same engine I run for clients." />
            <div style={{ marginTop: 32 }}>
              <Button variant="secondary" arrow href={SPOTIFY_URL} target="_blank" rel="noopener">
                Listen on Spotify
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Podcast });
