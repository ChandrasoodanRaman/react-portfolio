import React from 'react';

function ProjectItem({ image, name, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className='projectItemLink'>
      <div className='projectItem'>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1>{name}</h1>
      </div>
    </a>
  );
}

export default ProjectItem;
