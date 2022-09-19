import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound(){
  return (
    <p>
      Page Not found. Go to <Link to="/news">Home</Link>
    </p>
  );
};

export default PageNotFound;