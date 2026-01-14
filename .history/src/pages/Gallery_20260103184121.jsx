import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import StarsCanvas from "../components/StarBackground"

// Hide scrollbar CSS
const scrollbarStyles = `
.gallery-preview-bar::-webkit-scrollbar {
  display: none;
}
.gallery-preview-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.gallery-preview-bar.dragging {
  scroll-behavior: auto;
}
`

const events = [
  {
    key: "arvindgupta",
    title: "Arvind Gupta Sir Talk Event",
    images: Array.from({ length: 15 }, (_, i) => ({
      src: `/images/ArvindGuptaSir/AG_${String(i + 1).padStart(2, "0")}.webp`,
      alt: `AG_${i + 1}`,
    })),
  },
  {
    key: "hcverma",
    title: "HC Verma Sir Talk Event 2023",
    images: [
      "IMG_3327","IMG_3338","IMG_3345","IMG_3389","IMG_3419",
      "IMG_3468","IMG_3503","IMG_3504","IMG_3506",
    ].map((img, i) => ({
      src: `/images/HCVerma/${img}.webp`,
      alt: `HC Verma ${i + 1}`,
    })),
  },
  {
    key: "scicon23",
    title: "SCICON 2023",
    images: [
      "DSC_0027","DSC_0032","DSC_0110","DSC_0562","DSC_0654",
      "DSC_0730","IMG_3790","IMG_3857","IMG_3899","IMG_3928",
      "IMG_3930","IMG_3943","IMG_3946","IMG_3973","IMG_3997",
    ].map((img, i) => ({
      src: `/images/Scicon23/${img}.webp`,
      alt: `SCICON 2023 ${i + 1}`,
    })),
  },
]

const AUTO_ADVANCE_MS = 4000

const Gallery = () => {
  const [indices, setIndices] = useState(events.map(() => 0))
  const timerRef = useRef()

  useEffect(() => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setIndices(prev =>
        prev.map((v, i) =>
          v === events[i].images.length - 1 ? 0 : v + 1
        )
      )
    }, AUTO_ADVANCE_MS)

    return () => clearTimeout(timerRef.current)
  }, [indices])

  return (
    <div className="w-full min-h-screen bg-[#040015] pt-[90px] relative">
      <style>{scrollbarStyles}</style>

      {/* Star background */}
      <div className="fixed inset-0 z-0">
        <StarsCanvas />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Picture Gallery
        </h1>

        <div className="flex flex-col gap-12">
          {events.map((event, eventIdx) => (
            <div
              key={event.key}
              className="bg-[#181828]/90 backdrop-blur-xl rounded-2xl shadow-2xl p-5"
            >
              <h2 className="text-3xl text-white text-center mb-6 font-semibold">
                {event.title}
              </h2>

              {/* Main Image */}
              <div className="relative h-[220px] sm:h-[320px] md:h-[380px] rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={indices[eventIdx]}
                    src={event.images[indices[eventIdx]].src}
                    alt={event.images[indices[eventIdx]].alt}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    draggable="false"
                  />
                </AnimatePresence>

                {/* Arrows */}
                <button
                  onClick={() =>
                    setIndices(p =>
                      p.map((v, i) =>
                        i === eventIdx
                          ? v === 0
                            ? event.images.length - 1
                            : v - 1
                          : v
                      )
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110"
                >
                  ‹
                </button>

                <button
                  onClick={() =>
                    setIndices(p =>
                      p.map((v, i) =>
                        i === eventIdx
                          ? v === event.images.length - 1
                            ? 0
                            : v + 1
                          : v
                      )
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110"
                >
                  ›
                </button>

                {/* Counter */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {indices[eventIdx] + 1} / {event.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="gallery-preview-bar flex gap-3 mt-5 overflow-x-auto">
                {event.images.map((img, imgIdx) => (
                  <img
                    key={imgIdx}
                    src={img.src}
                    alt=""
                    onClick={() =>
                      setIndices(p =>
                        p.map((v, i) => (i === eventIdx ? imgIdx : v))
                      )
                    }
                    className={`w-14 h-14 object-cover rounded-lg cursor-pointer transition
                      ${
                        indices[eventIdx] === imgIdx
                          ? "ring-2 ring-purple-400 scale-110"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    draggable="false"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
