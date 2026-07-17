/* @ds-bundle: {"format":3,"namespace":"KloeGayeDesignSystem_152bdb","components":[{"name":"Avatar","sourcePath":"components/chips/Avatar.jsx"},{"name":"Badge","sourcePath":"components/chips/Badge.jsx"},{"name":"Kicker","sourcePath":"components/chips/Kicker.jsx"},{"name":"Tag","sourcePath":"components/chips/Tag.jsx"},{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Field","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Input.jsx"},{"name":"AudioPlayer","sourcePath":"components/media/AudioPlayer.jsx"},{"name":"Marquee","sourcePath":"components/media/Marquee.jsx"},{"name":"PlayButton","sourcePath":"components/media/PlayButton.jsx"},{"name":"ReelCard","sourcePath":"components/showcase/ReelCard.jsx"},{"name":"WorkCard","sourcePath":"components/showcase/WorkCard.jsx"}],"sourceHashes":{"components/chips/Avatar.jsx":"877fc8fccd95","components/chips/Badge.jsx":"3787465962d7","components/chips/Kicker.jsx":"825779451164","components/chips/Tag.jsx":"e1b0299b73bc","components/content/Accordion.jsx":"4c3ee968d557","components/content/Card.jsx":"8d30a0197465","components/content/Quote.jsx":"520644e3482a","components/content/SectionHeader.jsx":"95e07d6cd047","components/content/Stat.jsx":"fbe8a752fdcb","components/core/Button.jsx":"f8065a57b199","components/core/IconButton.jsx":"146de9fbfecf","components/forms/Input.jsx":"36b1d06808dc","components/media/AudioPlayer.jsx":"c42358ac3d18","components/media/Marquee.jsx":"841cb7982e68","components/media/PlayButton.jsx":"41c7df03f1e9","components/showcase/ReelCard.jsx":"77769881441a","components/showcase/WorkCard.jsx":"3539ef58518f","ui_kits/podcast/EpisodeHero.jsx":"9891b7ba06c3","ui_kits/podcast/EpisodeList.jsx":"0a2ae3caba79","ui_kits/podcast/ShowNotes.jsx":"8594e414f056","ui_kits/portfolio/About.jsx":"c43808446c5e","ui_kits/portfolio/Footer.jsx":"8408f192214c","ui_kits/portfolio/Hero.jsx":"7a93b16df66e","ui_kits/portfolio/Nav.jsx":"d463190a051a","ui_kits/portfolio/Services.jsx":"7373f1bc21af","ui_kits/portfolio/Statement.jsx":"b3a328486ab6","ui_kits/portfolio/WorkGrid.jsx":"50e445de998a","ui_kits/portfolio/icons.jsx":"436b0e89f5e2","ui_kits/social/ReelGrid.jsx":"4dc964f1a7df","ui_kits/social/SocialHero.jsx":"49f74a794a03","ui_kits/social/Spotlight.jsx":"5d354b681ff3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KloeGayeDesignSystem_152bdb = window.KloeGayeDesignSystem_152bdb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/chips/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kloe Gaye - Avatar
 * Round avatar with image or initials fallback. Optional status ring.
 */

const CSS = `
.kg-avatar {
  position: relative; display: inline-flex; align-items: center; justify-content: center;
  border-radius: 50%; overflow: hidden; flex-shrink: 0;
  background: var(--accent-soft); color: var(--accent-hover);
  font-family: var(--font-display); font-weight: 600; font-style: italic;
}
.kg-avatar img { width: 100%; height: 100%; object-fit: cover; }
.kg-avatar--xs { width: 28px; height: 28px; font-size: 12px; }
.kg-avatar--sm { width: 40px; height: 40px; font-size: 16px; }
.kg-avatar--md { width: 56px; height: 56px; font-size: 22px; }
.kg-avatar--lg { width: 80px; height: 80px; font-size: 30px; }
.kg-avatar--ring { box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px var(--accent); }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-avatar-css")) {
  const s = document.createElement("style");
  s.id = "kg-avatar-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || "").join("").toUpperCase();
}
function Avatar({
  src,
  name = "",
  size = "md",
  ring = false,
  className = "",
  ...rest
}) {
  const cls = ["kg-avatar", `kg-avatar--${size}`, ring ? "kg-avatar--ring" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", null, initials(name)));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chips/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/chips/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kloe Gaye - Badge
 * Small status / count marker. Quieter than a Tag, used inline.
 */

const CSS = `
.kg-badge {
  display: inline-flex; align-items: center; gap: 0.35em;
  font-family: var(--font-sans); font-size: 12px; font-weight: 600;
  line-height: 1; padding: 4px 9px; border-radius: var(--radius-sm);
  background: var(--surface-sunken); color: var(--text-muted);
}
.kg-badge--accent { background: var(--accent-soft); color: var(--accent-hover); }
.kg-badge--success { background: rgba(78,122,82,0.14); color: var(--success); }
.kg-badge--warning { background: rgba(201,138,43,0.16); color: var(--warning); }
.kg-badge--ink { background: var(--text); color: var(--bg); }
.kg-badge__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-badge-css")) {
  const s = document.createElement("style");
  s.id = "kg-badge-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  children,
  variant = "neutral",
  dot = false,
  className = "",
  ...rest
}) {
  const cls = ["kg-badge", variant !== "neutral" ? `kg-badge--${variant}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "kg-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chips/Badge.jsx", error: String((e && e.message) || e) }); }

// components/chips/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kloe Gaye - Kicker
 * Monospace eyebrow label that sits above headlines. Optional index + rule.
 */

const CSS = `
.kg-kicker-c {
  display: inline-flex; align-items: center; gap: 0.7em;
  font-family: var(--font-mono); font-size: 11px; font-weight: 400;
  letter-spacing: 0.22em; text-transform: uppercase; line-height: 1;
  color: var(--text-muted);
}
.kg-kicker-c--accent { color: var(--accent); }
.kg-kicker-c--invert { color: var(--text-invert-muted); }
.kg-kicker-c__rule { display: inline-block; width: 28px; height: 1px; background: var(--accent); }
.kg-kicker-c__ix { opacity: 0.6; }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-kicker-css")) {
  const s = document.createElement("style");
  s.id = "kg-kicker-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Kicker({
  children,
  tone = "muted",
  index,
  rule = false,
  className = "",
  ...rest
}) {
  const cls = ["kg-kicker-c", tone !== "muted" ? `kg-kicker-c--${tone}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    className: "kg-kicker-c__rule"
  }), index != null && /*#__PURE__*/React.createElement("span", {
    className: "kg-kicker-c__ix"
  }, index), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chips/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/chips/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kloe Gaye - Tag
 * Category / filter pill. Use for content categories, services, filters.
 */

const CSS = `
.kg-tag {
  display: inline-flex; align-items: center; gap: 0.4em;
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em;
  text-transform: uppercase; line-height: 1;
  padding: 7px 12px; border-radius: var(--radius-pill);
  border: 1px solid var(--border-strong); color: var(--text-muted);
  background: transparent; cursor: default; white-space: nowrap;
  transition: background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out),
    border-color var(--dur-base) var(--ease-out);
}
.kg-tag--solid { background: var(--text); color: var(--bg); border-color: var(--text); }
.kg-tag--accent { background: var(--accent-soft); color: var(--accent-hover); border-color: transparent; }
.kg-tag--wine { background: var(--wine-soft); color: var(--wine); border-color: transparent; }
.kg-tag__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
button.kg-tag, a.kg-tag { cursor: pointer; }
button.kg-tag:hover, a.kg-tag:hover { border-color: var(--text); color: var(--text); }
.kg-tag--active { background: var(--accent); color: var(--on-accent); border-color: transparent; }
.kg-tag--active:hover { background: var(--accent-hover); color: var(--on-accent); }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-tag-css")) {
  const s = document.createElement("style");
  s.id = "kg-tag-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tag({
  children,
  variant = "outline",
  active = false,
  dot = false,
  href,
  onClick,
  className = "",
  ...rest
}) {
  const cls = ["kg-tag", `kg-tag--${variant}`, active ? "kg-tag--active" : "", className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, dot && /*#__PURE__*/React.createElement("span", {
    className: "kg-tag__dot"
  }), children);
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls
  }, rest), inner);
  if (onClick) return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    onClick: onClick
  }, rest), inner);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chips/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
/**
 * Kloe Gaye - Accordion
 * Services / FAQ list. Editorial: serif item titles, thin rules, +/- toggle.
 */

