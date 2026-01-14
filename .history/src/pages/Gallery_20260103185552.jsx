import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

/* ================= THEME ================= */
const THEME = {
  accent: "pink", // 🔁 change color here
}

const ACCENT =
  THEME.accent === "purple"
    ? "border-purple-400 ring-purple-300"
    : THEME.accent === "blue"
    ? "border-blue-400 ring-blue-300"
    : THEME.accent === "emerald"
    ? "border-emerald-400 ring-emerald-300"
    : "border-pink-400 ring-pink-300"

/* ================= CONFIG ================= */
const AUTO_ADVANCE_MS = 3800 // ⚡ faster autoplay

/* ================= DATA ================= */
const events = [
  {
    key: "arvind",
    title: "Arvind Gupta Sir Talk Event",
    isNew: true,
    images: Array.from({ length: 15 }, (_, i) => ({
      src: `/images/ArvindGuptaSir/AG_${String(i + 1).padStart(2, "0")}.webp`,
    })),
  },
  {
    key: "hcverma",
    title: "HC Verma Sir Talk Event 2023",
    images: [
      "IMG_3327","IMG_3338","IMG_3345","IMG_3389",
      "IMG_3419","IMG_3468","IMG_3503","IMG_3504","IMG_3506",
    ].map(n => ({ src:`/images/HCVerma/${n}.webp` })),
  },
  {
    key: "scicon23",
    title: "SCICON 2023",
    images: [
      "DSC_0027","DSC_0032","DSC_0110","DSC_0562","DSC_0654","DSC_0730",
      "IMG_3790","IMG_3857","IMG_3899","IMG_3928","IMG_3930",
      "IMG_3943","IMG_3946","IMG_3973","IMG_3997",
    ].map(n => ({ src:`/images/Scicon23/${n}.webp` })),
  },
]

/* ================= COMPONENT ================= */
export default function Gallery() {
  const [indices, setIndices] = useState(events.map(() => 0))
  const [fullscreen, setFullscreen] = useState(null)
  const timerRef = useRef(null)
  const touchStart = useRef(0)

  /* ---------- FAST PRELOAD ---------- */
  useEffect(() => {
    events.forEach(e =>
      e.images.forEach(img => {
        const i = new Image()
        i.src = img.src
      })
    )
  }, [])

  /* ---------- AUTOPLAY ---------- */
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

  /* ---------- SWIPE ---------- */
  const onTouchStart = e => (touchStart.current = e.touches[0].clientX)
  const onTouchEnd = (e, idx) => {
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (diff > 50) next(idx)
    if (diff < -50) prev(idx)
  }

  const next = idx =>
    setIndices(p => {
      const c = [...p]
      c[idx] = (c[idx] + 1) % events[idx].images.length
      return c
    })

  const prev = idx =>
    setIndices(p => {
      const c = [...p]
      c[idx] =
        c[idx] === 0 ? events[idx].images.length - 1 : c[idx] - 1
      return c
    })

  /* ================= RENDER ================= */
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <h1 className="text-4xl font-bold text-white text-center mb-12">
        Picture Gallery
      </h1>

      <div className="max-w-5xl mx-auto px-4 space-y-14">
        {events.map((event, idx) => (
          <div
            key={event.key}
            className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-xl"
          >
            {event.isNew && (
              <span className="absolute -top-3 right-6 bg-pink-500 text-xs text-white px-3 py-1 rounded-full">
                NEW
              </span>
            )}

            <h2 className="text-3xl text-white text-center mb-6">
              {event.title}
            </h2>

            {/* MAIN IMAGE */}
            <div
              className="relative h-[300px] sm:h-[420px] md:h-[500px] rounded-2xl overflow-hidden mb-6"
              onTouchStart={onTouchStart}
              onTouchEnd={e => onTouchEnd(e, idx)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={indices[idx]}
                  src={event.images[indices[idx]].src}
                  loading="lazy"
                  onClick={() =>
                    setFullscreen({
                      src: event.images[indices[idx]].src,
                      idx,
                    })
                  }
                  className="w-full h-full object-cover cursor-zoom-in"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }} // ⚡ faster
                />
              </AnimatePresence>
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-3 overflow-x-auto">
              {event.images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  loading="lazy"
                  onClick={() =>
                    setIndices(p => {
                      const c = [...p]
                      c[idx] = i
                      return c
                    })
                  }
                  className={`w-16 h-16 rounded-xl object-cover cursor-pointer border-2 transition
                    ${
                      indices[idx] === i
                        ? `${ACCENT} scale-110 ring-2`
                        : "border-white/30 opacity-70 hover:opacity-100"
                    }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN */}
      {fullscreen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setFullscreen(null)}
        >
          <img
            src={fullscreen.src}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  )
}
