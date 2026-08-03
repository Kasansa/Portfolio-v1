const capabilities = [
  "Product design & development",
  "Mining & industrial systems",
  "Prototyping & validation",
  "Sensor integration & IoT",
];

function Landing() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Engineering practical products for <em>real-world environments.</em></h1>
            <p className="hero-lead">
              I’m Kasansa Kuya, a mechanical engineer focused on product design, mining technology,
              industrial monitoring systems, and the journey from concept to tested prototype.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">Explore my work <span>↘</span></a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-index">01 — PROFILE</div>
            <div className="portrait-frame">
              <img src="me.png" alt="Kasansa Kuya" />
            </div>
            <div className="portrait-note">Mechanical engineer<br />Product designer</div>
          </div>
        </div>
        <div className="capability-strip" aria-label="Core capabilities">
          {capabilities.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-kicker">About</div>
        <div className="about-grid">
          <h2>I turn technical requirements into manufacturable, testable solutions.</h2>
          <div className="about-copy">
            <p>With more than four years of experience, I’ve worked across industrial product development, harsh-environment equipment, condition monitoring, technical documentation, and structural engineering support.</p>
            <p>I collaborate across mechanical, electronic, firmware, manufacturing, procurement, site, and customer-facing teams—balancing performance, durability, cost, and delivery.</p>
            <div className="stat-row">
              <div><strong>4+</strong><span>Years of engineering experience</span></div>
              <div><strong>10+</strong><span>Industrial systems and product initiatives</span></div>
              <div><strong>3</strong><span>Engineering disciplines across my work</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
