import React from "react";

const certificateData = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    issuer: "Stanford University (Coursera)",
    link: "https://drive.google.com/file/d/1eyohu46rSEdpF2vJ3aNU-ZFS8yqr_Xbu/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Google Drive Clone Project",
    issuer: "GDSC",
    link: "https://drive.google.com/file/d/1W7I9aBCFuw2cdJj45rjv4eCpVzQX26qU/view",
  },
  {
    id: 3,
    title: "Complete Python Programming Course",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/19akpAVheEDgCFoNEFWgF27C0qhPVbY0j/view?usp=sharing",
  },
  {
    id: 4,
    title: "Problem Solving (Intermediate)",
    issuer: "Hackerrank",
    link: "https://drive.google.com/file/d/1PcKghrNsOdSBx8SG7TxKs2FscidpO7yJ/view?usp=drive_link",
  },
];

const Certificates = () => {
  return (
    <div id="certificates" style={styles.container}>
      <h2 style={styles.heading}>Certificates</h2>

      <div style={styles.grid}>
        {certificateData.map((cert) => (
          <div style={styles.box} key={cert.id}>
            <div>
              <h3 style={styles.title}>{cert.title}</h3>
              <p style={styles.issuer}>{cert.issuer}</p>
            </div>
            <button
              style={styles.button}
              onClick={() => window.open(cert.link, "_blank")}
              aria-label="Open certificate"
            >
              ➜
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    backgroundColor: "#fdf6e3", // soft beige
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "40px",
    backgroundColor: "beige",
    display: "inline-block",
    // padding: "10px 20px",
    borderRadius: "12px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  box: {
    backgroundColor: "#fffaf0",
    border: "1px solid #f0e4d7",
    borderRadius: "16px",
    padding: "20px",
    width: "250px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "transform 0.3s ease",
  },
  title: {
    margin: 0,
    fontSize: "1rem",
    color: "#5a4a3f",
  },
  issuer: {
    marginTop: "4px",
    fontSize: "0.9rem",
    color: "#8b7c6d",
  },
  button: {
    fontSize: "1.5rem",
    background: "none",
    border: "none",
    color: "#a67c52",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
};

export default Certificates;