const CSS = `
.kg-acc { border-top: 1px solid var(--divider); }
.kg-acc__item { border-bottom: 1px solid var(--divider); }
.kg-acc__head {
  width: 100%; display: flex; align-items: center; gap: 20px; justify-content: space-between;
  background: transparent; border: 0; cursor: pointer; text-align: left;
  padding: var(--space-5) 0; font-family: var(--font-display);
  font-size: clamp(1.25rem, 2.4vw, 1.85rem); font-weight: 500; color: var(--text);
  letter-spacing: -0.01em; transition: color var(--dur-base) var(--ease-out);
}
.kg-acc__head:hover { color: var(--accent); }
.kg-acc__ix { font-family: var(--font-mono); font-size: 12px; color: var(--text-faint);
  letter-spacing: 0.1em; flex-shrink: 0; }
.kg-acc__title { flex: 1; }
.kg-acc__sign { position: relative; width: 18px; height: 18px; flex-shrink: 0; }
.kg-acc__sign::before, .kg-acc__sign::after {
  content: ""; position: absolute; background: currentColor; border-radius: 1px;
  transition: transform var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out);
}
.kg-acc__sign::before { left: 0; right: 0; top: 8px; height: 2px; }
.kg-acc__sign::after { top: 0; bottom: 0; left: 8px; width: 2px; }
.kg-acc__item--open .kg-acc__sign::after { transform: rotate(90deg); opacity: 0; }
.kg-acc__panel { overflow: hidden; max-height: 0; transition: max-height var(--dur-slow) var(--ease-inout); }
.kg-acc__panel-inner { padding: 0 0 var(--space-5); max-width: 60ch; }
.kg-acc__body { font-family: var(--font-sans); font-size: 16px; line-height: 1.6; color: var(--text-muted); }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-acc-css")) {
  const s = document.createElement("style");
  s.id = "kg-acc-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Accordion({
  items = [],
  defaultOpen = 0,
  className = ""
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    className: ["kg-acc", className].filter(Boolean).join(" ")
  }, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `kg-acc__item${isOpen ? " kg-acc__item--open" : ""}`
    }, /*#__PURE__*/React.createElement("button", {
      className: "kg-acc__head",
      "aria-expanded": isOpen,
      onClick: () => setOpen(isOpen ? -1 : i)
    }, it.index && /*#__PURE__*/React.createElement("span", {
      className: "kg-acc__ix"
    }, it.index), /*#__PURE__*/React.createElement("span", {
      className: "kg-acc__title"
    }, it.title), /*#__PURE__*/React.createElement("span", {
      className: "kg-acc__sign"
    })), /*#__PURE__*/React.createElement("div", {
      className: "kg-acc__panel",
      style: {
        maxHeight: isOpen ? "320px" : "0px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "kg-acc__panel-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kg-acc__body"
    }, it.body))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kloe Gaye - Card
 * Generic surface container. Subtle warm border, optional hover lift.
 */

const CSS = `
.kg-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: var(--space-6);
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out),
    border-color var(--dur-base) var(--ease-out);
}
.kg-card--sunken { background: var(--surface-sunken); }
.kg-card--tint { background: var(--accent-soft); border-color: transparent; }
.kg-card--invert { background: var(--surface-invert); border-color: var(--border-invert); color: var(--text-invert); }
.kg-card--pad-sm { padding: var(--space-4); }
.kg-card--pad-lg { padding: var(--space-8); }
.kg-card--shadow { box-shadow: var(--shadow-md); border-color: transparent; }
.kg-card--hover { cursor: pointer; }
.kg-card--hover:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: transparent; }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-card-css")) {
  const s = document.createElement("style");
  s.id = "kg-card-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  children,
  tone = "default",
  pad = "md",
  shadow = false,
  hover = false,
  href,
  className = "",
  ...rest
}) {
  const cls = ["kg-card", tone !== "default" ? `kg-card--${tone}` : "", pad !== "md" ? `kg-card--pad-${pad}` : "", shadow ? "kg-card--shadow" : "", hover || href ? "kg-card--hover" : "", className].filter(Boolean).join(" ");
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls
  }, rest), children);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
/**
 * Kloe Gaye - Quote
 * Editorial pull-quote / testimonial. Large serif with attribution.
 */

const CSS = `
.kg-quote { display: flex; flex-direction: column; gap: var(--space-5); font-family: var(--font-sans); }
.kg-quote__mark { font-family: var(--font-display); font-style: italic; font-size: 64px; line-height: 0.4;
  color: var(--accent); height: 28px; }
.kg-quote__text {
  font-family: var(--font-display); font-weight: 500; letter-spacing: -0.01em;
  line-height: 1.22; color: var(--text); font-size: clamp(1.5rem, 3.2vw, 2.5rem); text-wrap: balance;
}
.kg-quote__text em { font-style: italic; color: var(--accent); }
.kg-quote__by { display: flex; align-items: center; gap: 14px; }
.kg-quote__by-text { display: flex; flex-direction: column; }
.kg-quote__name { font-size: 15px; font-weight: 600; color: var(--text); }
.kg-quote__role { font-size: 13px; color: var(--text-muted); }
.kg-quote--invert .kg-quote__text { color: var(--text-invert); }
.kg-quote--invert .kg-quote__name { color: var(--text-invert); }
.kg-quote--invert .kg-quote__role { color: var(--text-invert-muted); }
.kg-quote--center { align-items: center; text-align: center; }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-quote-css")) {
  const s = document.createElement("style");
  s.id = "kg-quote-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Quote({
  children,
  name,
  role,
  avatar,
  tone = "default",
  align = "start",
  className = ""
}) {
  const cls = ["kg-quote", tone === "invert" ? "kg-quote--invert" : "", align === "center" ? "kg-quote--center" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("figure", {
    className: cls,
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kg-quote__mark"
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    className: "kg-quote__text",
    style: {
      margin: 0
    }
  }, children), (name || avatar) && /*#__PURE__*/React.createElement("figcaption", {
    className: "kg-quote__by"
  }, avatar, /*#__PURE__*/React.createElement("span", {
    className: "kg-quote__by-text"
  }, name && /*#__PURE__*/React.createElement("span", {
    className: "kg-quote__name"
  }, name), role && /*#__PURE__*/React.createElement("span", {
    className: "kg-quote__role"
  }, role))));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
/**
 * Kloe Gaye - SectionHeader
 * Kicker + display title (+ optional lede & action). The editorial section intro.
 */

const CSS = `
.kg-sechead { display: flex; flex-direction: column; gap: var(--space-3); }
.kg-sechead__top { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
.kg-sechead__kicker {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--text-muted); display: inline-flex; align-items: center; gap: 0.7em;
}
.kg-sechead__kicker::before { content: ""; width: 28px; height: 1px; background: var(--accent); }
.kg-sechead__title {
  font-family: var(--font-display); font-weight: 600; color: var(--text);
  letter-spacing: -0.02em; line-height: 1.06; font-size: var(--text-display-md); max-width: 18ch;
}
.kg-sechead__title em { font-style: italic; font-weight: 500; color: var(--accent); }
.kg-sechead__lede { font-family: var(--font-sans); font-size: 17px; line-height: 1.6; color: var(--text-muted); max-width: 46ch; }
.kg-sechead--center { align-items: center; text-align: center; }
.kg-sechead--center .kg-sechead__title, .kg-sechead--center .kg-sechead__lede { max-width: 24ch; }
.kg-sechead--center .kg-sechead__top { justify-content: center; }
.kg-sechead--invert .kg-sechead__title { color: var(--text-invert); }
.kg-sechead--invert .kg-sechead__lede { color: var(--text-invert-muted); }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-sechead-css")) {
  const s = document.createElement("style");
  s.id = "kg-sechead-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function SectionHeader({
  kicker,
  title,
  lede,
  action,
  align = "start",
  tone = "default",
  className = ""
}) {
  const cls = ["kg-sechead", align === "center" ? "kg-sechead--center" : "", tone === "invert" ? "kg-sechead--invert" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: "kg-sechead__top"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, kicker && /*#__PURE__*/React.createElement("span", {
    className: "kg-sechead__kicker"
  }, kicker), title && /*#__PURE__*/React.createElement("h2", {
    className: "kg-sechead__title"
  }, title)), action && /*#__PURE__*/React.createElement("div", {
    className: "kg-sechead__action"
  }, action)), lede && /*#__PURE__*/React.createElement("p", {
    className: "kg-sechead__lede"
  }, lede));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kloe Gaye - Stat
 * Big editorial metric: serif number + label. For results / proof sections.
 */

