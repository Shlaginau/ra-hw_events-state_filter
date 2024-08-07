import React, { useState } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

function Portfolio({ filters, projects }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const getFilteredProjects = () => {
    if (selectedFilter === 'All') {
      return projects;
    }
    return projects.filter((project) => project.category === selectedFilter);
  };

  const filteredProjects = getFilteredProjects();

  return (
    <div>
      <Toolbar
        filters={filters}
        selected={selectedFilter}
        onSelectFilter={handleFilterChange}
      />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default Portfolio;
