import React from "react";
import StarsCanvas from "../components/StarBackground";

const contacts = [
  {
    name: "Puja Verma",
    img: "",
    role: "Teacher",
    linkedin: "",
  },
  {
    name: "Hussain Shaikh",
    img: "",
    role: "Teacher",
    linkedin: "",
  },
  {
    name: "Hrishikesh Patil",
    img: "/contacts/Hrishikesh Patil.jpg",
    role: "Team Coordinator",
    linkedin: "https://www.linkedin.com/in/hrishikesh-patil-a77873376",
  },
  {
    name: "Om",
    img: "/contacts/om.jpg",
    role: "Team Member",
    linkedin: "https://www.linkedin.com/in/om-kolte-26a6b3253",
  },
];

const Contacts = () => (
  <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
    <StarsCanvas />

    {/* Content Container */}
    <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 relative z-10">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-wide">
          Get In Touch ✨
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Connect with our mentors and team members to know more about WAVES and NSS,
          or explore collaboration opportunities.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        {contacts.map((contact) => (
          <div
            key={contact.name}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center 
                       backdrop-blur-sm shadow-lg hover:shadow-xl hover:bg-white/10 
                       transition-all duration-300"
          >
            <div className="mb-5">
              <img
                src={contact.img || "/contacts/default-avatar.png"}
                alt={contact.name}
                className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full mx-auto 
                           shadow-md border-4 border-white/20 bg-white/10"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">{contact.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{contact.role}</p>

            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/80 
                           hover:bg-blue-700 rounded-full text-white transition-all"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Join Us Section */}
      <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-sm shadow-md">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          Want to Join Us?
        </h3>
        <p className="text-gray-300 text-base max-w-2xl mx-auto mb-8">
          We're always looking for passionate individuals to contribute to our
          initiatives. Reach out to learn about volunteering or collaboration
          opportunities.
        </p>
        <button className="px-8 py-3 text-lg font-medium border-2 border-white/30 text-white rounded-lg 
                           hover:border-white/60 hover:bg-white/10 transition-all duration-300">
          Contact Us
        </button>
      </div>
    </div>
  </div>
);

export default Contacts;
