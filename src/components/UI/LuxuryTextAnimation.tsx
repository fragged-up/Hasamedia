import React from "react";

const LuxuryTextAnimation: React.FC = () => {
  const text = "Welcome to Our Exclusive Service";

  return (
    <div className="luxury-container">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="luxury-char"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default LuxuryTextAnimation;
