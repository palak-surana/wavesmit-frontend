import React from "react";
import StarsCanvas from "../components/StarBackground"

const Vision = () => {
    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
            <StarsCanvas />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="heading-1 mb-4 sm:mb-6">Vision & Mission</h1>
                    <p className="body-large max-w-3xl mx-auto text-gray-300">
                        Guiding principles that drive our commitment to
                        scientific excellence and social impact
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                    <section className="card">
                        <h2 className="heading-2 mb-6 text-center">
                            Vision
                        </h2>
                        <p className="body-regular leading-relaxed">
                            To establish Waves as a long-lasting, transformative
                            initiative that nurtures scientific thinking, social
                            responsibility, and holistic growth, empowering
                            individuals to explore the rhythm of life and living
                            while making meaningful contributions to the world.
                        </p>
                    </section>

                    <section className="card">
                        <h2 className="heading-2 mb-6 text-center">
                            Mission
                        </h2>
                        <p className="body-regular leading-relaxed">
                            To cultivate a vibrant and inclusive platform where
                            pupils can explore their potential, inspire others,
                            and work on impactful projects that bridge the gap
                            between education and societal needs, thereby
                            contributing to a brighter and more equitable
                            future.
                        </p>
                    </section>
                </div>

                <div className="card text-center">
                    <h3 className="heading-3 mb-6">Impact</h3>
                    <p className="body-regular leading-relaxed max-w-4xl mx-auto">
                        Through our vision and mission, we strive to create
                        lasting change in the scientific community, fostering
                        innovation, collaboration, and social responsibility
                        among the next generation of scientists and researchers.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Vision
