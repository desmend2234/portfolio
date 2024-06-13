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
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
        scrollButton: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 1.5,
                repeat: Infinity,
            },
        },
        hire: {
            opacity: 0,
            color: '#9B4819',
            transition: {
                duration: 2,
                repeat: Infinity,
            },
        },
    }

    return (
        <div className="w-full overflow-auto" id="home">
            <section id="home">
                <div className="relative flex min-h-screen flex-col items-center justify-center font-[Ridley]">
                    <motion.h1
                        className="mb-4 text-6xl italic text-slate-700"
                        variants={variants}
                        initial="initial"
                        // whileInView="animate"
                        animate="animate"
                    >
                        Hello,
                    </motion.h1>
                    <motion.h3
                        className="my-4 text-5xl not-italic text-slate-700"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                    >
                        I am James Li!{' '}
                    </motion.h3>
                    <motion.h3
                        className="my-6 flex justify-center text-6xl font-semibold italic text-[#9B4819] underline"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                    >
                        Hire me
                    </motion.h3>
                    <motion.div
                        className="my-8 flex items-center justify-center gap-4 font-[Poppins] text-sm lg:text-xl"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                    >
                        <button
                            type="button"
                            className="inline-block rounded-full border-[0.1rem] border-[#353535] bg-gray-200 px-10 py-2 font-semibold tracking-wide text-[#555555] transition duration-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed lg:px-14 lg:py-4"
                        >
                            <HashLink to="#contact" smooth>Contact</HashLink>
                        </button>
                        <button
                            type="button"
                            className="inline-block rounded-full bg-gray-700 px-4 py-2 font-semibold tracking-wide text-white transition duration-300 hover:bg-stone-800 hover:text-white focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed lg:px-6 lg:py-4"
                        >
                            Download CV
                        </button>
                    </motion.div>

                    <div className="absolute bottom-28 mx-auto flex gap-x-4 xl:mx-0">
                        <Link to="https://github.com/desmend2234">
                            <img src="/github-mark.png" className="h-10" />
                        </Link>
                        <Link to="https://www.linkedin.com/in/james-li-924ba071/">
                            <img src="/linkedin.png" className="h-10" />
                        </Link>{' '}
                        <Link to="desmend2234@gmail.com">
                            <img src="/email.png" className="h-10" />
                        </Link>
                    </div>

                    <motion.img
                        src="/arrow.png"
                        variants={variants}
                        animate="scrollButton"
                        className="absolute bottom-14 h-6 w-6"
                    />
                    <Link
                        to="https://www.cakeresume.com/s--QW_Rta4jvL8LGLssoH14eA--/desmend2234"
                        className="absolute bottom-44"
                    >
                        <img src="/CakeResume.png" className="h-6" />
                    </Link>
                </div>
            </section>
            <About />
            <Skill />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home
