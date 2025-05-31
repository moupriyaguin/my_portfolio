import React, { useState, useEffect } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiBootstrap,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skills = [
    { name: "C++", icon: <SiCplusplus size={50} color="#00599C" />, link: "https://isocpp.org/" },
    { name: "JavaScript", icon: <SiJavascript size={50} color="#F0DB4F" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "HTML", icon: <FaHtml5 size={50} color="#E34C26" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "Python", icon: <FaPython size={50} color="#3776AB" />, link: "https://www.python.org/" },
    { name: "SQL", icon: <FaDatabase size={50} color="#f29111" />, link: "https://en.wikipedia.org/wiki/SQL" },
    { name: "Bootstrap", icon: <SiBootstrap size={50} color="#563d7c" />, link: "https://getbootstrap.com/" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} color="#38B2AC" />, link: "https://tailwindcss.com/" },
    { name: "React JS", icon: <FaReact size={50} color="#61DBFB" />, link: "https://react.dev/" },
    { name: "Next.js", icon: <SiNextdotjs size={50} color="black" />, link: "https://nextjs.org/" },
    { name: "Node.js", icon: <SiNodedotjs size={50} color="#339933" />, link: "https://nodejs.org/" },
    { name: "Express.js", icon: <SiExpress size={50} color="#000000" />, link: "https://expressjs.com/" },
    { name: "Git", icon: <FaGitAlt size={50} color="#F1502F" />, link: "https://git-scm.com/" },
    { name: "GitHub", icon: <FaGithub size={50} color="black" />, link: "https://github.com/" },
    { name: "MySQL", icon: <SiMysql size={50} color="#00758f" />, link: "https://www.mysql.com/" },
    { name: "Firebase", icon: <SiFirebase size={50} color="#FFCA28" />, link: "https://firebase.google.com/" },
    { name: "MongoDB", icon: <SiMongodb size={50} color="#47A248" />, link: "https://www.mongodb.com/" },
  ];

  const softSkills = [
    "Collaborative Analysis",
    "Strategic Analysis",
    "Rapid Learning",
    "Effective Communication",
  ];

  return (
    <div
      id="techskills"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #e0eafc, #cfdef3)",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          marginBottom: "40px",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        Technical Skills
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          justifyContent: "center",
          gap: "30px",
          width: "100%",
          maxWidth: "1200px",
          marginBottom: "60px",
        }}
      >
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "white",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              textDecoration: "none",
              color: "#333",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 8px 16px beige";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
          >
            {skill.icon}
            <p style={{ marginTop: "10px", fontWeight: "500" }}>{skill.name}</p>
          </a>
        ))}
      </div>

      <h3 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333" }}>
        Soft Skills
      </h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        {softSkills.map((softSkill, index) => (
          <span
            key={index}
            style={{
              backgroundColor: "white",
              border: "2px solid beige",
              borderRadius: "30px",
              padding: "10px 20px",
              fontSize: "1.1rem",
              fontWeight: "500",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, background-color 0.3s",
              cursor: "default",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "beige";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {softSkill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
