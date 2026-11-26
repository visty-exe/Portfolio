

const skills = [
  "HTML5",
  "CSS3",
  "JAVASCRIPT",
  "REACT",
  "NODE JS",
  "MONGO DB",
  "TYPESCRIPT",
  "JAVA",
  "TAILWIND CSS",
];

const ImageMarquee = () => {
  return (
    <div
      className="group w-full overflow-hidden py-5"
      aria-label="Skills"
      role="region"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center"
            aria-hidden={group === 1}
          >
            {skills.map((skill) => (
              <div
                key={`${group}-${skill}`}
                className="flex items-center"
              >
                <span className="whitespace-nowrap text-[1.65rem] font-black uppercase tracking-[-0.04em] text-gray-200 transition-colors duration-300 sm:text-4xl md:text-[3.25rem] hover:text-red-600">
                  {skill}
                </span>
                <span
                  className="mx-5 h-2 w-2 shrink-0 rotate-45 rounded-[2px] bg-red-500 sm:mx-7 sm:h-2.5 sm:w-2.5 md:mx-9"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
