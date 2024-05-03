import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const handleLogout = () => {
    logout();
  };

  const authLinks = (
    <ul>
      <li>
        <Link to="/search">Explore</Link>
      </li>
      <li>
        <Link to="/wishlist">Wishlist</Link>
      </li>
      <li>
        <Link to="/account">Account</Link>
      </li>
      <li>
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      </li>
    </ul>
  );

  const visitorLinks = (
    <ul>
      <li>
        <Link to="/search">Explore</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to={isAuthenticated ? "/main" : "/"}>VGC</Link>
      </h1>
      <SearchBar />
      {!loading && (isAuthenticated ? authLinks : visitorLinks)}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