const CSS = `
.kg-stat { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
.kg-stat__num {
  font-family: var(--font-display); font-weight: 600; line-height: 0.95;
  letter-spacing: -0.03em; color: var(--text); font-size: clamp(2.75rem, 5vw, 4.25rem);
}
.kg-stat__num em { font-style: italic; color: var(--accent); font-weight: 500; }
.kg-stat__suffix { font-size: 0.5em; color: var(--text-muted); font-style: italic; }
.kg-stat__label { font-size: 14px; color: var(--text-muted); line-height: 1.4; max-width: 22ch; }
.kg-stat--sm .kg-stat__num { font-size: clamp(2rem, 3.5vw, 2.75rem); }
.kg-stat--invert .kg-stat__num { color: var(--text-invert); }
.kg-stat--invert .kg-stat__label { color: var(--text-invert-muted); }
.kg-stat--center { align-items: center; text-align: center; }
.kg-stat--center .kg-stat__label { max-width: none; }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-stat-css")) {
  const s = document.createElement("style");
  s.id = "kg-stat-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Stat({
  value,
  suffix,
  label,
  size = "md",
  tone = "default",
  align = "start",
  className = "",
  ...rest
}) {
  const cls = ["kg-stat", size === "sm" ? "kg-stat--sm" : "", tone === "invert" ? "kg-stat--invert" : "", align === "center" ? "kg-stat--center" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "kg-stat__num"
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    className: "kg-stat__suffix"
  }, suffix)), label && /*#__PURE__*/React.createElement("div", {
    className: "kg-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kloe Gaye - Button
 * Editorial pill / outline / ghost / link button with optional icons.
 */

const CSS = `
.kg-btn {
  --_bg: var(--accent);
  --_fg: var(--on-accent);
  --_bd: transparent;
  display: inline-flex; align-items: center; justify-content: center; gap: 0.55em;
  font-family: var(--font-sans); font-weight: 600; letter-spacing: -0.01em;
  border: 1px solid var(--_bd); background: var(--_bg); color: var(--_fg);
  border-radius: var(--radius-pill); cursor: pointer; white-space: nowrap;
  text-decoration: none; line-height: 1; transition: transform var(--dur-fast) var(--ease-out),
    background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out),
    border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.kg-btn:active { transform: translateY(1px) scale(0.99); }
.kg-btn:disabled, .kg-btn[aria-disabled="true"] { opacity: 0.42; pointer-events: none; }
.kg-btn--md { font-size: 15px; padding: 13px 24px; }
.kg-btn--sm { font-size: 13px; padding: 9px 16px; }
.kg-btn--lg { font-size: 17px; padding: 17px 32px; }
.kg-btn--full { width: 100%; }
.kg-btn--primary:hover { background: var(--accent-hover); box-shadow: var(--shadow-accent); }
.kg-btn--secondary { --_bg: transparent; --_fg: var(--text); --_bd: var(--border-strong); }
.kg-btn--secondary:hover { --_bg: var(--text); --_fg: var(--bg); --_bd: var(--text); }
.kg-btn--ghost { --_bg: transparent; --_fg: var(--text); --_bd: transparent; }
.kg-btn--ghost:hover { --_bg: var(--accent-soft); --_fg: var(--accent-hover); }
.kg-btn--link { --_bg: transparent; --_fg: var(--accent); --_bd: transparent; border-radius: 0;
  padding-left: 0; padding-right: 0; }
.kg-btn--link:hover { --_fg: var(--accent-hover); }
.kg-btn__ic { display: inline-flex; width: 1.15em; height: 1.15em; }
.kg-btn__ic svg { width: 100%; height: 100%; }
.kg-btn--link .kg-btn__line { position: relative; }
.kg-btn--link .kg-btn__line::after { content: ""; position: absolute; left: 0; right: 0; bottom: -3px;
  height: 1px; background: currentColor; transform: scaleX(1); transform-origin: left;
  transition: transform var(--dur-base) var(--ease-out); }
.kg-btn--link:hover .kg-btn__line::after { transform: scaleX(0.4); }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-button-css")) {
  const s = document.createElement("style");
  s.id = "kg-button-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const ArrowRight = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  iconLeft,
  iconRight,
  arrow = false,
  full = false,
  disabled = false,
  className = "",
  ...rest
}) {
  const cls = ["kg-btn", `kg-btn--${variant}`, `kg-btn--${size}`, full ? "kg-btn--full" : "", className].filter(Boolean).join(" ");
  const right = arrow ? ArrowRight : iconRight;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "kg-btn__ic"
  }, iconLeft), /*#__PURE__*/React.createElement("span", {
    className: "kg-btn__line"
  }, children), right && /*#__PURE__*/React.createElement("span", {
    className: "kg-btn__ic"
  }, right));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled,
    "aria-disabled": disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kloe Gaye - IconButton
 * Square/round icon-only button. Pass a Lucide (or any) SVG node as children.
 */

const CSS = `
.kg-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  background: transparent; color: var(--text); cursor: pointer;
  border: 1px solid var(--border-strong); border-radius: var(--radius-pill);
  transition: background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out),
    border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out);
}
.kg-iconbtn:active { transform: scale(0.94); }
.kg-iconbtn:disabled { opacity: 0.4; pointer-events: none; }
.kg-iconbtn--sm { width: 36px; height: 36px; }
.kg-iconbtn--md { width: 44px; height: 44px; }
.kg-iconbtn--lg { width: 56px; height: 56px; }
.kg-iconbtn--sm svg { width: 16px; height: 16px; }
.kg-iconbtn--md svg { width: 19px; height: 19px; }
.kg-iconbtn--lg svg { width: 24px; height: 24px; }
.kg-iconbtn svg { stroke-width: 1.75; }
.kg-iconbtn--outline:hover { background: var(--text); color: var(--bg); border-color: var(--text); }
.kg-iconbtn--solid { background: var(--accent); color: var(--on-accent); border-color: transparent; }
.kg-iconbtn--solid:hover { background: var(--accent-hover); }
.kg-iconbtn--soft { background: var(--accent-soft); color: var(--accent-hover); border-color: transparent; }
.kg-iconbtn--soft:hover { background: var(--accent); color: var(--on-accent); }
.kg-iconbtn--ghost { border-color: transparent; }
.kg-iconbtn--ghost:hover { background: var(--surface-sunken); }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-iconbtn-css")) {
  const s = document.createElement("style");
  s.id = "kg-iconbtn-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function IconButton({
  children,
  variant = "outline",
  size = "md",
  label,
  href,
  className = "",
  ...rest
}) {
  const cls = ["kg-iconbtn", `kg-iconbtn--${variant}`, `kg-iconbtn--${size}`, className].filter(Boolean).join(" ");
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls,
      "aria-label": label
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kloe Gaye - form field primitives: Field (label wrapper), Input, Textarea, Select.
 * Underline-led editorial inputs.
 */

const CSS = `
.kg-field { display: flex; flex-direction: column; gap: 7px; font-family: var(--font-sans); }
.kg-field__label { font-size: 13px; font-weight: 600; color: var(--text); letter-spacing: -0.01em; }
.kg-field__label .kg-field__req { color: var(--accent); margin-left: 2px; }
.kg-field__hint { font-size: 12px; color: var(--text-muted); }
.kg-field__err { font-size: 12px; color: var(--danger); }

.kg-input, .kg-textarea, .kg-select {
  width: 100%; font-family: var(--font-sans); font-size: 15px; color: var(--text);
  background: var(--surface); border: 1px solid var(--border-strong);
  border-radius: var(--radius-md); padding: 12px 14px; line-height: 1.4;
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out),
    background var(--dur-base) var(--ease-out);
  appearance: none; outline: none;
}
.kg-input::placeholder, .kg-textarea::placeholder { color: var(--text-faint); }
.kg-input:focus, .kg-textarea:focus, .kg-select:focus {
  border-color: var(--accent); box-shadow: 0 0 0 3px var(--ring);
}
.kg-input:disabled, .kg-textarea:disabled, .kg-select:disabled {
  background: var(--surface-sunken); color: var(--text-faint); cursor: not-allowed;
}
.kg-input--invalid, .kg-textarea--invalid, .kg-select--invalid { border-color: var(--danger); }
.kg-textarea { resize: vertical; min-height: 110px; }

/* Variant: editorial underline */
.kg-input--line, .kg-textarea--line, .kg-select--line {
  border: 0; border-bottom: 1px solid var(--border-strong);
  border-radius: 0; padding-left: 0; padding-right: 0; background: transparent;
}
.kg-input--line:focus, .kg-textarea--line:focus, .kg-select--line:focus {
  box-shadow: none; border-bottom-color: var(--accent);
}

