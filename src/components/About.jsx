import React from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });
  return (
    <div
      id="about"
      ref={ref}
      className="section"
      style={{ height: "100vh", paddingTop: "60px", display: "flex" }}
    >
      <div
        className="about-image"
        style={{
          flex: 1,
          backgroundImage: "url('My photo.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height:"90%",
          objectFit: "cover",
        }}
      ></div>
      <div
        className="about-text"
        style={{ flex: 1, padding: "20px", color: "#333" ,overflow: "hidden"}}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>About Me</h2>
        <p>
          I’m Moupriya Guin, a Computer Science and Systems Engineering
          undergraduate with a passion for building intuitive, impactful tech
          solutions. My strengths lie in full-stack development, machine
          learning, and data-driven problem solving. I thrive in fast-paced
          environments that demand rapid learning, creative thinking, and
          collaborative execution.
        </p>
        <p>
          With a solid grasp of C++, Python, JavaScript, and React, I enjoy
          transforming complex challenges into elegant, efficient systems. My
          approach blends analytical precision with a design-first mindset,
          supported by hands-on experience in areas like cloud integration,
          intelligent automation, and scalable web architecture. Whether it’s
          refining algorithms or crafting seamless user experiences, I bring a
          deep curiosity and commitment to excellence.
        </p>
      </div>
    </div>
  );
};

export default About;
