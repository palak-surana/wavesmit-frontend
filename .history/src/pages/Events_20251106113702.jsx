import React from "react";
import StarsCanvas from "../components/StarBackground";
import Event1 from "./events/Event1";
import Event2 from "./events/Event2";
import Event3 from "./events/Event3";
import Event4 from "./events/Event4";
import Event5 from "./events/Event5";
import Event6 from "./events/Event6";

const Events = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
      <StarsCanvas />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="heading-1 mb-4 sm:mb-6">Our Events</h1>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Discover our journey through scientific exploration, workshops, and community engagement
          </p>
        </div>

        {/* Render Each Event Component */}
        <section>
          <h2 className="heading-2 mb-8">Past Events</h2>
          <div className="space-y-12">
            <Event1 />
            <Event2 />
            <Event3 />
            <Event4 />
            <Event5 />
            <Event6 />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
