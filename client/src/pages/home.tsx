import { useEffect, useState } from "react";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Services from "../components/sections/services";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";
import Brands from '../components/sections/brands';
import { useScrollProgress } from "../hooks/use-scroll-progress";

export default function Home() {
  const scrollProgress = useScrollProgress();
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Check if user has already visited
    if (sessionStorage.getItem("visited")) {
      setShowPreloader(false);
    } else {
      setShowPreloader(true);
      sessionStorage.setItem("visited", "true"); // Prevent preloader on next visits
    }
  }, []);

  useEffect(() => {
    if (showPreloader) {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        setTimeout(() => {
          preloader.style.opacity = "0";
          setTimeout(() => {
            preloader.style.display = "none";
            setShowPreloader(false);
          }, 500);
        }, 1000);
      }
    }
  }, [showPreloader]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div
        className="scroll-indicator"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Preloader */}
      {showPreloader && (
        <div
          id="preloader"
          className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500"
        >
          <div className="text-center">
            <div className="w-20 h-20 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold text-gradient">Airavata Technologies</h2>
            <p className="text-gray-500 mt-2">Loading Innovation...</p>
          </div>
        </div>
      )}

      <Navbar />

      <main>
        <Hero />
        <About />
        <Brands/>
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 w-12 h-12 gradient-bg text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
          scrollProgress > 20
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <svg
          className="w-5 h-5 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button> */}
      {/* Scroll to Top Button */}
<button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className={`fixed bottom-8 right-8 w-12 h-12 gradient-bg text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 ${
    scrollProgress > 20 ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
>
  <svg
    className="w-5 h-5 mx-auto"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 10l7-7m0 0l7 7m-7-7v18"
    />
  </svg>
</button>

    </div>
  );
}
