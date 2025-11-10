import { Link } from "react-router-dom";
import StarsCanvas from "../components/StarBackground";

const eventCategories = [
  {
    title: "Guest Lectures",
    description:
      "Inspirational talks by distinguished scientists and educators like Prof. H.C. Verma and Padma Shri Arvind Gupta.",
    img: "/events/guest_lecture.webp", // you can use any relevant image
    path: "/events/guest-lectures",
  },
  {
    title: "SCICON",
    description:
      "Our annual science contest fostering innovation and creativity among young minds.",
    img: "/events/scicon.webp",
    path: "/events/scicon",
  },
  {
    title: "Workshops",
    description:
      "Hands-on sessions like the Telescope Making Workshop conducted with IUCAA.",
    img: "/events/workshop.webp",
    path: "/events/workshops",
  },
  {
    title: "Social Outreach",
    description:
      "Events like Blood Donation and Jagriti Blind School visits promoting social responsibility.",
    img: "/events/social.webp",
    path: "/events/social-outreach",
  },
];

const Events = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
      <StarsCanvas />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <h1 className="heading-1 text-center mb-8">Our Events</h1>
        <p className="body-large text-center text-gray-300 mb-12">
          Explore our event categories — from guest lectures to social outreach initiatives.
        </p>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {eventCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white/10 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={category.img}
                alt={category.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="heading-3 mb-3">{category.title}</h2>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <Link
                  to={category.path}
                  className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