.kg-select-wrap { position: relative; }
.kg-select-wrap::after {
  content: ""; position: absolute; right: 14px; top: 50%; width: 9px; height: 9px;
  border-right: 1.5px solid var(--text-muted); border-bottom: 1.5px solid var(--text-muted);
  transform: translateY(-65%) rotate(45deg); pointer-events: none;
}
.kg-select { padding-right: 36px; cursor: pointer; }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-forms-css")) {
  const s = document.createElement("style");
  s.id = "kg-forms-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["kg-field", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "kg-field__label",
    htmlFor: htmlFor
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "kg-field__req"
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "kg-field__err"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "kg-field__hint"
  }, hint) : null);
}
function Input({
  variant = "box",
  invalid = false,
  className = "",
  ...rest
}) {
  const cls = ["kg-input", variant === "line" ? "kg-input--line" : "", invalid ? "kg-input--invalid" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("input", _extends({
    className: cls
  }, rest));
}
function Textarea({
  variant = "box",
  invalid = false,
  className = "",
  rows = 4,
  ...rest
}) {
  const cls = ["kg-textarea", variant === "line" ? "kg-textarea--line" : "", invalid ? "kg-textarea--invalid" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: cls,
    rows: rows
  }, rest));
}
function Select({
  variant = "box",
  invalid = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["kg-select", variant === "line" ? "kg-select--line" : "", invalid ? "kg-select--invalid" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: "kg-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: cls
  }, rest), children));
}
Object.assign(__ds_scope, { Field, Input, Textarea, Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/media/AudioPlayer.jsx
try { (() => {
/**
 * Kloe Gaye - AudioPlayer
 * Podcast episode player: play/pause, waveform scrubber, time. Self-contained
 * demo timing (no real audio) - pass `onSeek`/control externally for real use.
 */

const CSS = `
.kg-audio { display: flex; align-items: center; gap: 18px; background: var(--surface);
  border: 1px solid var(--border); border-radius: var(--radius-pill); padding: 12px 18px 12px 12px; }
.kg-audio--invert { background: var(--surface-invert); border-color: var(--border-invert); }
.kg-audio__btn { width: 52px; height: 52px; border-radius: 50%; border: 0; flex-shrink: 0; cursor: pointer;
  background: var(--accent); color: var(--on-accent); display: flex; align-items: center; justify-content: center;
  transition: background var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out); }
.kg-audio__btn:hover { background: var(--accent-hover); }
.kg-audio__btn:active { transform: scale(0.95); }
.kg-audio__btn svg { width: 20px; height: 20px; fill: currentColor; }
.kg-audio__main { flex: 1; min-width: 0; }
.kg-audio__wave { display: flex; align-items: center; gap: 2px; height: 34px; cursor: pointer; }
.kg-audio__bar { flex: 1; border-radius: 2px; background: var(--border-strong); transition: background var(--dur-fast) linear; }
.kg-audio__bar--on { background: var(--accent); }
.kg-audio--invert .kg-audio__bar { background: rgba(251,246,241,0.22); }
.kg-audio--invert .kg-audio__bar--on { background: var(--accent); }
.kg-audio__time { display: flex; justify-content: space-between; font-family: var(--font-mono);
  font-size: 11px; color: var(--text-muted); margin-top: 5px; letter-spacing: 0.04em; }
.kg-audio--invert .kg-audio__time { color: var(--text-invert-muted); }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-audio-css")) {
  const s = document.createElement("style");
  s.id = "kg-audio-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const PlayIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M8 5v14l11-7z"
}));
const PauseIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"
}));
const BARS = [0.4, 0.7, 0.5, 0.9, 0.6, 0.35, 0.8, 1, 0.55, 0.45, 0.75, 0.5, 0.65, 0.95, 0.6, 0.3, 0.7, 0.85, 0.5, 0.6, 0.4, 0.8, 0.55, 0.7, 0.45, 0.9, 0.6, 0.5, 0.75, 0.4, 0.65, 0.85, 0.5, 0.7, 0.6, 0.35, 0.8, 0.55, 0.95, 0.5];
function fmt(t) {
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}
function AudioPlayer({
  duration = 2715,
  tone = "default",
  className = ""
}) {
  const [playing, setPlaying] = React.useState(false);
  const [pos, setPos] = React.useState(0); // 0..1
  React.useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setPos(p => {
        const next = p + 1 / duration;
        if (next >= 1) {
          setPlaying(false);
          return 1;
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [playing, duration]);
  const cls = ["kg-audio", tone === "invert" ? "kg-audio--invert" : "", className].filter(Boolean).join(" ");
  const seek = e => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos(Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("button", {
    className: "kg-audio__btn",
    onClick: () => setPlaying(p => !p),
    "aria-label": playing ? "Pause" : "Play"
  }, playing ? PauseIcon : PlayIcon), /*#__PURE__*/React.createElement("div", {
    className: "kg-audio__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kg-audio__wave",
    onClick: seek
  }, BARS.map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: `kg-audio__bar${i / BARS.length <= pos ? " kg-audio__bar--on" : ""}`,
    style: {
      height: `${Math.round(h * 100)}%`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "kg-audio__time"
  }, /*#__PURE__*/React.createElement("span", null, fmt(pos * duration)), /*#__PURE__*/React.createElement("span", null, fmt(duration)))));
}
Object.assign(__ds_scope, { AudioPlayer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/AudioPlayer.jsx", error: String((e && e.message) || e) }); }

// components/media/Marquee.jsx
try { (() => {
/**
 * Kloe Gaye - Marquee
 * Infinite horizontal ticker. Cinematic rolling headline of words/items.
 */

const CSS = `
.kg-marquee { overflow: hidden; width: 100%; -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
.kg-marquee__track { display: flex; width: max-content; animation: kg-marq var(--dur-marquee) linear infinite; }
.kg-marquee:hover .kg-marquee__track { animation-play-state: paused; }
.kg-marquee--reverse .kg-marquee__track { animation-direction: reverse; }
.kg-marquee__group { display: flex; align-items: center; flex-shrink: 0; }
.kg-marquee__item { display: inline-flex; align-items: center; gap: 0.5em;
  font-family: var(--font-display); font-weight: 500; letter-spacing: -0.01em;
  font-size: clamp(1.75rem, 4vw, 3rem); color: var(--text); padding: 0 var(--space-6); }
.kg-marquee__item em { font-style: italic; color: var(--accent); }
.kg-marquee__sep { width: 6px; height: 6px; border-radius: 50%; background: var(--text-faint); flex-shrink: 0; }
.kg-marquee--invert .kg-marquee__item { color: var(--text-invert); }
@keyframes kg-marq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .kg-marquee__track { animation: none; } }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-marquee-css")) {
  const s = document.createElement("style");
  s.id = "kg-marquee-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Marquee({
  items = [],
  reverse = false,
  tone = "default",
  separator = true,
  className = ""
}) {
  const cls = ["kg-marquee", reverse ? "kg-marquee--reverse" : "", tone === "invert" ? "kg-marquee--invert" : "", className].filter(Boolean).join(" ");
  const Group = /*#__PURE__*/React.createElement("div", {
    className: "kg-marquee__group",
    "aria-hidden": "false"
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "kg-marquee__item"
  }, it), separator && /*#__PURE__*/React.createElement("span", {
    className: "kg-marquee__sep"
  }))));
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: "kg-marquee__track"
  }, Group, React.cloneElement(Group, {
    "aria-hidden": "true"
  })));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/media/PlayButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kloe Gaye - PlayButton
 * Large circular play/pause control with optional label, for video & audio.
 */

