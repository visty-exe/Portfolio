
import { useEffect, useMemo, useState } from "react";
import Particles, initParticlesEngine from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,

      particles: {
        number: {
          value: 65,
          density: {
            enable: true,
          },
        },

        color: {
          value: "#9CA3AF",
        },

        opacity: {
          value: 0.4,
        },

        size: {
          value: { min: 1, max: 3 },
        },

        links: {
          enable: true,
          distance: 140,
          color: "#9CA3AF",
          opacity: 0.25,
          width: 1,
        },

        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },

        modes: {
          grab: {
            distance: 160,
            links: {
              opacity: 0.7,
            },
          },
        },
      },

      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="home-particles"
      options={options}
      className="absolute inset-0 h-full w-full"
    />
  );
};

export default ParticleBackground;
