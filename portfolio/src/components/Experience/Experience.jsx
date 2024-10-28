import React from 'react';
import ExperienceItem from './ExperienceItem';

export default function Experience() {
  return (
    <div id="experience" className="bg-white p-10 sm:py-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-600">
            Sharing what I've learned from real-world projects.
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            My Experience
          </p>
          <ExperienceItem />
        </div>
      </div>
    </div>
  );
}

