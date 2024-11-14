import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences, skills } from '../../constants/data';

export default function ExperienceItem() {
    return (
        <div className="mx-auto text-md sm:text-xl">
            {experiences.map(({ id, start, end, title, company, description, logo, skills, achievement }) => (
                <VerticalTimeline key={title} lineColor="rgba(0, 139, 139)" layout="1-column-left">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(241, 245, 249)', color: 'rgb(107, 114, 128)', textAlign: 'left' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(241, 245, 249)' }}
                        date={`${start} - ${end}`}
                        iconStyle={{ background: 'rgb(241, 245, 249)', color: '#fff' }}
                        icon={(
                            <div className="flex items-center justify-center h-10 w-10">
                                <img src={logo} alt={`${title} icon`} className="rounded-full " />
                            </div>
                        )}
                    >
                        <div>
                            <h3 className="vertical-timeline-element-title font-semibold">{title}</h3>
                            <h4 className="vertical-timeline-element-subtitle italic">{company}</h4>
                            <p className="">{description.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}</p>
                            <div className="flex m-1 flex-wrap items-center gap-x-2 ">
                                <h4 className="items-center">Technologies:</h4>
                                {skills.map((item, index) => (
                                    <span key={index} className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teals-600/20">{item}</span>
                                ))}
                            </div>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            ))}
        </div>

    )

}