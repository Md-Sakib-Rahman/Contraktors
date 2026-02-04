import React from 'react';
import { IoMdAlert, IoMdFlame, IoMdTrendingDown, IoMdSpeedometer } from "react-icons/io";

const ProblemSection = () => {
  const problems = [
    {
      title: "Vision-Structure Gap",
      desc: "Founder vision outpaces structure, creating a disconnect between goals and reality.",
      icon: <IoMdSpeedometer className="text-gray-500" />,
    },
    {
      title: "Friction in Execution",
      desc: "Strategic decisions don’t land effectively at the operational level.",
      icon: <IoMdTrendingDown className="text-gray-500" />,
    },
    {
      title: "Operational Burnout",
      desc: "Teams burn energy on low-impact tasks due to a lack of clear systems.",
      icon: <IoMdFlame className="text-gray-500" />,
    },
    {
      title: "Scaling Risks",
      desc: "Growth introduces execution risk that threatens to destabilize the entire project.",
      icon: <IoMdAlert className="text-gray-500" />,
    },
  ];

  return (
    <section className="py-16 px-6  text-white ">
      <div className="max-w-5xl mx-auto">
         
        <h3 className="text-4xl font-extrabold mb-12 text-center poppins">
          Structural friction is the silent killer of growth.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 roboto">
          {problems.map((item, index) => (
            <div key={index} className="flex gap-4 p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
              <div className="text-3xl mt-1">{item.icon}</div>
              <div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;