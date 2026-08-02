function Footer() {
  return (
    <footer id="contact">
      <div className="footer-kicker">Let’s build something useful.</div>
      <h2>Have an engineering challenge in mind?</h2>
      <a className="footer-email" href="mailto:Mr.kuya@outlook.com">Mr.kuya@outlook.com <span>↗</span></a>
      <div className="footer-bottom">
        <span>Kasansa Kuya © {new Date().getFullYear()}</span>
        <div>
          <a href="https://www.linkedin.com/in/kasansa-k-29a438134/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Kasansa" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
