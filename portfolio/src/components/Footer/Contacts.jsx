import { contacts } from '../../constants/data';

export default function Contacts() {
    return (
        <div className="text-5xl flex gap-5 items-center justify-center m-5">
            {contacts.map(({ contact, url, icon }) => (
                <div key={contact} className="flex items-center">
                    <a href={url} target="blank" rel="noopener noreferrer">
                        <i className={`${icon} devicon`}></i>
                    </a>
                </div>
            ))}
        </div>
    )
}