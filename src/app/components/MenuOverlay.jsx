import React from "react";
import { Link as ScrollLink } from "react-scroll";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <ScrollLink
            to={link.path}
            smooth={true}
            spy={true}
            offset={-80}
            className="text-white cursor-pointer"
          >
            {link.title}
          </ScrollLink>
          
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
