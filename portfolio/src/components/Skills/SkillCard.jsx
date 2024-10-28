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
        <div className="pt-5 flex" key={title}>
            <p className="text-md sm:text-xl font-semibold w-1/6">{title}</p>
            <div className="gap-8 flex px-10 overflow-x-auto overflow-y-hidden w-5/6">
                {
                    skill.map(({ name, icon }) => (
                        <div key={name} className="" aria-label={name}>
                            <ReactCardFlip key={name} isFlipped={isFlipped} flipDirection="horizontal">
                                <div key={`${name}-front`} className="flip-card-front text-5xl flex items-center justify-center gap-7"
                                    style={{ width: '50px', height: '50px', lineHeight: '1' }}>
                                    <i className={icon}></i>
                                </div>
                                <div key={`${name}-back`} className="flip-card-back flex items-center justify-center leading-loose gap-7"
                                    style={{ width: '50px', height: '50px', lineHeight: '1.2' }}>
                                    <p>{name}</p>
                                </div>
                            </ReactCardFlip>
                        </div>
                    ))
                }
            </div>
        </div>)
}