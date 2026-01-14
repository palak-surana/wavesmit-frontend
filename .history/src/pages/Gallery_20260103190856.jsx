import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Hide scrollbar
const scrollbarStyles = `
.gallery-preview-bar::-webkit-scrollbar { display: none; }
.gallery-preview-bar { -ms-overflow-style: none; scrollbar-width: none; }
.gallery-preview-bar.dragging { scroll-behavior: auto; }
`

/* ================= EVENTS ================= */
const events = [
  {
    key: "arvindgupta",
    title: "Arvind Gupta Sir Talk Event",
    isNew: true, // 🆕 NEW badge
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
    ].map(i => ({ src: `/images/HCVerma/${i}.webp`, alt: i })),
  },
  {
    key: "scicon23",
    title: "SCICON 2023",
    images: [
      "DSC_0027","DSC_0032","DSC_0110","DSC_0562","DSC_0654",
      "DSC_0730","IMG_3790","IMG_3857","IMG_3899","IMG_3928",
      "IMG_3930","IMG_3943","IMG_3946","IMG_3973","IMG_3997",
    ].map(i => ({ src: `/images/Scicon23/${i}.webp`, alt: i })),
  },
  {
    key: "scicon24",
    title: "SCICON 2024",
    images: [
      "IMG_1867","IMG_1871","IMG_1878","IMG_2044","IMG_2047",
      "IMG_2050","IMG_2053","IMG_2054","IMG_2061","IMG_2076",
      "IMG_2103","IMG_2113",
    ].map(i => ({ src: `/images/Scicon24/${i}.webp`, alt: i })),
  },
  {
    key: "telescope",
    title: "Telescope Making Workshop",
    images: [
      "IMG_9472","IMG_9478","IMG_9485","IMG_9487",
      "IMG_9489","IMG_9490","IMG_9495",
    ].map(i => ({ src: `/images/Telescope/${i}.webp`, alt: i })),
  },
  {
    key: "jagruti",
    title: "Jagruti Blind School Visit",
    images: [
      "IMG-20240116-WA0004","IMG-20240202-WA0064","IMG-20240202-WA0068",
      "IMG-20240116-WA0006","IMG-20240202-WA0011","IMG-20240202-WA0076",
    ].map(i => ({ src: `/images/JagrutiBlindSchool/${i}.webp`, alt: i })),
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
