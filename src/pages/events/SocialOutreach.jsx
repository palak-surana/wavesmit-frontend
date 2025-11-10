import StarsCanvas from "../../components/StarBackground";

const outreachEvents = [
  {
    title: "Jagriti Blind School (Social Outreach)",
    img: "/events/IMG-20240202-WA0011.webp",
    details: [
      { heading: "Date & Venue", content: ["January 30 – February 4, 2024", "Jagriti Blind School, Pune"] },
      { heading: "Organized By", content: ["Waves Club, MITAOE"] },
    ],
    highlights: [
      "Week-long science workshop for visually impaired students",
      "Assisted them in building 5 functional science models",
      "Promoted inclusive education through experiential learning",
    ],
    impact:
      "Empowered blind students by bridging accessibility gaps in science education and fostering curiosity.",
  },
  {
    title: "Blood Donation Drive – Healing Minds Initiative",
    video: "/events/blood_donation.mp4",
    details: [
      { heading: "Date & Venue", content: ["March 20, 2024", "MITAOE Campus, Pune"] },
      { heading: "Organized By", content: ["Waves Club & NSS MITAOE"] },
    ],
    highlights: [
      "390+ donors and 200+ blood units collected",
      "Awareness drive on empathy and mental wellness",
    ],
    impact:
      "Encouraged humanitarian values and mental well-being through the Healing Minds Initiative.",
  },
];

const SocialOutreach = () => (
  <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px] text-white">
    <StarsCanvas />
    <div className="max-w-6xl mx-auto p-6 relative z-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Social Outreach</h1>

      {outreachEvents.map((event, idx) => (
        <div
          key={idx}
          className="mb-12 bg-[#0a0225] p-6 rounded-2xl shadow-lg hover:shadow-blue-600/30 transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">{event.title}</h2>

          {/* Image or Video */}
          {event.video ? (
            <video
              src={event.video}
              controls
              muted
              autoPlay
              loop
              className="rounded-xl mb-4 w-full object-cover"
            />
          ) : (
            <img
              src={event.img}
              alt={event.title}
              className="rounded-xl mb-4 w-full object-cover"
            />
          )}

          {/* Details */}
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

export default SocialOutreach;
      