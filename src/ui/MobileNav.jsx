import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'

function MobileNav() {
    const [openMenu, setOpenMenu] = useState(false)
    const menuVariants = {
        hidden: {
            x: '100%',
        },
        show: {
            x: 0,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.9],
            },
        },
    }

    return (
        <nav className="flex justify-end px-4 lg:hidden">
            <div
                className="z-50 flex h-12 w-12 cursor-pointer flex-col items-center justify-center"
                onClick={() => setOpenMenu((openMenu) => !openMenu)}
            >
                <div
                    className={`absolute h-0.5 w-5 bg-gray-800 transition-all duration-300 ease-in-out ${openMenu ? 'translate-y-0 rotate-45' : '-translate-y-1.5'}`}
                ></div>
                <div
                    className={`absolute h-0.5 w-5 bg-gray-800 transition-all duration-300 ease-in-out ${openMenu ? 'opacity-0' : ''}`}
                ></div>
                <div
                    className={`absolute h-0.5 w-5 bg-gray-800 transition-all duration-300 ease-in-out ${openMenu ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'}`}
                ></div>
            </div>
            <motion.div
                variants={menuVariants}
                initial="hidden"
                animate={openMenu ? 'show' : ''}
                className="fixed right-0 top-0 z-40 min-h-screen w-full max-w-xs bg-white/90 shadow-2xl backdrop-blur-sm"
            >
                <ul className="mt-24 flex h-full w-full flex-col items-center justify-start gap-y-8 text-xl">
                    <li>
                        <HashLink
                            to="#home"
                            smooth
                            onClick={() => setOpenMenu(false)}
                            className="text-gray-800 transition-colors hover:text-gray-600"
                        >
                            Home
                        </HashLink>
                    </li>
                    <li>
                        <HashLink
                            to="#about"
                            smooth
                            onClick={() => setOpenMenu(false)}
                            className="text-gray-800 transition-colors hover:text-gray-600"
                        >
                            About
                        </HashLink>
                    </li>
                    <li>
                        <HashLink
                            to="#Side Project"
                            smooth
                            onClick={() => setOpenMenu(false)}
                            className="text-gray-800 transition-colors hover:text-gray-600"
                        >
                            Side Project
                        </HashLink>
                    </li>
                    <li>
                        <HashLink
                            to="#contact"
                            smooth
                            onClick={() => setOpenMenu(false)}
                            className="text-gray-800 transition-colors hover:text-gray-600"
                        >
                            Contact
                        </HashLink>
                    </li>
                </ul>
            </motion.div>
        </nav>
    )
}

export default MobileNav
