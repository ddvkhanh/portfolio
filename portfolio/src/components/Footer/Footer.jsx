import Contacts from "./Contacts";

export default function Footer() {
    return (
        <div id="contact" className="mx-auto p-10 sm:py-10 lg:py-20 text-gray-600">
            <p className="flex items-center justify-center">Let’s chat! I would love to hear from you.</p>
            <Contacts />
            <p className="flex items-center justify-center">© 2024 Kathy Dang. Hosted on Vercel. Built with React and TailwindCSS</p>
        </div>
    )
}