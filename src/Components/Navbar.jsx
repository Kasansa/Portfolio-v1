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

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className={`topbar ${scrolled ? "topbar--scrolled" : ""}`}>
      <button className="brand" type="button" onClick={() => scrollTo("top")} aria-label="Kasansa Kuya, home">
        <span className="brand-mark">KK</span>
        <span className="brand-name">Kasansa Kuya</span>
      </button>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        <span />
        <span />
      </button>
      <nav className={open ? "nav-links nav-links--open" : "nav-links"} aria-label="Main navigation">
        {links.map(([id, label]) => (
          <button key={id} type="button" onClick={() => scrollTo(id)}>{label}</button>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
