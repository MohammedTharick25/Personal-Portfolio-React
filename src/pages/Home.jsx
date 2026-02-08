import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "../components/ParticlesBackground";

/* ================= HOME COMPONENT ================= */

const Home = () => {
  /* 3D Tilt Motion Values */
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-60, 60], [15, -15]);
  const rotateY = useTransform(x, [-60, 60], [-15, 15]);

  const [isHover, setIsHover] = useState(false);

  /* Mouse Tracking */
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setIsHover(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden"
      >
        {/* Particles Background */}
        <ParticlesBackground />

        {/* ================= HERO ================= */}

        <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
          {/* Animated Background Glow */}
          <motion.div
            className="absolute w-150 h-150 rounded-full bg-linear-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-3xl"
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-7xl font-bold mb-4 tracking-tighter">
              THE <span className="text-gradient">PORTFOLIO</span>
            </h1>

            <p className="text-gray-400 text-xl max-w-lg mx-auto leading-relaxed">
              Crafting digital experiences where functionality meets aesthetics.
            </p>
          </motion.div>

          {/* Scroll Guide */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 text-gray-500 flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest">
              Scroll to Explore
            </span>
            <ChevronDown size={20} />
          </motion.div>
        </section>

        {/* ================= INTRO ================= */}

        <section className="min-h-screen glass py-28 px-10 flex items-center justify-center relative z-10">
          <div className="max-w-5xl grid md:grid-cols-2 gap-16 items-center">
            {/* Text Column */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold leading-tight">
                Hello, I'm <br />
                <span className="text-brand">Mohammed.</span>
              </h2>

              <div className="text-xl md:text-2xl font-mono text-text-main/80 h-10 text-gray-300">
                <TypeAnimation
                  sequence={[
                    "MERN Stack Architect",
                    2000,
                    "Creative UI/UX Designer",
                    2000,
                    "Problem Solver",
                    2000,
                  ]}
                  repeat={Infinity}
                />
              </div>

              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                I build things for the web. I'm a developer who focuses on
                writing clean, elegant and efficient code.
              </p>

              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                  flex items-center gap-3
                  bg-brand text-white
                  px-8 py-4
                  rounded-full
                  font-bold
                  shadow-xl
                  shadow-brand/30
                  hover:shadow-brand/50
                  transition
                "
                >
                  Discover My Journey <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>

            {/* Image Column */}
            <div className="relative flex justify-center">
              {/* Glow Ring */}
              <motion.div
                className="
                absolute
                w-[360px]
                h-[360px]
                rounded-full
                bg-gradient-to-r
                from-indigo-500
                via-purple-500
                to-pink-500
                blur-3xl
                opacity-40
              "
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* 3D Frame */}
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={handleLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                relative
                rounded-3xl
                p-1
                bg-gradient-to-br
                from-indigo-500
                via-purple-500
                to-pink-500
                shadow-[0_40px_90px_rgba(0,0,0,0.6)]
                cursor-pointer
              "
              >
                {/* Glass Layer */}
                <div
                  className="
                  rounded-3xl
                  bg-white/10
                  backdrop-blur-xl
                  p-2
                  border
                  border-white/20
                "
                  style={{
                    transform: "translateZ(40px)",
                  }}
                >
                  {/* Profile Image */}
                  <motion.img
                    src="/tharick.jpg"
                    alt="profile"
                    className="
                    w-[300px]
                    rounded-2xl
                    object-cover
                    shadow-2xl
                    select-none
                  "
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  />
                </div>

                {/* Shine Layer */}
                {isHover && (
                  <motion.div
                    className="
                    absolute inset-0
                    rounded-3xl
                    bg-gradient-to-tr
                    from-white/40
                    via-white/10
                    to-transparent
                    pointer-events-none
                  "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Home;
