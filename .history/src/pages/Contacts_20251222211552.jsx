import React, { useState } from "react";
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

const Contacts = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
      <StarsCanvas />

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="heading-1 mb-4">Get in Touch with Us</h1>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Connect with our team members to learn more about Waves and NSS.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contacts.map((contact) => (
            <div
              key={contact.name}
              className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md
                         p-6 text-center group transition-all duration-500"
            >
              <span className="absolute inset-0 bg-blue-600 -translate-x-full
                               group-hover:translate-x-0 transition-transform duration-500" />

              <div className="relative z-10">
                <img
                  src={contact.img || "/contacts/default.png"}
                  alt={contact.name}
                  className="w-28 h-28 rounded-full mx-auto mb-6
                             border-4 border-white/30 bg-white"
                />

                <h3 className="heading-4 mb-2 text-white">{contact.name}</h3>
                <p className="text-gray-300 group-hover:text-white mb-6">
                  {contact.role}
                </p>

                {contact.linkedin && (
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 mx-auto bg-white/10 group-hover:bg-white
                               rounded-full flex items-center justify-center transition-all"
                  >
                    <svg
                      className="w-6 h-6 text-white group-hover:text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Want to Join Us */}
        <div className="rounded-2xl bg-white/10 p-8 text-center">
          <h3 className="heading-3 mb-4 text-white">Want to Join Us?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our mission.
          </p>

          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 border-2 border-white/30 text-white rounded-lg
                       hover:bg-white/10 transition-all"
          >
            {showForm ? "Close Form" : "Contact Us"}
          </button>
        </div>

        {/* Contact Form (SHOW ON CLICK) */}
        {showForm && (
          <div
            className="mt-12 max-w-3xl mx-auto bg-white/10 backdrop-blur-md
                       p-8 rounded-2xl animate-slideDown"
          >
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-transparent
                           border border-white/30 text-white outline-none"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-transparent
                           border border-white/30 text-white outline-none"
                required
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-transparent
                           border border-white/30 text-white outline-none"
                required
              />

              <button
                type="submit"
                className="w-full py-3 bg-red-500 text-white rounded-lg
                           hover:bg-red-600 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

export default Contacts;
