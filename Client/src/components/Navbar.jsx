import { Link, useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();

    return (

        <nav className="navbar">

            <div className="logo">

                🛡 Digital Personal Data Protection Platform

            </div>

            <div className="nav-links">

                <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                >
                    Home
                </Link>

                <Link
                    to="/admin"
                    className={location.pathname === "/admin" ? "active" : ""}
                >
                    Admin
                </Link>

            </div>

        </nav>

    );

}

export default Navbar;