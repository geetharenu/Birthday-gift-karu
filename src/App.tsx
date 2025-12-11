import React, { useState } from "react";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

interface Photo {
  id: string;
  url: string;
}

interface AppData {
  config: {
    birthdayPersonName: string;
    mainMessage: string;
    customBirthdayMessage: string;
    themeColor: string;
  };
  photos: Photo[];
}

const DEFAULT_DATA: AppData = {
  config: {
    birthdayPersonName: "Karunya",
    mainMessage: "Welcome to my birthday celebration!",
    customBirthdayMessage: "Happy Birthday! May your day sparkle! ✨",
    themeColor: "#ec4899"
  },
  photos: [
    { id: "1", url: "/photos/Picsart_25-11-15_09-01-01.jpg" },
    { id: "2", url: "/photos/Picsart_25-11-15_09-01-02.jpg" },
    { id: "3", url: "/photos/Picsart_25-11-15_09-01-03.jpg" },
    { id: "4", url: "/photos/Picsart_25-11-15_09-01-04.jpg" },
    { id: "5", url: "/photos/Picsart_25-11-15_09-01-05.jpg" },
    { id: "6", url: "/photos/Picsart_25-11-15_09-01-06.jpg" },
    { id: "7", url: "/photos/Picsart_25-11-15_09-01-07.jpg" },
    { id: "8", url: "/photos/Picsart_25-11-15_09-01-08.jpg" }
  ]
};

export default function App() {
  const [entered, setEntered] = useState(false);
  const data = DEFAULT_DATA;

  return (
    <>
      {!entered ? (
        <Hero
          themeColor={data.config.themeColor}
          birthdayName={data.config.birthdayPersonName}
          onEnter={() => setEntered(true)}
        />
      ) : (
        <main>
          <header style={{ padding: 20 }}>
            <h1 style={{ color: data.config.themeColor, fontSize: 22 }}>
              {data.config.customBirthdayMessage}
            </h1>
            <p style={{ marginTop: 8 }}>{data.config.mainMessage}</p>
          </header>

          <section style={{ padding: "0 16px 60px" }}>
            <Gallery photos={data.photos} />
          </section>

          {/* floating butterfly always on top */}
          <img src="/animations/butterfly.gif" className="butterfly" alt="butterfly" />
        </main>
      )}
    </>
  );
}
