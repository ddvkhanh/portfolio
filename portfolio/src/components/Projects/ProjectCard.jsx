import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function ProjectCard({ title, description, demo, github, thumbnail }) {
    return (
        <div key={title} className="relative p-6 rounded-md bg-white shadow-md text-gray-600">
            <img src={thumbnail} alt={title} className="w-full h-auto rounded-md" />

            <dt className="text-base font-semibold text-md sm:text-xl leading-7 text-gray-900">
                {title}
            </dt>
            <dd className="mt-2 text-base leading-7">
                {description}
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