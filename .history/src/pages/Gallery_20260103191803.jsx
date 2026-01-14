import React from "react";
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import StarsCanvas from "../components/StarBackground"

// Add custom CSS for hiding scrollbar
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
    images: [
        {
            src: "/images/ArvindGuptaSir/AG_01.webp",
            alt: "AG_01",
        },
        {
            src: "/images/ArvindGuptaSir/AG_02.webp",
            alt: "AG_02",
        }, {
            src: "/images/ArvindGuptaSir/AG_03.webp",
            alt: "AG_03",
        }, {
            src: "/images/ArvindGuptaSir/AG_04.webp",
            alt: "AG_04",
        }, {
            src: "/images/ArvindGuptaSir/AG_05.webp",
            alt: "AG_05",
        }, {
            src: "/images/ArvindGuptaSir/AG_06.webp",
            alt: "AG_06",
        }, {
            src: "/images/ArvindGuptaSir/AG_07.webp",
            alt: "AG_07",
        }, {
            src: "/images/ArvindGuptaSir/AG_08.webp",
            alt: "AG_08",
        }, {
            src: "/images/ArvindGuptaSir/AG_09.webp",
            alt: "AG_09",
        }, {
            src: "/images/ArvindGuptaSir/AG_10.webp",
            alt: "AG_10",
        }, {
            src: "/images/ArvindGuptaSir/AG_11.webp",
            alt: "AG_11",
        }, {
            src: "/images/ArvindGuptaSir/AG_12.webp",
            alt: "AG_12",
        }, {
            src: "/images/ArvindGuptaSir/AG_13.webp",
            alt: "AG_13",
        }, {
            src: "/images/ArvindGuptaSir/AG_14.webp",
            alt: "AG_14",
        }, {
            src: "/images/ArvindGuptaSir/AG_15.webp",
            alt: "AG_15",
        },

    ],
},


    {
        key: "hcverma",
        title: "HC Verma Sir Talk Event 2023",
        images: [
            {
                src: "/images/HCVerma/IMG_3327.webp",
                alt: "HC Verma Event Image 1",
            },
            {
                src: "/images/HCVerma/IMG_3338.webp",
                alt: "HC Verma Event Image 2",
            },
            {
                src: "/images/HCVerma/IMG_3345.webp",
                alt: "HC Verma Event Image 3",
            },
            {
                src: "/images/HCVerma/IMG_3389.webp",
                alt: "HC Verma Event Image 4",
            },
            {
                src: "/images/HCVerma/IMG_3419.webp",
                alt: "HC Verma Event Image 5",
            },
            {
                src: "/images/HCVerma/IMG_3468.webp",
                alt: "HC Verma Event Image 6",
            },
            {
                src: "/images/HCVerma/IMG_3503.webp",
                alt: "HC Verma Event Image 7",
            },
            {
                src: "/images/HCVerma/IMG_3504.webp",
                alt: "HC Verma Event Image 8",
            },
            {
                src: "/images/HCVerma/IMG_3506.webp",
                alt: "HC Verma Event Image 9",
            },
        ],
    },
    {
        key: "scicon23",
        title: "SCICON 2023",
        images: [
            {
                src: "/images/Scicon23/DSC_0027.webp",
                alt: "SCICON 2023 Image 1",
            },
            {
                src: "/images/Scicon23/DSC_0032.webp",
                alt: "SCICON 2023 Image 2",
            },
            {
                src: "/images/Scicon23/DSC_0110.webp",
                alt: "SCICON 2023 Image 3",
            },
            {
                src: "/images/Scicon23/DSC_0562.webp",
                alt: "SCICON 2023 Image 4",
            },
            {
                src: "/images/Scicon23/DSC_0654.webp",
                alt: "SCICON 2023 Image 5",
            },
            {
                src: "/images/Scicon23/DSC_0730.webp",
                alt: "SCICON 2023 Image 6",
            },
            {
                src: "/images/Scicon23/IMG_3790.webp",
                alt: "SCICON 2023 Image 7",
            },
            {
                src: "/images/Scicon23/IMG_3857.webp",
                alt: "SCICON 2023 Image 8",
            },
            {
                src: "/images/Scicon23/IMG_3899.webp",
                alt: "SCICON 2023 Image 9",
            },
            {
                src: "/images/Scicon23/IMG_3928.webp",
                alt: "SCICON 2023 Image 10",
            },
            {
                src: "/images/Scicon23/IMG_3930.webp",
                alt: "SCICON 2023 Image 11",
            },
            {
                src: "/images/Scicon23/IMG_3943.webp",
                alt: "SCICON 2023 Image 12",
            },
            {
                src: "/images/Scicon23/IMG_3946.webp",
                alt: "SCICON 2023 Image 13",
            },
            {
                src: "/images/Scicon23/IMG_3973.webp",
                alt: "SCICON 2023 Image 14",
            },
            {
                src: "/images/Scicon23/IMG_3997.webp",
                alt: "SCICON 2023 Image 15",
            },
        ],
    },
    {
        key: "scicon24",
        title: "SCICON 2024",
        images: [
            {
                src: "/images/Scicon24/IMG_1867.webp",
                alt: "SCICON 2024 Image 1",
            },
            {
                src: "/images/Scicon24/IMG_1871.webp",
                alt: "SCICON 2024 Image 2",
            },
            {
                src: "/images/Scicon24/IMG_1878.webp",
                alt: "SCICON 2024 Image 3",
            },
            {
                src: "/images/Scicon24/IMG_2044.webp",
                alt: "SCICON 2024 Image 4",
            },
            {
                src: "/images/Scicon24/IMG_2047.webp",
                alt: "SCICON 2024 Image 5",
            },
            {
                src: "/images/Scicon24/IMG_2050.webp",
                alt: "SCICON 2024 Image 6",
            },
            {
                src: "/images/Scicon24/IMG_2053.webp",
                alt: "SCICON 2024 Image 7",
            },
            {
                src: "/images/Scicon24/IMG_2054.webp",
                alt: "SCICON 2024 Image 8",
            },
            {
                src: "/images/Scicon24/IMG_2061.webp",
                alt: "SCICON 2024 Image 9",
            },
            {
                src: "/images/Scicon24/IMG_2076.webp",
                alt: "SCICON 2024 Image 10",
            },
            {
                src: "/images/Scicon24/IMG_2103.webp",
                alt: "SCICON 2024 Image 11",
            },
            {
                src: "/images/Scicon24/IMG_2113.webp",
                alt: "SCICON 2024 Image 12",
            },
        ],
    },
    {
        key: "telescope",
        title: "Telescope Making Workshop",
        images: [
            {
                src: "/images/Telescope/IMG_9472.webp",
                alt: "Telescope Workshop Image 1",
            },
            {
                src: "/images/Telescope/IMG_9478.webp",
                alt: "Telescope Workshop Image 2",
            },
            {
                src: "/images/Telescope/IMG_9485.webp",
                alt: "Telescope Workshop Image 3",
            },
            {
                src: "/images/Telescope/IMG_9487.webp",
                alt: "Telescope Workshop Image 4",
            },
            {
                src: "/images/Telescope/IMG_9489.webp",
                alt: "Telescope Workshop Image 5",
            },
            {
                src: "/images/Telescope/IMG_9490.webp",
                alt: "Telescope Workshop Image 6",
            },
            {
                src: "/images/Telescope/IMG_9495.webp",
                alt: "Telescope Workshop Image 7",
            },
        ],
    },
    {
        key: "jagruti",
        title: "Jagruti Blind School Visit",
        images: [
            {
                src: "/images/JagrutiBlindSchool/IMG-20240116-WA0004.webp",
                alt: "Jagruti Blind School Event 1",
            },
            {
                src: "/images/JagrutiBlindSchool/IMG-20240202-WA0064.webp",
                alt: "Jagruti Blind School Event 2",
            },
            {
                src: "/images/JagrutiBlindSchool/IMG-20240202-WA0068.webp",
                alt: "Jagruti Blind School Event 3",
            },
            {
                src: "/images/JagrutiBlindSchool/IMG-20240116-WA0006.webp",
                alt: "Jagruti Blind School Event 4",
            },
            {
                src: "/images/JagrutiBlindSchool/IMG-20240202-WA0011.webp",
                alt: "Jagruti Blind School Event 5",
            },
            {
                src: "/images/JagrutiBlindSchool/IMG-20240202-WA0076.webp",
                alt: "Jagruti Blind School Event 6",
            },
        ],
    },
]

