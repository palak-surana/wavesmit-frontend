import StarsCanvas from "../components/StarBackground";

const Home = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015]">
      {/* Blue stars background (top header space) */}
      <section className="relative z-10 flex flex-col items-center justify-center h-[25vh] bg-[#040015]">
        <StarsCanvas />
      </section>

      {/* Full width Image Section */}
      <section className="relative z-20 w-full">
        <img
          src="/assets/galleryimg.jpg"  // 👈 make sure file path is correct
          alt="Gallery"
          className="w-full h-screen object-cover"
        />
      </section>
    </div>
  );
};

export default Home;