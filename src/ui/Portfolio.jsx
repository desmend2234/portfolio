import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Portfolio() {
    const projectList = [
        // {
        //     title: '旅遊電商網站',
        //     description:
        //         '此專案為旅遊電商網站，運用React串接後端API，使用者可以瀏覽商品詳細資訊，並將商品新增至購物車，也能搜尋商品並下訂單。',
        //     image: '/project.png',
        //     skills: [
        //         'HTML / CSS / Tailwind CSS 版面UIUX設計',
        //         'JavaScript 開發',
        //         'React / React Router 框架及路由運用',
        //         'Framer / Swiper動畫運用',
        //         'AJAX後端API串接',
        //     ],
        //     github: 'https://github.com/desmend2234/travelsky',
        //     demo: 'https://travelsky.vercel.app/',
        // },
        // {
        //     title: 'Full Stack視訊網站',
        //     description:
        //         '此專案為Full Stack視訊網站，運用Next框架及第三方ZEGOCLOUD套件構建功能，畫面採用hover UI及Tailwind CSS修改，透過Clerk auth進行登入驗證，資料庫選擇MongoDB進行使用者資料儲存，使用者可以進行登入創建視訊聊天室與朋友共同視訊，並可在視訊頁面進行即時對話。',
        //     image: '/project2.png',
        //     skills: [
        //         'HTML / CSS / Tailwind CSS / hover UI版面UIUX設計',
        //         'JavaScript開發',
        //         'ZEGOCLOUD套件開發視訊功能',
        //         'Next框架及App router路由運用',
        //         'Clerk auth登入驗證功能',
        //         'MongoDB資料庫儲存',
        //     ],
        //     github: 'https://github.com/desmend2234/videoconcall',
        //     demo: 'https://videoconcall.vercel.app/',
        // },
        {
            title: 'TravelTutor',
            description:
                'TravelTutor 是一個創新的AI旅遊規劃平台，旨在透過先進的技術為使用者提供個性化的旅行建議和交通資訊。使用者只需登入網站，輸入起點和終點，即可在幾分鐘內獲得詳細的每日旅遊計劃，包含最佳交通路線、推薦景點及附近的飯店選擇。',
            image: '/project3.png',
            skills: [
                'Next.js, React.js, Tailwind CSS, Shadcn UI, Aceternity UI',
                'Google Places API（地圖與圖片查找）、Google AI（智能推薦）',
                'Next框架及App router路由運用',
                'Clerk auth登入驗證功能',
                'Firebase資料庫儲存',
                'Typescript型別檢查',
            ],
            github: 'https://ai-travel-planner-r5i3.vercel.app/',
            demo: 'https://ai-travel-planner-r5i3.vercel.app/',
        },
        {
            title: '浪浪認養資訊平台',
            description:
                '浪浪認養資訊平台是一個幫助使用者了解流浪動物資訊的網站。使用者可以查詢動物的種類、性別、年齡及所在地點，促進動物認養。平台採用 Next.js 和 React 開發，整合 Kinde.Auth 驗證功能，並使用 Shadcn UI 提供現代化的使用者介面。',
            image: '/project4.png',
            skills: [
                'Next.js, React.js, Tailwind CSS, Shadcn UI',
                'Next框架及App router路由運用',
                'Kindle.auth登入驗證功能',
                'Typescript型別檢查',
            ],
            github: 'https://github.com/desmend2234/stray-animals-home',
            demo: 'https://stray-animals-home.vercel.app/',
        },
    ]

    return (
        <section id="Side Project" className="py-80">
            <div className="flex h-full flex-col items-center gap-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-base">About my</h3>
                    <h1 className="text-4xl font-semibold">Side project</h1>
                </motion.div>

                <div className="mx-4 flex max-w-6xl flex-col gap-24">
                    {projectList.map((project, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col gap-8 lg:flex-row"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={project.image}
                                className="object-fit h-auto w-full bg-cover bg-center lg:h-80 lg:w-1/2"
                                alt={project.title}
                            />
                            <div className="flex flex-col justify-between lg:w-1/2">
                                <div className="space-y-6">
                                    <h3 className="text-xl font-medium leading-8 tracking-wide">
                                        {project.description}
                                    </h3>

                                    <div className="space-y-4">
                                        <h2 className="text-xl font-semibold text-gray-800">
                                            運用技術：
                                        </h2>
                                        <ul className="grid gap-3 text-gray-600">
                                            {project.skills.map(
                                                (skill, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-2"
                                                    >
                                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-500"></span>
                                                        <span className="text-lg">
                                                            {skill}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 flex gap-8 text-2xl font-medium">
                                    {project.github && (
                                        <Link
                                            to={project.github}
                                            className="flex items-center gap-2 transition-colors hover:text-gray-600"
                                        >
                                            <img
                                                src="/github-mark.png"
                                                className="h-6 w-6"
                                                alt="GitHub"
                                            />
                                            <span className="underline">
                                                Github page
                                            </span>
                                        </Link>
                                    )}
                                    {project.demo && (
                                        <Link
                                            to={project.demo}
                                            className="flex items-center gap-2 transition-colors hover:text-gray-600"
                                        >
                                            <img
                                                src="/monitor.png"
                                                className="h-6 w-6"
                                                alt="Demo"
                                            />
                                            <span className="underline">
                                                Demo website
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
