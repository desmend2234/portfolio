import React from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
    return (
        <section id="Side Project" className="py-80">
            <div className="flex h-full flex-col items-center gap-24">
                <h3 className="text-base">About my</h3>
                <h1 className="text-4xl font-semibold">Side project</h1>
                <div className="mx-4 max-w-6xl gap-4 lg:flex">
                    <img
                        src="/project.png"
                        className="object-fit bg-cover bg-center lg:h-80"
                    />
                    <div className="flex-col text-wrap">
                        <h3 className="text-xl font-medium leading-8 tracking-wide">
                            此專案為旅遊電商網站，運用React串接後端API，使用者可以瀏覽商品詳細資訊，並將商品新增至購物車，也能搜尋商品並下訂單。
                        </h3>

                        <h2 className="my-4 text-xl font-semibold text-gray-800">
                            運用技術：
                        </h2>
                        <ul className="w-full list-inside list-disc space-y-1 text-xl text-gray-600">
                            <li>HTML / CSS / Tailwind CSS 版面UIUX設計</li>
                            <li>JavaScript 開發</li>
                            <li>React / React Router 框架及路由運用</li>
                            <li>Framer / Swiper動畫運用</li>
                            <li>AJAX後端API串接</li>

                            <div className="flex gap-8 py-4 text-2xl font-medium">
                                <Link
                                    to="https://github.com/desmend2234/travelsky"
                                    className="flex gap-2"
                                >
                                    <img
                                        src="/github-mark.png"
                                        className="object-fit h-6"
                                    />
                                    <p className="underline">Github page</p>
                                </Link>
                                <Link
                                    to="https://travelsky.vercel.app/"
                                    className="flex gap-2"
                                >
                                    <img
                                        src="/monitor.png"
                                        className="object-fit h-6"
                                    />
                                    <p className="underline">Demo website</p>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="mx-4 max-w-6xl gap-4 lg:flex">
                    <img
                        src="/project2.png"
                        className="object-fit bg-cover bg-center lg:h-80"
                    />
                    <div className="flex-col">
                        <h3 className="text-pretty text-xl font-medium leading-8 tracking-wide">
                            此專案為Full
                            Stack視訊網站，運用Next框架及第三方ZEGOCLOUD套件構建功能，畫面採用hover
                            UI及Tailwind CSS修改，透過Clerk
                            auth進行登入驗證，資料庫選擇MongoDB進行使用者資料儲存，使用者可以進行登入創建視訊聊天室與朋友共同視訊，並可在視訊頁面進行即時對話。
                        </h3>

                        <h2 className="my-4 text-xl font-semibold text-gray-800">
                            運用技術：
                        </h2>
                        <ul className="w-full list-inside list-disc space-y-1 text-xl text-gray-600">
                            <li>
                                HTML / CSS / Tailwind CSS / hover UI版面UIUX設計
                            </li>
                            <li>JavaScript開發</li>
                            <li>ZEGOCLOUD套件開發視訊功能</li>
                            <li>Next框架及App router路由運用</li>
                            <li>Clerk auth登入驗證功能</li>
                            <li>MongoDB資料庫儲存</li>

                            <div className="flex gap-8 py-4 text-2xl font-medium">
                                <Link
                                    to="https://github.com/desmend2234/videoconcall"
                                    className="flex gap-2"
                                >
                                    <img
                                        src="/github-mark.png"
                                        className="object-fit h-6"
                                    />
                                    <p className="underline">Github page</p>
                                </Link>
                                <Link
                                    to="https://videoconcall.vercel.app/"
                                    className="flex gap-2"
                                >
                                    <img
                                        src="/monitor.png"
                                        className="object-fit h-6"
                                    />
                                    <p className="underline">Demo website</p>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
