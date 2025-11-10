import React from "react";
import StarsCanvas from "../components/StarBackground";
import donationVideo from "../assets/donation.mp4"; // ✅ Your blood donation video

// ✅ Import event images
import nssEvent from "../assets/nss.jpg";
import culturalEvent from "../assets/cultural.jpg";
import techEvent from "../assets/tech.jpg";

const Events = () => {
  const events = [
    {
      title: "One Drop, A Thousand Hopes",
      date: "8 Oct 2025",
      video: donationVideo,
      description: `Under the Healing Minds Initiative of WAVES - we organized a Blood Donation Drive in collaboration with NSS MITAOE, where over 390+ donors came together, contributing more than 200+ units of blood.

This wasn't just about donation - it was about empathy, care, and saving lives.

Each donor became a heartbeat of hope.`,
    },
    {
      title: "NSS Tree Plantation Drive",
      date: "12 Aug 2025",
      img: nssEvent,
      description: `WAVES and NSS MITAOE jointly organized a Tree Plantation Drive to promote a greener campus. 
Students and faculty planted over 200 saplings, contributing to a sustainable environment.`,
    },
    {
      title: "Tech Exhibition 2025",
      date: "28 Sept 2025",
      img: techEvent,
      description: `A showcase of innovation where students presented AI, robotics, and IoT projects. 
This event inspired collaboration and technological creativity across departments.`,
    },
    {
      title: "Cultural Fiesta – Waves of Talent",
      date: "14 Feb 2025",
      img: culturalEvent,
      description: `A vibrant celebration of music, dance, and drama. 
Students showcased their cultural spirit through performances that highlighted creativity and unity.`,
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#040015] pt-[90px]">
      <StarsCanvas />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-12">
          Events
        </h2>

        <div className="grid grid-cols-1 gap-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {event.title}
              </h3>
              <p className="text-gray-300 mb-4">{event.date}</p>

              {/* ✅ Video or Image Display */}
              {event.video ? (
                <video
                  src={event.video}
                  controls
                  autoPlay
                  muted
                  loop
                  className="rounded-xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover mb-4"
                />
              ) : (
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl mb-4"
                />
              )}

              <p className="text-gray-200 whitespace-pre-line">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
