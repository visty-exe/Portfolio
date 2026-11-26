import React from "react";
import { ArrowUpRight } from "lucide-react";

import chat from "../works/chat.png";
import blog from "../works/blog.png";
import preply from "../works/preply.png";
import weather from "../works/weather.png";

const Work = () => {
  const works = [
    {
      id: 1,
      name: "Preply AI",
      desc: "AI Interview and Resume Analyzer",
      image: preply,
      link: "https://preplyapp.vercel.app",
    },
    {
      id: 2,
      name: "ChatNow",
      desc: "Chat with your friends and family in real time with encryption enabled",
      image: chat,
      link: "https://chatnow-0stp.onrender.com/",
    },
    {
      id: 3,
      name: "Blog",
      desc: "Post and Manage your blogs",
      image: blog,
      link: "https://mern-blog-platform-hisp-cyan.vercel.app/login",
    },
    {
      id: 4,
      name: "Weather",
      desc: "Real Time Weather Application",
      image: weather,
      link: "https://visty-weather.vercel.app/",
    },
  ];

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full py-20 pl-28 pr-6 sm:py-24 sm:pl-36 sm:pr-10 lg:pl-40 lg:pr-16 xl:pl-44"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5 sm:mb-14">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gray-500">
              Selected projects
            </p>
            <h2
              id="work-heading"
              className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl"
            >
              Work<span className="text-gray-400">.</span>
            </h2>
          </div>
          <p className="pb-1 text-sm font-medium text-gray-500">
            {String(works.length).padStart(2, "0")} projects
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {works.map((work) => (
            <a
              key={work.id}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${work.name} project (opens in a new tab)`}
              className="group rounded-2xl border border-gray-200 bg-white p-2.5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={work.image}
                  alt={`${work.name} project preview`}
                  loading="lazy"
                  className="aspect-video  w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  Project {String(work.id).padStart(2, "0")}
                </span>
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-950 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-gray-950 group-hover:text-white">
                  <ArrowUpRight size={19} aria-hidden="true" />
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 px-3 pb-3 pt-4 sm:px-4 sm:pb-4">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
                    {work.name}
                  </h2>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-gray-600">
                    {work.desc}
                  </p>
                </div>
                <span className="mt-1 shrink-0 text-xs font-semibold uppercase tracking-wider text-gray-400 transition-colors group-hover:text-gray-900">
                  Visit
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
