import React, { JSX, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const Particle: React.FC<ParticleProps> = ({ x, y, size, delay, duration }) => {
  const animation = {
    x: [0, 20, -20, 0],
    y: [0, -20, 20, 0],
    transition: {
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        top: y,
        left: x,
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "white",
        pointerEvents: "none",
      }}
      animate={animation}
    />
  );
};

interface ParticlesBackgroundProps {
  particleCount?: number;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  particleCount = 150,
}) => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newParticles: JSX.Element[] = [];

    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 2 + 1; // Reduced size: between 1px and 3px.
      const delay = Math.random() * 2; // Delay between 0 and 2 seconds.
      const duration = Math.random() * 3 + 2; // Duration between 2 and 5 seconds.
      newParticles.push(
        <Particle
          key={i}
          x={x}
          y={y}
          size={size}
          delay={delay}
          duration={duration}
        />
      );
    }
    setParticles(newParticles);
  }, [particleCount]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: -1, // Ensure particles stay in the background
      }}
    >
      {particles}
    </div>
  );
};

export default ParticlesBackground;
