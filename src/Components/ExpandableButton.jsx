import React, { useState } from 'react';

const ExpandableButton = ({title,info}) => {

  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(expanded ? false : true);
  };

  return (
    <button
      onClick={handleClick}
      className="btn-lg  btn btn-primary transition-all duration-300"
    >
      {expanded ? info : title}
    </button>
  );
};

export default ExpandableButton;
