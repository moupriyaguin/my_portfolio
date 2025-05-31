import React from "react";

const Experience = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div
      id="work"
      className="section"
      style={{
        minHeight: "100vh",
        paddingTop: "60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: isMobile ? "10px" : "0",
        paddingRight: isMobile ? "10px" : "0",
      }}
    >
      <div style={{ width: "100%", boxSizing: "border-box" }}>
        <h2
          style={{
            fontSize: isMobile ? "1.8rem" : "2.5rem",
            marginBottom: "30px",
            color: "#333",
            textAlign: "center",
            backgroundColor: "beige",
          }}
        >
          Work Experience
        </h2>
      </div>

      <div
        className="experience-card"
        style={{
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          padding: isMobile ? "20px" : "30px",
          maxWidth: "800px",
          width: "100%",
          textAlign: "left",
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? "1.5rem" : "1.8rem",
            marginBottom: "10px",
            color: "#0077b6",
          }}
        >
          Audit & Assurance Analytics Intern
        </h3>
        <h4
          style={{
            fontSize: isMobile ? "1rem" : "1.2rem",
            color: "#555",
            marginBottom: "20px",
          }}
        >
          Deloitte USI | January 2025 – March 2025
        </h4>
        <p
          style={{
            fontSize: isMobile ? "1rem" : "1.1rem",
            lineHeight: "1.8",
            color: "#444",
          }}
        >
          During my tenure at Deloitte USI as an Audit & Assurance Analytics
          Intern, I gained extensive hands-on experience in data preparation,
          data cleaning, and the application of various preprocessing techniques
          on raw datasets.
          <br />
          <br />
          My primary responsibilities included working with large volumes of
          client data, performing data validation, and ensuring data consistency
          and accuracy for audit processes. I frequently utilized Excel to
          clean, transform, and standardize raw data, followed by scripting
          solutions to automate data extraction, transformation, and generation
          of meaningful insights.
          <br />
          <br />
          This experience sharpened my technical and analytical skills,
          strengthened my understanding of real-world data handling challenges,
          and provided me with a strong foundation in applying automation and
          structured methodologies within professional audit environments.
        </p>
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <a
            href="\Deloitte Internship Completion Cerificate - Moupriya Guin_signed.pdf"
            download
            style={{
              display: "inline-block",
              padding: isMobile ? "8px 16px" : "10px 20px",
              fontSize: isMobile ? "1rem" : "1.1rem",
              color: "#fff",
              backgroundColor: "#0077b6",
              borderRadius: "5px",
              textDecoration: "none",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#005f86")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#0077b6")}
          >
            Download Internship Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
