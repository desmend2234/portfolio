import climbImage from '/climb.jpg'
import { motion } from 'framer-motion'
import { transition1 } from '../helpers/transitions'
function About() {
    const variants = {
        initial: {
            y: '-50%',
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    }
    return (
        // <section className="" id="about">
        //     <div className="min-h-screen items-center justify-center gap-4 lg:grid lg:grid-cols-3">
        //         <motion.div
        //             variants={variants}
        //             initial="initial"
        //             // exit={{ opacity: 0, y: '-80%' }}
        //             // transition={transition1}
        //             whileInView="animate"
        //             className="grid-row-3 grid justify-self-center px-4 lg:col-span-2"
        //         >
        //             <p className='text-xl'>Get To Know More</p>
        //             <h1 className="my-2 text-6xl font-semibold text-stone-900">
        //                 About
        //             </h1>
        //             <h3 className="text-wrap text-2xl leading-10 tracking-normal text-stone-800">
        //                 具有多年金融業背景，跨界軟體工程師，熱愛新事物，擁有金融業細心謹慎以及擅長溝通協調的特質，透過自主學習前端開發技術，不斷積極進取精進能力，持續學習新技術運用，致力於打造穩健優質的前端使用者體驗，追求卓越與創新。
        //             </h3>
        //             <div className="mt-6 border-b-2 border-stone-500">
        //                 <h2 className="my-4 flex justify-center text-4xl">
        //                     Skill
        //                 </h2>
        //                 <div className="flex gap-6 py-4">
        //                     <div className="grow justify-center text-balance border-t-2 border-stone-500">
        //                         <h2 className="p-4 text-2xl font-semibold text-gray-800 xs:min-h-[60px] md:min-h-[20px]">
        //                             前端開發技術
        //                         </h2>
        //                         <ul className="max-w-md list-inside space-y-1 p-2 text-xl text-gray-700">
        //                             <li className="flex items-center">
        //                                 <svg
        //                                     className="me-2 h-3.5 w-3.5 flex-shrink-0 text-sky-500"
        //                                     aria-hidden="true"
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     fill="currentColor"
        //                                     viewBox="0 0 20 20"
        //                                 >
        //                                     <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        //                                 </svg>
        //                                 JavaScript ES6
        //                             </li>
        //                             <li className="flex items-center">
        //                                 <svg
        //                                     className="me-2 h-3.5 w-3.5 flex-shrink-0 text-sky-500"
        //                                     aria-hidden="true"
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     fill="currentColor"
        //                                     viewBox="0 0 20 20"
        //                                 >
        //                                     <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        //                                 </svg>
        //                                 HTML5 / CSS3
        //                             </li>
        //                             <li className="flex items-center">
        //                                 <svg
        //                                     className="me-2 h-3.5 w-3.5 flex-shrink-0 text-sky-500"
        //                                     aria-hidden="true"
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     fill="currentColor"
        //                                     viewBox="0 0 20 20"
        //                                 >
        //                                     <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        //                                 </svg>
        //                                 Tailwind CSS
        //                             </li>
        //                             <li className="flex items-center">
        //                                 <svg
        //                                     className="me-2 h-3.5 w-3.5 flex-shrink-0 text-sky-500"
        //                                     aria-hidden="true"
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     fill="currentColor"
        //                                     viewBox="0 0 20 20"
        //                                 >
        //                                     <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        //                                 </svg>
        //                                 Bootstrap
        //                             </li>
        //                             <li className="flex items-center">
        //                                 <svg
        //                                     className="me-2 h-3.5 w-3.5 flex-shrink-0 text-sky-500"
        //                                     aria-hidden="true"
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     fill="currentColor"
        //                                     viewBox="0 0 20 20"
        //                                 >
        //                                     <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        //                                 </svg>
        //                                 React / Redux Toolkit
        //                             </li>
        //                         </ul>
        //                     </div>
        //                     <div className="grow justify-center text-nowrap border-t-2 border-stone-500">
        //                         <h2 className="m-4 text-2xl font-semibold text-gray-800 xs:min-h-[60px] md:min-h-[20px]">
        //                             開發工具
        //                         </h2>
        //                         <ul className="m-2 max-w-md list-inside space-y-1 text-xl text-gray-700">
        //                             <li className="flex items-center">
        //                                 <svg
        //                                     className="me-2 h-3.5 w-3.5 flex-shrink-0 text-sky-500"
        //                                     aria-hidden="true"
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     fill="currentColor"
        //                                     viewBox="0 0 20 20"
        //                                 >
        //                                     <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        //                                 </svg>
        //                                 Git
        //                             </li>
        //                             <li className="flex items-center">
        //                                 <svg
        //                                     className="me-2 h-3.5 w-3.5 flex-shrink-0 text-sky-500"
        //                                     aria-hidden="true"
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     fill="currentColor"
        //                                     viewBox="0 0 20 20"
        //                                 >
        //                                     <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        //                                 </svg>
        //                                 VS Code
        //                             </li>
        //                             <li className="flex items-center">
        //                                 <svg
        //                                     className="me-2 h-3.5 w-3.5 flex-shrink-0 text-sky-500"
        //                                     aria-hidden="true"
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     fill="currentColor"
        //                                     viewBox="0 0 20 20"
        //                                 >
        //                                     <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        //                                 </svg>
        //                                 Vite
        //                             </li>
        //                         </ul>
        //                     </div>
        //                     <div className="grow justify-center border-t-2 border-stone-500">
        //                         <h2 className="m-4 text-2xl font-semibold text-gray-800 xs:min-h-[60px] md:min-h-[20px]">
        //                             其他
        //                         </h2>
        //                         <ul className="m-2 max-w-md list-inside space-y-1 text-xl text-gray-700">
        //                             <li className="flex items-center">
        //                                 <svg
        //                                     className="me-2 h-3.5 w-3.5 flex-shrink-0 text-sky-500"
        //                                     aria-hidden="true"
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     fill="currentColor"
        //                                     viewBox="0 0 20 20"
        //                                 >
        //                                     <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        //                                 </svg>
        //                                 TOEIC 865分
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </motion.div>

        //         <motion.div
        //             className="object-fit m-4 min-h-[50dvh] bg-cover bg-center lg:flex"
        //             style={{
        //                 backgroundImage: `url(${climbImage})`,
        //             }}
        //         ></motion.div>
        //     </div>
        //     <h1 className="my-8 text-4xl font-semibold">Background</h1>
        //     <div className="my-8 grid h-64 grid-cols-4 gap-4 border-stone-300 text-center text-xl">
        //         <div>
        //             <h2>清華大學</h2>
        //             <div className="border-t-2 border-[#BD8F53] py-4">
        //                 <h2 className="font-semibold">經濟學系</h2>
        //                 <h3>學士,2010-2014</h3>
        //             </div>
        //         </div>
        //         <div>
        //             <h2>交通大學</h2>
        //             <div className="border-t-2 border-[#BD8F53] py-4">
        //                 <h2 className="font-semibold">經營管理所</h2>
        //                 <h3>碩士,2014-2016</h3>
        //             </div>
        //         </div>
        //         <div>
        //             <h2>玉山銀行</h2>
        //             <div className="border-t-2 border-[#BD8F53] py-4">
        //                 <h2 className="font-semibold">財富處</h2>
        //                 <h3>數位理財平台企劃,2018-2020</h3>
        //             </div>
        //         </div>
        //         <div>
        //             <h2>華南銀行</h2>
        //             <div className="border-t-2 border-[#BD8F53] py-4">
        //                 <h2 className="font-semibold">高雄分行</h2>
        //                 <h3>儲備幹部,2020-2023</h3>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section className="pt-96 h-full" id='about'>
            <div className="container mx-auto flex  flex-col items-center justify-center gap-4">
                <h3 className="text-base">Get To Know More</h3>
                <h1 className="mb-12 text-[3rem] font-semibold">About me</h1>
                <div className="grid grid-cols-1 place-items-center xs:space-y-4 lg:grid-cols-2">
                    <img
                        src="/climb.jpg"
                        className="h-[400px] w-[400px] rounded-xl object-cover"
                    />
                    <div className="mx-4 flex flex-col items-center justify-center gap-4">
                        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="flex h-[12rem] flex-auto flex-col items-center justify-center space-y-2 rounded-[2rem] border-[0.1rem] border-gray-500 text-center">
                                <img src="/medal.png" className="h-8" />
                                <h3 className="text-2xl font-semibold lg:text-3xl">
                                    Experience
                                </h3>
                                <h4 className="text-base font-bold">
                                    4年銀行業經驗
                                </h4>
                                <p className="text-base">
                                    玉山銀行企劃、華南銀行儲備幹部
                                </p>
                            </div>
                            <div className="flex h-[12rem] flex-auto flex-col items-center justify-center space-y-2 rounded-[2rem] border-[0.1rem] border-gray-500 text-center">
                                <img src="/graduation.png" className="h-8" />
                                <h3 className="text-2xl font-semibold lg:text-3xl">
                                    Education
                                </h3>
                                <h4 className="text-base font-bold">
                                    交通大學 經營管理所碩士
                                </h4>
                                <h4 className="text-base font-bold">
                                    清華大學 經濟學學士
                                </h4>
                            </div>
                        </div>
                        <div className="my-4">
                            <p className="text-xl">
                                具有多年金融業背景，跨界軟體工程師，熱愛新事物，擁有金融業細心謹慎以及擅長溝通協調的特質，透過自主學習前端開發技術，不斷積極進取精進能力，持續學習新技術運用，致力於打造穩健優質的前端使用者體驗，追求卓越與創新。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
