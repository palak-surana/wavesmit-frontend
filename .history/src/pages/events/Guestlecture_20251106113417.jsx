import StarsCanvas from "../../components/StarBackground";

const guestLectures = [
  {
    title: 'Invited Talk by Padmashree Prof. H C Verma on "Importance of Science"',
    img: "/events/IMG_3389.webp",
    imgAlt: "Professor HC Verma delivering talk",
    details: [
      {
        heading: "Date & Venue",
        content: ["February 4, 2023", "MIT Academy of Engineering, Alandi, Pune"],
      },
      {
        heading: "Distinguished Speaker",
        content: ["Padmashree Professor H C Verma", '"God of Physics"'],
      },
    ],
    highlights: [
      "Discussion on developments in science",
      "Interactive Q&A with students",
    ],
    impact: "Professor Verma’s talk inspired hundreds of students to pursue science with curiosity.",
  },
  {
    title: 'Invited Talk on "Importance of Experiments in Learning Physics"',
    img: "/events/IMG_image.webp",
    imgAlt: "Padma Shri Arvind Gupta demonstrating experiments",
    details: [
      {
        heading: "Date & Venue",
        content: ["December 3, 2024", "MIT Academy of Engineering, Alandi, Pune"],
      },
    ],
    highlights: [
      "Demonstrations using simple toys",
      "Creative, eco-friendly learning approach",
    ],
    impact: "Arvind Gupta made physics fun and accessible using ‘Toys from Trash’.",
  },
];

const GuestLectures = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
      <StarsCanvas />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <h1 className="heading-1 mb-8 text-center">Guest Lectures</h1>
        <div className="space-y-12">
          {guestLectures.map((event, idx) => (
            <div key={idx} className="card">
              <h3 className="heading-2 mb-4">{event.title}</h3>
              <img
                src={event.img}
                alt={event.imgAlt}
                className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-xl mb-6"
              />
              <div className="space-y-4">
                <h4 className="heading-4">Highlights</h4>
                <ul className="space-y-2">
                  {event.highlights.map((hl, i) => (
                    <li key={i}>• {hl}</li>
                  ))}
                </ul>
                <p className="body-regular">{event.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestLectures;
