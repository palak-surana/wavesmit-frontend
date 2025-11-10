import StarsCanvas from "../../components/StarBackground";

const sciconEvents = [
  {
    title: "SCICON 2024 - Annual Science Contest",
    img: "/events/IMG_1878.webp",
    details: [
      { heading: "Date & Venue", content: ["February 3, 2024", "MITAOE, Alandi (Pune)"] },
      { heading: "Theme", content: ["Innovation and Inclusion in Science"] },
    ],
    highlights: [
      "Participation from multiple schools and colleges",
      "Inclusivity for blind students with tactile models",
      "Exhibition of student innovations and research posters",
    ],
    impact:
      "SCICON 2024 established itself as a platform promoting curiosity, innovation, and inclusivity in science education.",
  },
];

const Scicon = () => (
  <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px] text-white">
    <StarsCanvas />
    <div className="max-w-6xl mx-auto p-6 relative z-10">
      <h1 className="text-4xl font-bold mb-10 text-center">SCICON Events</h1>

      {sciconEvents.map((event, idx) => (
        <div
          key={idx}
          className="mb-12 bg-[#0a0225] p-6 rounded-2xl shadow-lg hover:shadow-blue-600/30 transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            {event.title}
          </h2>
          <img
            src={event.img}
            alt={event.title}
            className="rounded-xl mb-4 w-full object-cover"
          />

          {/* Event Details */}
          <div className="mb-4">
            {event.details.map((d, i) => (
              <div key={i} className="mb-2">
                <strong className="text-blue-300">{d.heading}: </strong>
                <span>{d.content.join(", ")}</span>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            {event.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <p className="text-gray-400">{event.impact}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Scicon;
