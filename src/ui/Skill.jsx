<<<<<<< HEAD
import React from 'react'
import { animate, motion } from 'framer-motion'
import  { frontSkillList, others } from './skillList'
function Skill() {
    const variants = {
        initial: { opacity: 0, y: 100 },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.1 },
        }),
    }

    return (
        <section className="mt-20 h-full">
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-base">Explore My</h3>
                <h1 className="mb-12 text-[3rem] font-semibold">Skill</h1>
                <div className="mx-4 gap-4">
                    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
                        <div className="flex h-[24rem] flex-auto flex-col items-center justify-evenly rounded-[2rem] border-[0.1rem] border-gray-500 text-center">
                            <h3 className="mx-6 text-3xl font-semibold">
                                Frontend development
                            </h3>
                            <ul className="mx-4 grid grid-flow-col grid-rows-3 gap-4 text-left">
                                {frontSkillList.map((skill, index) => {
                                    return (
                                        <motion.li
                                            className="flex gap-2"
                                            key={index}
                                            variants={variants}
                                            initial="initial"
                                            whileInView="animate"
                                            custom={index}
                                        >
                                            <img
                                                src="/verify.png"
                                                className="h-6"
                                            />
                                            <p>{skill.name}</p>
                                        </motion.li>
                                    )
                                })}

                              
                            </ul>
                        </div>
                        <div className="flex h-[24rem] flex-auto flex-col items-center justify-evenly rounded-[2rem] border-[0.1rem] border-gray-500 text-center">
                            <h3 className="mx-6 text-3xl font-semibold">
                                Others
                            </h3>
                            <ul className="grid grid-flow-col grid-rows-3 gap-4 text-left">
                                {others.map((other, index) => {
                                    return (
                                        <motion.li
                                            className="flex gap-2"
                                            key={index}
                                            variants={variants}
                                            initial="initial"
                                            whileInView="animate"
                                            custom={index}
                                        >
                                            <img
                                                src="/verify.png"
                                                className="h-6"
                                            />
                                            <p>{other.name}</p>
                                        </motion.li>
                                    )
                                })}
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill
=======
import React from 'react'
import { animate, motion } from 'framer-motion'
import  { frontSkillList, others } from './skillList'
function Skill() {
    const variants = {
        initial: { opacity: 0, y: 100 },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.1 },
        }),
    }

    return (
        <section className="mt-20 h-full">
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-base">Explore My</h3>
                <h1 className="mb-12 text-[3rem] font-semibold">Skill</h1>
                <div className="mx-4 gap-4">
                    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
                        <div className="flex h-[24rem] flex-auto flex-col items-center justify-evenly rounded-[2rem] border-[0.1rem] border-gray-500 text-center">
                            <h3 className="mx-6 text-3xl font-semibold">
                                Frontend development
                            </h3>
                            <ul className="mx-4 grid grid-flow-col grid-rows-3 gap-4 text-left">
                                {frontSkillList.map((skill, index) => {
                                    return (
                                        <motion.li
                                            className="flex gap-2"
                                            key={index}
                                            variants={variants}
                                            initial="initial"
                                            whileInView="animate"
                                            custom={index}
                                        >
                                            <img
                                                src="/verify.png"
                                                className="h-6"
                                            />
                                            <p>{skill.name}</p>
                                        </motion.li>
                                    )
                                })}

                              
                            </ul>
                        </div>
                        <div className="flex h-[24rem] flex-auto flex-col items-center justify-evenly rounded-[2rem] border-[0.1rem] border-gray-500 text-center">
                            <h3 className="mx-6 text-3xl font-semibold">
                                Others
                            </h3>
                            <ul className="grid grid-flow-col grid-rows-3 gap-4 text-left">
                                {others.map((other, index) => {
                                    return (
                                        <motion.li
                                            className="flex gap-2"
                                            key={index}
                                            variants={variants}
                                            initial="initial"
                                            whileInView="animate"
                                            custom={index}
                                        >
                                            <img
                                                src="/verify.png"
                                                className="h-6"
                                            />
                                            <p>{other.name}</p>
                                        </motion.li>
                                    )
                                })}
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill
>>>>>>> 219099b (add project2)
