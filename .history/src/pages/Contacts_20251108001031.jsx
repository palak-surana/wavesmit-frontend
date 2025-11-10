import React from "react"
import StarsCanvas from "../components/StarBackground"

const contacts = [
   {
        name: "Puja Verma",
        img: "",
        role: "Teacher",
        linkedin: "",
    },
     {
        name: "Hussain Shaikh ",
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
]

const Contacts = () => (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
        <StarsCanvas />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
                <h1 className="heading-1 mb-4 sm:mb-6">Get In Touch</h1>
                <p className="body-large max-w-3xl mx-auto text-gray-300">
                    Connect with our team members to learn more about Waves and
                    how you can get involved
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
                {contacts.map((contact) => (
                    <div key={contact.name} className="card text-center">
                        <div className="mb-6">
                            <img
                                src={contact.img}
                                alt={contact.name}
                                className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full mx-auto shadow-lg border-4 border-white/20 bg-white"
                            />
                        </div>
                        <h3 className="heading-4 mb-2">{contact.name}</h3>
                        <p className="body-small mb-6 text-gray-400">
                            {contact.role}
                        </p>
                        <div className="flex justify-center">
                            <a
                                href={contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
                            >
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="card text-center">
                <h3 className="heading-3 mb-6">Want to Join Us?</h3>
                <p className="body-regular mb-8 max-w-2xl mx-auto">
                    We're always looking for passionate individuals to join our
                    mission. Reach out to learn about opportunities to get
                    involved.
                </p>
                <button className="inline-block text-center px-6 py-3 bg-transparent border-2 border-white/30 text-white font-medium rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-300">
                    Contact Us
                </button>
            </div>
        </div>
    </div>
)

export default Contacts
