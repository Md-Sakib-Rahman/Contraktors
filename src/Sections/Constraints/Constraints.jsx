import React from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

const Constraints = () => {
  const negatives = [
    { title: "No motivational speaking", desc: "We focus on operational mechanics, not temporary inspiration." },
    { title: "No generic strategy decks", desc: "We deliver functional structures, not theoretical slides." },
    { title: "No long-term retainers", desc: "Our goal is systemic independence, not permanent dependency." },
    { title: "No embedding without authority", desc: "We do not accept responsibility without the power to execute." },
  ];

  return (
    <section className="py-24 px-6 bg-black text-white border-t border-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          
          <h3 className="text-4xl md:text-5xl font-extrabold poppins italic">
            Zero bloat. No noise.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
          {negatives.map((item, index) => (
            <div key={index} className="relative pl-10 group">
              {/* Icon as a Bullet */}
              <div className="absolute left-0 top-1 text-red-600 text-2xl group-hover:scale-110 transition-transform">
                <IoMdCloseCircleOutline />
              </div>
              
              <div>
                <h4 className="text-xl font-bold poppins mb-2 text-gray-100">
                  {item.title}
                </h4>
                <p className="text-gray-500 roboto text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 border-l-4 border-red-600 bg-red-950/10">
          <p className="text-gray-400 italic roboto">
            "Contraktors is an intervention group, not a consultancy. We prioritize the integrity of the system over the comfort of the status quo."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Constraints; 