import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2>Consent Manager</h2>

      <div>
        <Link
          className={location.pathname === "/" ? "active" : ""}
          to="/"
        >
          Home
        </Link>

        <Link
          className={location.pathname === "/admin" ? "active" : ""}
          to="/admin"
        >
          Admin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;