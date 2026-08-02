import ProjectCard from "../Components/ProjectCard";
import { projects } from "../Components/Projectslists";

function Projects() {
  return (
    <section className="section work" id="work">
      <div className="work-heading">
        <div>
          <div className="section-kicker">Selected work</div>
          <h2>Systems designed for use—not just for show.</h2>
        </div>
        <p>Selected work is described at a high level to respect the confidential nature of industrial product development.</p>
      </div>
      <div className="project-grid">
        {projects.map(project => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  );
}

export default Projects;
