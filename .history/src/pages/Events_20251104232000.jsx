import StarsCanvas from "../components/StarBackground"

const pastEvents = [
    {
        title: 'Invited Talk by Padmashree Prof. H C Verma on "Importance of Science"',
        img: "/events/IMG_3389.webp",
        imgAlt: "Professor HC Verma delivering talk on Importance of Science",
        details: [
            {
                heading: "Date & Venue",
                content: [
                    "February 4, 2023",
                    "MIT Academy of Engineering, Alandi, Pune",
                ],
            },
            {
                heading: "Distinguished Speaker",
                content: ["Padmashree Professor H C Verma", '"God of Physics"'],
            },
            {
                heading: "Participation",
                content: [
                    "More than 200 students from different colleges and schools",
                ],
            },
            {
                heading: "Special Note",
                content: [
                    'Professor Verma inaugurated "Waves" - a platform to explore the rhythm of life and living.',
                ],
            },
        ],
        highlights: [
            "Discussion on current and future developments in the field of science",
            "Interactive session with students and faculty",
            'Insights on the temporary nature of educational "trends"',
            "Emphasis on following one's interests with patience and dedication",
        ],
        impact: "Professor Verma's words acted as a shooting star for young minds, opening a wide plethora of ideas, concepts, and understanding of the world of science. Students gained valuable insights and learning experiences that will sustain for the rest of their lives.",
    },
    {
        title: "Telescope Making Workshop",
        img: "/events/IMG_9495.webp",
        imgAlt: "Telescope Making Workshop participants",
        details: [
            {
                heading: "Date & Venue",
                content: [
                    "November 4, 2023",
                    "MIT Academy of Engineering Alandi, Pune",
                ],
            },
            {
                heading: "Collaboration",
                content: [
                    "IUCAA (Inter-University Centre for Astronomy and Astrophysics)",
                ],
            },
            {
                heading: "Resource Faculty",
                content: [
                    "Tushar Purohit and Rupesh Labade (Science Educators, IUCAA)",
                ],
            },
            {
                heading: "Participation",
                content: ["60 B.Tech students"],
            },
        ],
        highlights: [
            "Participants learned about various telescope designs, including refracting and reflecting telescopes",
            "Hands-on session where participants built their telescopes under expert guidance",
            "Learning techniques for celestial observation",
            "Practical sky-watching session resulting in observation of Jupiter and its moons",
        ],
        impact: "To introduce participants to the world of astronomy and provide hands-on experience in making their own telescope. The event aimed to empower participants with the knowledge and skills to build a basic telescope, fostering a deeper understanding and appreciation of celestial observations.",
    },
    {
    title: "Donation Drive",
    img: "/events/donation.webp",
    imgAlt: "Students participating in the Donation Drive",
    details: [
        {
            heading: "Date & Venue",
            content: [
                "December 20, 2024",
                "MIT Academy of Engineering, Alandi, Pune",
            ],
        },
        {
            heading: "Organized By",
            content: [
                "WAVES Club – MITAOE",
            ],
        },
        {
            heading: "Support Partners",
            content: [
                "NSS Unit, MITAOE",
                "Local NGOs and community volunteers",
            ],
        },
        {
            heading: "Participation",
            content: ["80+ students and faculty members"],
        },
    ],
    highlights: [
        "Collection of clothes, books, and stationery for underprivileged children",
        "Volunteers helped in sorting and packaging donation items",
        "Distribution drive organized at nearby orphanage and rural schools",
        "Students learned the value of empathy and social responsibility through real action",
    ],
    impact: "The Donation Drive aimed to spread compassion and social awareness among students while supporting communities in need. It strengthened the spirit of unity and kindness within the institution, motivating participants to continue contributing to social causes.",
},
    {
        title: "Jagriti Blind School (Social Outreach)",
        img: "/events/IMG-20240202-WA0011.webp",
        imgAlt: "SCICON 2024 participants with certificates",
        details: [
            {
                heading: "Date & Venue",
                content: [
                    "January 29 - February 2, 2024",
                    "NFBM Jagruti's Blind School for Girls",
                ],
            },
            {
                heading: "Participation",
                content: ["40 students (4th Grade to 9th Grade)"],
            },
            {
                heading: "Event Scale",
                content: [
                    "300+ teams with 600+ students participated across different categories",
                ],
            },
            {
                heading: "Categories",
                content: [
                    "Everyday Science",
                    "Ancient Science",
                    "Future Science",
                    "Science Photography",
                ],
            },
        ],
        highlights: [
            "SciCon was organized by the School of Humanities and Engineering Sciences, MIT Academy of Engineering, to commemorate National Science Day in honor of Sir C V Ramans discovery of the Raman Effect.",
            "The event evolved into a state-level inter-institutional competition-cum-exhibition featuring working models, still models, and posters.",
            "The SCICON team conducted a week-long training program at NFBM Jagruti's Blind School, helping students develop and explain 5 working models for the competition.",
            "This initiative reflects the teams commitment to creating an inclusive platform for students from all backgrounds to participate in scientific exploration.",
        ],
        impact: "Successfully developed 5 working models for the competition, demonstrating the effectiveness of inclusive science education and hands-on learning approaches.",
    },
    {
        title: "SCICON 2024 - Annual Science Contest",
        img: "/events/IMG_1878.webp",
        imgAlt: "SCICON 2024 student presentations",
        details: [
            {
                heading: "Date & Venue",
                content: [
                    "February 3, 2024",
                    "MIT Academy of Engineering, Alandi, Pune",
                ],
            },
            {
                heading: "Event Scale",
                content: [
                    "Inter-institutional competition with 300+ teams and 600+ registrations",
                    "Students from 1st to 11th grade",
                ],
            },
            {
                heading: "Objectives",
                content: [
                    "Provide a platform for students to showcase scientific ideas and innovations",
                    "Encourage practical application of knowledge in real-world situations",
                    "Promote science education among diverse student backgrounds",
                ],
            },
        ],
        highlights: [
            "Participation from prestigious schools, Navodaya schools, and NFBM Jagruti's blind school",
            "Successful orientation sessions for project themes and categories",
            "Increased participation from underprivileged backgrounds",
            "Diverse scientific applications through presentations and models",
            "Evaluation by judges from prestigious institutions",
        ],
        impact: "All participants received participation certificates. Top three presentations in each category were awarded cash prizes, trophies, and certificates. The event's success and enthusiastic participation has established SCICON as an annual platform for fostering scientific innovation and inclusive education.",
    },
    {
        title: 'Invited Talk on "Importance of Experiments in Learning Physics"',
        img: "/events/IMG_image.webp",
        imgAlt: "Padma Shri Arvind Gupta demonstrating physics experiments",
        details: [
            {
                heading: "Date & Venue",
                content: [
                    "December 3, 2024",
                    "D011, MIT Academy of Engineering, Alandi, Pune",
                ],
            },
            {
                heading: "Resource Faculty",
                content: ["Padma Shri Arvind Gupta"],
            },
            {
                heading: "Event Details",
                content: [
                    "Inter-Institutional Level Event",
                    "240 Participants",
                    "Coordinated by Puja Verma",
                ],
            },
            {
                heading: "Trigger Points",
                content: [
                    "Inclination of students towards learning with fun",
                    "Foster deeper interest in practical, experiential learning over theoretical approaches",
                ],
            },
        ],
        highlights: [
            "Make science education inclusive and engaging",
            "Teach creative problem-solving techniques and eco-conscious practices",
            "Inspire educators and students, making science accessible, fun, and meaningful",
        ],
        impact: 'Arvind Gupta, renowned for his initiative "Toys from Trash," demonstrated innovative methods to teach scientific principles using toys crafted from everyday waste. Through simple yet impactful experiments, he elucidated fundamental concepts of physics, emphasizing hands-on learning as a powerful tool to ignite curiosity and understanding among students.',
    },
]

