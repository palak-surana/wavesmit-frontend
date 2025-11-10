import React from "react";
import { Mail, Phone, User } from "lucide-react";
import StarsCanvas from "../components/StarBackground";

const Contact = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px] text-white">
      <StarsCanvas />
      <div className="max-w-5xl mx-auto px-6 py-16 text-center relative z-10">
        <h1 className="text-5xl font-extrabold mb-12 text-blue-400 tracking-wide">
          Contact Me
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Box 1: Name */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
            <User className="mx-auto mb-3 text-blue-400" size={40} />
            <h3 className="text-xl font-semibold mb-1 text-blue-300">Name</h3>
            <p className="text-gray-300">Palak Surana</p>
          </div>

          {/* Box 2: Email */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300">
            <Mail className="mx-auto mb-3 text-pink-400" size={40} />
            <h3 className="text-xl font-semibold mb-1 text-pink-300">Email</h3>
            <p className="text-gray-300">psurana077@gmail.com</p>
          </div>

          {/* Box 3: Phone */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-green-500/40 hover:scale-105 transition-all duration-300">
            <Phone className="mx-auto mb-3 text-green-400" size={40} />
            <h3 className="text-xl font-semibold mb-1 text-green-300">Phone</h3>
            <p className="text-gray-300">9922563396</p>
          </div>
        </div>

        {/* Contact Me button */}
        <div className="mt-12">
          <button className="px-8 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg hover:shadow-blue-500/40 transition duration-300">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
