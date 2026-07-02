// Kloe Gaye portfolio — contact CTA + footer
const { Button, Kicker, IconButton, Field, Input, Textarea } = window.KloeGayeDesignSystem_152bdb;

function Footer() {
  const socials = [
    ['instagram', '#'], // TODO: needs Kloe's personal handle (CV only lists Ling's work accounts)
    ['youtube', '#'], // TODO: needs Kloe's personal handle
    ['linkedin', 'https://www.linkedin.com/in/kloegaye/'],
    ['mail', 'mailto:kloegayem@gmail.com'],
  ];
  return (
    <footer id="contact" style={{ background: 'var(--bg-invert)', color: 'var(--text-invert)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(2.5rem,6vw,6rem)', paddingBlock: 'var(--section-y)', alignItems: 'start' }} className="kgp-contact-grid">
          <div>
            <Kicker tone="invert" rule>Contact</Kicker>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.0, fontSize: 'clamp(2.5rem,6vw,5rem)', margin: '20px 0 0', color: 'var(--text-invert)' }}>
              Let&rsquo;s build your<br /><em style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--accent)' }}>content engine</em>.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--text-invert-muted)', maxWidth: '40ch', marginTop: 24 }}>
              Hiring a Head of Content? Tell me about the brand and the goal, and I&rsquo;ll reply within a day.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
              <a href="mailto:kloegayem@gmail.com" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.25rem,2.4vw,1.8rem)', color: 'var(--text-invert)', borderBottom: '1px solid var(--accent)', paddingBottom: 4 }}>
                kloegayem@gmail.com
              </a>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 34 }}>
              {socials.map(([k, h]) => (
                <a key={k} href={h} aria-label={k} className="kgp-social" style={{
                  width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--border-invert)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-invert)',
                }}>
                  <span style={{ width: 18, height: 18, display: 'inline-flex' }}>{window.Icon[k]}</span>
                </a>
              ))}
            </div>
          </div>

          <div style={{ background: 'var(--surface-invert)', border: '1px solid var(--border-invert)', borderRadius: 'var(--radius-xl)', padding: 'clamp(1.5rem,3vw,2.25rem)' }}>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 18 }} className="kgp-form">
              <Field label="Name"><Input placeholder="Your name" /></Field>
              <Field label="Company email"><Input type="email" placeholder="you@brand.com" /></Field>
              <Field label="What do you need?"><Textarea rows={3} placeholder="We&rsquo;re launching a podcast and need someone to own content end to end…" /></Field>
              <Button full size="lg" arrow>Send the brief</Button>
            </form>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-invert)', paddingBlock: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600 }}>Kloe <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Gaye</em></span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', color: 'var(--text-invert-muted)', textTransform: 'uppercase' }}>&copy; 2026 &middot; Head of Content</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
