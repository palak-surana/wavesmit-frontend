import React, { useState } from "react";
import StarsCanvas from "../components/StarBackground";

const contacts = [
  {
    name: "Puja Verma",
    img: "",
    role: "Teacher",
    linkedin: "https://linkedin.com", // add later if available
  },
  {
    name: "Hussain Shaikh",
    img: "",
    role: "Teacher",
    linkedin: "https://linkedin.com",
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
              {/* Hover overlay */}
              <span className="absolute inset-0 bg-blue-600 -translate-x-full
                               group-hover:translate-x-0 transition-transform duration-500" />

              <div className="relative z-10">
                <img
                  src={contact.img || "/contacts/default.png"}
                  alt={contact.name}
                  className="w-28 h-28 rounded-full mx-auto mb-6
                             border-4 border-white/30 bg-white"
                />

                <h3 className="heading-4 mb-2 text-white">
                  {contact.name}
                </h3>

                <p className="text-gray-300 group-hover:text-white mb-6">
                  {contact.role}
                </p>

                {/* LinkedIn Icon */}
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 mx-auto bg-white/10 group-hover:bg-white
                             rounded-full flex items-center justify-center
                             transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white group-hover:text-blue-600"
                  >
                    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.43c-1.12 0-2.03-.91-2.03-2.03 0-1.12.91-2.03 2.03-2.03 1.12 0 2.03.91 2.03 2.03 0 1.12-.91 2.03-2.03 2.03zM20.45 20.45h-3.5v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67h-3.5V9h3.36v1.56h.05c.47-.88 1.62-1.8 3.34-1.8 3.57 0 4.22 2.35 4.22 5.41v6.28z" />
                  </svg>
                </a>
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

        {/* Contact Form */}
        {showForm && (
          <div className="mt-12 max-w-3xl mx-auto bg-white/10 backdrop-blur-md
                          p-8 rounded-2xl animate-slideDown">
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
