import StarsCanvas from "../../components/StarBackground";

const workshops = [
  {
    title: "Telescope Making Workshop",
    img: "/events/IMG_9495.webp",
    details: [
      { heading: "Date & Venue", content: ["November 4, 2023", "MITAOE, Pune"] },
      { heading: "Collaboration", content: ["IUCAA – Inter-University Centre for Astronomy & Astrophysics"] },
    ],
    highlights: [
      "Hands-on telescope building under expert guidance",
      "Night-sky observation session focusing on Jupiter and its moons",
      "Introduction to optics and telescope mechanics",
    ],
    impact:
      "Sparked curiosity about astronomy and gave students a practical understanding of telescope design and celestial observation.",
  },
  {
    title: "3D Printing and Rapid Prototyping Workshop",
    img: "/events/IMG_5642.webp",
    details: [
      { heading: "Date & Venue", content: ["August 17, 2024", "MITAOE, Pune"] },
      { heading: "Organizer", content: ["Department of Data Science & Engineering"] },
    ],
    highlights: [
      "Demonstration of 3D printing technology",
      "Students designed and printed mini-prototypes",
    ],
    impact:
      "Enhanced students’ knowledge of rapid prototyping and manufacturing innovations.",
  },
];

const Workshops = () => (
  <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px] text-white">
    <StarsCanvas />
    <div className="max-w-6xl mx-auto p-6 relative z-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Workshops</h1>

      {workshops.map((event, idx) => (
        <div
          key={idx}
          className="mb-12 bg-[#0a0225] p-6 rounded-2xl shadow-lg hover:shadow-blue-600/30 transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">{event.title}</h2>

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

export default Workshops;
