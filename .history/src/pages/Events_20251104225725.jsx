import StarsCanvas from "../components/StarBackground"

const pastEvents = [
    {
        title: 'WAVES – Exploring the Rhythm of Life and Living',
        img: "/events/waves_main.webp",
        imgAlt: "WAVES Event MITAOE",
        details: [
            {
                heading: "Overview",
                content: [
                    "‘WAVES’ is a platform to explore the rhythm of life and living through science, innovation, and empathy.",
                    "It brings together diverse initiatives inspiring social impact, innovation, and holistic development.",
                ],
            },
            {
                heading: "Key Theme",
                content: ["Learning, Sharing, and Growing Together"],
            },
        ],
        highlights: [
            "Guest lectures by eminent personalities sharing their journeys and insights",
            "Science project competitions under ‘SciCon 2025’",
            "Experiential learning through project-based activities",
            "Donation and outreach initiatives fostering compassion",
            "Mental health and well-being awareness sessions",
        ],
        impact:
            "WAVES has become a unifying platform promoting scientific curiosity, empathy, and self-growth among students while strengthening community engagement.",
    },
    {
        title: "Guest Lectures by Eminent Personalities",
        img: "/events/guest_lectures.webp",
        imgAlt: "Guest lecture session at MITAOE",
        details: [
            {
                heading: "Objective",
                content: [
                    "To provide students exposure to real-world experiences from scientists, innovators, and leaders.",
                ],
            },
            {
                heading: "Tagline",
                content: ["Sharing wisdom, shaping minds"],
            },
        ],
        highlights: [
            "Interactive sessions with experts from diverse scientific fields",
            "Discussions on research, innovation, and life lessons",
            "Motivational talks encouraging inquiry and persistence",
        ],
        impact:
            "These lectures help students connect classroom learning with real-world applications while gaining inspiration from experts’ life stories.",
    },
    {
        title: "Project Competition – SciCon 2025 (Innovators’ Guild)",
        img: "/events/scicon_2025.webp",
        imgAlt: "Students showcasing science projects",
        details: [
            {
                heading: "Theme",
                content: [
                    "Where ideas take flight – fostering creativity, innovation, and teamwork.",
                ],
            },
            {
                heading: "Participation",
                content: [
                    "Inter-institutional competition for students across disciplines.",
                ],
            },
        ],
        highlights: [
            "Students develop and present working science models",
            "Encourages innovation and cross-disciplinary collaboration",
            "Judged by faculty and invited experts",
        ],
        impact:
            "A platform where young innovators transform ideas into tangible scientific outcomes, promoting research-oriented learning.",
    },
    {
        title: "Experiential Learning – Learning Voyagers",
        img: "/events/experiential_learning.webp",
        imgAlt: "Students working on hands-on learning projects",
        details: [
            {
                heading: "Objective",
                content: [
                    "To promote learning by doing and exploration through hands-on science activities.",
                ],
            },
            {
                heading: "Tagline",
                content: ["Exploring by doing, growing together"],
            },
        ],
        highlights: [
            "Project-making sessions for applied understanding",
            "Peer learning and teamwork-based assignments",
            "Skill-building activities to enhance creativity and problem solving",
        ],
        impact:
            "Encouraged practical understanding and enhanced the collaborative spirit among students through experiential learning models.",
    },
    {
        title: "Donation Drive – Hands of Hope",
        img: "/events/donation_drive.webp",
        imgAlt: "Donation activity conducted by students",
        details: [
            {
                heading: "Objective",
                content: [
                    "To promote the culture of giving and community support through collection drives.",
                ],
            },
            {
                heading: "Tagline",
                content: ["Giving with love, receiving with dignity"],
            },
        ],
        highlights: [
            "Collection of clothes, books, and essential items",
            "Distribution among underprivileged communities",
            "Student-led initiative promoting empathy and social responsibility",
        ],
        impact:
            "Created awareness and compassion among students while extending tangible support to communities in need.",
    },
    {
        title: "Mental Health & Well-being – Life Guardians",
        img: "/events/mental_health.webp",
        imgAlt: "Well-being and counselling session",
        details: [
            {
                heading: "Objective",
                content: [
                    "To promote awareness about mental health and provide emotional support systems for students.",
                ],
            },
            {
                heading: "Tagline",
                content: ["Caring hearts, saving lives"],
            },
        ],
        highlights: [
            "Counselling and interactive workshops",
            "Awareness sessions on stress management and mindfulness",
            "Peer support groups promoting healthy communication",
        ],
        impact:
            "Students learned to prioritize emotional well-being, reduce stigma around mental health, and cultivate self-awareness.",
    },
    // 🧠 Existing old events (your previous ones)
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
        impact:
            "Professor Verma's words acted as a shooting star for young minds, opening a wide plethora of ideas, concepts, and understanding of the world of science. Students gained valuable insights and learning experiences that will sustain for the rest of their lives.",
    },
    // ... (rest of your existing events continue here)
];

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
