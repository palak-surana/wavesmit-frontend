import React from "react";
import { Link } from "react-router-dom";
import StarsCanvas from "../components/StarBackground";

const Events = () => {
  const eventSections = [
    {
      title: "Guest Lectures",
      description:
        "Invited talks by renowned scientists and innovators inspiring young minds.",
      image: "/events/IMG_3389.webp",
      link: "/events/guest-lectures",
    },
    {
      title: "SCICON",
      description:
        "Our annual science contest promoting inclusivity, innovation, and creativity.",
      image: "/events/IMG_1878.webp",
      link: "/events/scicon",
    },
    {
      title: "Experiential Learning",
      
    },
    {
      title: "Interships",
      description:
        "Our annual science contest promoting inclusivity, innovation, and creativity.",
      image: "/events/IMG_1878.webp",
      link: "/events/scicon",
    },
    {
      title: "Workshops",
      description:
        "Hands-on experiences like telescope making and practical science sessions.",
      image: "/events/IMG_9495.webp",
      link: "/events/workshops",
    },
    {
      title: "Social Outreach",
      description:
        "Community programs like Jagriti Blind School initiative and blood donation drives.",
      image: "/events/IMG-20240202-WA0011.webp",
      link: "/events/social-outreach",
    },
  ];

  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px] text-white">
      <StarsCanvas />

      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Events</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore our journey through science, innovation, and community
            engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {eventSections.map((event, index) => (
            <div
              key={index}
              className="bg-[#0a0225] p-6 rounded-2xl shadow-lg hover:shadow-blue-600/30 transition duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="rounded-xl mb-5 w-full h-56 object-cover"
              />
              <h2 className="text-2xl font-semibold mb-3">{event.title}</h2>
              <p className="text-gray-400 mb-5">{event.description}</p>
              <Link
                to={event.link}
                className="inline-block px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                View More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
