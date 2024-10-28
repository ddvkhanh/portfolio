export default function ProjectCard({ title, description, demo, github, thumbnail }) {
    console.log(github);

    console.log(thumbnail);
    return (
        <div key={title} className="relative p-6 rounded-md bg-white shadow-md text-gray-600">
            <img src={thumbnail} alt={title} className="w-full h-auto rounded-md" />

            <dt className="text-base font-semibold text-md sm:text-xl leading-7 text-gray-900">
                {title}
            </dt>
            <dd className="mt-2 text-base leading-7">
                {description}
            </dd>
            <div className="text-5xl mt-3">
                <a href={github} target="blank" rel="noopener noreferrer">
                    <i className="devicon-github-original devicon"></i>
                </a>
            </div>
        </div>
    )
}