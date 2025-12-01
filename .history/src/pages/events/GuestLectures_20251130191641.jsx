import React, { Component, useState } from "react";
import StarsCanvas from "../../components/StarBackground";

/**
 * Simple Error Boundary to catch runtime errors and show readable message
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // log to console so we can see real error details
    console.error("ErrorBoundary caught:", error, info);
    this.setState({ info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#040015] text-white p-6">
          <div className="max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-gray-300 mb-4">
              There was an error while rendering this page. Check the console for details.
            </p>
            <pre className="text-xs text-left bg-black/40 p-3 rounded text-red-300 overflow-auto">
              {String(this.state.error && this.state.error.toString())}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * SafeImage - shows fallback when src fails
 */
const SafeImage = ({ src, alt, className }) => {
  const [ok, setOk] = useState(true);
  const fallback = "/assets/image-placeholder.png"; // keep a lightweight placeholder in public/assets

  return (
    <img
      src={ok ? src : fallback}
      alt={alt}
      className={className}
      onError={() => {
        console.warn("Image failed to load:", src);
        setOk(false);
      }}
      draggable="false"
    />
  );
};

const guestLectures = [
  {
    title: 'Invited Talk by Padmashree Prof. H C Verma on "Importance of Science"',
    img: "/events/IMG_3389.webp",
    details: [
      { heading: "Date & Venue", content: ["February 4 2023", "MITAOE, Alandi (Pune)"] },
      { heading: "Speaker", content: ["Padmashree Professor H C Verma"] },
    ],
    highlights: [
      "Interactive session with students",
      "Inauguration of ‘Waves’ by Prof. Verma",
    ],
    impact: "Inspired young minds with insights on science and curiosity.",
  },
  {
    title: 'Invited Talk on "Importance of Experiments in Learning Physics"',
    img: "/events/IMG_image.webp", // if this path is wrong, SafeImage will fallback
    details: [
      { heading: "Date & Venue", content: ["December 3 2024", "MITAOE, Alandi (Pune)"] },
      { heading: "Speaker", content: ["Padma Shri Arvind Gupta"] },
    ],
    highlights: ["Toys-from-Trash demonstration", "Hands-on learning in science"],
    impact: "Showed creative ways to teach scientific principles through simple models.",
  },
];

const GuestLectures = () => {
  return (
    <ErrorBoundary>
      <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px] text-white">
        <StarsCanvas />
        <div className="max-w-6xl mx-auto p-6 relative z-10">
          <h1 className="text-4xl font-bold mb-10 text-center">Guest Lectures</h1>

          {guestLectures.map((event, idx) => (
            <div
              key={idx}
              className="mb-12 bg-[#0a0225] p-6 rounded-2xl shadow-lg hover:shadow-blue-600/30 transition duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">{event.title}</h2>

              <div className="rounded-xl mb-4 w-full overflow-hidden bg-black/20">
                <SafeImage
                  src={event.img}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Event Details */}
              <div className="mb-4">
                {event.details.map((d, i) => (
                  <div key={i} className="mb-2">
                    <strong className="text-blue-300">{d.heading}: </strong>
                    <span>{d.content.join(", ")}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <ul className="list-disc pl-5 mb-4 text-gray-300">
                {event.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <p className="text-gray-400">{event.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default GuestLectures;