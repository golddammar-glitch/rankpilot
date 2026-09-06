export const metadata = {
  title: "RankPilot",
  description: "SEO Management Platform for Clean24Saar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
