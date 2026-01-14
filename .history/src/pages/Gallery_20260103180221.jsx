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
            src: "public\images\ArvindGuptaSir\AG_01.webp",
            alt: "AG_01",
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

const AUTO_ADVANCE_MS = 3400

const Gallery = () => {
    // Each event gets its own image index state
    const [indices, setIndices] = useState(events.map(() => 0))
    // Track which event is currently in view
    const [activeEventIdx, setActiveEventIdx] = useState(0)
    // Refs for each event section
    const eventRefs = useRef([])
    // Timer refs for resetting auto-advance
    const timerRef = useRef()

    // Drag-to-scroll logic for preview bar
    const previewBarRefs = useRef([])
    // Enhanced drag-to-scroll logic for preview bar with auto-centering
    useEffect(() => {
        previewBarRefs.current.forEach((bar, barIndex) => {
            if (!bar) return

            // Center the current active thumbnail
            const centerActiveThumbnail = () => {
                const currentIndex = indices[barIndex]
                const thumbnails = bar.children
                if (thumbnails[currentIndex]) {
                    const thumbnail = thumbnails[currentIndex]
                    const barRect = bar.getBoundingClientRect()
                    const thumbRect = thumbnail.getBoundingClientRect()

                    const barCenter = barRect.width / 2
                    const thumbCenter =
                        thumbRect.left - barRect.left + thumbRect.width / 2
                    const scrollOffset = thumbCenter - barCenter

                    bar.scrollTo({
                        left: bar.scrollLeft + scrollOffset,
                        behavior: "smooth",
                    })
                }
            }

            // Center on load, resize, and when active image changes
            const checkOverflow = () => {
                setTimeout(centerActiveThumbnail, 100) // Small delay to ensure DOM is ready
            }

            checkOverflow()
            window.addEventListener("resize", checkOverflow)
            let isDown = false
            let startX
            let scrollLeft
            let velocity = 0
            let lastX = 0
            let lastTime = 0

            // Mouse events
            const handleMouseDown = (e) => {
                // Don't interfere with clicks on thumbnail images
                if (e.target.tagName === "IMG") return

                isDown = true
                bar.classList.add("dragging")
                bar.style.cursor = "grabbing"
                startX = e.pageX - bar.offsetLeft
                scrollLeft = bar.scrollLeft
                lastX = e.pageX
                lastTime = Date.now()
                velocity = 0
                e.preventDefault()
            }

            const handleMouseLeave = () => {
                isDown = false
                bar.classList.remove("dragging")
                bar.style.cursor = "grab"
            }

            const handleMouseUp = () => {
                isDown = false
                bar.classList.remove("dragging")
                bar.style.cursor = "grab"
            }

            const handleMouseMove = (e) => {
                if (!isDown) return

                // Only prevent default and scroll if we're actually dragging
                const x = e.pageX - bar.offsetLeft
                const walk = (x - startX) * 2 // Increased sensitivity

                // Only start dragging if mouse has moved significantly
                if (Math.abs(walk) > 5) {
                    e.preventDefault()
                    bar.scrollLeft = scrollLeft - walk

                    // Calculate velocity for momentum
                    const currentTime = Date.now()
                    const deltaTime = currentTime - lastTime
                    if (deltaTime > 0) {
                        velocity = (e.pageX - lastX) / deltaTime
                    }
                    lastX = e.pageX
                    lastTime = currentTime
                }
            }

            // Touch events with improved handling
            let touchStartX
            let touchScrollLeft
            let touchLastX = 0
            let touchLastTime = 0

            const handleTouchStart = (e) => {
                // Don't interfere with touches on thumbnail images
                if (e.target.tagName === "IMG") return

                isDown = true
                const touch = e.touches[0]
                touchStartX = touch.pageX - bar.offsetLeft
                touchScrollLeft = bar.scrollLeft
                touchLastX = touch.pageX
                touchLastTime = Date.now()
                velocity = 0
                e.preventDefault()
            }

            const handleTouchEnd = (e) => {
                isDown = false
                e.preventDefault()
            }

            const handleTouchMove = (e) => {
                if (!isDown) return
                e.preventDefault()
                const touch = e.touches[0]
                const x = touch.pageX - bar.offsetLeft
                const walk = (x - touchStartX) * 2
                bar.scrollLeft = touchScrollLeft - walk

                // Calculate velocity for momentum
                const currentTime = Date.now()
                const deltaTime = currentTime - touchLastTime
                if (deltaTime > 0) {
                    velocity = (touch.pageX - touchLastX) / deltaTime
                }
                touchLastX = touch.pageX
                touchLastTime = currentTime
            }

            // Prevent context menu on long press
            const handleContextMenu = (e) => {
                e.preventDefault()
            }

            // Add listeners
            bar.addEventListener("mousedown", handleMouseDown)
            bar.addEventListener("mouseleave", handleMouseLeave)
            bar.addEventListener("mouseup", handleMouseUp)
            bar.addEventListener("mousemove", handleMouseMove)
            bar.addEventListener("touchstart", handleTouchStart, {
                passive: false,
            })
            bar.addEventListener("touchend", handleTouchEnd, { passive: false })
            bar.addEventListener("touchmove", handleTouchMove, {
                passive: false,
            })
            bar.addEventListener("contextmenu", handleContextMenu)

            // Cleanup function
            return () => {
                bar.removeEventListener("mousedown", handleMouseDown)
                bar.removeEventListener("mouseleave", handleMouseLeave)
                bar.removeEventListener("mouseup", handleMouseUp)
                bar.removeEventListener("mousemove", handleMouseMove)
                bar.removeEventListener("touchstart", handleTouchStart)
                bar.removeEventListener("touchend", handleTouchEnd)
                bar.removeEventListener("touchmove", handleTouchMove)
                bar.removeEventListener("contextmenu", handleContextMenu)
                window.removeEventListener("resize", checkOverflow)
            }
        })
    }, [events.length])

    // Helper to find the event whose center is closest to viewport center
    const updateActiveEventIdx = () => {
        const viewportCenter = window.innerHeight / 2
        let minDistance = Infinity
        let closestIdx = 0
        eventRefs.current.forEach((ref, idx) => {
            if (ref) {
                const rect = ref.getBoundingClientRect()
                const eventCenter = (rect.top + rect.bottom) / 2
                const distance = Math.abs(eventCenter - viewportCenter)
                if (distance < minDistance) {
                    minDistance = distance
                    closestIdx = idx
                }
            }
        })
        setActiveEventIdx(closestIdx)
    }

    // Listen to scroll and resize events
    useEffect(() => {
        updateActiveEventIdx()
        window.addEventListener("scroll", updateActiveEventIdx)
        window.addEventListener("resize", updateActiveEventIdx)
        return () => {
            window.removeEventListener("scroll", updateActiveEventIdx)
            window.removeEventListener("resize", updateActiveEventIdx)
        }
    }, [])

    // Center thumbnails when indices change
    useEffect(() => {
        indices.forEach((currentIndex, eventIdx) => {
            const bar = previewBarRefs.current[eventIdx]
            if (bar) {
                setTimeout(() => {
                    const thumbnails = bar.children
                    if (thumbnails[currentIndex]) {
                        const thumbnail = thumbnails[currentIndex]
                        const barRect = bar.getBoundingClientRect()
                        const thumbRect = thumbnail.getBoundingClientRect()

                        const barCenter = barRect.width / 2
                        const thumbCenter =
                            thumbRect.left - barRect.left + thumbRect.width / 2
                        const scrollOffset = thumbCenter - barCenter

                        bar.scrollTo({
                            left: bar.scrollLeft + scrollOffset,
                            behavior: "smooth",
                        })
                    }
                }, 100)
            }
        })
    }, [indices])

    // Auto-advance only the active event's carousel, and allow timer reset
    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
            setIndices((prev) => {
                const updated = [...prev]
                const event = events[activeEventIdx]
                updated[activeEventIdx] =
                    prev[activeEventIdx] === event.images.length - 1
                        ? 0
                        : prev[activeEventIdx] + 1
                return updated
            })
        }, AUTO_ADVANCE_MS)
        return () => clearTimeout(timerRef.current)
    }, [activeEventIdx, indices[activeEventIdx]])

    // Handlers for each event's carousel
    const setIndex = (eventIdx, newIdx) => {
        setIndices((prev) => {
            const updated = [...prev]
            updated[eventIdx] = newIdx
            return updated
        })

        // Center the newly selected thumbnail
        setTimeout(() => {
            const bar = previewBarRefs.current[eventIdx]
            if (bar) {
                const thumbnails = bar.children
                if (thumbnails[newIdx]) {
                    const thumbnail = thumbnails[newIdx]
                    const barRect = bar.getBoundingClientRect()
                    const thumbRect = thumbnail.getBoundingClientRect()

                    const barCenter = barRect.width / 2
                    const thumbCenter =
                        thumbRect.left - barRect.left + thumbRect.width / 2
                    const scrollOffset = thumbCenter - barCenter

                    bar.scrollTo({
                        left: bar.scrollLeft + scrollOffset,
                        behavior: "smooth",
                    })
                }
            }
        }, 50)

        // Reset timer if this is the active event
        if (eventIdx === activeEventIdx) {
            if (timerRef.current) clearTimeout(timerRef.current)
            timerRef.current = setTimeout(() => {
                setIndices((prev) => {
                    const updated = [...prev]
                    const event = events[activeEventIdx]
                    updated[activeEventIdx] =
                        prev[activeEventIdx] === event.images.length - 1
                            ? 0
                            : prev[activeEventIdx] + 1
                    return updated
                })
            }, AUTO_ADVANCE_MS)
        }
    }

    return (
        <div className="w-full min-h-screen bg-[#040015] pt-[90px] relative">
            <style>{scrollbarStyles}</style>
            <div className="fixed inset-0 z-0">
                <StarsCanvas />
            </div>
            <div className="max-w-4xl mx-auto px-2 sm:px-4 md:px-8 py-8 md:py-12 relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-10 break-words">
                    Picture Gallery
                </h1>
                <div className="flex flex-col gap-6 md:gap-10">
                    {events.map((event, eventIdx) => (
                        <div
                            key={event.key}
                            className="mb-6 bg-[#181828] rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 w-full relative z-20"
                            ref={(el) => (eventRefs.current[eventIdx] = el)}
                        >
                            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-4 md:mb-6 break-words relative z-30">
                                {event.title}
                            </h2>
                            <div className="relative w-full h-[180px] sm:h-[260px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg mb-3 md:mb-4">
                                <div className="w-full h-full cursor-grab active:cursor-grabbing">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={indices[eventIdx]}
                                            src={
                                                event.images[indices[eventIdx]]
                                                    .src
                                            }
                                            alt={
                                                event.images[indices[eventIdx]]
                                                    .alt
                                            }
                                            className="w-full h-full object-cover"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            draggable="false"
                                        />
                                    </AnimatePresence>
                                </div>
                                {/* Navigation buttons */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setIndex(
                                            eventIdx,
                                            indices[eventIdx] === 0
                                                ? event.images.length - 1
                                                : indices[eventIdx] - 1
                                        )
                                    }
                                    className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center z-30 hover:bg-gray-100 hover:scale-110 transition-all duration-200 shadow-lg"
                                    aria-label="Previous image"
                                    style={{ userSelect: "none" }}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="md:w-5 md:h-5"
                                    >
                                        <polyline points="15,18 9,12 15,6"></polyline>
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setIndex(
                                            eventIdx,
                                            indices[eventIdx] ===
                                                event.images.length - 1
                                                ? 0
                                                : indices[eventIdx] + 1
                                        )
                                    }
                                    className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center z-30 hover:bg-gray-100 hover:scale-110 transition-all duration-200 shadow-lg"
                                    aria-label="Next image"
                                    style={{ userSelect: "none" }}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="md:w-5 md:h-5"
                                    >
                                        <polyline points="9,18 15,12 9,6"></polyline>
                                    </svg>
                                </button>
                                {/* Image counter */}
                                <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                                    {indices[eventIdx] + 1} /{" "}
                                    {event.images.length}
                                </div>
                            </div>
                            {/* Thumbnails */}
                            <div className="w-full relative overflow-hidden">
                                {/* Left blur gradient */}
                                <div className="absolute left-0 top-0 w-6 sm:w-8 md:w-12 h-full bg-gradient-to-r from-[#181828] to-transparent z-10 pointer-events-none rounded-l-lg"></div>
                                {/* Right blur gradient */}
                                <div className="absolute right-0 top-0 w-6 sm:w-8 md:w-12 h-full bg-gradient-to-l from-[#181828]/90 to-transparent z-10 pointer-events-none rounded-r-lg"></div>
                                {/* Scroll indicators */}
                                <div className="absolute left-1 top-1/2 -translate-y-1/2 text-white/60 z-20 pointer-events-none">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <polyline points="15,18 9,12 15,6"></polyline>
                                    </svg>
                                </div>
                                <div className="absolute right-1 top-1/2 -translate-y-1/2 text-white/60 z-20 pointer-events-none">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <polyline points="9,18 15,12 9,6"></polyline>
                                    </svg>
                                </div>
                                <div
                                    ref={(el) =>
                                        (previewBarRefs.current[eventIdx] = el)
                                    }
                                    className="gallery-preview-bar flex gap-2 sm:gap-3 overflow-x-auto bg-white/10 rounded-lg px-3 sm:px-4 md:px-6 py-3 sm:py-4 cursor-grab active:cursor-grabbing select-none w-full hover:bg-white/15 transition-colors duration-200"
                                    style={{
                                        minHeight: "60px",
                                        maxWidth: "100%",
                                        WebkitOverflowScrolling: "touch",
                                        scrollBehavior: "smooth",
                                        scrollbarWidth: "none",
                                        msOverflowStyle: "none",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {event.images.map((image, imgIdx) => (
                                        <img
                                            key={imgIdx}
                                            src={image.src}
                                            alt={`Thumbnail ${imgIdx + 1}`}
                                            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover cursor-pointer rounded-lg transition-all duration-300 border-2 flex-shrink-0 hover:scale-110 hover:shadow-lg
                                                ${
                                                    indices[eventIdx] === imgIdx
                                                        ? "border-purple-400 opacity-100 scale-110 shadow-lg shadow-purple-400/50 ring-2 ring-purple-300/30"
                                                        : "border-white/30 opacity-70 hover:opacity-100 hover:border-white/60 hover:scale-105"
                                                }`}
                                            style={{
                                                aspectRatio: "1/1",
                                                minWidth: "2rem",
                                                minHeight: "2rem",
                                            }}
                                            onClick={() =>
                                                setIndex(eventIdx, imgIdx)
                                            }
                                            draggable="false"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery
