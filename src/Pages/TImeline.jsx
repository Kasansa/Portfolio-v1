const roles = [
  {
    date: "Jun 2025 — Present",
    role: "Junior Mechanical Engineer",
    company: "NEROSPEC",
    summary: "Designing industrial products from concept through prototype for mining, monitoring, sensing, training, and industrial applications.",
    points: ["CAD models, drawings, BOMs and manufacturing documentation", "Prototype planning, supplier coordination and validation", "Concurrent product-development workstreams and management presentations"],
  },
  {
    date: "Oct 2023 — May 2025",
    role: "Structural Design Consultant",
    company: "Kuyanga Investments Ltd",
    summary: "Supported the structural design and quality assurance of a commercial shopping mall development.",
    points: ["Reinforced concrete columns, arches, beams and supporting elements", "Architectural-to-structural drawing coordination", "Site quality checks and cost-conscious material selection"],
  },
  {
    date: "Aug 2021 — Sep 2023",
    role: "Junior Mechanical Engineer",
    company: "NEROSPEC",
    summary: "Worked with multidisciplinary teams on mining technology, underground equipment, industrial IoT, product design, and site support.",
    points: ["Harsh-environment enclosures, jigs, brackets and prototype builds", "Engineering investigations and manufacturability improvements", "BOMs, drawing registers, CAD files and technical records"],
  },
];

const skillGroups = [
  ["Design", "SolidWorks", "AutoCAD", "Revit", "CAD modelling", "Design for manufacture"],
  ["Build & test", "Prototyping", "Technical drawings", "BOMs", "Testing & validation", "3D printing"],
  ["Systems", "Mining systems", "Condition monitoring", "Sensor integration", "Pressure monitoring", "Industrial IoT"],
  ["Digital", "Python", "JavaScript", "React", "Data analysis", "AI-assisted workflows"],
];

function Timeline() {
  return (
    <>
      <section className="section experience" id="experience">
        <div className="section-heading">
          <div className="section-kicker">Experience</div>
          <h2>Built at the intersection of mechanics, electronics, and field reality.</h2>
        </div>
        <div className="role-list">
          {roles.map((item, index) => (
            <article className="role" key={item.date}>
              <div className="role-number">0{index + 1}</div>
              <time>{item.date}</time>
              <div className="role-main">
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.summary}</p>
                <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="section-kicker">Technical toolkit</div>
        <div className="skills-grid">
          <h2>Tools are only useful when they move an idea closer to reality.</h2>
          <div>
            {skillGroups.map(([title, ...items]) => (
              <div className="skill-row" key={title}>
                <h3>{title}</h3>
                <div>{items.map(item => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline;
