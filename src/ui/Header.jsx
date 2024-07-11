import React from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import { HashLink } from 'react-router-hash-link'
function Header() {
    return (
        <header className="fixed z-40 flex h-20 w-full items-center bg-sky-200 px-4 text-xl shadow-sm">
            <div className="flex w-full flex-col justify-between lg:flex-row lg:items-center">
                <Link></Link>
                <nav className="hidden gap-x-14 lg:flex">
                    <HashLink
                        to="#home"
                        smooth
                        className="text-[#696c6d] transition hover:text-stone-800"
                    >
                        Home
                    </HashLink>{' '}
                    <HashLink
                        to="#about"
                        smooth
                        className="text-[#696c6d] transition hover:text-stone-800"
                    >
                        About
                    </HashLink>
                    <HashLink
                        to="#Side Project"
                        smooth
                        className="text-[#696c6d] transition hover:text-stone-800"
                    >
                        Side Project
                    </HashLink>
                    <HashLink
                        to="#contact"
                        smooth
                        className="text-[#696c6d] transition hover:text-stone-800"
                    >
                        Contact
                    </HashLink>
                </nav>
                <MobileNav />
            </div>
        </header>
    )
}

export default Header
