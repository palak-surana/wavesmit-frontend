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

            {/* ✅ Only the image remains */}
            <section className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-[90px]">
                <div className="w-full flex justify-center px-4">
                    <img
                        src="/assets/gallery-home.jpg"
                        alt="NSS and Wave"
                        className="w-[90%] max-w-6xl rounded-2xl shadow-lg border border-white/20 hover:scale-[1.02] transition-transform duration-300"
                    />
                </div>
            </section>
        </div>
    )
}

export default Home
