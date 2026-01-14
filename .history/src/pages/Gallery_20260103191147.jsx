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


/* ⏱ Cinematic autoplay */
const AUTO_ADVANCE_MS = 4200

export default function Gallery() {
  const [indices, setIndices] = useState(events.map(() => 0))
  const [activeEventIdx, setActiveEventIdx] = useState(0)
  const eventRefs = useRef([])
  const timerRef = useRef()
  const previewBarRefs = useRef([])

  /* ⚡ PRELOAD ALL IMAGES (back events late load FIX) */
  useEffect(() => {
    events.forEach(e =>
      e.images.forEach(img => {
        const i = new Image()
        i.src = img.src
      })
    )
  }, [])

  /* Active event detection */
  useEffect(() => {
    const onScroll = () => {
      const center = window.innerHeight / 2
      let closest = 0, min = Infinity
      eventRefs.current.forEach((el, i) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const d = Math.abs((r.top + r.bottom) / 2 - center)
        if (d < min) { min = d; closest = i }
      })
      setActiveEventIdx(closest)
    }
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* Autoplay only active event */
  useEffect(() => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setIndices(p => {
        const n = [...p]
        const imgs = events[activeEventIdx].images.length
        n[activeEventIdx] = (p[activeEventIdx] + 1) % imgs
        return n
      })
    }, AUTO_ADVANCE_MS)
    return () => clearTimeout(timerRef.current)
  }, [indices, activeEventIdx])

  const setIndex = (eIdx, iIdx) => {
    setIndices(p => {
      const n = [...p]; n[eIdx] = iIdx; return n
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] pt-[90px]">
      <style>{scrollbarStyles}</style>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Picture Gallery
        </h1>

        <div className="flex flex-col gap-14">
          {events.map((event, eventIdx) => (
            <div
              key={event.key}
              ref={el => (eventRefs.current[eventIdx] = el)}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl"
            >
              {/* 🆕 NEW badge */}
              {event.isNew && (
                <span className="absolute top-4 right-4 px-4 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse">
                  NEW
                </span>
              )}

              <h2 className="text-3xl text-white font-semibold text-center mb-6">
                {event.title}
              </h2>

              {/* MAIN IMAGE */}
              <div className="relative h-[260px] sm:h-[380px] md:h-[500px] rounded-2xl overflow-hidden mb-6">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={indices[eventIdx]}
                    src={event.images[indices[eventIdx]].src}
                    alt=""
                    className="w-full h-full object-cover cursor-zoom-in"
                    initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    draggable={false}
                  />
                </AnimatePresence>
              </div>

              {/* THUMBNAILS */}
              <div
                ref={el => (previewBarRefs.current[eventIdx] = el)}
                className="gallery-preview-bar flex gap-4 overflow-x-auto px-4 py-3 bg-white/10 rounded-xl"
              >
                {event.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    onClick={() => setIndex(eventIdx, i)}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover cursor-pointer border-2 transition-all
                      ${indices[eventIdx] === i
                        ? "border-purple-400 scale-110 shadow-lg"
                        : "border-white/30 opacity-70 hover:opacity-100"}
                    `}
                    draggable={false}
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
