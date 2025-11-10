import React, { useState } from "react";
import StarsCanvas from "../components/StarBackground";

const eventCategories = {
  "Guest Lectures": [
    {
      title: 'Invited Talk by Padmashree Prof. H C Verma on "Importance of Science"',
      img: "/events/IMG_3389.webp",
      imgAlt: "Professor HC Verma delivering talk on Importance of Science",
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
        "Discussion on current and future developments in science",
        "Interactive Q&A with students and faculty",
        "Motivational insights on following one’s interests",
      ],
      impact:
        "Professor Verma’s talk inspired hundreds of young minds to pursue science passionately.",
    },
    {
      title: 'Invited Talk on "Importance of Experiments in Learning Physics"',
      img: "/events/IMG_image.webp",
      imgAlt: "Padma Shri Arvind Gupta demonstrating physics experiments",
      details: [
        {
          heading: "Date & Venue",
          content: ["December 3, 2024", "D011, MIT Academy of Engineering, Alandi, Pune"],
        },
      ],
      highlights: [
        "Made science education engaging through hands-on learning",
        "Creative problem-solving using toys made from waste",
      ],
      impact:
        "Arvind Gupta demonstrated 'Toys from Trash' — a fun way to learn physics practically.",
    },
  ],

  Workshops: [
    {
      title: "Telescope Making Workshop",
      img: "/events/IMG_9495.webp",
      imgAlt: "Telescope Making Workshop participants",
      details: [
        {
          heading: "Date & Venue",
          content: ["November 4, 2023", "MIT Academy of Engineering Alandi, Pune"],
        },
        {
          heading: "Collaboration",
          content: ["IUCAA (Inter-University Centre for Astronomy and Astrophysics)"],
        },
      ],
      highlights: [
        "Built working telescopes under expert guidance",
        "Learned celestial observation techniques",
      ],
      impact:
        "Students gained practical astronomy experience and built functional telescopes.",
    },
  ],

  SCICON: [
    {
      title: "SCICON 2024 - Annual Science Contest",
      img: "/events/IMG_1878.webp",
      imgAlt: "SCICON 2024 student presentations",
      details: [
        {
          heading: "Date & Venue",
          content: ["February 3, 2024", "MIT Academy of Engineering, Alandi, Pune"],
        },
      ],
      highlights: [
        "Participation from multiple prestigious schools",
        "Encouraged innovation and creativity in science",
      ],
      impact:
        "SCICON 2024 fostered scientific curiosity and hands-on learning among young students.",
    },
    {
      title: "Jagriti Blind School (Social Outreach)",
      img: "/events/IMG-20240202-WA0011.webp",
      imgAlt: "Jagriti Blind School Outreach",
      details: [
        {
          heading: "Date & Venue",
          content: [
            "January 29 - February 2, 2024",
            "NFBM Jagruti's Blind School for Girls",
          ],
        },
      ],
      highlights: [
        "Inclusive education initiative for visually challenged students",
        "5 working science models developed by students",
      ],
      impact:
        "Empowered visually challenged students through interactive science model making.",
    },
  ],

  "Social Outreach": [
    {
      title: "Blood Donation Drive",
      video: "/events/blood_donation.mp4",
      details: [
        {
          heading: "Date & Venue",
          content: ["October 8, 2025", "MIT Academy of Engineering, Alandi, Pune"],
        },
      ],
      highlights: [
        "390+ donors participated",
        "Part of the Healing Minds Initiative",
      ],
      impact:
        "Created awareness and compassion through a successful blood donation event.",
    },
  ],
};

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("Guest Lectures");
  const [selectedEvent, setSelectedEvent] = useState(eventCategories["Guest Lectures"][0]);

  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
      <StarsCanvas />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">Our Events</h1>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Explore our guest lectures, workshops, and outreach initiatives.
          </p>
        </div>

        {/* Dropdown Tabs for Event Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(eventCategories).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedEvent(eventCategories[cat][0]);
              }}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white/10 hover:bg-blue-800 text-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sub-tabs inside the selected category */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {eventCategories[selectedCategory].map((event, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedEvent(event)}
              className={`px-3 py-2 text-sm rounded-md transition-all ${
                selectedEvent.title === event.title
                  ? "bg-yellow-400 text-black font-semibold"
                  : "bg-white/10 hover:bg-yellow-500 hover:text-black"
              }`}
            >
              {event.title.split(" ")[0]} {/* short label */}
            </button>
          ))}
        </div>

        {/* Selected Event Content */}
        <div className="card space-y-8">
          <div className="text-center">
            <h2 className="heading-2 mb-6">{selectedEvent.title}</h2>
          </div>

          <div className="relative overflow-hidden rounded-xl">
            {selectedEvent.video ? (
              <video
                src={selectedEvent.video}
                controls
                muted
                autoPlay
                loop
                className="w-full h-[250px] sm:h-[350px] lg:h-[450px] object-cover rounded-xl"
              />
            ) : (
              <img
                src={selectedEvent.img}
                alt={selectedEvent.imgAlt}
                className="w-full h-[250px] sm:h-[350px] lg:h-[450px] object-cover rounded-xl"
              />
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h4 className="heading-4 mb-4">Event Details</h4>
              {selectedEvent.details.map((d, i) => (
                <div key={i} className="border-l-4 border-white/20 pl-4 mb-4">
                  <h5 className="text-gray-400 text-sm uppercase mb-2">{d.heading}</h5>
                  {d.content.map((c, j) => (
                    <p key={j} className="body-regular">
                      {c}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div>
              <h4 className="heading-4 mb-4">Highlights</h4>
              <ul className="space-y-2">
                {selectedEvent.highlights.map((h, k) => (
                  <li key={k} className="flex space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <h4 className="heading-4 mb-2">Impact</h4>
                <p className="body-regular">{selectedEvent.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
