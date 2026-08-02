import PropTypes from "prop-types";

const ProjectCard = ({ project }) => (
  <article className="project-card">
    <div className="project-image">
      <img src={project.image} alt="" />
      <span>{project.number}</span>
    </div>
    <div className="project-body">
      <p className="project-category">{project.category}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-contribution"><b>Contribution</b>{project.contribution}</div>
    </div>
  </article>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    contribution: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
