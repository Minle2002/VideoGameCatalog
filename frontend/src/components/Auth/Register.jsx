import React, { useState, useEffect } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom"; // Updated import
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password, password2 } = formData;
  const navigate = useNavigate(); // Using useNavigate hook

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password });
  };

  // Redirect if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/main"); // Redirecting using navigate
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="auth-background">
      <div className="form-wrapper">
        <h2>Sign Up</h2>
        <form onSubmit={onSubmit} className="form">
          <div className="form-control">
            <input type="text" name="name" value={name} onChange={onChange} />
            <label>Name</label>
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
            />
            <label>Email</label>
          </div>
          <div className="form-control">
            <input
              type="password"
              value={password}
              onChange={onChange}
              name="password"
            />
            <label>Password</label>
          </div>

          <button type="submit" className="button">
            Sign Up
          </button>
        </form>
        <p>
          Already Have an Account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
