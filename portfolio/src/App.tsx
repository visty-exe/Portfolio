import React from "react";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import me from "./assets/me.png";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
// import ParticleBackground from "./components/ParticleBackground";

const App = () => {
  return (
    <div className="flex min-h-screen bg-white overflow-x-hidden">
      <SideBar />

      <div className="flex-1 min-w-0">
        <Navbar />

        <main>
          <section
            id="home"
            className="min-h-[calc(100vh-80px)] px-5 sm:px-8 md:pl-32 md:pr-10 lg:pl-40 lg:pr-16 xl:pl-44 py-8 md:py-12 flex items-center"
          >
            {/* <ParticleBackground /> */}
            <div className="mx-auto max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12">
              {/* LEFT */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <p className="text-gray-500 text-base sm:text-lg">Hello, I&apos;m</p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 sm:mt-3">
                  Vishal Tyagi
                </h1>

                <h2 className="text-xl sm:text-2xl text-gray-600 mt-3 sm:mt-4">
                  Full Stack Developer
                </h2>

                <p className="text-gray-500 mt-4 sm:mt-5 max-w-lg mx-auto lg:mx-0 leading-relaxed text-sm sm:text-base">
                  I build modern, scalable, and user-focused web applications
                  with clean code and intuitive design. Passionate about turning
                  creative ideas into impactful digital experiences using the
                  MERN stack.
                </p>
              </div>

              {/* RIGHT */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <img
                  src={me}
                  alt="Vishal Tyagi"
                  className="h-64 sm:h-80 md:h-96 lg:h-[460px] xl:h-[520px] w-auto object-contain"
                />
              </div>
            </div>
          </section>
          <div>
            <Skills />
          </div>

          {/* Work */}
          <section>
            <Work />
          </section>
          {/* Experience & Education */}

          <section>
            <Experience />
          </section>

          {/* Contact us */}
          <section>
            <Contact />
          </section>
          {/* footer */}
          <section>
            <Footer/>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
