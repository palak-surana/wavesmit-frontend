import StarsCanvas from "../../components/StarBackground";

const guestLectures = [
  {
    title: 'Invited Talk by Padmashree Prof. H C Verma on "Importance of Science"',
    img: "/events/IMG_3389.webp",
    details: [
      { heading: "Date & Venue", content: ["February 4, 2023", "MITAOE, Alandi, Pune"] },
      { heading: "Speaker", content: ["Padmashree Professor H C Verma"] },
    ],
    highlights: [
      "Interactive session with students",
      "Inauguration of 'Waves' by Prof. Verma",
    ],
    impact: "Inspired young minds with insights on science and curiosity.",
  },
  {
    title: 'Invited Talk on "Importance of Experiments in Learning Physics"',
    img: "/events/IMG_image.webp",
    details: [
      { heading: "Date & Venue", content: ["December 3, 2024", "MITAOE, Alandi, Pune"] },
      { heading: "Speaker", content: ["Padma Shri Arvind Gupta"] },
    ],
    highlights: [
      "Toys from Trash demonstration",
      "Hands-on learning in science",
    ],
    impact: "Showed creative ways to teach scientific principles through simple models.",
  },
];

const GuestLectures = () => (
  <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
    <StarsCanvas />
    <div className="max-w-6xl mx-auto p-6 relative z-10 text-white">
      <h1 className="text-3xl font-bold mb-10 text-center">Guest Lectures</h1>
      {guestLectures.map((event, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
          <img src={event.img} alt={event.title} className="rounded-lg mb-4" />
          <p className="text-gray-300 mb-2">{event.impact}</p>
        </div>
      ))}
    </div>
  </div>
);

export default GuestLectures;
