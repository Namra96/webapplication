import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
      <div>
          <h1>Home Page</h1>
          <Link to="/register">Register</Link>
      </div>
 
  );
}

export default HomePage;
