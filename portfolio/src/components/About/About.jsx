import React from 'react';

export default function About() {
  return (
    <div id="about" className="bg-slate-100	mx-auto p-10 sm:py-10 lg:py-20 rounded-md shadow-md">
      <div className="gap-10 flex flex-col md:flex-row items-center justify-center">
        <div className="w-3/5 text-pretty text-base font-medium text-gray-500 sm:text-xl">
          <p className="text-md font-semibold tracking-tight sm:text-xl">
            Hi there, I am
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-teal-600 sm:text-4xl typing-animation">
            Kathy Dang
          </h1>
          <p className="mt-5">
            I am a{" "}
            <span className="font-semibold">
              Full-Stack Software Engineer
            </span>{" "}
            with a passion for crafting digital solutions that bridge the gap
            between technical wizardry and business savvy.
          </p>
          <p className="mt-8">
            With a background in business and data analysis, I love aligning
            my work with organizational needs to deliver results that truly
            make an impact. I pride myself on being a team player—always ready
            to collaborate, share ideas, and have a good laugh along the way.
          </p>
          <div className="mt-10 items-center">
            <a
              href="#"
              className="animated-border rounded-md bg-teal-600 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get My CV
            </a>
          </div>
        </div>

        <div className="md:w-2/5 overflow-hidden flex justify-center items-center">
          <img
            src="/images/Khanh.jpg"
            alt="Portrait"
            className="rounded-full object-cover w-[80%] h-[80%] border-5 border-white bg-teal-500 shadow-md shadow-teal-500/50"
          />
        </div>
      </div>

    </div>
  );
}
