import React from 'react'
import ImageMarquee from "../../services/Marquee"

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative z-10 mt-4 md:-mt-3 px-5 pb-10 sm:px-8 md:pl-32 md:pr-10 lg:pl-40 lg:pr-16 xl:pl-44"
      aria-label="Skills"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-sm border-y border-white/10 bg-gray-950 shadow-[0_20px_50px_rgba(17,24,39,0.18)] -rotate-2">
        <ImageMarquee />
      </div>
    </section>
  )
}

export default Skills