const CSS = `
.kg-play { display: inline-flex; align-items: center; gap: 14px; background: transparent;
  border: 0; cursor: pointer; font-family: var(--font-sans); color: var(--text); }
.kg-play__circle { display: inline-flex; align-items: center; justify-content: center;
  border-radius: 50%; flex-shrink: 0; transition: transform var(--dur-base) var(--ease-out),
    background var(--dur-base) var(--ease-out); }
.kg-play:hover .kg-play__circle { transform: scale(1.06); }
.kg-play:active .kg-play__circle { transform: scale(0.97); }
.kg-play--solid .kg-play__circle { background: var(--accent); color: var(--on-accent); }
.kg-play--solid:hover .kg-play__circle { background: var(--accent-hover); }
.kg-play--light .kg-play__circle { background: var(--porcelain); color: var(--espresso); box-shadow: var(--shadow-md); }
.kg-play--outline .kg-play__circle { background: transparent; border: 1.5px solid var(--border-strong); color: var(--text); }
.kg-play--outline:hover .kg-play__circle { background: var(--text); color: var(--bg); border-color: var(--text); }
.kg-play--sm .kg-play__circle { width: 48px; height: 48px; }
.kg-play--md .kg-play__circle { width: 64px; height: 64px; }
.kg-play--lg .kg-play__circle { width: 88px; height: 88px; }
.kg-play__circle svg { width: 38%; height: 38%; }
.kg-play__label { text-align: left; }
.kg-play__label b { display: block; font-weight: 600; font-size: 15px; }
.kg-play__label span { display: block; font-family: var(--font-mono); font-size: 11px;
  letter-spacing: 0.08em; color: var(--text-muted); text-transform: uppercase; }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-play-css")) {
  const s = document.createElement("style");
  s.id = "kg-play-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const PlayIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M8 5v14l11-7z"
}));
const PauseIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"
}));
function PlayButton({
  playing = false,
  onClick,
  variant = "solid",
  size = "md",
  label,
  sublabel,
  className = "",
  ...rest
}) {
  const cls = ["kg-play", `kg-play--${variant}`, `kg-play--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    onClick: onClick,
    "aria-pressed": playing,
    "aria-label": label || (playing ? "Pause" : "Play")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "kg-play__circle"
  }, playing ? PauseIcon : PlayIcon), (label || sublabel) && /*#__PURE__*/React.createElement("span", {
    className: "kg-play__label"
  }, label && /*#__PURE__*/React.createElement("b", null, label), sublabel && /*#__PURE__*/React.createElement("span", null, sublabel)));
}
Object.assign(__ds_scope, { PlayButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PlayButton.jsx", error: String((e && e.message) || e) }); }

// components/showcase/ReelCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kloe Gaye - ReelCard
 * Vertical 9:16 short-form video card with play overlay and view metric.
 */

const CSS = `
.kg-reel { position: relative; display: block; aspect-ratio: 9 / 16; border-radius: var(--radius-lg);
  overflow: hidden; background: var(--espresso); text-decoration: none; color: var(--porcelain); }
.kg-reel img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
  transition: transform var(--dur-slow) var(--ease-out); }
.kg-reel:hover img { transform: scale(1.06); }
.kg-reel__scrim { position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(37,28,30,0.30) 0%, rgba(37,28,30,0) 30%, rgba(37,28,30,0.78) 100%); }
.kg-reel__top { position: absolute; top: 12px; left: 12px; right: 12px; display: flex; justify-content: space-between; }
.kg-reel__platform { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
  background: rgba(251,246,241,0.16); backdrop-filter: blur(6px); padding: 5px 9px; border-radius: var(--radius-pill); }
.kg-reel__play { position: absolute; inset: 0; margin: auto; width: 56px; height: 56px; border-radius: 50%;
  background: rgba(251,246,241,0.92); display: flex; align-items: center; justify-content: center;
  transform: scale(0.9); opacity: 0.92; transition: transform var(--dur-base) var(--ease-out); }
.kg-reel:hover .kg-reel__play { transform: scale(1); }
.kg-reel__play svg { width: 20px; height: 20px; fill: var(--ink); margin-left: 3px; }
.kg-reel__bottom { position: absolute; left: 14px; right: 14px; bottom: 14px; }
.kg-reel__title { font-family: var(--font-sans); font-weight: 600; font-size: 14px; line-height: 1.3; }
.kg-reel__stat { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.04em; color: rgba(251,246,241,0.78);
  margin-top: 4px; display: flex; align-items: center; gap: 6px; }
.kg-reel__stat b { color: var(--porcelain); font-weight: 400; }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-reel-css")) {
  const s = document.createElement("style");
  s.id = "kg-reel-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const Play = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M8 5v14l11-7z"
}));
function ReelCard({
  image,
  alt = "",
  platform = "Reels",
  title,
  views,
  href = "#",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: ["kg-reel", className].filter(Boolean).join(" ")
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kg-reel__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kg-reel__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kg-reel__platform"
  }, platform)), /*#__PURE__*/React.createElement("div", {
    className: "kg-reel__play"
  }, Play), /*#__PURE__*/React.createElement("div", {
    className: "kg-reel__bottom"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "kg-reel__title"
  }, title), views && /*#__PURE__*/React.createElement("div", {
    className: "kg-reel__stat"
  }, /*#__PURE__*/React.createElement("b", null, views), " views")));
}
Object.assign(__ds_scope, { ReelCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/showcase/ReelCard.jsx", error: String((e && e.message) || e) }); }

// components/showcase/WorkCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kloe Gaye - WorkCard
 * Portfolio / case-study card: image, kicker meta, serif title, tags.
 */

const CSS = `
.kg-work { display: flex; flex-direction: column; gap: var(--space-4); text-decoration: none; color: inherit; }
.kg-work__media {
  position: relative; aspect-ratio: 4 / 3; overflow: hidden; border-radius: var(--radius-lg);
  background: var(--surface-sunken);
}
.kg-work__media img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  filter: saturate(1.02) contrast(1.02); transition: transform var(--dur-slow) var(--ease-out);
}
.kg-work:hover .kg-work__media img { transform: scale(1.045); }
.kg-work__media::after {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(180deg, rgba(37,28,30,0) 55%, rgba(37,28,30,0.28) 100%);
  mix-blend-mode: multiply;
}
.kg-work__index {
  position: absolute; top: 14px; left: 14px; z-index: 1;
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em;
  color: var(--porcelain); background: rgba(37,28,30,0.42);
  backdrop-filter: blur(6px); padding: 5px 9px; border-radius: var(--radius-pill);
}
.kg-work__meta { display: flex; align-items: center; gap: 10px; font-family: var(--font-mono);
  font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); }
.kg-work__meta span { color: var(--text-muted); }
.kg-work__title {
  font-family: var(--font-display); font-weight: 500; letter-spacing: -0.01em; line-height: 1.12;
  font-size: clamp(1.35rem, 2.4vw, 1.85rem); color: var(--text);
  transition: color var(--dur-base) var(--ease-out);
}
.kg-work:hover .kg-work__title { color: var(--accent); }
.kg-work__title em { font-style: italic; color: var(--accent); }
.kg-work__tags { display: flex; flex-wrap: wrap; gap: 8px; }
.kg-work__tag { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.06em;
  text-transform: uppercase; color: var(--text-muted); border: 1px solid var(--border);
  padding: 4px 9px; border-radius: var(--radius-pill); }
