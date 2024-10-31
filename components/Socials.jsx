
"use client";

import {
  RiTwitterXFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";

const icons = [
  {
    path: "https://www.linkedin.com/in/takella",
    name: <RiLinkedinFill />,
    title: "LinkedIn",
  },
  {
    path: "https://github.com/takella6315",
    name: <RiGithubFill />,
    title: "GitHub",
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <a
            href={icon.path}
            key={`social-icon-${index}`}
            className={`${iconsStyles}`}
            target="_blank"
            rel="noopener noreferrer"
            title={icon.title}
          >
            {icon.name}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
