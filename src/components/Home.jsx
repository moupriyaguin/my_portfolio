// src/components/Home.js
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 0.5 }}
      className="home-page d-flex justify-content-center align-items-center vh-100"
    >
      <div className="glass-box">
        <h1 className="typing-text" style={{ fontSize: "2rem" }}>Welcome to My Portfolio</h1>
        <p style={{ fontSize: "1rem" }}>
          I’m Moupriya Guin, a passionate developer with a love for turning
          ideas into impactful digital experiences. Dive in to explore my work,
          skills, and the journey that shapes my code.
        </p>
        <div className="d-flex justify-content-end mt-4">
          <span
            onClick={() => navigate("/main")}
            style={{
              fontSize: "2rem",
              cursor: "pointer",
              display: "inline-block",
              marginTop: "1rem",
            }}
          >
            ➜
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
