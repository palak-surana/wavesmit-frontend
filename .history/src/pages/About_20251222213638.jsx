import React from "react";
import StarsCanvas from "../components/StarBackground";

const cardStyle =
  "bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 " +
  "hover:border-red-500 hover:-translate-y-1 hover:scale-[1.02] " +
  "transition-all duration-300";

const About = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
      <StarsCanvas />

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">

        {/* ================= INTRO ================= */}
        <div className="text-center mb-20">
          <h1 className="heading-1 mb-6 text-white">
            About Waves & NSS
          </h1>
          <p className="body-large max-w-4xl mx-auto text-gray-300 leading-relaxed">
            At MITAOE, Waves and NSS come together to create a space where
            innovation is not limited to laboratories and service is not limited
            to classrooms. We believe real change happens when science meets
            empathy.
          </p>
        </div>

        

        {/* ================= WHY WAVES AND NSS ================= */}
        <section className={`${cardStyle} mb-16`}>
          <h2 className="heading-3 mb-6 text-white text-center">
            Why Waves And NSS?
          </h2>
          <p className="body-regular text-gray-300 text-center leading-relaxed max-w-4xl mx-auto">
            Waves focuses on scientific curiosity and technical innovation, while
            NSS emphasizes social responsibility and community service. Together,
            we bridge the gap between ideas and action — transforming research
            into real-world solutions and students into responsible leaders.
          </p>
        </section>

        {/* ================= MISSION / VISION / VALUES ================= */}
        <section className="grid sm:grid-cols-3 gap-8 mb-20">
          <div className={cardStyle}>
            <h3 className="heading-3 mb-4 text-white">Our Mission</h3>
            <p className="body-regular text-gray-300">
              To foster scientific curiosity, technical innovation, and social
              responsibility among students through hands-on projects and
              collaborative learning.
            </p>
          </div>

          <div className={cardStyle}>
            <h3 className="heading-3 mb-4 text-white">Our Vision</h3>
            <p className="body-regular text-gray-300">
              To become a hub of impactful innovation where science meets service
              and students grow into thoughtful, capable leaders.
            </p>
          </div>

          <div className={cardStyle}>
            <h3 className="heading-3 mb-4 text-white">Our Values</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Curiosity & Critical Thinking</li>
              <li>• Responsibility & Ethics</li>
              <li>• Collaboration & Teamwork</li>
              <li>• Leadership with Purpose</li>
            </ul>
          </div>
        </section>

        {/* ================= WHAT WE DO ================= */}
        <section className={`${cardStyle} mb-20`}>
          <h2 className="heading-3 mb-8 text-white text-center">
            What We Do
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Build solutions through student-led research",
              "Transform ideas into working prototypes",
              "Take innovation beyond campus into communities",
              "Collaborate with industry experts, NGOs, and institutions",
              "Prepare students for national-level competitions",
              "Encourage technology-driven social impact",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                <span className="body-regular text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ACHIEVEMENTS ================= */}
        <section className={cardStyle}>
          <h2 className="heading-3 mb-6 text-white text-center">
            Our Achievements
          </h2>

          <ul className="text-gray-300 space-y-3 max-w-3xl mx-auto">
            <li>📊 Organized 10+ workshops impacting 500+ students</li>
            <li>🏫 Collaborated with reputed academic and research institutes</li>
            <li>🌱 Led community initiatives addressing real social challenges</li>
            <li>🏅 Student projects recognized at innovation forums</li>
          </ul>
        </section>

        {/* ================= SIGNATURE LINE ================= */}
        <div className="text-center mt-20">
          <p className="text-xl text-white font-semibold">
            “We don’t just build projects.  
            <br />We build people who build change.”
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