`;
if (typeof document !== "undefined" && !document.getElementById("kg-work-css")) {
  const s = document.createElement("style");
  s.id = "kg-work-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function WorkCard({
  image,
  alt = "",
  index,
  category,
  year,
  title,
  tags = [],
  href = "#",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: ["kg-work", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "kg-work__media"
  }, index != null && /*#__PURE__*/React.createElement("span", {
    className: "kg-work__index"
  }, index), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    loading: "lazy"
  })), (category || year) && /*#__PURE__*/React.createElement("div", {
    className: "kg-work__meta"
  }, category && /*#__PURE__*/React.createElement("span", null, category), category && year && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, "/"), year && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, year)), title && /*#__PURE__*/React.createElement("h3", {
    className: "kg-work__title"
  }, title), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "kg-work__tags"
  }, tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "kg-work__tag"
  }, t))));
}
Object.assign(__ds_scope, { WorkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/showcase/WorkCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/podcast/EpisodeHero.jsx
try { (() => {
// Kloe Gaye podcast - episode hero
const {
  Kicker,
  Tag,
  Badge,
  AudioPlayer,
  Button
} = window.KloeGayeDesignSystem_152bdb;
function EpisodeHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-invert)',
      color: 'var(--text-invert)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 'clamp(2rem,5vw,4.5rem)',
      paddingBlock: 'clamp(2.5rem,5vw,4.5rem)',
      alignItems: 'center'
    },
    className: "kgpod-hero"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--surface-invert)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://picsum.photos/seed/kgpodcover5/800/800",
    alt: "Episode cover",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      background: 'rgba(37,28,30,0.5)',
      backdropFilter: 'blur(6px)',
      color: 'var(--porcelain)',
      padding: '6px 11px',
      borderRadius: 'var(--radius-pill)'
    }
  }, "Ep. 24")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "invert",
    rule: true
  }, "The Content Engine"), /*#__PURE__*/React.createElement(Badge, {
    variant: "accent",
    dot: true
  }, "New")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.04,
      fontSize: 'clamp(2.1rem,4.4vw,3.6rem)',
      margin: '18px 0 0',
      color: 'var(--text-invert)'
    }
  }, "Building a show your audience ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)'
    }
  }, "finishes")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-invert-muted)',
      maxWidth: '50ch',
      marginTop: 20
    }
  }, "How I produce a weekly podcast end-to-end \u2014 booking, run-of-show, edit and the clips that actually travel. Plus the retention tricks that keep people listening to the last minute."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 18,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.04em',
      color: 'var(--text-invert-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "MAR 12, 2026"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "45 MIN"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "SEASON 2")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(AudioPlayer, {
    tone: "invert",
    duration: 2715
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 22,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "accent"
  }, "Podcast"), /*#__PURE__*/React.createElement(Tag, {
    variant: "wine"
  }, "Production"), /*#__PURE__*/React.createElement(Tag, null, "Retention"))))));
}
Object.assign(window, {
  EpisodeHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/podcast/EpisodeHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/podcast/EpisodeList.jsx
try { (() => {
// Kloe Gaye podcast - more episodes list
const {
  SectionHeader,
  Button
} = window.KloeGayeDesignSystem_152bdb;
const EPISODES = [{
  n: '23',
  title: 'Hooks that earn the first three seconds',
  dur: '38 min',
  date: 'Mar 5',
  img: 'kgpod23'
}, {
  n: '22',
  title: 'The content calendar that runs itself',
  dur: '41 min',
  date: 'Feb 26',
  img: 'kgpod22'
}, {
  n: '21',
  title: 'Hiring freelancers you can actually trust',
  dur: '44 min',
  date: 'Feb 19',
  img: 'kgpod21'
}, {
  n: '20',
  title: 'What I report to founders (and what I ignore)',
  dur: '36 min',
  date: 'Feb 12',
  img: 'kgpod20'
}];
function EpisodeRow({
  ep
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "kgpod-row",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      padding: '18px 0',
      borderBottom: '1px solid var(--divider)',
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      flexShrink: 0,
      position: 'relative',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://picsum.photos/seed/${ep.img}/160/160`,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "kgpod-rowplay",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(37,28,30,0.42)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'opacity .24s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "var(--porcelain)",
    style: {
      width: 18,
      height: 18,
      marginLeft: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-faint)',
      width: 32,
      flexShrink: 0
    }
  }, ep.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.1rem,1.8vw,1.4rem)',
      fontWeight: 500,
      flex: 1,
      lineHeight: 1.2
    },
    className: "kgpod-rowtitle"
  }, ep.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, ep.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-faint)',
      width: 56,
      textAlign: 'right',
      flexShrink: 0
    }
  }, ep.dur));
}
function EpisodeList() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-alt)',
      borderTop: '1px solid var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBlock: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    kicker: "More episodes",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Keep ", /*#__PURE__*/React.createElement("em", null, "listening")),
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      arrow: true
    }, "All 24 episodes")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      borderTop: '1px solid var(--divider)'
    }
  }, EPISODES.map(ep => /*#__PURE__*/React.createElement(EpisodeRow, {
    key: ep.n,
    ep: ep
  }))))));
}
Object.assign(window, {
  EpisodeList
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/podcast/EpisodeList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/podcast/ShowNotes.jsx
try { (() => {
// Kloe Gaye podcast - show notes, chapters, guest, subscribe
const {
  SectionHeader,
  Card,
  Avatar,
  Button,
  PlayButton,
  Kicker
} = window.KloeGayeDesignSystem_152bdb;
const CHAPTERS = [['00:00', 'Why most branded podcasts quietly die'], ['04:12', 'The run-of-show I use every week'], ['12:38', 'Booking guests who actually show up'], ['21:05', 'Editing for retention, not perfection'], ['31:50', 'Turning one episode into 20 clips'], ['39:24', 'The numbers I report to founders']];
function ShowNotes() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 0.7fr',
      gap: 'clamp(2rem,5vw,4rem)',
      alignItems: 'start'
    },
    className: "kgpod-notes"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    rule: true
  }, "Show notes"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--text-muted)',
      marginTop: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: '60ch'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text)'
    }
  }, "A weekly show is the hardest content format to keep alive \u2014 and the most valuable when you do. In this episode I walk through the exact system I run."), /*#__PURE__*/React.createElement("p", null, "We get into the planning doc, the booking flow, and why I edit for the drop-off curve instead of chasing a perfect cut. Then the part everyone asks about: how one 45-minute conversation becomes a month of short-form.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 500,
      marginBottom: 16
    }
  }, "Chapters"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--divider)'
    }
  }, CHAPTERS.map(([t, label], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "kgpod-chapter",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '15px 0',
      borderBottom: '1px solid var(--divider)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'var(--accent-soft)',
      color: 'var(--accent-hover)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    style: {
      width: 11,
      height: 11,
      marginLeft: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--accent)',
      width: 48,
      flexShrink: 0
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--text)'
    }
  }, label)))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "md"
  }, /*#__PURE__*/React.createElement(Kicker, {
    rule: true
  }, "Host"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Kloe Gaye",
    size: "md",
    ring: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16
    }
  }, "Kloe Gaye"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Head of Content"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      marginTop: 16
    }
  }, "Strategy, video and podcasts for brands who want to be watched.")), /*#__PURE__*/React.createElement(Card, {
    tone: "tint",
    pad: "md"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 500,
      margin: 0
    }
  }, "Subscribe"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: '8px 0 16px'
    }
  }, "New episode every Thursday."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    full: true,
    arrow: true
  }, "Apple Podcasts"), /*#__PURE__*/React.createElement(Button, {
    full: true,
    variant: "secondary"
  }, "Spotify")))))));
}
Object.assign(window, {
  ShowNotes
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/podcast/ShowNotes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
// Kloe Gaye portfolio - about + testimonial
const {
  Kicker,
  Quote,
  Avatar,
  Tag
} = window.KloeGayeDesignSystem_152bdb;
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      paddingBlock: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'clamp(2rem,5vw,5rem)',
      alignItems: 'center'
    },
    className: "kgp-about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '5/6',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://picsum.photos/seed/kgabout6/800/960",
    alt: "Kloe at work",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(1.02) contrast(1.02)'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    rule: true
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.08,
      fontSize: 'clamp(2rem,3.6vw,3rem)',
      margin: '18px 0 0'
    }
  }, "I\u2019ve been the whole content team \u2014 so I know how to ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)'
    }
  }, "build"), " one."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      marginTop: 26,
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--text-muted)',
      maxWidth: '52ch'
    }
  }, /*#__PURE__*/React.createElement("p", null, "For seven years I\u2019ve led content for founder-led and DTC brands: setting the strategy, shooting and editing the work, producing the podcast, and reporting on what actually moved the numbers."), /*#__PURE__*/React.createElement("p", null, "I hire and train freelancers, own the calendar, and keep the whole engine running week after week. If you want a Head of Content who can both think and ship \u2014 that\u2019s the job I love.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "7 yrs experience"), /*#__PURE__*/React.createElement(Tag, null, "DTC & founder-led"), /*#__PURE__*/React.createElement(Tag, null, "Remote / hybrid")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(3rem,6vw,5rem)',
      paddingTop: 'clamp(2.5rem,4vw,3.5rem)',
      borderTop: '1px solid var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    align: "center",
    name: "Amara Rivera",
    role: "Founder, Maed Studio",
    avatar: /*#__PURE__*/React.createElement(Avatar, {
      name: "Amara Rivera",
      size: "sm"
    })
  }, "Kloe gave us a content engine that ", /*#__PURE__*/React.createElement("em", null, "runs itself"), ". Six months in, inbound doubled and we finally sound like one brand everywhere.")))));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