const Events = () => {
    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
            <StarsCanvas />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="heading-1 mb-4 sm:mb-6">Our Events</h1>
                    <p className="body-large max-w-3xl mx-auto text-gray-300">
                        Discover our journey through scientific exploration,
                        workshops, and community engagement
                    </p>
                </div>

                {/* Upcoming Events Section */}
                <section className="mb-16">
                    <h2 className="heading-2 mb-8">Upcoming Events</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="card">
                            <div className="flex items-center mb-4">
                                <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                                <span className="body-small text-gray-400 font-medium">
                                    August, 2025
                                </span>
                            </div>
                            <h3 className="heading-3 mb-4">
                                HC Verma Sir Talk
                            </h3>
                            <p className="body-regular">
                                HC Verma Sir will be talking about the
                                importance of science and how it can change the
                                world.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Past Events Section */}
                <section>
                    <h2 className="heading-2 mb-8">Past Events</h2>
                    {/* Event Cards */}
                    <div className="space-y-12">
                        {pastEvents.map((event, idx) => (
                            <div key={idx} className="card">
                                <div className="mb-8">
                                    <h3 className="heading-2 mb-6">
                                        {event.title}
                        </h3>
                                    <div className="relative overflow-hidden rounded-xl">
                                        <img
                                            src={event.img}
                                            alt={event.imgAlt}
                                            className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
                            style={{ objectPosition: "center" }}
                        />
                                </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="space-y-6">
                                        <h4 className="heading-4 mb-4">
                                            Event Details
                                    </h4>
                                        {event.details.map((detail, i) => (
                                            <div
                                                key={i}
                                                className="border-l-4 border-white/20 pl-4"
                                            >
                                                <h5 className="body-small text-gray-400 font-medium mb-2 uppercase tracking-wider">
                                                    {detail.heading}
                                                </h5>
                                                <div className="space-y-1">
                                                    {detail.content.map(
                                                        (line, j) => (
                                                            <p
                                                                key={j}
                                                                className="body-regular"
                                                            >
                                                                {line}
                                                            </p>
                                                        )
                                                    )}
                                </div>
                                </div>
                                        ))}
                            </div>

                                    <div className="space-y-8">
                                <div>
                                            <h4 className="heading-4 mb-4">
                                        Key Highlights
                                    </h4>
                                            <ul className="space-y-3">
                                                {event.highlights.map(
                                                    (hl, k) => (
                                                        <li
                                                            key={k}
                                                            className="flex items-start space-x-3"
                                                        >
                                                            <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                                            <span className="body-regular">
                                                                {hl}
                                                            </span>
                                        </li>
                                                    )
                                                )}
                                    </ul>
                                </div>

                                <div>
                                            <h4 className="heading-4 mb-4">
                                                Impact & Outcomes
                                    </h4>
                                            <p className="body-regular leading-relaxed">
                                                {event.impact}
                                    </p>
                                </div>
                            </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Events
