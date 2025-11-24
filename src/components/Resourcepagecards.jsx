import React from "react";

export default function Resourcespagecards() {
  return (
    <div className="w-full min-h-screen bg-[#1b1534] flex flex-col items-center py-16 text-white">
      <h1 className="text-3xl py-5 font-bold mb-6">Resources</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <a href="https://www.learncpp.com/" target="_blank">
          <div className="bg-[#1C1433] px-20 py-20 rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.15)] text-center text-lg font-medium hover:scale-105 transition-transform text-gray-200">
            <img
              src="https://www.vikingsoftware.com/wp-content/uploads/2024/02/C-2.png"
              className="w-30 h-30 mx-auto mb-4"
            />
            C++ Programming
          </div>
        </a>

        {/* Card 2 */}
        <a href="https://git-scm.com/book/en/v2" target="_blank">
          <div className="bg-[#1C1433] px-20 py-20 rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.15)] text-center text-lg font-medium hover:scale-105 transition-transform text-gray-200">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png"
              className="w-30 h-30 mx-auto mb-4"
            />
            Git & Github
          </div>
        </a>

        {/* Card 3 */}
        <a href="https://docs.python.org/3/tutorial/" target="_blank">
          <div className="bg-[#1C1433] px-20 py-20 rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.15)] text-center text-lg font-medium hover:scale-105 transition-transform text-gray-200">
            <img
              src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
              className="w-30 h-30 mx-auto mb-4"
            />
            Pthon Docs
          </div>
        </a>
        <a href="https://cp-algorithms.com/" target="_blank">
          <div className="bg-[#1C1433] px-20 py-20 rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.15)] text-center text-lg font-medium hover:scale-105 transition-transform text-gray-200">
            <img
              src="https://cp-algorithms.com/favicon.ico"
              className="w-30 h-30 mx-auto mb-4"
            />
            Algorithm for CP
          </div>
        </a>

        <a href="https://labex.io/linuxjourney" target="_blank">
          <div className="bg-[#1C1433] px-20 py-20 rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.15)] text-center text-lg font-medium hover:scale-105 transition-transform text-gray-200">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6124/6124995.png"
              className="w-30 h-30 mx-auto mb-4"
            />
            Linux & Shell
          </div>
        </a>

        <a href="https://neetcode.io/practice/practice/allNC" target="_blank">
          <div className="bg-[#1C1433] px-20 py-20 rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.15)] text-center text-lg font-medium hover:scale-105 transition-transform text-gray-200">
            <img
              src="https://neetcode.io/assets/neetcode-io-logo.png"
              className="w-30 h-30 mx-auto mb-4"
            />
            NeetCode
          </div>
        </a>
      </div>
    </div>
  );
}