// Kloe Gaye portfolio - contact CTA + footer
const {
  Button,
  Kicker,
  IconButton,
  Field,
  Input,
  Textarea
} = window.KloeGayeDesignSystem_152bdb;
function Footer() {
  const socials = [['instagram', '#'], ['youtube', '#'], ['linkedin', '#'], ['mail', '#']];
  return /*#__PURE__*/React.createElement("footer", {
    id: "contact",
    style: {
      background: 'var(--bg-invert)',
      color: 'var(--text-invert)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 'clamp(2.5rem,6vw,6rem)',
      paddingBlock: 'var(--section-y)',
      alignItems: 'start'
    },
    className: "kgp-contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    tone: "invert",
    rule: true
  }, "Contact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 1.0,
      fontSize: 'clamp(2.5rem,6vw,5rem)',
      margin: '20px 0 0',
      color: 'var(--text-invert)'
    }
  }, "Let\u2019s build your", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontWeight: 500,
      color: 'var(--accent)'
    }
  }, "content engine"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-invert-muted)',
      maxWidth: '40ch',
      marginTop: 24
    }
  }, "Hiring a Head of Content? Tell me about the brand and the goal \u2014 I reply within a day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@kloegaye.com",
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'clamp(1.25rem,2.4vw,1.8rem)',
      color: 'var(--text-invert)',
      borderBottom: '1px solid var(--accent)',
      paddingBottom: 4
    }
  }, "hello@kloegaye.com")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 34
    }
  }, socials.map(([k, h]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: h,
    "aria-label": k,
    className: "kgp-social",
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: '1px solid var(--border-invert)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-invert)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      display: 'inline-flex'
    }
  }, window.Icon[k]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-invert)',
      border: '1px solid var(--border-invert)',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(1.5rem,3vw,2.25rem)'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    },
    className: "kgp-form"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Your name"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Company email"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "you@brand.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "What do you need?"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "We\u2019re launching a podcast and need someone to own content end-to-end\u2026"
  })), /*#__PURE__*/React.createElement(Button, {
    full: true,
    size: "lg",
    arrow: true
  }, "Send the brief")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-invert)',
      paddingBlock: 28,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600
    }
  }, "Kloe ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)'
    }
  }, "Gaye")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.06em',
      color: 'var(--text-invert-muted)',
      textTransform: 'uppercase'
    }
  }, "\xA9 2026 \u2014 Head of Content"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
// Kloe Gaye portfolio - hero
const {
  Button,
  Kicker,
  Marquee,
  Badge
} = window.KloeGayeDesignSystem_152bdb;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      paddingTop: 'clamp(2rem,5vw,4rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.25fr 0.9fr',
      gap: 'clamp(2rem,5vw,5rem)',
      alignItems: 'center',
      paddingBlock: 'clamp(2rem,5vw,4.5rem)'
    },
    className: "kgp-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    rule: true,
    index: "01 / 04"
  }, "Head of Content \xB7 Strategy"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 0.98,
      fontSize: 'clamp(3.25rem, 7.5vw, 6.5rem)',
      margin: '22px 0 0'
    }
  }, "Content that", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontWeight: 500,
      color: 'var(--accent)'
    }
  }, "moves"), " people."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(1.05rem,1.5vw,1.25rem)',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: '44ch',
      marginTop: 28
    }
  }, "I\u2019m Kloe \u2014 I build and run content programs for brands who want to be watched. Strategy, short- and long-form video, and podcasts that earn attention and keep it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    arrow: true,
    href: "#work"
  }, "View the work"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    arrow: true,
    href: "#podcast"
  }, "Listen to the podcast")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "success",
    dot: true
  }, "Open to lead roles"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      color: 'var(--text-faint)',
      textTransform: 'uppercase'
    }
  }, "2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/5',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://picsum.photos/seed/kgportrait4/720/900",
    alt: "Kloe Gaye",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(1.02) contrast(1.02)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(37,28,30,0) 60%, rgba(37,28,30,0.25))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -18,
      left: -18,
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: '14px 18px',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 30,
      fontWeight: 600,
      lineHeight: 1,
      color: 'var(--text)'
    }
  }, "3.4M"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "views / 6\xA0months"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--divider)',
      borderBottom: '1px solid var(--divider)',
      padding: '20px 0',
      marginTop: 'clamp(1rem,3vw,2.5rem)'
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, "Social ", /*#__PURE__*/React.createElement("em", null, "strategy")), 'Short-form video', 'Podcast production', /*#__PURE__*/React.createElement(React.Fragment, null, "Content ", /*#__PURE__*/React.createElement("em", null, "calendars")), 'Marketing analytics', 'Long-form video', 'Team &amp; schedules']
  })));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Nav.jsx
try { (() => {
// Kloe Gaye portfolio - sticky navigation
const {
  Button
} = window.KloeGayeDesignSystem_152bdb;
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
  const links = [['Work', '#work'], ['Services', '#services'], ['About', '#about'], ['Podcast', '#podcast']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(11,14,18,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'background .3s var(--ease-out), border-color .3s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1,
      color: 'var(--text)'
    }
  }, "Kloe ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontWeight: 500
    }
  }, "Gaye")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 34
    }
  }, links.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: h,
    className: "kgp-navlink",
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text)',
      letterSpacing: '-0.01em'
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    arrow: true,
    href: "#contact"
  }, "Book a call"))));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Services.jsx
try { (() => {
// Kloe Gaye portfolio - services (accordion)
const {
  SectionHeader,
  Accordion
} = window.KloeGayeDesignSystem_152bdb;
const SERVICES = [{
  index: '01',
  title: 'Social media strategy',
  body: 'Channel plans, positioning, hooks and posting calendars - plus the weekly reporting that proves it&rsquo;s working.'
}, {
  index: '02',
  title: 'Short & long-form video',
  body: 'Reels, shorts and YouTube. Scripted, shot-listed, edited and scheduled - a steady drumbeat, not one-off hits.'
}, {
  index: '03',
  title: 'Podcast production',
  body: 'End-to-end: guest booking, run-of-show, edit, publish and clips. A show that ships every week without you chasing it.'
}, {
  index: '04',
  title: 'Content calendars',
  body: 'One calendar across every channel, mapped to launches and goals, so nothing ships late or off-brand.'
}, {
  index: '05',
  title: 'Marketing data & analytics',
  body: 'Dashboards that track what matters - reach, saves, retention, conversion - and the read on what to do next.'
}, {
  index: '06',
  title: 'Teams & schedules',
  body: 'Hiring, training and managing freelancers and the production schedule, so the engine keeps running when you scale.'
}];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      background: 'var(--bg-alt)',
      borderTop: '1px solid var(--divider)',
      borderBottom: '1px solid var(--divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: 'clamp(2rem,5vw,5rem)',
      paddingBlock: 'var(--section-y)',
      alignItems: 'start'
    },
    className: "kgp-services-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    kicker: "Services",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "What I ", /*#__PURE__*/React.createElement("em", null, "run")),
    lede: "One operator, the whole content function \u2014 from the strategy doc to the last published frame."
  })), /*#__PURE__*/React.createElement(Accordion, {
    items: SERVICES,
    defaultOpen: 0
  }))));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Statement.jsx
