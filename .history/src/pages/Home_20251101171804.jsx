import { useEffect, useRef, useState } from "react"


            <section className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-[90px]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h1
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8"
                            style={{
                                textShadow:
                                    "0 4px 32px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)",
                            }}
                        >
                            Welcome to NSS And Wave
                        </h1>

                        <h3 className="heading-2 text-gray-200 mb-12">
                            MIT Academy of Engineering
                        </h3>

                        <div className="max-w-3xl mx-auto mb-12">
                            <p className="body-large leading-relaxed text-gray-300">
                                NSS and Wave bring students together to serve, innovate, and inspire building a better society through knowledge and compassion.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/about"
                                className="inline-block text-center px-6 py-3 bg-transparent border-2 border-white/30 text-white font-medium rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                            >
                                Learn More About Us
                            </a>
                            <a
                                href="/events"
                                className="inline-block text-center px-6 py-3 bg-transparent border-2 border-white/30 text-white font-medium rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                            >
                                Explore Our Events
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
