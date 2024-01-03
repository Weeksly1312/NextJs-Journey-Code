import "@styles/globals.css";

export const metadata = {
  title: "Nextjs Journey Code",
  description: "My Journey to Learn Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
}
