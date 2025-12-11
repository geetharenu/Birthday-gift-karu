import React from "react";
import { motion } from "framer-motion";

interface Photo { id: string; url: string; }

export default function Gallery({ photos }: { photos: Photo[] }) {
  return (
    <section style={{ marginTop: 20 }}>
      <h2 style={{ marginBottom: 12 }}>Memories</h2>

      <div style={{
        display: "grid",
        gap: 12,
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
      }}>
        {photos.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 6px 20px rgba(0,0,0,0.08)", background: "#fff" }}
          >
            <img
              src={p.url}
              alt="pic"
              style={{ width: "100%", height: 140, objectFit: "cover", display: "block" }}
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
