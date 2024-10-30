import IconPreview from "@/components/iconPreview";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          marginBottom: "20px",
        }}
      >
        Iconforge Icon Library Preview
      </h1>
      <IconPreview />
    </div>
  );
}
