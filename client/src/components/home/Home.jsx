import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="border">
        <div className="admin-login">
          <button>
            <Link className="a" to="/adminlogin">
              Admin login
            </Link>
          </button>
        </div>
        <div className="user-login">
          <button>
            <Link className="a" to="/userlogin">
              User login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
