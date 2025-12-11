import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import confetti from "canvas-confetti";

type Props = {
  themeColor: string;
  birthdayName: string;
  onEnter: () => void;
};

export default function Hero({ themeColor, birthdayName, onEnter }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/hero-anim.json"
    });
    return () => anim.destroy();
  }, []);

  const handleEnter = async () => {
    onEnter();
    // play music if present
    try {
      await audioRef.current?.play();
    } catch (e) {
      // ignore autoplay block
    }
    // confetti burst
    confetti({
      particleCount: 140,
      spread: 100,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="hero-root" style={{ background: themeColor }}>
      {/* lottie background */}
      <div ref={containerRef} className="hero-lottie" />

      <div className="hero-content">
        <h1 className="hero-title">🎉 Happy Birthday 🎉</h1>
        <h2 className="hero-name">{birthdayName}</h2>

        <button className="enter-btn" onClick={handleEnter}>
          Tap to Enter ✨
        </button>
      </div>

      {/* autoplay audio (hidden) */}
      <audio ref={audioRef} id="bgm" src="/music/birthday.mp3" loop preload="auto" />

      {/* soft overlay */}
      <div className="hero-overlay" />
    </div>
  );
}
