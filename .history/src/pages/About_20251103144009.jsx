import StarsCanvas from "../components/StarBackground"

const About = () => {
    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
            {/* Star Background */}
            <StarsCanvas />

            {/* ===== Main Content ===== */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
                
                {/* ===== Page Heading ===== */}
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="heading-1 mb-4 sm:mb-6 text-white">
                        About MIT AoE Wave & NSS
                    </h1>
                    <p className="body-large max-w-3xl mx-auto text-gray-300">
                        Empowering innovation, leadership, and community service through science and humanity.
                    </p>
                </div>

                {/* ===== Organization Logos ===== */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-16">
                    <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                        <img
                            src="/images/waves-logo.png" // replace with your actual WAVES logo path
                            alt="MIT AoE Waves Logo"
                            className="w-40 sm:w-48 h-auto object-contain"
                        />
                        <h3 className="heading-3 mt-4 text-center text-white">MIT AoE Waves</h3>
                    </div>

                    <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                        <img
                            src="/images/nss-logo.png" // replace with your actual NSS logo path
                            alt="NSS Logo"
                            className="w-40 sm:w-48 h-auto object-contain"
                        />
                        <h3 className="heading-3 mt-4 text-center text-white">National Service Scheme (NSS)</h3>
                    </div>
                </div>

                {/* ===== Who We Are Section ===== */}
                <section className="card mb-10">
                    <h2 className="heading-3 mb-6">Who We Are</h2>
                    <p className="body-regular leading-relaxed">
                        MIT AoE Waves is a pioneering student-driven organization that brings together 
                        creative minds passionate about scientific exploration and innovation.  
                        In collaboration with NSS, we aim to inspire young leaders to contribute their 
                        knowledge for social and environmental betterment.
                    </p>
                </section>

                {/* ===== Mission & Vision Section ===== */}
                <section className="grid sm:grid-cols-2 gap-8 mb-10">
                    <div className="card hover:border-indigo-400 transition-all duration-300">
                        <h2 className="heading-3 mb-4">Our Mission</h2>
                        <p className="body-regular">
                            To foster scientific curiosity, technical innovation, and social responsibility 
                            among students through collaborative research and real-world projects.
                        </p>
                    </div>

                    <div className="card hover:border-cyan-400 transition-all duration-300">
                        <h2 className="heading-3 mb-4">Our Vision</h2>
                        <p className="body-regular">
                            To become a hub of impactful innovation where science meets service — 
                            nurturing holistic growth through research, creativity, and empathy.
                        </p>
                    </div>
                </section>

                {/* ===== What We Do Section ===== */}
                <section className="card mb-10">
                    <h2 className="heading-3 mb-8">What We Do</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            "Conduct cutting-edge research projects",
                            "Organize scientific and social workshops",
                            "Collaborate with industry experts and NGOs",
                            "Promote sustainability and awareness drives",
                            "Mentor students for national-level competitions",
                            "Encourage technical and humanitarian innovation"
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                <span className="body-regular">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== Achievements Section ===== */}
                <section className="card bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 border-indigo-500/20">
                    <h2 className="heading-3 mb-6">Our Achievements</h2>
                    <ul className="list-disc list-inside text-gray-300 body-regular space-y-2">
                        <li>Organized 10+ national-level science workshops and hackathons</li>
                        <li>Collaborated with reputed research institutes and industries</li>
                        <li>Launched community service campaigns impacting 500+ students</li>
                        <li>Developed student projects recognized at innovation challenges</li>
                    </ul>
                </section>

            </div>
        </div>
    )
}

export default About
