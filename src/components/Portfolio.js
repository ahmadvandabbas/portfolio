import React from "react";
import "./Portfolio.css";
import ProjectList from "../ProjectList";
import { Link } from "react-router-dom";

function Portfolio() {
  const dataProjects = ProjectList;
  return (
    <div className="portfolio-container">
      <h2>نمونه کارها </h2>
      <div className="project-container">
        {dataProjects.map((project) => {
          return (
            <div key={project.id} className="portfolio">
              <img
                src={project.img}
                alt={project.title}
                className="portfolio-img"
              />
              <h1 className="portfolio-title">{project.title}</h1>
              <p className="portfolio-desc">{project.desc}</p>
              <Link to={project.urlGitHub} className="portfolio-url">
                برای دیدن جزییات پروژه اینجا کلیک کنید
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
