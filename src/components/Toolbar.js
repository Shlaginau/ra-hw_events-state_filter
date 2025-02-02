import React from 'react';

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelectFilter(filter)}
          className={filter === selected ? 'active' : ''}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;
