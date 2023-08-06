import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Abbas from "../img/abbas.jpeg";

function Home() {
  return (
    <div className="container">
      <div className="img-container">
        <img
          src={Abbas}
          alt="main-img"
          style={{ borderRadius: "50%", border: " 3px solid rgb(93, 93, 206)" }}
        />
      </div>

      <div className="text-container">
        <h1>عباس احمدوند</h1>
        <h3>توسعه دهنده ی وب و اپلیکیشن </h3>
      </div>

      <div className="button-container">
        <span>
          <Link to="/">صفحه اصلی </Link>
        </span>
        <span>
          <Link to="/skills">مهارتهای من </Link>
        </span>

        <span>
          <Link to="/about">درباره ی من </Link>
        </span>
        <span>
          <Link to="/contacts">تماس با من </Link>
        </span>
        <span>
          <Link to="/portfolio">نمونه کار ها</Link>
        </span>
      </div>
    </div>
  );
}

export default Home;
