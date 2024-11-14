import { ArrowTopRightOnSquareIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

export default function ProjectCard({ title, description, demo, github, thumbnail, tech }) {
    return (
        <div key={title} className="relative p-6 rounded-md bg-white shadow-md text-gray-600">
            <img src={thumbnail} alt={title} className="w-full h-auto rounded-md" />

            <dt className="text-base font-semibold leading-7 text-gray-900 pt-2">
                {title}
            </dt>
            <dd className="mt-2 text-base leading-7">
                {description}
            </dd>

            <dd className="mt-2 text-base leading-7 flex items-center ">
                <p className="pr-4">Technologies:</p>
                <div className="flex flex-wrap gap-2 m-0 text-xs">
                    {tech.map((item, index) => (
                        <span key={index} className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teals-600/20">{item}</span>
                    ))}
                </div>
            </dd>
            <div className="flex text-5xl mt-3 gap-10 items-center justify-center">
                <a href={github} target="blank" rel="noopener noreferrer">
                    <i className="devicon-github-original devicon"></i>
                </a>
                <a href={demo} target="blank" rel="noopener noreferrer">{demo && <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-11 w-11 icons" />}</a>
            </div>
        </div>
    )
}