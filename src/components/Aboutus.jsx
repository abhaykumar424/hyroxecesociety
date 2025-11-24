import React from "react";

function Aboutus() {
  return (
    <section className="w-full  bg-[#1C1433] text-white font-poppins md:pt-30 py -5 px-16 md:px-30">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold md:mb-12 text-center pb-10">
        About Us
      </h2>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left Icon / Image */}
        <div className="flex justify-center md:justify-start w-full md:w-1/3">
          <img
            src="/hyroxlogo.png" // Replace with your white outline icon asset
            alt="Hyrox Icon"
            className="w-56 md:w-100 opacity-90"
          />
        </div>

        {/* Right Text Card */}
        <div className="w-full md:w-2/3 border border-white/40 rounded-2xl p-6 md:p-8 shadow-[0_0_25px_rgba(255,255,255,0.15)]">
          <p className="text-sm md:text-base leading-relaxed text-gray-200">
            Hyrox is a student-driven coding community dedicated to helping
            learners grow through mentorship, projects, and collaboration. We
            create a space where anyone—from beginners to advanced coders—can
            learn, build, and explore the world of tech together.
          </p>

          <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-200">
            Through workshops, challenges, team projects, and continuous
            guidance, we support every member in building confidence and
            developing practical skills that matter.
          </p>

          <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-200">
            Hyrox is not just a community—it’s the starting point for your
            journey into the world of coding and creation.
            <br />
            <br />
            Abhay Kumar
            <br />
            CP & Algorithm Lead
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
