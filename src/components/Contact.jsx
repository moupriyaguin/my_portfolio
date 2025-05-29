import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div
      id="contact"
      style={{ ...styles.container, position: "relative", overflow: "hidden" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={styles.videoBackground}
        src="contact dark.mp4"
      />
      <div>
        <h2 style={styles.heading}>Get In Touch</h2>

        <div style={styles.info}>
          <p>
            <strong>Name:</strong> Moupriya Guin
          </p>
          <p>
            <strong>Address:</strong> Cooch Behar, West Bengal, India
          </p>
          <p>
            <strong>Phone:</strong> +91-9144665225
          </p>
          <p>
            <strong>Email:</strong> moupriyaguin10@gmail.com
          </p>
        </div>

        <div style={styles.iconContainer}>
          <a
            href="https://github.com/moupriyaguin"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
            className="float"
          >
            <FaGithub size={32} />
          </a>

          <a
            href="https://www.linkedin.com/in/moupriya-guin-3b089722b"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
            className="float delay1"
          >
            <FaLinkedin size={32} />
          </a>

          <a
            href="https://leetcode.com/moupriyaguin"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
            className="float delay2"
          >
            <SiLeetcode size={32} />
          </a>

          <a
            href="https://www.hackerrank.com/moupriyaguin10"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
            className="float delay3"
          >
            <FaHackerrank size={32} />
          </a>
        </div>

        <style>
          {`
    .float {
      animation: float 2s infinite ease-in-out;
    }
      .float:hover {
      box-shadow: 0 0 15px rgba(245, 222, 179, 0.8); /* soft beige glow */
      transform: translateY(-10px);
    }
    .delay1 {
      animation-delay: 0.2s;
    }
    .delay2 {
      animation-delay: 0.4s;
    }
    .delay3 {
      animation-delay: 0.6s;
    }

    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0); }
    }
  `}
        </style>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "60px 20px",
    textAlign: "center",
    borderRadius: "20px",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "30px",
    color: "rgb(237, 189, 116)",
    padding: "10px 20px",
    borderRadius: "12px",
    display: "inline-block",
  },
  info: {
    fontSize: "1.1rem",
    color: "rgb(237, 189, 116)",
    marginBottom: "40px",
    lineHeight: "1.8",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginTop: "20px",
  },
  iconLink: {
    color: "#5a4a3f",
    textDecoration: "none",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "inline-block",
  },
  videoBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
    opacity: "100%",
  },

  overlayContent: {
    position: "relative",
    zIndex: 1,
  },
};
export default Contact;
