import React from 'react';
import { 
  IoMdCheckmarkCircleOutline, 
  IoMdExit, 
  IoMdTrophy, 
  IoMdAnalytics, 
  IoMdKey 
} from "react-icons/io";

const Methodology = () => {
  const processSteps = [
    { label: "Situation report driven", icon: <IoMdAnalytics /> },
    { label: "Authority defined upfront", icon: <IoMdKey /> },
    { label: "Finite engagement", icon: <IoMdExit /> },
    { label: "Measurable outcomes", icon: <IoMdTrophy /> },
    { label: "Exit once systems hold", icon: <IoMdCheckmarkCircleOutline /> },
  ];

  const outcomes = [
    "Stable operating cadence",
    "Clear ownership",
    "Decision clarity",
    "Reduced execution risk"
  ];

  return (
    <section className="py-24 px-6 bg-black text-white border-t border-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Section 4: How We Work */}
        <div>
          
          <h3 className="text-4xl font-extrabold poppins mb-10">
            Precision over Presence.
          </h3>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <span className="text-2xl text-gray-500 group-hover:text-white transition-colors">
                  {step.icon}
                </span>
                <span className="text-lg roboto text-gray-300 border-b border-gray-800 pb-2 w-full">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: What We Leave Behind */}
        <div className="bg-white/5 p-10 rounded-3xl border border-gray-800 flex flex-col justify-center">
          <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">
            05. What We Leave Behind
          </h2>
          <h3 className="text-3xl font-bold poppins mb-8">
            The Structural Legacy
          </h3>
          <ul className="space-y-4">
            {outcomes.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 text-green-500">
                  <IoMdCheckmarkCircleOutline size={20} />
                </span>
                <span className="text-xl roboto text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Methodology;