import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Contact() {
    // 連結hover效果
    const linkVariants = {
        hover: {
            scale: 1.05,
            x: 10,
            transition: {
                duration: 0.2,
            },
        },
    }

    return (
        <section id="contact">
            <div className="flex h-full flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-base">Right now</h3>
                    <h1 className="mb-12 text-[3rem] font-semibold">Contact</h1>
                </motion.div>

                <div className="mx-4 w-[20rem] gap-4 lg:w-[36rem]">
                    <motion.div
                        className="grid grid-cols-1 gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex h-[24rem] flex-col items-center justify-center gap-8 rounded-[2rem] border-[0.1rem] border-gray-500 text-center transition-colors duration-300 hover:border-blue-500">
                            <ul className="grid gap-6 text-left text-2xl tracking-wide">
                                <motion.li
                                    variants={linkVariants}
                                    whileHover="hover"
                                >
                                    <Link
                                        to="https://github.com/desmend2234"
                                        className="flex items-center gap-4 transition duration-300 hover:text-blue-500"
                                    >
                                        <img
                                            src="/github-mark.png"
                                            className="h-8 transition-transform duration-300 hover:rotate-12"
                                        />
                                        <p>Github</p>
                                    </Link>
                                </motion.li>

                                <motion.li
                                    variants={linkVariants}
                                    whileHover="hover"
                                >
                                    <Link
                                        to="https://github.com/desmend2234"
                                        className="flex items-center gap-4 transition duration-300 hover:text-blue-500"
                                    >
                                        <img
                                            src="/linkedin.png"
                                            className="h-8 transition-transform duration-300 hover:rotate-12"
                                        />
                                        <p>Linkedin</p>
                                    </Link>
                                </motion.li>

                                <motion.li
                                    variants={linkVariants}
                                    whileHover="hover"
                                >
                                    <Link
                                        to="https://github.com/desmend2234"
                                        className="flex items-center gap-4 transition duration-300 hover:text-blue-500"
                                    >
                                        <img
                                            src="/email.png"
                                            className="h-8 transition-transform duration-300 hover:rotate-12"
                                        />
                                        <p>Email</p>
                                    </Link>
                                </motion.li>
                            </ul>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    to="https://www.cakeresume.com/s--QW_Rta4jvL8LGLssoH14eA--/desmend2234"
                                    className="duration-300 hover:opacity-80"
                                >
                                    <img
                                        src="/CakeResume.png"
                                        className="h-8 lg:h-10"
                                    />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="mt-10 flex h-[15vh] items-center justify-center">
                <h2>Copyright © 2024 James Li. All Rights Reserved.</h2>
            </div>
        </section>
    )
}

export default Contact
