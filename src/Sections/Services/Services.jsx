import React from 'react';
import { 
  IoMdRocket, 
  IoMdConstruct, 
  IoMdLock, 
  IoMdGitNetwork, 
  IoMdAnalytics, 
  IoMdPulse 
} from "react-icons/io";

const Services = () => {
  const interventions = [
    {
      title: "Interim Execution Leadership",
      desc: "Direct COO-level authority to manage operating cadences and decision-making.",
      icon: <IoMdRocket />,
    },
    {
      title: "Founder Stabilization & Governance",
      desc: "Installing decision gates and impulse buffering to separate vision from chaos.",
      icon: <IoMdLock />,
    },
    {
      title: "Growth & Complexity Control",
      desc: "Reducing dependencies through organizational realignment and role clarity.",
      icon: <IoMdGitNetwork />,
    },
    {
      title: "Crisis & Pre-Exit Stabilization",
      desc: "Cleaning up execution risks and ensuring diligence readiness for emergency control.",
      icon: <IoMdPulse />,
    },
    {
      title: "Structural Installations",
      desc: "Deploying custom decision architectures and accountability escalation systems.",
      icon: <IoMdConstruct />,
    },
    {
      title: "Technical Reinforcement",
      desc: "Automating processes and internal dashboards to provide full execution visibility.",
      icon: <IoMdAnalytics />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          
          <h3 className="text-4xl md:text-5xl font-extrabold poppins">
            Operational Interventions
          </h3>
          <div className="h-1 w-20 bg-gray-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interventions.map((service, index) => (
            <div 
              key={index} 
              className="p-8 border border-gray-800 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-4xl text-gray-400 mb-6 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 poppins">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed roboto text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;