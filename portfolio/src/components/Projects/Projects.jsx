import React from 'react';
import { projects } from '../../constants/data';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <div id="projects" className="mx-auto p-10 sm:py-10 lg:py-20 bg-gradient-to bg-slate-100 rounded-md shadow-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-600">
            A peek at what I've been working on.
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            My Projects
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {projects.map(({ title, description, demo, github, thumbnail, tech }) => (
              <ProjectCard key={title} title={title} description={description} demo={demo} github={github} thumbnail={thumbnail} tech={tech} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
