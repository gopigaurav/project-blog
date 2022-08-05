import React from "react";
import { Link } from "react-router-dom";

// mt --> margin top
const Header = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;
  const handleClick = (atv) => {
    setActive((prev) => (prev = atv));
    document.getElementById("navbarSupportedContent").classList.remove("show");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid bg-faded padding-media">
        <div className="container-navbar-sp padding-media">
          <nav className="navbar navbar-toggleable-md navbar-light">
            <div className="navbar-container-hd">
              <p>Blogs</p>
            </div>
            <div className="navbar-container-toggle-big">
              <button
                className="navbar--toggler navbar-toggle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                data-bs-parent="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="true"
                aria-label="Toggle Navigation"
              >
                <span className="fa fa-bars"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse navbar-maxwidth"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav navbar-nav-fl me-auto mb-2 mb-lg-0 ">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "home" ? "active" : ""
                    }`}
                    onClick={() => handleClick("home")}
                  >
                    Home
                  </li>
                </Link>

                <Link to="/create" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "create" ? "active" : ""
                    }`}
                    onClick={() => handleClick("create")}
                  >
                    Create
                  </li>
                </Link>
              </ul>
              <div className="row g-3">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-profile">
                  {userId ? (
                    <>
                      <div className="profile-logo">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          alt="logo"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <p style={{ margin: "0 10px"}}>
                        {user?.displayName}
                      </p>
                      <li className="nav-item nav-link" onClick={handleLogout}>
                        Logout
                      </li>
                    </>
                  ) : (
                    <Link to="/auth" style={{ textDecoration: "none" }}>
                      <li
                        className={`nav-item nav-link ${
                          active === "login" ? "active" : ""
                        }`}
                        onClick={() => handleClick("login")}
                      >
                        Login
                      </li>
                    </Link>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
