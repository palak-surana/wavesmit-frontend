import Navbar from "../components/Navbar"; // 👈 make sure path is correct

const Home = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015]">
      {/* ===== Navbar Fixed ===== */}
      <Navbar />

      {/* ===== Background Image Section ===== */}
      <section className="relative w-full mt-[170px]"> 
        {/* 👆 adjust this margin-top if Navbar height changes */}

        {/* Full Background Image */}
        <img
          src="/assets/galleryimg.jpg"  // ✅ make sure the image path is correct
          alt="Background"
          className="w-full h-screen object-cover"
        />

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-5xl font-bold drop-shadow-lg">
            WELCOME TO NSS & WAVE
          </h1>
          <p className="text-gray-200 text-xl mt-3 font-medium">
            MIT Academy of Engineering
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
