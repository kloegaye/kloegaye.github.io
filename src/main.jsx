// Kloe Gaye portfolio — app entry.
//
// React, ReactDOM and the design-system component bundle
// (window.KloeGayeDesignSystem_152bdb) are loaded as classic <script>
// tags in index.html BEFORE this module, so they are available as globals
// here and inside every section. Vite pre-compiles the JSX below with the
// classic runtime (React.createElement) — no in-browser Babel.

import './ds/styles.css';
import './app.css';

// Side-effect imports: each section attaches its component to window.
// Order matters — icons first (Footer reads window.Icon), then sections.
import './sections/icons.jsx';
import './sections/Nav.jsx';
import './sections/Hero.jsx';
import './sections/WorkGrid.jsx';
import './sections/Services.jsx';
import './sections/Statement.jsx';
import './sections/About.jsx';
import './sections/Footer.jsx';

const { Nav, Hero, WorkGrid, Services, Statement, About, Footer } = window;

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <WorkGrid />
      <Services />
      <Statement />
      <About />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
