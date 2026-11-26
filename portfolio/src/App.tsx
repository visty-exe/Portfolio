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
            className="min-h-[calc(100svh-80px)] px-4 py-6 sm:px-8 sm:py-8 md:pl-32 md:pr-10 md:py-12 lg:pl-40 lg:pr-16 xl:pl-44 flex items-center"
          >
            {/* <ParticleBackground /> */}
            <div className="mx-auto max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
              {/* LEFT */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <p className="text-gray-500 text-base sm:text-lg">Hello, I&apos;m</p>

                <h1 className="text-[clamp(2.25rem,11vw,3.75rem)] sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 sm:mt-3 leading-tight">
                  Vishal Tyagi
                </h1>

                <h2 className="text-lg sm:text-2xl text-gray-600 mt-3 sm:mt-4">
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
                  className="h-56 w-full max-w-[300px] sm:h-80 sm:max-w-none sm:w-auto md:h-96 lg:h-[460px] xl:h-[520px] object-contain"
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
