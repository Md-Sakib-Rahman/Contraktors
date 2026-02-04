import React from 'react';
import { 
  IoMdHome, 
  IoMdAlert, 
  IoMdHammer, 
  IoMdList, 
  IoMdRemoveCircle, 
  IoMdCalendar 
} from "react-icons/io";

const Navbar = () => {
  const iconStyle = "text-2xl text-gray-400 hover:text-white transition-all duration-300 flex flex-col items-center group";
  const labelStyle = "text-[10px] uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block";

  const navLinks = [
    { icon: <IoMdHome />, label: "Hero", href: "#hero" },
    { icon: <IoMdAlert />, label: "Problem", href: "#problem" },
    { icon: <IoMdHammer />, label: "Services", href: "#services" },
    { icon: <IoMdList />, label: "Process", href: "#methodology" },
    { icon: <IoMdRemoveCircle />, label: "Scope", href: "#constraints" },
    { icon: <IoMdCalendar />, label: "Book", href: "#cta" },
  ];

  return (
    <nav className="
      /* Mobile: Bottom fixed bar */
      fixed bottom-0 left-0 w-full h-16 bg-black/90 backdrop-blur-md border-t border-white/10 px-6 z-50
      /* Desktop: Right fixed vertical bar */
      md:top-1/2 md:-translate-y-1/2 md:right-0 md:left-auto md:w-20 md:h-auto md:py-8 md:border-t-0 md:border-l md:rounded-l-3xl
    ">
      <ul className="flex flex-row md:flex-col justify-between items-center h-full md:gap-8 list-none m-0 p-0">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} title={link.label} className={iconStyle}>
              {link.icon}
              <span className={labelStyle}>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;