import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-container">
      <h2>404: Page Not Found</h2>
      <p>هیچ مسیری با آدرس وارد شده وجود ندارد</p>
      <button>
        <Link to="/">برگشت به صفحه ی اصلی</Link>
      </button>
    </div>
  );
}

export default NotFound;
