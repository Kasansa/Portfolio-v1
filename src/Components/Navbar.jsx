import { useEffect, useState } from "react";

const links = [
  ["about", "About"],
  ["experience", "Experience"],
  ["work", "Selected work"],
  ["contact", "Contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`topbar ${scrolled ? "topbar--scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="Kasansa Kuya, home">
        <span className="brand-mark">KK</span>
        <span className="brand-name">Kasansa Kuya</span>
      </a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        <span />
        <span />
      </button>
      <nav className={open ? "nav-links nav-links--open" : "nav-links"} aria-label="Main navigation">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
