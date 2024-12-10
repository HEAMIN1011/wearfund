import React, { useState } from "react";
import { Link } from "react-router-dom";
import projects from "./Data";
import "../newitempage/NewitemList.css";

function NewitemList() {
  const [filter, setFilter] = useState("최신순");

  const sortedProjects = [...projects].sort((a, b) => {
    if (filter === "최신순") {
      return parseFloat(b.progress.replace(",", "").replace("%", "")) -
             parseFloat(a.progress.replace(",", "").replace("%", ""));
    }
    if (filter === "인기순") {
      return b.title.localeCompare(a.title);
    }
    if (filter === "모집금액순") {
      return parseFloat(b.progress.replace(",", "").replace("%", "")) -
             parseFloat(a.progress.replace(",", "").replace("%", ""));
    }
    if (filter === "AI추천순") {
      return b.id - a.id;
    }
    return 0;
  });

  return (
    <div className="best-funding-page">
      <h2>이달의 신상</h2>
      <div className="filter-buttons">
        {["전체", "최신순", "인기순", "모집금액순", "AI추천순"].map((category) => (
          <button
            key={category}
            className={filter === category ? "active" : ""}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {sortedProjects.map((project) => (
          <div key={project.id} className="project-card">
            <Link to={`/best-funding/${project.id}`}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.progress} 달성 <span>{project.price}</span></p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewitemList;
