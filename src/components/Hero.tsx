import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import heroAnim from "../../public/animations/hero-anim.json"; // path at build time - configure bundler/public path appropriately

export default function Hero({ onEnter }: { onEnter: () => void }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Fullscreen hero */}
      <div style={{
        position: "relative",
        width: "100%",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box",
        background: "linear-gradient(180deg,#ffdbf0,#fff7fb)"
      }}>
        {/* Lottie animation (center) */}
        <div style={{ width: "70%", maxWidth: 700, pointerEvents: "none" }}>
          <Lottie animationData={heroAnim} loop={true} />
        </div>

        {/* butterflies overlay */}
        <div className="butterflies" aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div className="butterfly b1" />
          <div className="butterfly b2" />
          <div className="butterfly b3" />
        </div>

        {/* Enter CTA */}
        <motion.button
          onClick={onEnter}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            position: "absolute",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            padding: "12px 22px",
            borderRadius: 12,
            border: "none",
            boxShadow: "0 6px 22px rgba(0,0,0,0.12)",
            background: "#fff",
            color: "#111",
            fontWeight: 700,
            fontSize: "16px"
          }}
        >
          Enter The Surprise 🎁
        </motion.button>
      </div>

      {/* small lobby preview (mobile) */}
      <div style={{ padding: 16 }}>
        <h3 style={{ margin: "8px 0" }}>Get ready — a special wish is waiting</h3>
        <p style={{ margin: 0, opacity: 0.8 }}>Tap enter to open the lobby — music will start, and photos will animate.</p>
      </div>

      {/* butterflies CSS */}
      <style>{`
        .butterfly { position: absolute; width: 48px; height: 48px; background-image: url('/photos/butterfly.png'); background-size: cover; opacity: 0.95; transform-origin: center; }
        .b1 { left: 6%; top: 22%; animation: fly1 9s linear infinite; }
        .b2 { left: 78%; top: 10%; animation: fly2 11s linear infinite; }
        .b3 { left: 50%; top: 40%; animation: fly3 8s linear infinite; }
        @keyframes fly1 { 0% { transform: translateY(0) translateX(0) rotate(0deg) } 50% { transform: translateY(-40px) translateX(30px) rotate(15deg) } 100% { transform: translateY(0) translateX(0) rotate(0deg) } }
        @keyframes fly2 { 0% { transform: translateY(0) translateX(0) rotate(0deg) } 50% { transform: translateY(-36px) translateX(-40px) rotate(-12deg) } 100% { transform: translateY(0) translateX(0) rotate(0deg) } }
        @keyframes fly3 { 0% { transform: translateY(0) translateX(0) rotate(0deg) } 50% { transform: translateY(-26px) translateX(24px) rotate(8deg) } 100% { transform: translateY(0) translateX(0) rotate(0deg) } }
      `}</style>
    </div>
  );
}
