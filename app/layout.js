import Navbar from "./Navbar";
import "../styles/globals.css";
import Footer from "./Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <main>
          <div className="  bg-[#121212] text-white max-w-screen-2xl mx-auto overflow-x-hidden">
            <header className=" pb-20 ">
              <Navbar />
            </header>

            {children}
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
