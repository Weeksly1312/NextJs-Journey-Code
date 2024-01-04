import "@styles/globals.css";

// import my components
import Nav from "@components/Nav";
import Provider from "@components/Provider";

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

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
