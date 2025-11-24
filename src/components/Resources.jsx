import React from "react";

export default function Resources() {
  return (
    <section className="w-full bg-[#1C1433] text-white font-poppins py-16 px-6">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center py-15">
        Resources
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="border border-white/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.15)] bg-white/5 backdrop-blur-lg">
          <div>
            <img src="/c++.png" className="p-5" />
          </div>

          <h4 className="text-xl font-semibold mb-2">Striver A2Z Sheet</h4>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            A sleek collection of modern DSA challenges — designed to sharpen
            your thinking, reveal powerful interview patterns, and build
            confidence with every question you solve. Smart, structured, and
            skill-boosting, it’s everything you need to level up your coding
            journey.
          </p>

          <a
            href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2"
            target="_blank"
          >
            <button className="px-4 py-2 rounded-xl bg-white text-[#5E3AFF] font-semibold hover:bg-white/80 transition">
              Go to site
            </button>
          </a>
        </div>

        {/* Card 2 */}
        <div className="border border-white/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.15)] bg-white/5 backdrop-blur-lg">
          <img src="/pepe3.png" className=" p-5" />

          <h4 className="text-xl font-semibold mb-2">CSES</h4>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Think you’re around 1500 on Codeforces? Start solving the CSes Sheet
            — it’s packed with challenges to sharpen your skills, cover key CP
            patterns, and push you to the next level.
          </p>

          <a href="https://cses.fi/problemset/" target="_blank">
            <button className="px-4 py-2 rounded-xl bg-white text-[#5E3AFF] font-semibold hover:bg-white/80 transition">
              Go to site
            </button>
          </a>
        </div>

        {/* Card 3 */}
        <div className="border border-white/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.15)] bg-white/5 backdrop-blur-lg">
          <img src="/github.png" className="p-5" />

          <h4 className="text-xl font-semibold mb-2">Harkirat Cohort 3</h4>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Keep this between us — you’re getting access to Harkirat’s Cohort 3
            for free, where you’ll learn everything about web development, from
            fundamentals to real-world projects, and boost your chances of
            cracking GSoC.
          </p>

          <a href="https://t.me/Haki_Un_Bot" target="_blank">
            <button className="px-4 py-2 rounded-xl bg-white text-[#5E3AFF] font-semibold hover:bg-white/80 transition">
              Go to site
            </button>
          </a>
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center mt-12 max-w-3xl mx-auto leading-relaxed">
        We continuously update our articles, tutorials, and guides so that every
        learner can find what they need to grow.
      </p>
    </section>
  );
}
