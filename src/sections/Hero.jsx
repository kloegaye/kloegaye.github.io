// Kloe Gaye portfolio — hero
const { Button, Kicker, Marquee, Badge } = window.KloeGayeDesignSystem_152bdb;

function Hero() {
  return (
    <section id="top" style={{ paddingTop: 'clamp(2rem,5vw,4rem)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.9fr', gap: 'clamp(2rem,5vw,5rem)', alignItems: 'center', paddingBlock: 'clamp(2rem,5vw,4.5rem)' }} className="kgp-hero-grid">
          <div>
            <Kicker rule index="01 / 04">Head of Content &middot; Strategy</Kicker>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.03em',
              lineHeight: 0.98, fontSize: 'clamp(3.25rem, 7.5vw, 6.5rem)', margin: '22px 0 0',
            }}>
              Content that<br /><em style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--accent)' }}>moves</em> people.
            </h1>
            <p style={{ fontSize: 'clamp(1.05rem,1.5vw,1.25rem)', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '44ch', marginTop: 28 }}>
              I&rsquo;m Kloe. I build and run content programs for brands who want to be
              watched: strategy, short and long-form video, and podcasts that earn attention and keep it.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 36, flexWrap: 'wrap' }}>
              <Button size="lg" arrow href="#work">View the work</Button>
              <Button variant="ghost" arrow href="#podcast">Listen to the podcast</Button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 34 }}>
              <Badge variant="success" dot>Open to lead roles</Badge>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--text-faint)', textTransform: 'uppercase' }}>2026</span>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'var(--surface-sunken)' }}>
              <img src="https://picsum.photos/seed/kgportrait4/720/900" alt="Kloe Gaye" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.02) contrast(1.02)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(37,28,30,0) 60%, rgba(37,28,30,0.25))' }} />
            </div>
            <div style={{
              position: 'absolute', bottom: -18, left: -18, background: 'var(--surface)',
              border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '14px 18px',
              boxShadow: 'var(--shadow-md)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 30, fontWeight: 600, lineHeight: 1, color: 'var(--text)' }}>3.4M</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>views / 6&nbsp;months</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)', padding: '20px 0', marginTop: 'clamp(1rem,3vw,2.5rem)' }}>
        <Marquee items={[
          <>Social <em>strategy</em></>, 'Short-form video', 'Podcast production',
          <>Content <em>calendars</em></>, 'Marketing analytics', 'Long-form video', 'Team &amp; schedules',
        ]} />
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
