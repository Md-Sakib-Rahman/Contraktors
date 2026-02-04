import React from 'react';
import { IoMdMail, IoMdDocument } from "react-icons/io";

const CallToAction = () => {
  const email = "contraktors.inq@gmail.com";
  const subject = "Inquiry: Operational Intervention";
  const body = "I am reaching out to discuss a potential structural alignment...";

  return (
    <section id="cta" className="py-24 px-6 bg-black text-white border-t border-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Marker */}
        <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">
          07. Engagement
        </h2>

        {/* Headline */}
        <h3 className="text-4xl md:text-5xl font-extrabold poppins mb-6">
          Assess for Alignment.
        </h3>

        {/* Subtext */}
        <p className="text-xl text-gray-400 roboto max-w-2xl mx-auto mb-12">
          We do not pitch. We evaluate. If your structure is under-performing and you have the authority to change it, initiate a formal inquiry.
        </p>

        {/* The Actions */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Email Action */}
          <a 
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            className="flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all poppins w-full md:w-auto justify-center"
          >
            <IoMdMail size={20} />
            Inquire via Email
          </a>
          
          {/* Terms Action */}
          <button className="flex items-center gap-3 border border-gray-700 text-gray-300 px-10 py-4 rounded-full font-bold hover:bg-gray-900 transition-all poppins w-full md:w-auto justify-center">
            <IoMdDocument size={20} />
            Engagement Terms
          </button>
        </div>

        {/* Direct Email Display */}
        <p className="mt-8 text-gray-500 roboto text-sm">
          Direct: <span className="text-gray-300 select-all">{email}</span>
        </p>

        {/* Trust Note */}
        <div className="mt-16 flex items-center justify-center gap-2 text-gray-600 text-sm roboto">
          <span className="w-8 h-[1px] bg-gray-800"></span>
          <span>Expect a response within 24 hours</span>
          <span className="w-8 h-[1px] bg-gray-800"></span>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;