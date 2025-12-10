interface Photo {
  id: string;
  url: string;
}

export default function Gallery({ photos }: { photos: Photo[] }) {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
      }}
    >
      {photos.map((p) => (
        <img
          key={p.id}
          src={p.url}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      ))}
    </div>
  );
}
