import React from 'react'
import Socials from "@/components/Socials.jsx";

const Footer = () => {
    return (
        <footer className="w-full h-fit flex-col justify-center items-center bg-black-100 p-5">
            <div className="flex w-full justify-center items-center px-5">
                <p className="pr-5">Made with 💙 by Julien Renaud</p>
                <Socials />
            </div>
            <p className="text-sm italic flex-1 text-center pt-5">© 2025 Julien Renaud - Code source disponible sous licence MIT</p>
        </footer>
    )
}
export default Footer
