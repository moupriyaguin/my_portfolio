import React from "react";

const Project = () => {
  return (
    <div
      id="projects"
      className="section"
      style={{
        minHeight: "100vh",
        paddingTop: "60px",
        display: "flex",
        backgroundColor: " rgb(206, 239, 248)",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "30px",
          textAlign: "center",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        Technical Experience - Self initiated projects
      </h2>

      <div
        className="weather-app"
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <div
          className="weather-video-background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          <video
            autoPlay
            loop
            muted
            preload="auto"
            className="background-video"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src="Weather Change Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          className="content-heading"
          style={{
            position: "relative",
            zIndex: 11,
            textAlign: "center",
            marginTop: "20px",
            color: "white",
          }}
        >
          <h1 className="app-title">Weather App</h1>
        </div>

        <div
          className="content-overlay"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
            padding: "40px 30px",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            gap: "30px",
            overflow: "hidden",
            zIndex: 10,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            color: "white",
            maxWidth: "90%",
            width: "800px",
          }}
        >
          <div
            className="app-description-left"
            style={{
              flex: 1,
              padding: "20px",
              textAlign: "left",
              color: "white",
            }}
          >
            <p>
              This app provides real-time and 7-day weather forecasts, allowing
              users to stay informed about the current weather conditions in
              their location. Built using React.js, the app fetches accurate
              weather data from a reliable API, ensuring a seamless experience.
              The interactive user interface (UI) enhances engagement, making it
              easy for users to navigate and access the weather information.
              Whether you're looking for today's temperature, humidity, or a
              forecast for the week ahead, this weather app has got you covered
              with 98% accuracy.
            </p>
          </div>
          <div
            className="app-description-right"
            style={{
              flex: 1,
              padding: "20px",
              height: "245px",
              backgroundColor: "black",
              opacity: 0.7,
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              color: "white",
            }}
          >
            <p>
              <strong>Key Features:</strong>
              <br />
              • Real-Time Weather: Instant access to current weather conditions
              based on your location.
              <br />
              • 7-Day Forecast: View detailed weather predictions for the
              upcoming week.
              <br />
              • Interactive UI: Designed to keep users engaged and enhance
              usability.
              <br />• Robust API Integration: Secure API key management and
              error handling ensure a smooth and reliable experience.
            </p>
          </div>
        </div>

        {/* Button container below content-overlay */}
        <div
          className="project-button-container"
          style={{
            position: "absolute",
            top: "85%", // below content-overlay which is centered at 50% and approx 280px tall
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            textAlign: "center",
            zIndex: 11,
          }}
        >
          <a
            href="https://github.com/moupriyaguin/Weather-App.git"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              className="project-button"
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                border: "none",
                borderRadius: "12px",
                color: "white",
                padding: "12px 28px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.7)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.5)")
              }
            >
              Visit Project
            </button>
          </a>
        </div>
      </div>

      {/*google drive clone*/}

      <div
        className="google-drive-clone"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "40px 30px",
          marginBottom: "60px",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          gap: "30px",
          overflow: "hidden",
        }}
      >
        <a
          href="https://your-google-drive-clone-link.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ flex: "1 1 400px", maxWidth: "500px" }}
        >
          <div
            style={{
              height: "400px",
              width: "100%",
              backgroundImage: "url('google drive clone interface.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "16px",
              transition: "transform 0.5s ease, box-shadow 0.5s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(255, 235, 205, 0.8)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.15)";
            }}
          ></div>
        </a>

        <div
          style={{
            flex: "1 1 400px",
            maxWidth: "600px",
            padding: "30px",
            backgroundColor: "#ffffffcc",
            borderRadius: "20px",
            textAlign: "left",
            transform: "translateX(100px)",
            opacity: 0,
            animation: "slideIn 1s forwards",
            animationDelay: "0.3s",
          }}
        >
          <h2
            style={{ fontSize: "2.8rem", marginBottom: "20px", color: "#222" }}
          >
            Google Drive Clone Website
          </h2>
          <ul
            style={{
              fontSize: "1.2rem",
              paddingLeft: "20px",
              listStyleType: "disc",
              color: "#555",
              lineHeight: "1.8",
            }}
          >
            <li>
              Designed a Google Drive clone using{" "}
              <strong>HTML, CSS, JavaScript</strong>.
            </li>
            <li>
              Implemented <strong>9+ functionalities</strong> exceeding standard
              Google Drive (e.g., file upload, storage monitoring).
            </li>
            <li>
              Integrated a <strong>Dropdown Menu</strong> with 8 upload options
              for specific file types.
            </li>
            <li>
              Utilized <strong>Google Firebase</strong> and{" "}
              <strong>Firestore</strong> for real-time file storage and database
              management.
            </li>
          </ul>
        </div>
      </div>

      {/*PCOS Detection Using Ultrasound Images*/}

      <div
        className="pcos-detection-project"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: "url('ultrasound.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // background: "linear-gradient(135deg, #f0f4ff, #ffffff)",
          borderRadius: "20px",
          padding: "50px 30px",
          marginBottom: "60px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          transform: "translateY(50px)",
          opacity: "0",
          animation: "fadeInUp 1s forwards",
          animationDelay: "0.3s",
        }}
      >
        <h2
          style={{
            fontSize: "2.8rem",
            color: "rgb(68, 75, 78)",
            marginBottom: "20px",
          }}
        >
          PCOS Detection Using Ultrasound Images
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // alignItems: "center",
            // justifyContent: "center",
            flexWrap: "wrap",
            gap: "40px",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <div
            style={{
              flex: "1 1 400px",
              maxWidth: "500px",
              height: "300px",
              backgroundImage: "url('img_0_113.jpg')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              borderRadius: "16px",
              boxShadow: "0 4px 16px rgba(75, 0, 130, 0.3)",
              transition: "transform 0.5s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          ></div>

          <div
            style={{
              flex: "1 1 400px",
              maxWidth: "500px",
              textAlign: "left",
            }}
          >
            <ul
              style={{
                fontSize: "1.2rem",
                listStyleType: "square",
                paddingLeft: "20px",
                lineHeight: "1.8",
                color: "#333",
                marginBottom: "30px",
              }}
            >
              <li>
                Trained a Machine Learning model for PCOS detection using{" "}
                <strong>1,000+ ultrasound images</strong>.
              </li>
              <li>
                Used <strong>Canny Edge Detection</strong> and{" "}
                <strong>Histogram Equalization</strong> for follicle
                identification.
              </li>
              <li>
                Achieved <strong>79.86% accuracy</strong> with a Binary SVM
                classifier trained on extracted features.
              </li>
            </ul>

            <a
              href="https://your-pcos-detection-link.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 25px",
                backgroundColor: "rgb(0, 34, 55)",
                color: "white",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "1.2rem",
                fontWeight: "bold",
                transition: "background-color 0.3s ease, transform 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "rgb(30, 29, 29)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "rgb(33, 32, 32)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              View Project
            </a>
          </div>
        </div>
      </div>

      {/*Sentiment Analysis*/}

      <div
        className="sentiment-analysis-project"
        style={{
          // background: "linear-gradient(to right, #f8cdda,rgb(183, 37, 227))",
          padding: "4px",
          borderRadius: "20px",
          marginBottom: "60px",
          overflow: "hidden",
          animation: "fadeInLeft 1s forwards",
          animationDelay: "0.3s",
          transform: "translateX(-50px)",
          opacity: 0,
        }}
      >
        <div
          style={{
            // backgroundColor: " #ffffff",
            borderRadius: "20px",
            padding: "40px 30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.12)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.08)";
          }}
        >
          <div
            style={{
              fontSize: "4rem",
              marginBottom: "20px",
            }}
          >
            💬⭐
          </div>

          <h2
            style={{
              fontSize: "2.5rem",
              color: "rgb(9, 58, 28)",
              marginBottom: "30px",
            }}
          >
            Sentiment Analysis on Amazon Alexa Reviews
          </h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "30px",
            }}
          >
            <img
              src="happy.jpg"
              alt="Happy"
              style={{ width: "150px", height: "100px", borderRadius: "12px" }}
            />
            <img
              src="Crying-girl.jpg"
              alt="Crying"
              style={{ width: "120px", height: "100px", borderRadius: "12px" }}
            />
            <img
              src="thinking.webp"
              alt="Worried"
              style={{ width: "150px", height: "100px", borderRadius: "12px" }}
            />
            <img
              src="angry.jpg"
              alt="Angry"
              style={{ width: "150px", height: "100px", borderRadius: "12px" }}
            />
          </div>

          <ul
            style={{
              fontSize: "1.2rem",
              // color: "#555",
              textAlign: "left",
              maxWidth: "700px",
              marginBottom: "30px",
              listStyleType: "disc",
              paddingLeft: "20px",
              lineHeight: "1.8",
            }}
          >
            <li>
              Analyzed sentiment in Alexa reviews, training a model to predict{" "}
              <strong>positive or negative sentiments</strong>.
            </li>
            <li>
              Streamlined text preprocessing with a{" "}
              <strong>custom Count Vectorization process</strong> (reduced time
              by 40%).
            </li>
            <li>
              Integrated <strong>TextBlob</strong> module for polarity scoring
              (ranging between <strong>-1 to +1</strong>).
            </li>
            <li>
              Achieved <strong>94.28% accuracy</strong> with Random Forest and{" "}
              <strong>94.07%</strong> with XGBoost classifiers.
            </li>
          </ul>

          <a
            href="https://your-sentiment-analysis-link.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 25px",
              backgroundColor: "rgb(6, 139, 103)",
              color: "white",
              borderRadius: "8px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "background-color 0.3s ease, transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "rgb(9, 164, 120)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "rgb(9, 194, 136)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
