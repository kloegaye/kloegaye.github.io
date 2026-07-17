// Kloe Gaye portfolio - sticky navigation
const { Button } = window.KloeGayeDesignSystem_152bdb;

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('.kgp-scroll') || window;
    const onScroll = () => {
      const y = el === window ? window.scrollY : el.scrollTop;
      setScrolled(y > 24);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const links = [['Work', '#work'], ['Services', '#services'], ['About', '#about']];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(11,14,18,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'background .3s var(--ease-out), border-color .3s var(--ease-out)',
    }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)',
        height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#top" style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1, color: 'var(--text)' }}>
          Kloe <em style={{ fontStyle: 'italic', fontWeight: 500 }}>Gaye</em>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
          {links.map(([l, h]) => (
            <a key={l} href={h} className="kgp-navlink" style={{
              fontSize: 14, fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.01em',
            }}>{l}</a>
          ))}
          <Button size="sm" variant="secondary" arrow href="#contact">Book a call</Button>
        </nav>
      </div>
    </header>
  );
}

Object.assign(window, { Nav });
