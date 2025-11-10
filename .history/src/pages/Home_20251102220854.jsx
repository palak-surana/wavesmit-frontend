import { useEffect, useRef, useState } from "react"
import StarsCanvas from "../components/StarBackground"

const Home = ({ language }) => {
  const videoRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => setIsLoading(false))
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error)
        setIsLoading(false)
      })
    }
  }, [])

  const text = {
    en: {
      title: "Welcome to NSS and Wave",
      subtitle: "MIT Academy of Engineering",
    },
    hi: {
      title: "एनएसएस और वेव में आपका स्वागत है",
      subtitle: "एमआईटी एकेडमी ऑफ इंजीनियरिंग",
    },
  }

  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015]">
      <StarsCanvas />
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#040015]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      )}

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        className={`fixed left-0 top-0 w-full h-full object-cover z-[1] transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-80"
        }`}
      >
        <source src="/assets/BlackHole.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Text */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          {text[language].title}
        </h1>
        <h3 className="text-2xl text-gray-300">{text[language].subtitle}</h3>
      </section>
    </div>
  )
}

export default Home
