import { useState } from "react";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

interface Photo {
  id: string;
  url: string;
}

const photos: Photo[] = [
  { id: "1", url: "/photos/photo1.jpg" },
  { id: "2", url: "/photos/photo2.jpg" },
  { id: "3", url: "/photos/photo3.jpg" }
];

export default function App() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <div
        style={{
          height: "100vh",
          background: "#ec4899",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
          🎉 Happy Birthday 🎉
        </h1>

        <h2
          style={{
            fontSize: "32px",
            marginTop: "10px",
            fontWeight: "bold",
          }}
        >
          Karunya
        </h2>

        <button
          onClick={() => setEntered(true)}
          style={{
            marginTop: "30px",
            padding: "15px 30px",
            background: "white",
            color: "#000",
            borderRadius: "10px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Tap to Enter ✨
        </button>

        {/* Background Music */}
        <audio src="/music/birthday.mp3" autoPlay loop hidden />
      </div>
    );
  }

  return (
    <>
      <Hero />

      <div style={{ padding: "20px" }}>
        <h1 style={{ color: "#ec4899" }}>Happy Birthday! 💖</h1>
        <p style={{ marginTop: "10px" }}>Welcome to the special day celebration 🎉</p>

        <Gallery photos={photos} />
      </div>
    </>
  );
}
