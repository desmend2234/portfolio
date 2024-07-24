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
                className="z-30 flex cursor-pointer flex-col items-center gap-[4.5px]"
                onClick={() => setOpenMenu((openMenu) => !openMenu)}
            >
                <div
                    className={`h-1 w-6 rounded-sm bg-gray-100 ${openMenu ? 'rotate-45' : ''} origin-left duration-500 ease-in-out`}
                ></div>
                <div
                    className={`h-1 w-6 rounded-sm bg-gray-100 ${openMenu ? 'opacity-0' : ''} duration-500 ease-in-out`}
                ></div>
                <div
                    className={`h-1 w-6 rounded-sm bg-gray-100 ${openMenu ? '-rotate-45' : ''} origin-left duration-500 ease-in-out`}
                ></div>
            </div>
            <motion.div
                variants={menuVariants}
                initial="hidden"
                animate={openMenu ? 'show' : ''}
                className="absolute right-0 top-0 z-20 min-h-[40dvh] w-full max-w-xs bg-gray-800 text-xl text-white shadow-2xl"
            >
                <ul className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-y-8 md:gap-[4dvw]">
                    <li>
                        <HashLink to="#home" smooth>
                            Home
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to="#about" smooth>
                            About
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to="#Side Project" smooth>
                            Side Project
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to="#contact" smooth>
                            Contact
                        </HashLink>
                    </li>
                </ul>
            </motion.div>{' '}
        </nav>
    )
}

export default MobileNav
