import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import StarsCanvas from "../components/StarBackground"

// ================== SCROLLBAR HIDE ==================
const scrollbarStyles = `
.gallery-preview-bar::-webkit-scrollbar { display: none; }
.gallery-preview-bar { -ms-overflow-style: none; scrollbar-width: none; }
.gallery-preview-bar.dragging { scroll-behavior: auto; }
`

// ================== EVENTS ==================
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
      "IMG_3327","IMG_3338","IMG_3345","IMG_3389",
      "IMG_3419","IMG_3468","IMG_3503","IMG_3504","IMG_3506",
    ].map(n => ({ src: `/images/HCVerma/${n}.webp`, alt: n })),
  },
  {
    key: "scicon23",
    title: "SCICON 2023",
    images: [
      "DSC_0027","DSC_0032","DSC_0110","DSC_0562","DSC_0654",
      "DSC_0730","IMG_3790","IMG_3857","IMG_3899",
      "IMG_3928","IMG_3930","IMG_3943","IMG_3946","IMG_3973","IMG_3997",
    ].map(n => ({ src: `/images/Scicon23/${n}.webp`, alt: n })),
  },
  {
    key: "scicon24",
    title: "SCICON 2024",
    images: [
      "IMG_1867","IMG_1871","IMG_1878","IMG_2044","IMG_2047",
      "IMG_2050","IMG_2053","IMG_2054","IMG_2061","IMG_2076",
      "IMG_2103","IMG_2113",
    ].map(n => ({ src: `/images/Scicon24/${n}.webp`, alt: n })),
  },
  {
    key: "telescope",
    title: "Telescope Making Workshop",
    images: [
      "IMG_9472","IMG_9478","IMG_9485","IMG_9487","IMG_9489","IMG_9490","IMG_9495",
    ].map(n => ({ src: `/images/Telescope/${n}.webp`, alt: n })),
  },
  {
    key: "jagruti",
    title: "Jagruti Blind School Visit",
    images: [
      "IMG-20240116-WA0004","IMG-20240202-WA0064","IMG-20240202-WA0068",
      "IMG-20240116-WA0006","IMG-20240202-WA0011","IMG-20240202-WA0076",
    ].map(n => ({ src: `/images/JagrutiBlindSchool/${n}.webp`, alt: n })),
  },
]

const AUTO_ADVANCE_MS = 4200 // smoother & cinematic

// ================== COMPONENT ==================
export default function Gallery() {
  const [indices, setIndices] = useState(events.map(() => 0))
  const [activeEventIdx, setActiveEventIdx] = useState(0)

  const eventRefs = useRef([])
  const previewBarRefs = useRef([])
  const timerRef = useRef(null)

  // ================== PRELOAD ALL IMAGES (FIX) ==================
  useEffect(() => {
    events.forEach(event =>
      event.images.forEach(img => {
        const i = new Image()
        i.src = img.src
      })
    )
  }, [])

  // ================== ACTIVE EVENT DETECT ==================
  useEffect(() => {
    const onScroll = () => {
      const center = window.innerHeight / 2
      let closest = 0
      let min = Infinity

      eventRefs.current.forEach((el, i) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const d = Math.abs((r.top + r.bottom) / 2 - center)
        if (d < min) {
          min = d
          closest = i
        }
      })
      setActiveEventIdx(closest)
    }

    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // ================== AUTOPLAY (ACTIVE ONLY) ==================
  useEffect(() => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setIndices(prev => {
        const copy = [...prev]
        const total = events[activeEventIdx].images.length
        copy[activeEventIdx] = (copy[activeEventIdx] + 1) % total
        return copy
      })
    }, AUTO_ADVANCE_MS)

    return () => clearTimeout(timerRef.current)
  }, [activeEventIdx, indices[activeEventIdx]])

  const setIndex = (eIdx, i) => {
    setIndices(p => {
      const c = [...p]
      c[eIdx] = i
      return c
    })
  }

  // ================== UI ==================
  return (
    <div className="w-full min-h-screen bg-[#040015] pt-[90px] relative">
      <style>{scrollbarStyles}</style>

      <div className="fixed inset-0 z-0">
        <StarsCanvas />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 relative z-10">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Picture Gallery
        </h1>

        <div className="flex flex-col gap-12">
          {events.map((event, eIdx) => (
            <div
              key={event.key}
              ref={el => (eventRefs.current[eIdx] = el)}
              className="bg-[#181828]/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl"
            >
              <h2 className="text-3xl text-white text-center mb-6">
                {event.title}
              </h2>

              {/* MAIN IMAGE */}
              <div className="relative h-[240px] sm:h-[360px] md:h-[480px] rounded-2xl overflow-hidden mb-5">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={indices[eIdx]}
                    src={event.images[indices[eIdx]].src}
                    alt={event.images[indices[eIdx]].alt}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    draggable={false}
                  />
                </AnimatePresence>
              </div>

              {/* THUMBNAILS */}
              <div
                ref={el => (previewBarRefs.current[eIdx] = el)}
                className="gallery-preview-bar flex gap-3 overflow-x-auto px-2 py-3"
              >
                {event.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    onClick={() => setIndex(eIdx, i)}
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl object-cover cursor-pointer border-2 transition
                      ${
                        indices[eIdx] === i
                          ? "border-purple-400 scale-110"
                          : "border-white/30 opacity-70 hover:opacity-100"
                      }`}
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
