import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Hide scrollbar
const scrollbarStyles = `
.gallery-preview-bar::-webkit-scrollbar { display: none; }
.gallery-preview-bar { -ms-overflow-style: none; scrollbar-width: none; }
`

const AUTO_ADVANCE_MS = 5200 // 🎬 slower autoplay (cinematic)

const events = [
  {
    key: "arvindgupta",
    title: "Arvind Gupta Sir Talk Event",
    isNew: true, // 🆕 badge
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
    ].map(n => ({ src:`/images/HCVerma/${n}.webp`, alt:n }))
  },
  {
    key: "scicon23",
    title: "SCICON 2023",
    images: [
      "DSC_0027","DSC_0032","DSC_0110","DSC_0562","DSC_0654","DSC_0730",
      "IMG_3790","IMG_3857","IMG_3899","IMG_3928","IMG_3930",
      "IMG_3943","IMG_3946","IMG_3973","IMG_3997",
    ].map(n => ({ src:`/images/Scicon23/${n}.webp`, alt:n }))
  },
  {
    key: "scicon24",
    title: "SCICON 2024",
    images: [
      "IMG_1867","IMG_1871","IMG_1878","IMG_2044","IMG_2047",
      "IMG_2050","IMG_2053","IMG_2054","IMG_2061","IMG_2076",
      "IMG_2103","IMG_2113",
    ].map(n => ({ src:`/images/Scicon24/${n}.webp`, alt:n }))
  },
  {
    key: "telescope",
    title: "Telescope Making Workshop",
    images: [
      "IMG_9472","IMG_9478","IMG_9485","IMG_9487",
      "IMG_9489","IMG_9490","IMG_9495",
    ].map(n => ({ src:`/images/Telescope/${n}.webp`, alt:n }))
  },
  {
    key: "jagruti",
    title: "Jagruti Blind School Visit",
    images: [
      "IMG-20240116-WA0004","IMG-20240202-WA0064","IMG-20240202-WA0068",
      "IMG-20240116-WA0006","IMG-20240202-WA0011","IMG-20240202-WA0076",
    ].map(n => ({ src:`/images/JagrutiBlindSchool/${n}.webp`, alt:n }))
  },
]

export default function Gallery() {
  const [indices, setIndices] = useState(events.map(() => 0))
  const timerRef = useRef(null)

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
    <div className="min-h-screen pt-[90px] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <style>{scrollbarStyles}</style>

      <h1 className="text-4xl font-bold text-white text-center mb-12">
        Picture Gallery
      </h1>

      <div className="max-w-5xl mx-auto px-4 space-y-12">
        {events.map((event, eventIdx) => (
          <div
            key={event.key}
            className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-xl"
          >
            {event.isNew && (
              <span className="absolute -top-3 right-6 bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
                NEW
              </span>
            )}

            <h2 className="text-3xl font-semibold text-white text-center mb-6">
              {event.title}
            </h2>

            {/* MAIN IMAGE */}
            <div className="relative h-[280px] sm:h-[400px] md:h-[480px] rounded-2xl overflow-hidden mb-6">
              <AnimatePresence mode="wait">
                <motion.img
                  key={indices[eventIdx]}
                  src={event.images[indices[eventIdx]].src}
                  alt=""
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>
            </div>

            {/* THUMBNAILS */}
            <div className="gallery-preview-bar flex gap-3 overflow-x-auto px-2">
              {event.images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  onClick={() =>
                    setIndices(prev => {
                      const copy = [...prev]
                      copy[eventIdx] = i
                      return copy
                    })
                  }
                  className={`w-16 h-16 md:w-18 md:h-18 rounded-xl object-cover cursor-pointer border-2 transition
                    ${
                      indices[eventIdx] === i
                        ? "border-pink-400 scale-110"
                        : "border-white/30 opacity-70 hover:opacity-100"
                    }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
