import { useEffect, useRef, useState } from "react";
import StarsCanvas from "../components/StarBackground";

const Home = () => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsLoading(false);
      });

      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015]">
      <StarsCanvas />
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

      {/* Background Image (if you want image instead of video, uncomment below and remove video) */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center z-[1]"
        style={{ backgroundImage: "url('/assets/home-bg.jpg')" }}
      ></div> */}

      {/* Remove text & buttons — clean layout */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Empty section keeps spacing balanced */}
      </section>
    </div>
  );
};

export default Home;
