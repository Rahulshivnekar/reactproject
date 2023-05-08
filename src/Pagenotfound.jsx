import React from "react";
import { Link } from "react-router-dom";

const PagenotFound = () => {
  return (<>
  
    <div className="container text-center mt-5">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link to="/dashboard" className="btn btn-primary">Go to Homepage</Link>
    </div>
    </>
  );
};

export default PagenotFound;
