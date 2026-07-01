// Kloe Gaye portfolio — cinematic statement band (dark) + results
const { Stat, Kicker, Marquee } = window.KloeGayeDesignSystem_152bdb;

function Statement() {
  return (
    <section style={{ background: 'var(--bg-invert)', color: 'var(--text-invert)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ paddingBlock: 'var(--section-y)' }}>
          <Kicker tone="invert" rule>The way I work</Kicker>
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '-0.02em',
            lineHeight: 1.14, fontSize: 'clamp(1.9rem, 4.2vw, 3.4rem)', maxWidth: '20ch',
            margin: '24px 0 0', color: 'var(--text-invert)', textWrap: 'balance',
          }}>
            Great content doesn&rsquo;t shout. It <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>shows up</em>:
            on time, on brand, every single week.
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(1.5rem,3vw,3rem)',
            marginTop: 'clamp(2.5rem,5vw,4.5rem)', paddingTop: 'clamp(2rem,4vw,3rem)',
            borderTop: '1px solid var(--border-invert)',
          }} className="kgp-stats-grid">
            <Stat tone="invert" value="3.4" suffix="M" label="Organic views in six months" />
            <Stat tone="invert" value="62" suffix="%" label="Lift in saves per post" />
            <Stat tone="invert" value="120" suffix="+" label="Episodes shipped on schedule" />
            <Stat tone="invert" value="4" suffix="x" label="Output with the same budget" />
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border-invert)', padding: '18px 0' }}>
        <Marquee tone="invert" reverse items={[
          'Strategy', <>that <em>ships</em></>, 'Video', 'Podcasts', 'Calendars', <>that <em>convert</em></>, 'Analytics',
        ]} />
      </div>
    </section>
  );
}

Object.assign(window, { Statement });
