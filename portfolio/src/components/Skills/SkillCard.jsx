import ReactCardFlip from 'react-card-flip';
import React, { useState, useEffect } from 'react';


export default function SkillCard({ title, skill }) {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() =>
            setIsFlipped((prev) => !prev), 3000);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="pt-5 flex flex-wrap divide-y-4 divide-dashed" key={title}>
            <p className="text-md sm:text-xl font-semibold w-full sm:w-1/6 flex items-center">{title}</p>
            <div className="gap-8 flex flex-wrap w-full sm:w-5/6 justify-center">
                {skill.map(({ name, icon }) => (
                    <div key={name} className="flex justify-center items-center w-1/4 sm:w-1/6">
                        <ReactCardFlip key={name} isFlipped={isFlipped} flipDirection="horizontal">
                            <div key={`${name}-front`} className="flip-card-front md:text-5xl text-3xl flex items-center justify-center gap-7 w-full h-16"
                                style={{ lineHeight: '1' }}>
                                <i className={icon}></i>
                            </div>
                            <div key={`${name}-back`} className="flip-card-back flex items-center md:text-md text-sm justify-center leading-loose gap-7 w-full h-16"
                                style={{ lineHeight: '1.2' }}>
                                <p>{name}</p>
                            </div>
                        </ReactCardFlip>
                    </div>
                ))}
            </div>
        </div>
    )
}