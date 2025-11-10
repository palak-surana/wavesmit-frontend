import StarsCanvas from "../components/StarBackground"

const About = () => {
    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
            <StarsCanvas />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="heading-1 mb-4 sm:mb-6">
                        About MIT AoE Waves
                    </h1>
                    <p className="body-large max-w-3xl mx-auto text-gray-300">
                        Pioneering scientific exploration and innovation through
                        collaborative research and education
                    </p>
                </div>

                <div className="grid gap-8 lg:gap-12">
                    <section className="card">
                        <h2 className="heading-3 mb-6">Who We Are</h2>
                        <p className="body-regular leading-relaxed">
                            MIT AoE Waves is a pioneering science organization
                            dedicated to pushing the boundaries of scientific
                            exploration and innovation. Founded by passionate
                            researchers and students, we strive to create a
                            collaborative environment where cutting-edge ideas
                            meet practical implementation.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="heading-3 mb-8">What We Do</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                <span className="body-regular">
                                    Conduct cutting-edge research projects
                                </span>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                <span className="body-regular">
                                    Organize workshops and seminars
                                </span>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                <span className="body-regular">
                                    Collaborate with industry experts
                                </span>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                <span className="body-regular">
                                    Mentor aspiring scientists
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About
