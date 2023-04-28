import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary dark">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="#">
            Student-DB
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </div>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">
              <AccountCircleIcon sx={{ fontSize: 40 }}/>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
