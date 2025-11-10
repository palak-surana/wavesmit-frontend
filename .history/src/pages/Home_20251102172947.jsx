import StarsCanvas from "../components/StarBackground";

const Home = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015]">
      {/* Star background (the blue animated stars part) */}
      <StarsCanvas />

      {/* Section for the blue star background */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* You can keep this empty if you want only the stars visible */}
      </section>

      {/* Gallery image below the blue line */}
      <section className="relative z-20 w-full flex justify-center bg-[#040015] pb-12">
        <img
          src="/assets/galleryimg.jpg"
          alt="Gallery"
          className="w-[80%] max-w-5xl rounded-2xl shadow-lg border border-white/20"
        />
      </section>
    </div>
  );
};

export default Home;
