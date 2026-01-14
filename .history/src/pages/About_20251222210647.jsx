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

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="heading-1 mb-4 text-white">
            About MIT AOE Wave & NSS
          </h1>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Empowering innovation, leadership, and community service through science and humanity.
          </p>
        </div>

        {/* Logos */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-16">
          <div className={cardStyle}>
            <img
              src="/images/waves-logo.png"
              alt="MIT AoE Waves Logo"
              className="w-40 mx-auto"
            />
            <h3 className="heading-3 mt-4 text-center text-white">
              MIT AoE Waves
            </h3>
          </div>

          <div className={cardStyle}>
            <img
              src="/images/nss-logo.png"
              alt="NSS Logo"
              className="w-40 mx-auto"
            />
            <h3 className="heading-3 mt-4 text-center text-white">
              National Service Scheme (NSS)
            </h3>
          </div>
        </div>

        {/* Who We Are */}
        <section className={`${cardStyle} mb-10`}>
          <h2 className="heading-3 mb-6 text-white">Who We Are</h2>
          <p className="body-regular text-gray-300">
            MIT AoE Waves is a pioneering student-driven organization that brings together
            creative minds passionate about scientific exploration and innovation.
            In collaboration with NSS, we aim to inspire young leaders for social impact.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid sm:grid-cols-2 gap-8 mb-10">
          <div className={cardStyle}>
            <h2 className="heading-3 mb-4 text-white">Our Mission</h2>
            <p className="body-regular text-gray-300">
              To foster scientific curiosity, technical innovation, and social responsibility
              among students through real-world projects.
            </p>
          </div>

          <div className={cardStyle}>
            <h2 className="heading-3 mb-4 text-white">Our Vision</h2>
            <p className="body-regular text-gray-300">
              To become a hub of impactful innovation where science meets service.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className={`${cardStyle} mb-10`}>
          <h2 className="heading-3 mb-8 text-white">What We Do</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Conduct cutting-edge research projects",
              "Organize scientific and social workshops",
              "Collaborate with industry experts and NGOs",
              "Promote sustainability and awareness drives",
              "Mentor students for national-level competitions",
              "Encourage technical and humanitarian innovation",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                <span className="body-regular text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className={cardStyle}>
          <h2 className="heading-3 mb-6 text-white">Our Achievements</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>10+ national-level science workshops and hackathons</li>
            <li>Collaborations with research institutes and industries</li>
            <li>Community campaigns impacting 500+ students</li>
            <li>Projects recognized at innovation challenges</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default About;
