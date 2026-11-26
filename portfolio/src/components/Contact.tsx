import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin, IoMail } from "react-icons/io5";

const emailAddress = "vishal.tyagi14oct@gmail.com";

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = String(formData.get("subject") ?? "");
    const message = String(formData.get("message") ?? "");
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputStyle =
    "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full px-4 py-12 sm:px-8 sm:py-20 md:pl-32 md:pr-10 lg:pl-40 lg:pr-16 xl:pl-44"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-10 lg:gap-16">
        <div className="pt-2">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gray-500">
            Get in touch
          </p>
          <h2
            id="contact-heading"
            className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl"
          >
            Let&apos;s work
            <br />
            together<span className="text-gray-400">.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-gray-600">
            Have a project in mind, want to collaborate, or just want to say
            hello? I&apos;d love to hear from you.
          </p>

          <div className="mt-9 space-y-3">
            <a
              href={`mailto:${emailAddress}`}
              className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-gray-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              <span className="flex min-w-0 items-center gap-4">
                <IoMail className="shrink-0 text-gray-700" size={22} aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm font-medium text-gray-950">
                    {emailAddress}
                  </span>
                </span>
              </span>
              <ArrowUpRight
                className="ml-3 shrink-0 text-gray-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-900"
                size={20}
                aria-hidden="true"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/visty/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-gray-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              <span className="flex items-center gap-4">
                <IoLogoLinkedin className="text-gray-700" size={22} aria-hidden="true" />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                    LinkedIn
                  </span>
                  <span className="mt-1 block text-sm font-medium text-gray-950">
                    Connect with me
                  </span>
                </span>
              </span>
              <ArrowUpRight
                className="text-gray-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-900"
                size={20}
                aria-hidden="true"
              />
            </a>

            <a
              href="https://github.com/visty-exe"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-gray-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              <span className="flex items-center gap-4">
                <FaGithubSquare className="text-gray-700" size={22} aria-hidden="true" />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                    GitHub
                  </span>
                  <span className="mt-1 block text-sm font-medium text-gray-950">
                    Explore my projects
                  </span>
                </span>
              </span>
              <ArrowUpRight
                className="text-gray-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-900"
                size={20}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 sm:p-8 lg:p-10">
          <h3 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
            Send a message
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Fill out the form and your email app will open with your message
            ready to send.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-xs font-semibold uppercase tracking-wider text-gray-600"
                >
                  Your name
                </label>
                <input
                  className={inputStyle}
                  type="text"
                  name="name"
                  id="contact-name"
                  autoComplete="name"
                  placeholder="Vishal Tyagi"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="text-xs font-semibold uppercase tracking-wider text-gray-600"
                >
                  Email address
                </label>
                <input
                  className={inputStyle}
                  type="email"
                  name="email"
                  id="contact-email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="text-xs font-semibold uppercase tracking-wider text-gray-600"
              >
                Subject
              </label>
              <input
                className={inputStyle}
                type="text"
                name="subject"
                id="contact-subject"
                placeholder="Project inquiry"
                required
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="text-xs font-semibold uppercase tracking-wider text-gray-600"
              >
                Message
              </label>
              <textarea
                className={`${inputStyle} min-h-36 resize-y`}
                name="message"
                id="contact-message"
                rows={5}
                placeholder="Tell me about your project or idea..."
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
            >
              Prepare email
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
