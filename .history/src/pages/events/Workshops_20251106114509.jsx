import StarsCanvas from "../../components/StarBackground";

const workshops = [
  {
    title: "Telescope Making Workshop",
    img: "/events/IMG_9495.webp",
    details: [
      { heading: "Date & Venue", content: ["November 4, 2023", "MITAOE, Pune"] },
      { heading: "Collaboration", content: ["IUCAA"] },
    ],
    highlights: [
      "Hands-on telescope building",
      "Sky-watching session observing Jupiter",
    ],
    impact:
      "Introduced participants to astronomy through practical telescope making.",
  },
];

const Workshops = () => (
  <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
    <StarsCanvas />
    <div className="max-w-6xl mx-auto p-6 relative z-10 text-white">
      <h1 className="text-3xl font-bold mb-10 text-center">Workshops</h1>
      {workshops.map((event, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
          <img src={event.img} alt={event.title} className="rounded-lg mb-4" />
          <p className="text-gray-300">{event.impact}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Workshops;