const AUTO_ADVANCE_MS = 4200

export default function Gallery() {
  const [indices, setIndices] = useState(events.map(() => 0))
  const [fullscreen, setFullscreen] = useState(null)
  const timerRef = useRef()

  /* Preload all images */
  useEffect(() => {
    events.forEach(e =>
      e.images.forEach(img => {
        const i = new Image()
        i.src = img.src
      })
    )
  }, [])

  /* Autoplay */
  useEffect(() => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setIndices(p => {
        const n = [...p]
        n[0] = (p[0] + 1) % events[0].images.length
        return n
      })
    }, AUTO_ADVANCE_MS)
    return () => clearTimeout(timerRef.current)
  }, [indices])

  const openFullscreen = (eventIdx, imgIdx) => {
    setFullscreen({ eventIdx, imgIdx })
  }

  const closeFullscreen = () => setFullscreen(null)

  const changeImage = (dir) => {
    setFullscreen(f => {
      const total = events[f.eventIdx].images.length
      const next =
        dir === "next"
          ? (f.imgIdx + 1) % total
          : (f.imgIdx - 1 + total) % total
      return { ...f, imgIdx: next }
    })
  }

  return (
    <div className="min-h-screen bg-black pt-[80px]">
      <style>{scrollbarStyles}</style>

      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white text-center mb-10">
          Picture Gallery
        </h1>

        <div className="flex flex-col gap-12">
          {events.map((event, eventIdx) => (
            <div
              key={event.key}
              className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5"
            >
              {event.isNew && (
                <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-pink-600 text-white animate-pulse">
                  NEW
                </span>
              )}

              <h2 className="text-xl text-white font-semibold text-center mb-4">
                {event.title}
              </h2>

              {/* MAIN IMAGE */}
              <div className="h-[220px] sm:h-[320px] rounded-xl overflow-hidden mb-4">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={indices[eventIdx]}
                    src={event.images[indices[eventIdx]].src}
                    onClick={() => openFullscreen(eventIdx, indices[eventIdx])}
                    className="w-full h-full object-cover cursor-zoom-in"
                    initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  />
                </AnimatePresence>
              </div>

              {/* THUMBNAILS */}
              <div className="gallery-preview-bar flex gap-3 overflow-x-auto px-2 py-2 bg-white/5 rounded-lg">
                {event.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    onClick={() => openFullscreen(eventIdx, i)}
                    className={`w-12 h-12 rounded-lg object-cover cursor-pointer border
                      ${indices[eventIdx] === i
                        ? "border-purple-400 scale-110"
                        : "border-white/20 opacity-70"}
                    `}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {fullscreen && (
        <div
          className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center"
          onClick={closeFullscreen}
        >
          <button
            className="absolute left-6 text-white text-4xl"
            onClick={(e) => { e.stopPropagation(); changeImage("prev") }}
          >‹</button>

          <img
            src={events[fullscreen.eventIdx].images[fullscreen.imgIdx].src}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-6 text-white text-4xl"
            onClick={(e) => { e.stopPropagation(); changeImage("next") }}
          >›</button>

          <button
            className="absolute top-4 right-6 text-white text-2xl"
            onClick={closeFullscreen}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  )
}


