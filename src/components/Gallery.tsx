import React, { useState } from "react";
import "./Gallery.css";

type Photo = { id: string; url: string };

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<Photo | null>(null);

  return (
    <>
      <h3 style={{ marginBottom: 12 }}>Photo Gallery</h3>
      <div className="gallery-grid">
        {photos.map((p) => (
          <div key={p.id} className="gallery-item" onClick={() => setOpen(p)}>
            <img src={p.url} alt={`photo-${p.id}`} />
          </div>
        ))}
      </div>

      {open && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <img src={open.url} className="lightbox-img" alt="open" />
        </div>
      )}
    </>
  );
}
