import React from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import { HashLink } from 'react-router-hash-link'
import { motion } from 'framer-motion'

function Header() {
    const navItems = [
        { title: 'Home', link: '#home' },
        { title: 'About', link: '#about' },
        { title: 'Side Project', link: '#Side Project' },
        { title: 'Contact', link: '#contact' },
    ]

    return (
        <header className="fixed z-40 w-full backdrop-blur-sm">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-gray-800"
                >
                    James Li
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden space-x-12 lg:flex">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <HashLink
                                to={item.link}
                                smooth
                                className="relative text-xl text-gray-700 transition-colors duration-300 hover:text-gray-900"
                            >
                                {item.title}
                                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                            </HashLink>
                        </motion.div>
                    ))}
                </nav>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header
