import { useEffect, useRef, useState } from "react"
import StarsCanvas from "../components/StarBackground"

const Home = () => {
    const videoRef = useRef(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener("loadeddata", () => {
                setIsLoading(false)
            })

            videoRef.current.play().catch((error) => {
                console.log("Video autoplay failed:", error)
                setIsLoading(false)
            })
        }
    }, [])

    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015]">
            <StarsCanvas />
            {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#040015]">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
                </div>
            )}

            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                loop
                preload="auto"
                className={`fixed -top-[5rem] md:-top-[3.6rem] left-0 w-full h-full object-cover rotate-180 z-[1] transition-opacity duration-500 ${
                    isLoading ? "opacity-0" : "opacity-70"
                }`}
                style={{ height: "100vh" }}
            >
                <source src="/assets/BlackHole.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <section className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-[90px]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h1
  className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 
             bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
             text-transparent bg-clip-text whitespace-nowrap 
             animate-typing border-r-4 border-white overflow-hidden"
  style={{
    textShadow: "0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(255,0,255,0.4)",
    animation: "glow 2s ease-in-out infinite alternate",
  }}
>
  Welcome to NSS And Wave
</h1>

<style>
  {`
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes glow {
    from {
      text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
    }
    to {
      text-shadow: 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff;
    }
  }

  .animate-typing {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    animation:
      typing 3s steps(30, end),
      blink 0.75s step-end infinite;
  }

  @keyframes blink {
    from, to { border-color: transparent }
    50% { border-color: white; }
  }
  `}
</style>


                        <h3 className="heading-2 text-gray-200 mb-12">
                            MIT Academy of Engineering
                        </h3>

                        <div className="max-w-3xl mx-auto mb-12">
                            <p className="body-large leading-relaxed text-gray-300">
                                NSS and Wave bring students together to serve, innovate, and inspire, building a better society through knowledge and compassion.
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
