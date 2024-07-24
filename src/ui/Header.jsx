import React from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import { HashLink } from 'react-router-hash-link'
function Header() {
    return (
        <header className="fixed z-40 flex h-20 w-full items-center bg-gray-800 px-4 text-xl text-white shadow-sm">
            <nav className="mx-auto hidden max-w-6xl justify-between gap-[8rem] lg:flex">
                <HashLink
                    to="#home"
                    smooth
                    className="transition hover:text-stone-300"
                >
                    Home
                </HashLink>{' '}
                <HashLink
                    to="#about"
                    smooth
                    className="transition hover:text-stone-300"
                >
                    About
                </HashLink>
                <HashLink
                    to="#Side Project"
                    smooth
                    className="transition hover:text-stone-300"
                >
                    Side Project
                </HashLink>
                <HashLink
                    to="#contact"
                    smooth
                    className="transition hover:text-stone-300"
                >
                    Contact
                </HashLink>
            </nav>
            <MobileNav />
        </header>
    )
}

export default Header
