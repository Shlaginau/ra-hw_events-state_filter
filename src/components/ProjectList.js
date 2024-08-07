import React from 'react';

function ProjectList({ projects }) {
  return (
    <div className="projectList">
      {projects.map((project, index) => (
        <div key={index} className="image">
          <img src={project.img} alt={`Project ${index}`} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
