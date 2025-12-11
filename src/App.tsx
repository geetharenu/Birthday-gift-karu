import React, { useState, useRef } from "react";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import DEFAULT_DATA from "./data"; // your DEFAULT_DATA module OR inline as earlier

export default function App() {
  const [entered, setEntered] = useState(false);
  const [musicOn, setMusicOn] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onEnter = () => {
    setEntered(true);
    // start music
    setTimeout(() => { audioRef.current?.play().catch(()=>{}); }, 300);
    // optional: trigger confetti/animate
  };

  return (
    <>
      {!entered ? <Hero onEnter={onEnter} /> : null}

      {entered && (
        <main style={{ padding: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <h1 style={{ margin: 0, color: DEFAULT_DATA.config.themeColor }}>{DEFAULT_DATA.config.customBirthdayMessage}</h1>
            <button onClick={() => {
              setMusicOn(s => !s);
              if (!musicOn) audioRef.current?.play(); else audioRef.current?.pause();
            }}>
              {musicOn ? "🔊" : "🔈"}
            </button>
          </div>

          <p style={{ marginTop: 8 }}>{DEFAULT_DATA.config.mainMessage}</p>
          <Gallery photos={DEFAULT_DATA.photos} />
          <audio ref={audioRef} src="/music/birthday.mp3" loop />
        </main>
      )}
    </>
  );
}
