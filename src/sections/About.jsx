// Kloe Gaye portfolio - about + testimonial
const { Kicker, Quote, Avatar, Tag, Card } = window.KloeGayeDesignSystem_152bdb;

function About() {
  return (
    <section id="about" style={{ paddingBlock: 'var(--section-y)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(2rem,5vw,5rem)', alignItems: 'center' }} className="kgp-about-grid">
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 'min(420px, 100%)', aspectRatio: '1/1', borderRadius: '50%', overflow: 'hidden', background: 'var(--surface-sunken)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}>
              <img src="/images/kloe.jpg" alt="Headshot of Kloe Gaye smiling" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.02) contrast(1.02)' }} />
            </div>
          </div>
          <div>
            <Kicker rule>About</Kicker>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.08, fontSize: 'clamp(2rem,3.6vw,3rem)', margin: '18px 0 0' }}>
              I&rsquo;ve been the whole content team, so I know how to <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>build</em> one.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26, fontSize: 17, lineHeight: 1.65, color: 'var(--text-muted)', maxWidth: '52ch' }}>
              <p>Hi, I&rsquo;m Kloe! I&rsquo;ve spent the last seven years making content for all
                kinds of brands, from the ICRC&rsquo;s global channels to small B2B enterprises in
                Australia and consumer brands in Singapore. It all started with broadcast training at
                CNN Philippines, and I&rsquo;ve loved telling stories on camera ever since.</p>
              <p>These days I work at a tech start-up in the language learning sector. I joined as a
                content creator and now I look after our YouTube, Facebook and Instagram channels, run a
                team of creators, and produce our Tagalog Tea Time podcast. Along the way, the video ads
                I&rsquo;ve made have brought in multiple six-figures in revenue.</p>
              <p>I&rsquo;m happiest when I get to do the whole thing: dream up the strategy, film it,
                edit it, then dig into the numbers to see what worked. And when I&rsquo;m off the clock,
                you&rsquo;ll find me writing poetry and hosting POLITIS, my podcast about the language of
                politics and the politics of language.</p>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
              <Tag>7 yrs in social</Tag>
              <Tag>On camera + behind it</Tag>
              <Tag>Remote / hybrid</Tag>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'clamp(3rem,6vw,5rem)', paddingTop: 'clamp(2.5rem,4vw,3.5rem)', borderTop: '1px solid var(--divider)' }}>
          <div className="kgp-recs-grid">
            <Card pad="lg" className="kgp-rec">
              <Quote name={<a className="kgp-rec-link" href="https://www.linkedin.com/in/shaydavidovich87/" target="_blank" rel="noopener noreferrer">Shay Davidovich</a>} role="Managed Kloe at the ICRC &middot; Strategic Communications Specialist"
                avatar={<Avatar src="/images/shay-davidovich.jpg" name="Shay Davidovich" size="sm" />}>
                One of the most creative individuals I&rsquo;ve ever collaborated with&hellip; she went
                beyond merely leading; she dedicated herself to training, guiding, and ensuring a rich
                tapestry of content. Her contributions, especially in the dynamic world of social media,
                have been <em>instrumental</em> in our team&rsquo;s success.
              </Quote>
            </Card>
            <Card pad="lg" className="kgp-rec">
              <Quote name={<a className="kgp-rec-link" href="https://www.linkedin.com/in/davilanat/" target="_blank" rel="noopener noreferrer">Nat D&aacute;vila Merlo</a>} role="Senior to Kloe at Ling &middot; Content Marketing Manager"
                avatar={<Avatar src="/images/nat-davila-merlo.jpg" name="Nat Dávila Merlo" size="sm" />}>
                Kloe is incredibly curious and always looking for ways to improve. I really appreciated
                how open she was to exploring new ideas, whether it was social media, AI search, or
                collaborating across teams. She&rsquo;s a fast learner, highly organized, and someone
                who <em>genuinely enjoys growing her skills</em>.
              </Quote>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About });
