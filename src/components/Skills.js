import React from "react";
import "./Skills.css";
import skills from "../SkillsItem";

function Skills() {
  return (
    <div className="skills-container">
      <h2>مهارت های من</h2>
      <div className="skills-item">
        {skills.map((skill) => {
          return (
            <div key={skill.id} className="skills">
              <div className="img-container">
                <img
                  src={skill.img}
                  alt={skill.title}
                  style={{ border: "none" }}
                />
              </div>
              <h1>{skill.title}</h1>
              <p>{skill.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
