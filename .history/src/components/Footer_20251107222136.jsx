import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: t("Home"), link: "/" },
    { name: t("About Us"), link: "/about" },
    { name: t("Vision"), link: "/vision" },
    { name: t("Events"), link: "/events" },
    { name: t("Gallery"), link: "/gallery" },
    { name: t("Contact"), link: "/contact" },
  ];

  return (
    <footer className="relative bg-[#030014] border-t border-white/10 z-[60] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-10">

          {/* 🌊 Logo & Description */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/assets/waves.png"
                alt="Waves Logo"
                className="h-12 object-contain"
                style={{
                  filter: "invert(1) brightness(2) contrast(1.2)",
                }}
              />
            </div>
            <p className="leading-relaxed mb-6 text-gray-400">
              {t("💫 Where innovation meets compassion NSS × WAVES.")}
            </p>

            {/* 🌐 Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/waves_mitaoe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-instagram text-white text-lg"></i>
              </a>

              <a
                href="https://youtube.com/@waves_mitaoe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-youtube text-white text-lg"></i>
              </a>

              <a
                href="https://github.com/KingShivamX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-github text-white text-lg"></i>
              </a>
            </div>
          </div>

          {/* ⚡ Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white border-b border-gray-600 pb-2 inline-block">
              {t("Quick Links")}
            </h3>
            <ul className="space-y-3 mt-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.link}
                    className="hover:text-white transition duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 📞 Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white border-b border-gray-600 pb-2 inline-block">
              {t("Contact")}
            </h3>
            <div className="space-y-4 mt-4">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  {t("MIT Academy of Engineering")} <br />
                  {t("Alandi, Pune")}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-purple-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>waves@mitaoe.ac.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* 🧾 Bottom Section */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-400">
          © {currentYear} WAVES MITAOE — {t("All Rights Reserved")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
