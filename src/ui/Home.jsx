import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { transition1 } from '../helpers/transitions'

import About from './About'
import Portfolio from './Portfolio'
import Skill from './Skill'
import Contact from './Contact'
import { HashLink } from 'react-router-hash-link'

function Home() {
    const variants = {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    }

    return (
        <div className="w-full">
            <section id="home" className="relative min-h-screen">
                <div className="relative flex min-h-screen flex-col items-center justify-center px-4">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="mb-4 text-6xl font-bold italic text-gray-800"
                            variants={variants}
                            initial="initial"
                            animate="animate"
                        >
                            Hello,
                        </motion.h1>
                        <motion.h3
                            className="my-4 text-5xl font-semibold text-gray-700"
                            variants={variants}
                            initial="initial"
                            animate="animate"
                        >
                            I am James Li!
                        </motion.h3>

                        {/* 按鈕群組 */}
                        <motion.div
                            className="my-12 flex flex-wrap items-center justify-center gap-6"
                            variants={variants}
                            initial="initial"
                            animate="animate"
                        >
                            <HashLink
                                to="#contact"
                                smooth
                                className="rounded-full border-2 border-gray-800 bg-transparent px-8 py-3 text-lg font-medium text-gray-800 transition-all duration-300 hover:bg-gray-800 hover:text-white"
                            >
                                Contact
                            </HashLink>
                            <Link
                                to="https://www.cakeresume.com/desmend2234"
                                className="rounded-full bg-gray-800 px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-gray-700"
                            >
                                Download CV
                            </Link>
                        </motion.div>

                        {/* 社群連結 */}
                        <motion.div
                            className="mt-12 flex justify-center gap-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <SocialLink
                                href="https://github.com/desmend2234"
                                imgSrc="/github-mark.png"
                            />
                            <SocialLink
                                href="https://www.linkedin.com/in/james-li-924ba071/"
                                imgSrc="/linkedin.png"
                            />
                            <SocialLink
                                href="mailto:desmend2234@gmail.com"
                                imgSrc="/email.png"
                            />
                        </motion.div>

                        {/* CakeResume 連結 */}
                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <Link
                                to="https://www.cakeresume.com/s--QW_Rta4jvL8LGLssoH14eA--/desmend2234"
                                className="inline-block transition-transform duration-300 hover:scale-110"
                            >
                                <img src="/CakeResume.png" className="h-8" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* 向下箭頭 */}
                    <motion.div
                        className="absolute bottom-12 left-1/2 -translate-x-1/2"
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                        }}
                    >
                        <HashLink to="#about" smooth>
                            <img
                                src="/arrow.png"
                                className="h-8 w-8 cursor-pointer opacity-50 hover:opacity-100"
                            />
                        </HashLink>
                    </motion.div>
                </div>
            </section>
            <About />
            <Skill />
            <Portfolio />
            <Contact />
        </div>
    )
}

// 社群連結元件
function SocialLink({ href, imgSrc }) {
    return (
        <Link
            to={href}
            className="group transition-transform duration-300 hover:scale-110"
        >
            <img
                src={imgSrc}
                className="h-10 transition-transform duration-300 group-hover:rotate-12"
            />
        </Link>
    )
}

export default Home
