import React from "react";
import "./adminHome.css";
import { Link } from "react-router-dom";

export const AdminHome = () => {
  return (
    <div>
      <div className="adminHome">
        <div className="admin-home-border">
          <div className="admin-home">
            <button>
              <Link className="a" to="/register">
                Register
              </Link>
            </button>
          </div>
          <div className="user-home">
            <button>
              <Link className="a" to="/result">
                Result
              </Link>
            </button>
          </div>
          <div className="user-home">
            <button>
              <Link className="a" to="/alldata">
                All data
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
