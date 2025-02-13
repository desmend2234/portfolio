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
                className="z-50 flex cursor-pointer flex-col items-center gap-[4.5px]"
                onClick={() => setOpenMenu((openMenu) => !openMenu)}
            >
                <div
                    className={`h-[2px] w-6 bg-gray-800 ${
                        openMenu ? 'rotate-45' : ''
                    } origin-left transition-all duration-300 ease-in-out`}
                ></div>
                <div
                    className={`h-[2px] w-6 bg-gray-800 ${
                        openMenu ? 'opacity-0' : ''
                    } transition-all duration-300 ease-in-out`}
                ></div>
                <div
                    className={`h-[2px] w-6 bg-gray-800 ${
                        openMenu ? '-rotate-45' : ''
                    } origin-left transition-all duration-300 ease-in-out`}
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
