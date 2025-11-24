import React from "react";
import {
  Mail,
  Linkedin,
  Instagram,
  Github,
  Facebook,
  Youtube,
} from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#161126] text-white py-10 px-6">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 border-t border-gray-600/40 pt-6">
        {/* Email */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="flex items-center gap-2 text-gray-300">
            <Mail size={18} />
            <span className="font-semibold">Email</span>
          </div>
          <p className="text-gray-400 break-all">ecesociety@bitsindri.ac.in</p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-3 text-gray-300">
            <a
              href="https://www.linkedin.com/company/ece-society-bit-sindri/posts/?feedView=all"
              target="_blank"
            >
              <Linkedin
                className="cursor-pointer hover:text-white transition"
                size={20}
              />
            </a>
            <a
              href="https://www.instagram.com/ecesocietybits/?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
            >
              <Instagram
                className="cursor-pointer hover:text-white transition"
                size={20}
              />
            </a>
            <a
              href="https://github.com/orgs/ecesocietybit/repositories"
              target="_blank"
            >
              <Github
                className="cursor-pointer hover:text-white transition"
                size={20}
              />
            </a>
            <a href="" target="_blank">
              <Youtube
                className="cursor-pointer hover:text-white transition"
                size={20}
              />
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2 w-full md:w-1/2 md:text-right">
          <span className="text-gray-300 font-semibold">Address</span>
          <p className="text-gray-400 leading-tight">
            ECE Society, BIT Sindri, Dhanbad,
            <br />
            Jharkhand, India
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-400 mt-8 text-sm md:text-base">
        Copyright © 2025 HYROX - ECE Society BIT Sindri
      </div>
    </footer>
  );
}

export default Footer;
