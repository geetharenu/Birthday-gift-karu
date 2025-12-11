import { useState } from "react";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

export default function App() {
  const [entered, setEntered] = useState(false);

  const data = {
    config: {
      birthdayPersonName: "Karunya",
      mainMessage: "Welcome to my birthday celebration!",
      customBirthdayMessage: "Happy Birthday! May your day sparkle! ✨",
      themeColor: "#ec4899",
    },

    photos: [
      { id: "1", url: "/photos/Picsart_25-11-15_09-38-05-606.jpg" },
      { id: "2", url: "/photos/Picsart_25-11-15_09-39-12-019.jpg" },
      { id: "3", url: "/photos/Picsart_25-11-15_09-39-45-846.jpg" },
      { id: "4", url: "/photos/Picsart_25-11-15_09-40-24-586.jpg" },
      { id: "5", url: "/photos/Picsart_25-11-15_09-41-50-080.jpg" },
      { id: "6", url: "/photos/Picsart_25-11-15_09-42-16-449.jpg" },
      { id: "7", url: "/photos/Picsart_25-11-15_09-43-00-858.jpg" },
      { id: "8", url: "/photos/Picsart_25-12-08_19-39-38-891.jpg" },
    ],
  };

  if (!entered) {
    return (
      <div
        style={{
          height: "100vh",
          background: data.config.themeColor,
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

        <h2 style={{ fontSize: "32px", marginTop: "10px", fontWeight: "bold" }}>
          {data.config.birthdayPersonName}
        </h2>

        <button
          onClick={() => setEntered(true)}
          style={{
            marginTop: "30px",
            padding: "15px 30px",
            background: "white",
            color: "black",
            borderRadius: "10px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Tap to Enter ✨
        </button>

        {/* autoplay music */}
        <audio src="/music/birthday.mp3" autoPlay loop hidden />
      </div>
    );
  }

  return (
    <>
      <Hero />
      <div style={{ padding: "20px" }}>
        <h1 style={{ color: data.config.themeColor }}>
          {data.config.customBirthdayMessage}
        </h1>

        <p style={{ marginTop: "10px" }}>{data.config.mainMessage}</p>

        <Gallery photos={data.photos} />
      </div>
    </>
  );
}
