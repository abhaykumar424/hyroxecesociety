import React from "react";
import Aboutus from "./Aboutus";
import Resources from "./Resources";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="md:h-fit px-6 md:pt-40 py-10 md:py-20 md:px-16 lg:px-28 text-white font-poppins">
        {/* Heading */}
        <div className="flex justify-between">
          <div className="text-4xl md:text-7xl font-extrabold leading-tight mb-10">
            Welcome to HYROX <br />
            <div className="text-2xl md:text-5xl font-medium mt-4">
              Place where you can learn <br />
              <div className="py-2">how to code</div>
            </div>
          </div>
          <div>
            <div className="flex justify-center md:justify-start  w-full">
              <img
                src="/hyroxlogo.png" // Replace with your white outline icon asset
                alt="Hyrox Icon"
                className="w-50 md:w-120"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          {/* Join Community */}
          <a href="https://chat.whatsapp.com/EutIslFqitFFQZqWQeU4bG?mode=hqrt3">
            <button className="w-full sm:w-auto border border-white text-white font-semibold px-6 py-2 rounded-xl transition duration-200 hover:bg-white hover:text-[#5E3AFF]">
              Join Community
            </button>
          </a>

          {/* Explore Resources */}
          <Link to="/resources">
            <button className="w-full sm:w-auto border border-white text-white font-semibold px-6 py-2 rounded-xl transition duration-200 hover:bg-white hover:text-[#5E3AFF]">
              Explore Resources
            </button>
          </Link>
        </div>
      </div>
      <Aboutus />
      <Resources />
      <Footer />
    </>
  );
}

export default Home;
