
const Experience = () => {
  const experiences = [
    {
      date: "2024 - Present",
      title: "B.Tech Computer Science",
      company: "RKGIT | AKTU",
      description:
        "Pursuing Computer Science with an interest in Full Stack Development and Software Engineering.",
      desktopClass: "left-[55%] top-[10%]",
    },
    {
      date: "Training",
      title: "Web Development Training",
      company: "Netcamp Solutions",
      description:
        "Learned web development fundamentals and practical implementation of web technologies.",
      desktopClass: "right-[55%] top-[35%]",
    },
    {
      date: "Internship",
      title: "Software Testing Intern",
      company: "R Cube Green Technologies",
      description:
        "Gained practical experience in software testing and quality assurance.",
      desktopClass: "left-[55%] top-[60%]",
    },
  ];

  return (
    <section
      className="py-12 px-4 sm:py-20 sm:px-8 md:pl-32 md:pr-10 lg:pl-40 lg:pr-16 xl:pl-44 bg-gray-50"
      id="edu"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gray-500">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-gray-900">
            Experience &amp; Education<span className="text-gray-400">.</span>
          </h2>
        </div>

        {/* Mobile Vertical Timeline (< md) */}
        <div className="md:hidden relative pl-6 border-l-2 border-blue-600 space-y-6 max-w-xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="relative bg-white p-5 rounded-xl shadow-md border border-gray-100"
            >
              <span
                className="absolute -left-[31px] top-6 w-3.5 h-3.5 rounded-full bg-blue-600 ring-4 ring-gray-50"
                aria-hidden="true"
              />
              <span className="text-sm text-blue-600 font-semibold">
                {exp.date}
              </span>
              <h3 className="font-bold text-lg mt-2 text-gray-900">
                {exp.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{exp.company}</p>
              <p className="text-gray-600 text-sm mt-3">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Desktop Curved Timeline (md+) */}
        <div className="hidden md:block relative max-w-3xl mx-auto">
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
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className={`absolute ${exp.desktopClass} w-[42%] bg-white p-5 rounded-xl shadow-md border border-gray-100`}
              >
                <span className="text-sm text-blue-600 font-semibold">
                  {exp.date}
                </span>
                <h3 className="font-bold text-lg mt-2 text-gray-900">
                  {exp.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{exp.company}</p>
                <p className="text-gray-600 text-sm mt-3">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
