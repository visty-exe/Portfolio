import React from "react";

const Experience = () => {
  const experiences = [
    {
      date: "2024 - Present",
      title: "B.Tech Computer Science",
      company: "RKGIT | AKTU",
      description:
        "Pursuing Computer Science with an interest in Full Stack Development and Software Engineering.",
      position: "right",
      top: "10%",
    },
    {
      date: "Internship",
      title: "Software Testing Intern",
      company: "R Cube Green Technologies",
      description:
        "Gained practical experience in software testing and quality assurance.",
      position: "left",
      top: "35%",
    },
    {
      date: "Training",
      title: "Web Development Training",
      company: "Netcamp Solutions",
      description:
        "Learned web development fundamentals and practical implementation of web technologies.",
      position: "right",
      top: "60%",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50" id="edu">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gray-500">
            My Journey
          </p>
          <h2 className="text-4xl font-bold mt-3 text-gray-900">
            Experience & Education<span className="text-gray-400">.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* SVG Curved Line */}
          <svg
            viewBox="0 0 400 800"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="
                M 200 0
                C 200 100, 350 100, 350 200
                C 350 300, 50 300, 50 400
                C 50 500, 350 500, 350 600
                C 350 700, 200 700, 200 800
              "
              stroke="#2563EB"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Timeline Dots */}
            <circle cx="200" cy="0" r="7" fill="#2563EB" />
            <circle cx="350" cy="200" r="7" fill="#2563EB" />
            <circle cx="50" cy="400" r="7" fill="#2563EB" />
            <circle cx="350" cy="600" r="7" fill="#2563EB" />
            <circle cx="200" cy="800" r="7" fill="#2563EB" />
          </svg>

          {/* Experience Cards */}
          <div className="relative min-h-[800px]">
            {/* BTech */}
            <div className="absolute left-[55%] top-[10%] w-[42%] bg-white p-5 rounded-xl shadow-md border border-gray-100">
              <span className="text-sm text-blue-600 font-semibold">
                2024 - Present
              </span>
              <h3 className="font-bold text-lg mt-2 text-gray-900">
                B.Tech Computer Science
              </h3>
              <p className="text-gray-500 text-sm mt-1">RKGIT | AKTU</p>
              <p className="text-gray-600 text-sm mt-3">
                Pursuing Computer Science with an interest in Full Stack
                Development and Software Engineering.
              </p>
            </div>

            {/* Netcamp */}

            <div className="absolute right-[55%] top-[35%] w-[42%] bg-white p-5 rounded-xl shadow-md border border-gray-100">
              <span className="text-sm text-blue-600 font-semibold">
                Training
              </span>
              <h3 className="font-bold text-lg mt-2 text-gray-900">
                Web Development Training
              </h3>
              <p className="text-gray-500 text-sm mt-1">Netcamp Solutions</p>
              <p className="text-gray-600 text-sm mt-3">
                Learned web development fundamentals and practical
                implementation of web technologies.
              </p>
            </div>

            {/* R Cube */}
            <div className="absolute left-[55%] top-[60%] w-[42%] bg-white p-5 rounded-xl shadow-md border border-gray-100">
              <span className="text-sm text-blue-600 font-semibold">
                Internship
              </span>
              <h3 className="font-bold text-lg mt-2 text-gray-900">
                Software Testing Intern
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                R Cube Green Technologies
              </p>
              <p className="text-gray-600 text-sm mt-3">
                Gained practical experience in software testing and quality
                assurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
