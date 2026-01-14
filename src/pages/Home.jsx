import React, { useEffect, useRef, useState } from "react"; // ← ADDED React default import
import StarsCanvas from "../components/StarBackground";

const Home = () => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsLoading(false);
      });

      videoRef.current
        .play()
        .catch((error) => {
          console.log("Video autoplay failed:", error);
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015]">
      {/* Star Background */}
      <StarsCanvas />

      {/* Loader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#040015]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      )}

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        className={`fixed left-0 top-0 w-full h-full object-cover z-[1] transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-80"
        }`}
      >
        <source src="/assets/BlackHole.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Content */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 pt-[100px]">
        <h1
          className="text-4xl sm:text-6xl lg:text-5xl font-bold text-white mb-6"
          style={{
            textShadow: "0 4px 32px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)",
          }}
        >
          Welcome to Waves
        </h1>

        <h2 className="text-2xl sm:text-3xl text-gray-200 mb-12">MIT Academy of Engineering</h2>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg leading-relaxed text-gray-300">
            We create opportunities for students to discover their potential,
            inspire others, and work on impactful projects that bridge the gap
            between education and societal needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;