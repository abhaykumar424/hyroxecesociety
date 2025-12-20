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

        <div className="border border-white/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.15)] bg-white/5 backdrop-blur-lg">
          <img
            src="https://i.ytimg.com/vi/kTOx1GnlUco/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeJbROgUKRcgtoonxdWTzbMt7EKg"
            className="p-5"
          />

          <h4 className="text-xl font-semibold mb-2">
            Chirag Jain C++ IIT (ISM) Level - 1
          </h4>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            This playlist covers the entire C++ language from basics to
            advanced, all in one structured flow. No need to roam here and
            there—follow the theory step by step and keep practicing problems
            regularly on Codeforces to build strong problem-solving skills. Stay
            consistent, practice daily, and you’ll gain complete confidence in
            C++.
          </p>

          <a
            href="https://www.youtube.com/playlist?list=PL40a3hTWsqXAw6cnRALe06QzPfeqnOBo6"
            target="_blank"
          >
            <button className="px-4 py-2 rounded-xl bg-white text-[#5E3AFF] font-semibold hover:bg-white/80 transition">
              Go to site
            </button>
          </a>
        </div>

        <div className="border border-white/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.15)] bg-white/5 backdrop-blur-lg">
          <img
            src="https://i.ytimg.com/vi/WPEnHfRU6n8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBJzmHBov6mNteDu-6dNiNWBUmfNQ"
            className="p-5"
          />

          <h4 className="text-xl font-semibold mb-2">
            Chirag Jain C++ IIT (ISM) Level - 2
          </h4>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Level 1 Complete? Time to Go Deeper If you’ve completed Level 1,
            it’s time to conquer deeper concepts. Strengthen your foundations,
            explore advanced topics, and keep solving problems consistently to
            level up your skills.
          </p>

          <a
            href="https://www.youtube.com/playlist?list=PL40a3hTWsqXBFAKwLv-02tsKOLCud6hvf"
            target="_blank"
          >
            <button className="px-4 py-2 rounded-xl bg-white text-[#5E3AFF] font-semibold hover:bg-white/80 transition">
              Go to site
            </button>
          </a>
        </div>

        <div className="border border-white/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.15)] bg-white/5 backdrop-blur-lg">
          <img
            src="https://i.ytimg.com/vi/IPl_1V1mX-0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCHTTnqn1tDJk4UB5L9lBJuDza38g"
            className="p-5"
          />

          <h4 className="text-xl font-semibold mb-2">
            Codeforces Contest Solutions
          </h4>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            The Eliminators playlist is designed to help you analyze problems
            after a contest ends. It allows you to cross-check your solutions,
            understand correct approaches, and clear doubts if you were stuck
            during the contest. By reviewing these explanations, you can
            identify mistakes, learn efficient strategies, and steadily improve
            your performance in future contests.
          </p>

          <a
            href="https://www.youtube.com/playlist?list=PLcXpkI9A-RZLUfBSNp-YQBCOezZKbDSgB"
            target="_blank"
          >
            <button className="px-4 py-2 rounded-xl bg-white text-[#5E3AFF] font-semibold hover:bg-white/80 transition">
              Go to site
            </button>
          </a>
        </div>

        <div className="border border-white/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.15)] bg-white/5 backdrop-blur-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dZVFHKYlLA9D0JeV0MbGR9mvjb8I9X1L8g&s"
            className="p-5"
          />

          <h4 className="text-xl font-semibold mb-2">Striver CP Sheet</h4>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            The Striver CP Cheat Sheet is designed to help you revise and apply
            key competitive programming concepts efficiently. It allows you to
            quickly recall important formulas, patterns, and approaches while
            solving problems.
          </p>

          <a
            href="https://takeuforward.org/competitive-programming/strivers-cp-sheet"
            target="_blank"
          >
            <button className="px-4 py-2 rounded-xl bg-white text-[#5E3AFF] font-semibold hover:bg-white/80 transition">
              Go to site
            </button>
          </a>
        </div>

        <div className="border border-white/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.15)] bg-white/5 backdrop-blur-lg">
          <img
            src="https://i.ytimg.com/vi/nqowUJzG-iM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDd9n5Wzq3xPnENo_vVrXKEpi2p5A"
            className="p-5"
          />

          <h4 className="text-xl font-semibold mb-2">
            Pen & Paper Round Preparation
          </h4>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Aditya Verma’s content helps you build strong logic and
            problem-solving skills, preparing you confidently for pen-and-paper
            rounds. His step-by-step explanations improve clarity of thought and
            answer presentation. Perfect for interviews, written tests, and core
            concept strengthening.
          </p>

          <a href="https://www.youtube.com/@TheAdityaVerma" target="_blank">
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
