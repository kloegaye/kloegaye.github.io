// Kloe Gaye portfolio — about + testimonial
const { Kicker, Quote, Avatar, Tag } = window.KloeGayeDesignSystem_152bdb;

function About() {
  return (
    <section id="about" style={{ paddingBlock: 'var(--section-y)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(2rem,5vw,5rem)', alignItems: 'center' }} className="kgp-about-grid">
          <div style={{ position: 'relative' }}>
            <div style={{ aspectRatio: '5/6', borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'var(--surface-sunken)' }}>
              <img src="https://picsum.photos/seed/kgabout6/800/960" alt="Kloe at work" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.02) contrast(1.02)' }} />
            </div>
          </div>
          <div>
            <Kicker rule>About</Kicker>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.08, fontSize: 'clamp(2rem,3.6vw,3rem)', margin: '18px 0 0' }}>
              I&rsquo;ve been the whole content team, so I know how to <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>build</em> one.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26, fontSize: 17, lineHeight: 1.65, color: 'var(--text-muted)', maxWidth: '52ch' }}>
              <p>For seven years I&rsquo;ve led content for founder-led and DTC brands: setting the
                strategy, shooting and editing the work, producing the podcast, and reporting on
                what actually moved the numbers.</p>
              <p>I hire and train freelancers, own the calendar, and keep the whole engine running
                week after week. If you want a Head of Content who can both think and ship, that&rsquo;s the job I love.</p>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
              <Tag>7 yrs experience</Tag>
              <Tag>DTC &amp; founder-led</Tag>
              <Tag>Remote / hybrid</Tag>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'clamp(3rem,6vw,5rem)', paddingTop: 'clamp(2.5rem,4vw,3.5rem)', borderTop: '1px solid var(--divider)' }}>
          <div style={{ maxWidth: 920, margin: '0 auto', textAlign: 'center' }}>
            <Quote align="center" name="Shay Davidovich" role="Managed Kloe at the ICRC &middot; Strategic Communications Specialist"
              avatar={<Avatar name="Shay Davidovich" size="sm" />}>
              One of the most creative individuals I&rsquo;ve ever collaborated with&hellip; she went
              beyond merely leading; she dedicated herself to training, guiding, and ensuring a rich
              tapestry of content. Her contributions, especially in the dynamic world of social media,
              have been <em>instrumental</em> in our team&rsquo;s success.
            </Quote>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About });
