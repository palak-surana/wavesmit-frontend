import StarsCanvas from "../../components/StarBackground";

const outreachEvents = [
  {
    title: "Jagriti Blind School (Social Outreach)",
    img: "/events/IMG-20240202-WA0011.webp",
    impact:
      "Week-long training for blind students, helping them develop 5 working science models.",
  },
  {
    title: "Blood Donation Drive",
    video: "/events/blood_donation.mp4",
    impact:
      "390+ donors, 200+ units collected — promoting empathy and mental wellness through Healing Minds Initiative.",
  },
];

const SocialOutreach = () => (
  <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
    <StarsCanvas />
    <div className="max-w-6xl mx-auto p-6 relative z-10 text-white">
      <h1 className="text-3xl font-bold mb-10 text-center">Social Outreach</h1>
      {outreachEvents.map((event, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
          {event.video ? (
            <video
              src={event.video}
              controls
              muted
              autoPlay
              loop
              className="w-full rounded-lg mb-4"
            />
          ) : (
            <img src={event.img} alt={event.title} className="rounded-lg mb-4" />
          )}
          <p className="text-gray-300">{event.impact}</p>
        </div>
      ))}
    </div>
  </div>
);

export default SocialOutreach;
