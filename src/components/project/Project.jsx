import { NavLink } from 'react-router-dom';
import './style.css';

const Project = ({ title, img, index, gitHubLink, demoLink }) => {
  return (
    <li className="project">
      <NavLink to={`/project/${index}`}>
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </NavLink>

      <div className="project__links">
        {gitHubLink && (
          <a href={gitHubLink} target="_blank" rel="noreferrer" className="btn">
            GitHub
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noreferrer" className="btn">
            Demo
          </a>
        )}
      </div>
    </li>
  );
};

export default Project;
