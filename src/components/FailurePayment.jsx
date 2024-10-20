import React, { useEffect } from "react";
import beamsImage from '/src/assets/beams.jpg'; // Import background image

const FailurePayment = () => {
  return (
    <div style={styles.container}>
      <div style={styles.circle}>
        <svg style={styles.svg} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" style={styles.circlePath} />
          <line x1="30" y1="30" x2="70" y2="70" style={styles.crossLine} />
          <line x1="70" y1="30" x2="30" y2="70" style={styles.crossLine} />
        </svg>
      </div>
      <h1 style={styles.text}>Thanh toán không thành công!</h1>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#ffffff",
    backgroundImage: `url(${beamsImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  circle: {
    width: "150px",
    height: "150px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  svg: {
    width: "100%",
    height: "100%",
  },
  circlePath: {
    fill: "none",
    stroke: "#EF4444",
    strokeWidth: "5",
    strokeDasharray: "283",
    strokeDashoffset: "283",
    strokeLinecap: "round",
    animation: "drawCircle 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
  },
  crossLine: {
    stroke: "#EF4444",
    strokeWidth: "5",
    strokeDasharray: "50",
    strokeDashoffset: "50",
    strokeLinecap: "round",
    animation: "drawCross 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards",
    animationDelay: "0.9s",
  },
  text: {
    marginTop: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#EF4444",
  },
};

// Keyframes for animations
const keyframes = `
  @keyframes drawCircle {
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes drawCross {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

// Add keyframes to document style
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);

export default FailurePayment;
