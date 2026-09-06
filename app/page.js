export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#f6f8fb",
      fontFamily: "Arial, sans-serif",
      padding: "30px"
    }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <h1 style={{ fontSize: "38px", marginBottom: "5px" }}>
          RankPilot
        </h1>

        <p style={{ color: "#666", marginBottom: "30px" }}>
          SEO Management Platform
        </p>

        <section style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          marginBottom: "20px"
        }}>
          <h2>Clean24Saar</h2>
          <p>clean24saar.de</p>
          <h3>SEO Dashboard</h3>
          <p>Website analysis and optimization center.</p>
        </section>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "15px"
        }}>
          {[
            "SEO Audit",
            "Keywords",
            "Content Studio",
            "Local SEO",
            "Competitors",
            "Rank Tracking"
          ].map((item) => (
            <div key={item} style={{
              background: "white",
              padding: "22px",
              borderRadius: "15px"
            }}>
              <h3>{item}</h3>
              <p style={{ color: "#666" }}>
                RankPilot SEO Tool
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
            }
