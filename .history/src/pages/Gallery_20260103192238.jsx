import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

// hide scrollbar
const scrollbarStyles = `
.gallery-preview-bar::-webkit-scrollbar { display: none; }
.gallery-preview-bar { scrollbar-width: none; }
`

/* ========= EVENTS DATA (UNCHANGED) ========= */
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
      "3327","3338","3345","3389","3419","3468","3503","3504","3506",
    ].map(n => ({
      src: `/images/HCVerma/IMG_${n}.webp`,
      alt: n,
    })),
  },
  {
    key: "scicon23",
    title: "SCICON 2023",
    images: [
      "DSC_0027","DSC_0032","DSC_0110","DSC_0562","DSC_0654","DSC_0730",
      "IMG_3790","IMG_3857","IMG_3899","IMG_3928","IMG_3930",
      "IMG_3943","IMG_3946","IMG_3973","IMG_3997",
    ].map(n => ({
      src: `/images/Scicon23/${n}.webp`,
      alt: n,
    })),
  },
  {
    key: "scicon24",
    title: "SCICON 2024",
    images: [
      "1867","1871","1878","2044","2047","2050","2053",
      "2054","2061","2076","2103","2113",
    ].map(n => ({
      src: `/images/Scicon24/IMG_${n}.webp`,
      alt: n,
    })),
  },
  {
    key: "telescope",
    title: "Telescope Making Workshop",
    images: ["9472","9478","9485","9487","9489","9490","9495"].map(n => ({
      src: `/images/Telescope/IMG_${n}.webp`,
      alt: n,
    })),
  },
  {
    key: "jagruti",
    title: "Jagruti Blind School Visit",
    images: [
      "IMG-20240116-WA0004",
      "IMG-20240202-WA0064",
      "IMG-20240202-WA0068",
      "IMG-20240116-WA0006",
      "IMG-20240202-WA0011",
      "IMG-20240202-WA0076",
    ].map(n => ({
      src: `/images/JagrutiBlindSchool/${n}.webp`,
      alt: n,
    })),
  },
]

const AUTO_ADVANCE_MS = 4500 // slow cinematic

export default function Gallery() {
  const [indices, setIndices] = useState(events.map(() => 0))
  const [activeEventIdx, setActiveEventIdx] = useState(0)

  // fullscreen state
  const [fullscreen, setFullscreen] = useState({
    open: false,
    eventIdx: null,
    imgIdx: null,
  })

  const timerRef = useRef()
  const previewBarRefs = useRef([])
  const eventRefs = useRef([])

  /* ========= AUTOPLAY ========= */
  useEffect(() => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setIndices(prev => {
        const next = [...prev]
        const imgs = events[activeEventIdx].images.length
        next[activeEventIdx] = (prev[activeEventIdx] + 1) % imgs
        return next
      })
    }, AUTO_ADVANCE_MS)

    return () => clearTimeout(timerRef.current)
  }, [activeEventIdx, indices[activeEventIdx]])

  /* ========= ACTIVE EVENT ON SCROLL ========= */
  useEffect(() => {
    const onScroll = () => {
      const center = window.innerHeight / 2
      let min = Infinity
      let idx = 0
      eventRefs.current.forEach((el, i) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const d = Math.abs((r.top + r.bottom) / 2 - center)
        if (d < min) { min = d; idx = i }
      })
      setActiveEventIdx(idx)
    }
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* ========= FULLSCREEN ========= */
  const openFullscreen = (eventIdx, imgIdx) =>
    setFullscreen({ open: true, eventIdx, imgIdx })

  const closeFullscreen = () =>
    setFullscreen({ open: false, eventIdx: null, imgIdx: null })

  return (
    <div className="min-h-screen bg-black pt-[90px]">
      <style>{scrollbarStyles}</style>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Picture Gallery
        </h1>

        {events.map((event, eventIdx) => (
          <div
            key={event.key}
            ref={el => (eventRefs.current[eventIdx] = el)}
            className="bg-[#111] rounded-xl p-4 mb-12"
          >
            <h2 className="text-2xl text-white text-center mb-4">
              {event.title}
            </h2>

            {/* MAIN IMAGE */}
            <div className="relative h-[240px] md:h-[300px] rounded-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={indices[eventIdx]}
                  src={event.images[indices[eventIdx]].src}
                  alt=""
                  loading="lazy"
                  onClick={() =>
                    openFullscreen(eventIdx, indices[eventIdx])
                  }
                  className="w-full h-full object-cover cursor-zoom-in"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            </div>

            {/* THUMBNAILS */}
            <div
              ref={el => (previewBarRefs.current[eventIdx] = el)}
              className="gallery-preview-bar flex gap-3 mt-4 overflow-x-auto"
            >
              {event.images.map((img, imgIdx) => (
                <img
                  key={imgIdx}
                  src={img.src}
                  loading="lazy"
                  onClick={() => openFullscreen(eventIdx, imgIdx)}
                  className={`w-14 h-14 object-cover rounded-md cursor-pointer
                    ${indices[eventIdx] === imgIdx
                      ? "ring-2 ring-purple-500 scale-110"
                      : "opacity-70 hover:opacity-100"}
                  `}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ========= FULLSCREEN MODAL ========= */}
      {fullscreen.open && (
        <div
          className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center"
          onClick={closeFullscreen}
        >
          <img
            src={
              events[fullscreen.eventIdx].images[fullscreen.imgIdx].src
            }
            className="max-w-[92vw] max-h-[92vh] object-contain"
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-8 text-white text-3xl"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  )
}
