import React from "react";

const Education = () => {
  return (
    <div
      id="education"
      className="section"
      style={{
        minHeight: "100vh",
        paddingTop: "60px",
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>
        {`
          @media (max-width: 768px) {
            #college-education,
            #school-education {
              flex-direction: column !important;
              text-align: center !important;
            }

            .education-details {
              padding: 10px !important;
            }

            .education-image {
              height: 250px !important;
              margin-bottom: 20px;
            }
          }
        `}
      </style>

      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "30px",
          color: "#333",
          textAlign: "center",
          backgroundColor: "beige",
        }}
      >
        Education
      </h2>

      <div
        id="college-education"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "40px 20px",
          alignItems: "center",
          marginBottom: "40px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "20px",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <div
          className="education-details"
          style={{
            flex: 1,
            padding: "20px",
            textAlign: "left",
            color: "#333",
          }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            College Education
          </h2>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>
              Kalinga Institute of Industrial Technology
            </h3>
            <p style={{ fontSize: "1.2rem" }}>
              <strong>Bachelor of Technology</strong> - Computer Science and
              Systems Engineering
              <br />
              <strong>CGPA:</strong> 8.94
              <br />
              <strong>Duration:</strong> Aug. 2021–Aug. 2025
              <br />
              <strong>Location:</strong> Bhubaneswar, Odisha
            </p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h3 style={{ fontSize: "1.5rem" }}>Relevant Coursework:</h3>
            <ul
              style={{
                fontSize: "1.2rem",
                listStyleType: "circle",
                paddingLeft: "20px",
              }}
            >
              <li>Object Oriented Programming</li>
              <li>Data Structures and Algorithms</li>
              <li>Operating Systems</li>
              <li>Database Management</li>
              <li>Artificial Intelligence</li>
              <li>Machine Learning</li>
              <li>Software Engineering</li>
              <li>Computer Networks</li>
              <li>Cloud Computing</li>
            </ul>
          </div>
        </div>

        <a
          href="https://kiit.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ flex: 1, padding: "20px", textDecoration: "none" }}
        >
          <div
            className="education-image"
            style={{
              height: "400px",
              backgroundImage: "url('kiit architecture.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 8px 16px rgba(222, 184, 135, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          ></div>
        </a>
      </div>

      <div
        id="school-education"
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          padding: "40px 20px",
          alignItems: "center",
          marginBottom: "40px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "20px",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <a
          href="https://coochbehar.tigps.in/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ flex: 1, padding: "20px", textDecoration: "none" }}
        >
          <div
            className="education-image"
            style={{
              height: "400px",
              backgroundImage: "url('school image.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 8px 16px rgba(222, 184, 135, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          ></div>
        </a>

        <div
          className="education-details"
          style={{
            flex: 1,
            padding: "20px",
            textAlign: "left",
            color: "#333",
          }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            School Education
          </h2>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>
              Techno India Group Public School
            </h3>
            <p style={{ fontSize: "1.2rem" }}>
              <strong>Stream</strong> - Science (PCMB)
              <br />
              <strong>CBSE (2021)</strong> - 84.4%
              <br />
              <strong>Duration:</strong> Apr. 2019–May. 2021
              <br />
              <strong>Location:</strong> Bhubaneswar, Odisha
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
