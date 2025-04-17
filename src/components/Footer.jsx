import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { socialMedia, footerLinks, footerInfo } from "../constants";

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} w-full flex items-center py-4 bg-primary mt-20`}>
      <div className="w-full flex flex-col max-w-7xl mx-auto">
        {/* First line with social media icons centered */}
        <div className="flex justify-center items-center w-full mb-2">
          <div className="flex space-x-6">
            {socialMedia.map((social) => (
              <a 
                key={social.id}
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name} 
                className="text-secondary hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
        <div className="w-full h-px bg-gray-700 my-4" />
        {/* Second line with copyright on left and legal links on right */}
        {/* Second line */}
        <div className="w-full">
          {/* Desktop version: copyright + legal links inline */}
          <div className="hidden sm:flex justify-between items-center w-full">
            <div className="flex items-center">
              <p className="text-white font-bold text-[14px] mr-2">
                {footerInfo.copyright}
              </p>
              <p className="text-secondary text-[14px]">
                | {footerInfo.rightsText}
              </p>
            </div>

            <div className="flex flex-row gap-6">
              {footerLinks.map((link) => (
                <Link 
                  key={link.id}
                  to={link.url} 
                  className="text-secondary hover:text-white text-[14px] transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile version: stacked legal info */}
          <div className="sm:hidden mt-2 text-center space-y-1">
            <div className="flex justify-center items-center space-x-2 text-[14px] text-secondary">
              <Link to={footerLinks[0].url} className="hover:text-white transition-colors">
                {footerLinks[0].title}
              </Link>
              <span>•</span>
              <Link to={footerLinks[1].url} className="hover:text-white transition-colors">
                {footerLinks[1].title}
              </Link>
            </div>
            <p className="text-white font-bold text-[14px]">{footerInfo.copyright}</p>
            <p className="text-secondary text-[14px]">{footerInfo.rightsText}</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;