import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/BtnGitHub.jsx';
import { projects } from './../helpers/projectsList.jsx';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {/* Кнопка GitHub с правильной ссылкой */}
          {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}

          {/* Если есть ссылка на демо, добавляем её */}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="link-btn"
            >
              View Demo
            </a>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
