import React, { useContext, useState } from "react";
import "../styles/global.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import API from "../../global.js";
import { useAuth } from "../../context/Authcontext.js";
import Usercontext from "../../context/Usercontext.js";


function LoginForm() {
  const [auth, setAuth] = useAuth();
  const userData =useContext(Usercontext)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) errors.email = "Please enter an email";
      if (!values.password) errors.password = "Please enter a password";
      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await axios.post(`${API}/api/user/login`, values);
    //  console.log(response)
        if (response && response.data.success) {
          toast.success(response.data.message);
          setAuth({
            ...auth,
            user: response.data.user,
            role:response.data.user,
            token: response.data.token,
          });
          localStorage.setItem(
            "auth",
            JSON.stringify({
              ...response.data,
            })
          );
          navigate(location.state || "/user-dashboard");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error("Error logging in:", error);
        toast.error("An error occurred while logging in.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    // src={LoginImage}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control form-control-lg"
                          placeholder="Email address"
                          value={formik.values.email}
                          onChange={(e)=>{
                            userData.setUser({name:e.target.value})
                          }}
                          onBlur={formik.handleBlur}
                           {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email && (
                          <div className="text-danger">
                            {formik.errors.email}
                          </div>
                        )}
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control form-control-lg"
                          placeholder="Password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password && (
                          <div className="text-danger">
                            {formik.errors.password}
                          </div>
                        )}
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? "Logging in..." : "Login"}
                        </button>
                      </div>
                      <Link to="/forgot-password" className="small text-muted">
                        Forgot password?
                      </Link>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <Link to="/register" style={{ color: "#393f81" }}>
                          Register here
                        </Link>
                      </p>
                      <Link to="#" className="small text-muted">
                        Terms of use.
                      </Link>
                      <Link to="#" className="small text-muted">
                        Privacy policy
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
