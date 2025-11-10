import StarsCanvas from "../components/StarBackground";

const pastEvents = [
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
            {
                heading: "Participation",
                content: ["More than 200 students from different colleges and schools"],
            },
            {
                heading: "Special Note",
                content: ['Professor Verma inaugurated "Waves" - a platform to explore the rhythm of life and living.'],
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
                content: ["November 4, 2023", "MIT Academy of Engineering Alandi, Pune"],
            },
            {
                heading: "Collaboration",
                content: ["IUCAA (Inter-University Centre for Astronomy and Astrophysics)"],
            },
            {
                heading: "Resource Faculty",
                content: ["Tushar Purohit and Rupesh Labade (Science Educators, IUCAA)"],
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
        title: "Blood Donation",
        video: "/events/blood_donation.mp4", // Replace this with your actual video path
        videoAlt: "Blood Donation Drive highlights video",
        details: [
            {
                heading: "Date & Venue",
                content: ["October 8, 2025", "MIT Academy of Engineering, Alandi, Pune"],
            },
            {
                heading: "Organized By",
                content: ["WAVES Club – MITAOE (Healing Minds Initiative)"],
            },
            {
                heading: "Collaboration",
                content: ["NSS MITAOE"],
            },
            {
                heading: "Participation",
                content: ["390+ donors, 200+ units of blood collected"],
            },
        ],
        highlights: [
            "A part of the Healing Minds Initiative – promoting empathy and mental wellness through acts of kindness",
            "Collaborative effort between WAVES Club and NSS MITAOE",
            "Overwhelming student and faculty participation ensuring a successful collection drive",
            "Each donor contributed to saving countless lives and spreading awareness about blood donation",
        ],
        impact:
            "One drop, a thousand hopes. This Blood Donation Drive wasn’t just about donation – it was about empathy, care, and saving lives. Each donor became a heartbeat of hope, inspiring others to contribute to the welfare of humanity.",
    },
    {
        title: "Jagriti Blind School (Social Outreach)",
        img: "/events/IMG-20240202-WA0011.webp",
        imgAlt: "SCICON 2024 participants with certificates",
        details: [
            {
                heading: "Date & Venue",
                content: ["January 29 - February 2, 2024", "NFBM Jagruti's Blind School for Girls"],
            },
            {
                heading: "Participation",
                content: ["40 students (4th Grade to 9th Grade)"],
            },
        ],
        highlights: [
            "The SCICON team conducted a week-long training program at NFBM Jagruti's Blind School, helping students develop and explain 5 working models for the competition.",
            "This initiative reflects the team's commitment to inclusive education.",
        ],
        impact: "Successfully developed 5 working models for the competition, demonstrating the effectiveness of inclusive science education.",
    },
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
            "Participation from prestigious schools, Navodaya schools, and NFBM Jagruti's blind school",
            "Successful orientation sessions for project themes and categories",
        ],
        impact: "All participants received participation certificates. The event's success established SCICON as an annual platform for fostering scientific innovation and inclusive education.",
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
            "Make science education inclusive and engaging",
            "Teach creative problem-solving techniques and eco-conscious practices",
        ],
        impact: 'Arvind Gupta, renowned for his initiative "Toys from Trash," demonstrated innovative methods to teach scientific principles using toys crafted from everyday waste.',
    },
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

                {/* Past Events Section */}
                <section>
                    <h2 className="heading-2 mb-8">Past Events</h2>
                    <div className="space-y-12">
                        {pastEvents.map((event, idx) => (
                            <div key={idx} className="card">
                                <div className="mb-8">
                                    <h3 className="heading-2 mb-6">{event.title}</h3>

                                    <div className="relative overflow-hidden rounded-xl">
                                        {event.video ? (
                                            <video
                                                src={event.video}
                                                controls
                                                muted
                                                autoPlay
                                                loop
                                                className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-xl"
                                            />
                                        ) : (
                                            <img
                                                src={event.img}
                                                alt={event.imgAlt}
                                                className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-xl"
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="space-y-6">
                                        <h4 className="heading-4 mb-4">Event Details</h4>
                                        {event.details.map((detail, i) => (
                                            <div key={i} className="border-l-4 border-white/20 pl-4">
                                                <h5 className="body-small text-gray-400 font-medium mb-2 uppercase tracking-wider">
                                                    {detail.heading}
                                                </h5>
                                                <div className="space-y-1">
                                                    {detail.content.map((line, j) => (
                                                        <p key={j} className="body-regular">{line}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="heading-4 mb-4">Key Highlights</h4>
                                            <ul className="space-y-3">
                                                {event.highlights.map((hl, k) => (
                                                    <li key={k} className="flex items-start space-x-3">
                                                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="body-regular">{hl}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="heading-4 mb-4">Impact & Outcomes</h4>
                                            <p className="body-regular leading-relaxed">{event.impact}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Events;
