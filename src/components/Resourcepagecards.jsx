import React from "react";

export default function Resourcespagecards() {
  return (
    <div className="w-full min-h-screen bg-[#1b1534] flex flex-col items-center py-16 text-white">
      <h1 className="text-3xl py-5 font-bold mb-6">Machine Learning</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <a href="https://docs.google.com/document/d/15jyoEzEZG09COfP5UQLhUnFLnMbIj8e0ZL-oKWINi0Y/edit?tab=t.0#heading=h.1fn8ka584nim" target="_blank">
          <div className="bg-[#1C1433] px-20 py-20 rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.15)] text-center text-lg font-medium hover:scale-105 transition-transform text-gray-200">
            <img
              src="https://fonts.gstatic.com/s/i/gcpiconscolors/document_ai/v1/web-512dp/colors_document_ai_color_1x_web_512dp.png"
              className="w-30 h-30 mx-auto mb-4"
            />
            ML Documnets
          </div>
        </a>

        {/* Card 2 */}
        <a href="https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH" target="_blank">
          <div className="bg-[#1C1433] px-20 py-20 rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.15)] text-center text-lg font-medium hover:scale-105 transition-transform text-gray-200">
            <img
              src="https://yt3.googleusercontent.com/ytc/AIdro_lUgoevWNPCGZJowMs4p6mlt8HdQWdBWvKC47sfvAJ16FM=s160-c-k-c0x00ffffff-no-rj"
              className="w-30 h-30 mx-auto mb-4"
            />
            100 Days of ML
          </div>
        </a>

        {/* Card 3 */}
        <a href="https://www.youtube.com/watch?v=rfscVS0vtbw" target="_blank">
          <div className="bg-[#1C1433] px-20 py-20 rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.15)] text-center text-lg font-medium hover:scale-105 transition-transform text-gray-200">
            <img
              src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
              className="w-30 h-30 mx-auto mb-4"
            />
            Pthon One Shot
          </div>
        </a>
        <a href="https://www.builtatlightspeed.com/" target="_blank">
          <div className="bg-[#1C1433] px-20 py-20 rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.15)] text-center text-lg font-medium hover:scale-105 transition-transform text-gray-200">
            <img
              src="https://cp-algorithms.com/favicon.ico"
              className="w-30 h-30 mx-auto mb-4"
            />
            Full Project Ui/Ux idea
          </div>
        </a>

        <a href="https://github.com/codecrafters-io/build-your-own-x" target="_blank">
          <div className="bg-[#1C1433] px-20 py-20 rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.15)] text-center text-lg font-medium hover:scale-105 transition-transform text-gray-200">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6124/6124995.png"
              className="w-30 h-30 mx-auto mb-4"
            />
            Build your X
          </div>
        </a>

        <a href="https://summerofcode.withgoogle.com/archive/2023/organizations/machine-learning-for-science-ml4sci" target="_blank">
          <div className="bg-[#1C1433] px-20 py-20 rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.15)] text-center text-lg font-medium hover:scale-105 transition-transform text-gray-200">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/1280px-GSoC-icon.svg.png?_=20190503110706"
              className="w-30 h-30 mx-auto mb-4"
            />
            GSOC Projects
          </div>
        </a>
      </div>
    </div>
  );
}