try { (() => {
// Kloe Gaye portfolio - cinematic statement band (dark) + results
const {
  Stat,
  Kicker,
  Marquee
} = window.KloeGayeDesignSystem_152bdb;
function Statement() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-invert)',
      color: 'var(--text-invert)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBlock: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "invert",
    rule: true
  }, "The way I work"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.14,
      fontSize: 'clamp(1.9rem, 4.2vw, 3.4rem)',
      maxWidth: '20ch',
      margin: '24px 0 0',
      color: 'var(--text-invert)',
      textWrap: 'balance'
    }
  }, "Great content doesn\u2019t shout. It ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)'
    }
  }, "shows up"), " \u2014 on time, on brand, every single week."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'clamp(1.5rem,3vw,3rem)',
      marginTop: 'clamp(2.5rem,5vw,4.5rem)',
      paddingTop: 'clamp(2rem,4vw,3rem)',
      borderTop: '1px solid var(--border-invert)'
    },
    className: "kgp-stats-grid"
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "invert",
    value: "3.4",
    suffix: "M",
    label: "Organic views in six months"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "invert",
    value: "62",
    suffix: "%",
    label: "Lift in saves per post"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "invert",
    value: "120",
    suffix: "+",
    label: "Episodes shipped on schedule"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "invert",
    value: "4",
    suffix: "x",
    label: "Output with the same budget"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-invert)',
      padding: '18px 0'
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    tone: "invert",
    reverse: true,
    items: ['Strategy', /*#__PURE__*/React.createElement(React.Fragment, null, "that ", /*#__PURE__*/React.createElement("em", null, "ships")), 'Video', 'Podcasts', 'Calendars', /*#__PURE__*/React.createElement(React.Fragment, null, "that ", /*#__PURE__*/React.createElement("em", null, "convert")), 'Analytics']
  })));
}
Object.assign(window, {
  Statement
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Statement.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/WorkGrid.jsx
try { (() => {
// Kloe Gaye portfolio - selected work grid with filters
const {
  SectionHeader,
  Tag,
  WorkCard,
  Button
} = window.KloeGayeDesignSystem_152bdb;
const WORK = [{
  id: 1,
  cat: 'Social',
  image: 'kgwork11',
  category: 'Social + Video',
  year: '2026',
  title: /*#__PURE__*/React.createElement(React.Fragment, null, "The launch that ", /*#__PURE__*/React.createElement("em", null, "landed")),
  tags: ['Strategy', 'Reels', 'Paid']
}, {
  id: 2,
  cat: 'Podcast',
  image: 'kgwork22',
  category: 'Podcast',
  year: '2025',
  title: /*#__PURE__*/React.createElement(React.Fragment, null, "A show people ", /*#__PURE__*/React.createElement("em", null, "finish")),
  tags: ['Production', 'Booking', 'Clips']
}, {
  id: 3,
  cat: 'Video',
  image: 'kgwork33',
  category: 'Long-form video',
  year: '2025',
  title: /*#__PURE__*/React.createElement(React.Fragment, null, "Founder series, ", /*#__PURE__*/React.createElement("em", null, "binged")),
  tags: ['Script', 'Edit', 'YouTube']
}, {
  id: 4,
  cat: 'Social',
  image: 'kgwork44',
  category: 'Social',
  year: '2024',
  title: /*#__PURE__*/React.createElement(React.Fragment, null, "From quiet to ", /*#__PURE__*/React.createElement("em", null, "sold out")),
  tags: ['Calendar', 'Hooks', 'Analytics']
}];
const FILTERS = ['All', 'Social', 'Video', 'Podcast'];
function WorkGrid() {
  const [f, setF] = React.useState('All');
  const shown = f === 'All' ? WORK : WORK.filter(w => w.cat === f);
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      paddingBlock: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    kicker: "Selected Work",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Proof, not ", /*#__PURE__*/React.createElement("em", null, "promises")),
    lede: "A few programs I\u2019ve led end-to-end \u2014 strategy through to the published, performing work.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      arrow: true
    }, "All case studies")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, FILTERS.map(x => /*#__PURE__*/React.createElement(Tag, {
    key: x,
    active: f === x,
    onClick: () => setF(x)
  }, x))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'clamp(1.5rem,3vw,3rem)',
      marginTop: 38
    },
    className: "kgp-work-grid"
  }, shown.map((w, i) => /*#__PURE__*/React.createElement(WorkCard, {
    key: w.id,
    image: `https://picsum.photos/seed/${w.image}/900/680`,
    index: String(i + 1).padStart(2, '0'),
    category: w.category,
    year: w.year,
    title: w.title,
    tags: w.tags
  })))));
}
Object.assign(window, {
  WorkGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/WorkGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/icons.jsx
try { (() => {
// Kloe Gaye portfolio - shared inline icons + helpers
const Icon = {
  instagram: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "0.6",
    fill: "currentColor"
  })),
  youtube: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "5",
    width: "20",
    height: "14",
    rx: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 9l5 3-5 3z",
    fill: "currentColor",
    stroke: "none"
  })),
  linkedin: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H17.6v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z"
  })),
  mail: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 7 9 6 9-6"
  })),
  arrow: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  arrowUp: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7M8 7h9v9"
  }))
};
Object.assign(window, {
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/ReelGrid.jsx
try { (() => {
// Kloe Gaye social - reel showcase grid with platform filter
const {
  ReelCard,
  Tag
} = window.KloeGayeDesignSystem_152bdb;
const REELS = [{
  id: 1,
  p: 'TikTok',
  img: 'kgr31',
  title: '3 hooks that doubled saves',
  views: '1.2M'
}, {
  id: 2,
  p: 'Reels',
  img: 'kgr32',
  title: 'Behind the rebrand',
  views: '840K'
}, {
  id: 3,
  p: 'Shorts',
  img: 'kgr33',
  title: 'The 7-second rule',
  views: '2.1M'
}, {
  id: 4,
  p: 'Reels',
  img: 'kgr34',
  title: 'How we plan a month',
  views: '560K'
}, {
  id: 5,
  p: 'TikTok',
  img: 'kgr35',
  title: 'Founder Q&A, clipped',
  views: '930K'
}, {
  id: 6,
  p: 'Shorts',
  img: 'kgr36',
  title: 'Editing for retention',
  views: '1.5M'
}, {
  id: 7,
  p: 'Reels',
  img: 'kgr37',
  title: 'Launch day recap',
  views: '410K'
}, {
  id: 8,
  p: 'TikTok',
  img: 'kgr38',
  title: 'One shoot, twenty clips',
  views: '1.8M'
}];
const PLATFORMS = ['All', 'Reels', 'TikTok', 'Shorts'];
function ReelGrid() {
  const [f, setF] = React.useState('All');
  const shown = f === 'All' ? REELS : REELS.filter(r => r.p === f);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      margin: '8px 0 28px',
      flexWrap: 'wrap'
    }
  }, PLATFORMS.map(p => /*#__PURE__*/React.createElement(Tag, {
    key: p,
    active: f === p,
    onClick: () => setF(p)
  }, p))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'clamp(1rem,1.8vw,1.5rem)'
    },
    className: "kgsoc-grid"
  }, shown.map(r => /*#__PURE__*/React.createElement(ReelCard, {
    key: r.id,
    image: `https://picsum.photos/seed/${r.img}/450/800`,
    platform: r.p,
    title: r.title,
    views: r.views
  })))));
}
Object.assign(window, {
  ReelGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/ReelGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/SocialHero.jsx
try { (() => {
// Kloe Gaye social - hero
const {
  Kicker,
  Tag,
  Stat,
  Button
} = window.KloeGayeDesignSystem_152bdb;
function SocialHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 'clamp(2rem,5vw,4rem)',
      paddingBottom: 'clamp(1rem,3vw,2rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    rule: true,
    index: "Reels / Shorts / TikTok"
  }, "Social content"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 0.98,
      fontSize: 'clamp(2.75rem,7vw,6rem)',
      margin: '20px 0 0',
      maxWidth: '14ch'
    }
  }, "Short-form that ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontWeight: 500,
      color: 'var(--accent)'
    }
  }, "travels"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32,
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(1.05rem,1.5vw,1.2rem)',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: '46ch'
    }
  }, "Hooks, edits and posting rhythm that turn scroll-past into saves, shares and sign-ups. Here\u2019s a slice of what\u2019s been performing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(1.5rem,3vw,3rem)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "48",
    suffix: "M",
    label: "Views across platforms"
  }), /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "310",
    suffix: "K",
    label: "New followers"
  }), /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "6.2",
    suffix: "%",
    label: "Avg. engagement"
  })))));
}
Object.assign(window, {
  SocialHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/SocialHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Spotlight.jsx
try { (() => {
// Kloe Gaye social - campaign spotlight + CTA
const {
  SectionHeader,
  Stat,
  Tag,
  Button,
  Kicker
} = window.KloeGayeDesignSystem_152bdb;
function Spotlight() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-invert)',
      color: 'var(--text-invert)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(2rem,5vw,4.5rem)',
      paddingBlock: 'var(--section-y)',
      alignItems: 'center'
    },
    className: "kgsoc-spot"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/3',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://picsum.photos/seed/kgcampaign8/900/680",
    alt: "Campaign",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    tone: "invert",
    rule: true
  }, "Campaign spotlight"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.06,
      fontSize: 'clamp(2rem,3.8vw,3.2rem)',
      margin: '18px 0 0',
      color: 'var(--text-invert)'
    }
  }, "A 30-day sprint that ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)'
    }
  }, "sold out"), " the drop"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-invert-muted)',
      maxWidth: '46ch',
      marginTop: 18
    }
  }, "One concept, three platforms, daily posting. We built anticipation with teasers, peaked at launch, and kept the momentum with UGC and clips."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(1.5rem,3vw,3rem)',
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "invert",
    size: "sm",
    value: "12",
    suffix: "M",
    label: "Reach in 30 days"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "invert",
    size: "sm",
    value: "100",
    suffix: "%",
    label: "Drop sold out"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "invert",
    size: "sm",
    value: "3",
    suffix: "x",
    label: "Return on spend"
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.04,
      fontSize: 'clamp(2.25rem,5vw,4rem)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "Want this kind of work for ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent)'
    }
  }, "your"), " brand?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    arrow: true
  }, "Book a call"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "See full portfolio")))));
}
Object.assign(window, {
  Spotlight
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Spotlight.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.AudioPlayer = __ds_scope.AudioPlayer;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.PlayButton = __ds_scope.PlayButton;

__ds_ns.ReelCard = __ds_scope.ReelCard;

__ds_ns.WorkCard = __ds_scope.WorkCard;

})();
