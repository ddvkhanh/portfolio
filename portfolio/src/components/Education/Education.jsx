import { education } from "../../constants/data";

export default function Education() {
    return (
        <div id="education" className="mx-auto p-10 sm:py-10 lg:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-teal-600">
                        The journey that shaped my path.
                    </h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                        My Education
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl text-gray-600">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {education.map(({ institution, start, end, degree, achievement, logo }) => (
                            <div key={institution} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <img src={logo} alt={institution} className="bg-white" />
                                    </div>
                                    {institution}
                                </dt>
                                <dd>{`${start} - ${end}`}</dd>
                                <dd className="mt-2 text-base leading-7">{degree}</dd>
                                <dd className="">{achievement.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}</dd>
                            </div>
                        ))}

                    </dl>
                </div>
                {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl text-slate-600">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {education.map(({ institution, start, end, degree, achievement }) => (
                            <div className="">
                                <h3 className="text-md sm:text-x font-semibold">{institution}</h3>
                                <p>{`${start} - ${end}`}</p>
                                <p>{degree}</p>
                                <p className="">{achievement.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}</p>
                            </div>
                        ))}
                    </dl>
                </div> */}
            </div>
        </div>
    )
}