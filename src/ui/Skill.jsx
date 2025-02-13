import React from 'react'
import { animate, motion } from 'framer-motion'
import { frontSkillList, others } from './skillList'

function Skill() {
    // 卡片動畫效果
    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    }

    // 技能列表動畫效果
    const listVariants = {
        initial: { opacity: 0, y: 20 },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.1,
                duration: 0.5,
            },
        }),
    }

    return (
        <section className="mt-20 h-full">
            <div className="flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-base">Explore My</h3>
                    <h1 className="mb-12 text-[3rem] font-semibold">Skill</h1>
                </motion.div>

                <div className="mx-4 gap-4">
                    <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Frontend Skills Card */}
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            className="flex h-auto min-h-[24rem] flex-auto flex-col items-center justify-evenly rounded-[2rem] border-[0.1rem] border-gray-500 p-6 text-center transition-all duration-300 hover:border-blue-500 hover:shadow-lg lg:h-[24rem] lg:p-0"
                        >
                            <h3 className="mx-6 text-2xl font-semibold sm:text-3xl">
                                Frontend development
                            </h3>
                            <ul className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 md:grid-cols-3">
                                {frontSkillList.map((skill, index) => (
                                    <motion.li
                                        className="flex items-center gap-2 transition-colors duration-200 hover:text-blue-600"
                                        key={index}
                                        variants={listVariants}
                                        initial="initial"
                                        whileInView="animate"
                                        custom={index}
                                    >
                                        <img
                                            src="/verify.png"
                                            className="h-5 w-5 flex-shrink-0"
                                        />
                                        <p className="text-sm sm:text-base">
                                            {skill.name}
                                        </p>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Others Skills Card */}
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            className="flex h-auto min-h-[24rem] flex-auto flex-col items-center justify-evenly rounded-[2rem] border-[0.1rem] border-gray-500 p-6 text-center transition-all duration-300 hover:border-blue-500 hover:shadow-lg lg:h-[24rem] lg:p-0"
                        >
                            <h3 className="mx-6 text-2xl font-semibold sm:text-3xl">
                                Others
                            </h3>
                            <ul className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
                                {others.map((other, index) => (
                                    <motion.li
                                        className="flex items-center gap-2 transition-colors duration-200 hover:text-blue-600"
                                        key={index}
                                        variants={listVariants}
                                        initial="initial"
                                        whileInView="animate"
                                        custom={index}
                                    >
                                        <img
                                            src="/verify.png"
                                            className="h-5 w-5 flex-shrink-0"
                                        />
                                        <p className="text-sm sm:text-base">
                                            {other.name}
                                        </p>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill
