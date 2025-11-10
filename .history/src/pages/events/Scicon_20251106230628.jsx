import StarsCanvas from "../../components/StarBackground";

const  SciconEvents = [
  {
    title: "SCICON 2024 - Annual Science Contest",
    img: "/events/IMG_1878.webp",
    details: [
      { heading: "Date & Venue", content: ["February 3, 2024", "MITAOE, Pune"] },
    ],
    highlights: [
      "Participation from multiple schools",
      "Inclusive education for blind students",
    ],
    impact:
      "Established SCICON as an annual platform for scientific innovation and inclusivity.",
  },
];

const  Scicon = () => (
  <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
    <StarsCanvas />
    <div className="max-w-6xl mx-auto p-6 relative z-10 text-white">
      <h1 className="text-3xl font-bold mb-10 text-center">SCICON Events</h1>
      {scionEvents.map((event, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
          <img src={event.img} alt={event.title} className="rounded-lg mb-4" />
          <p className="text-gray-300">{event.impact}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Scicon;
