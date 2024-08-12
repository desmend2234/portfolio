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
                <div className="mx-4 max-w-6xl gap-4 lg:flex">
                    <img
                        src="/project3.png"
                        className="object-fit bg-cover bg-center lg:h-80"
                    />
                    <div className="flex-col">
                        <h3 className="text-pretty text-xl font-medium leading-8 tracking-wide">
                            TravelTutor
                            是一個創新的AI旅遊規劃平台，旨在透過先進的技術為使用者提供個性化的旅行建議和交通資訊。使用者只需登入網站，輸入起點和終點，即可在幾分鐘內獲得詳細的每日旅遊計劃，包含最佳交通路線、推薦景點及附近的飯店選擇。
                        </h3>

                        <h2 className="my-4 text-xl font-semibold text-gray-800">
                            運用技術：
                        </h2>
                        <ul className="w-full list-inside list-disc space-y-1 text-xl text-gray-600">
                            <li>
                                Next.js, React.js, Tailwind CSS, Shadcn UI,
                                Aceternity UI
                            </li>

                            <li>
                                Google Places API（地圖與圖片查找）、Google
                                AI（智能推薦）
                            </li>
                            <li>Next框架及App router路由運用</li>
                            <li>Clerk auth登入驗證功能</li>
                            <li>Firebase資料庫儲存</li>
                            <li>Typescript型別檢查</li>
                            <div className="flex gap-8 py-4 text-2xl font-medium">
                                <Link
                                    to="https://ai-travel-planner-r5i3.vercel.app/"
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
                        src="/project4.png"
                        className="object-fit bg-cover bg-center lg:h-80"
                    />
                    <div className="flex-col">
                        <h3 className="text-pretty text-xl font-medium leading-8 tracking-wide">
                            浪浪認養資訊平台是一個創新的網站，旨在幫助使用者了解可供認養的流浪動物資訊。透過這個平台，使用者可以輕鬆查詢各種流浪動物的詳細資料，包括它們的種類、性別、年齡及所在地點，從而促進動物的認養與關懷。
                            本平台運用最新的技術架構，採用 Next.js 和 React
                            進行前端開發，提供流暢的使用者體驗。使用 Tailwind
                            CSS
                            進行樣式設計，確保界面美觀且易於操作。此外，平台整合了
                            Kinde.Auth 進行安全的用戶身份驗證，並使用 Shadcn UI
                            提供現代化的組件，提升整體使用體驗。
                            無論是希望認養新寵物的家庭，還是關心流浪動物的愛心人士，浪浪認養資訊平台都將成為他們的最佳選擇，讓每一隻流浪動物都能找到溫暖的家。
                        </h3>

                        <h2 className="my-4 text-xl font-semibold text-gray-800">
                            運用技術：
                        </h2>
                        <ul className="w-full list-inside list-disc space-y-1 text-xl text-gray-600">
                            <li>Next.js, React.js, Tailwind CSS, Shadcn UI</li>
                            <li>Next框架及App router路由運用</li>
                            <li>Kindle.auth登入驗證功能</li>
                            <li>Typescript型別檢查</li>

                            <div className="flex gap-8 py-4 text-2xl font-medium">
                                <Link
                                    to="https://github.com/desmend2234/stray-animals-home"
                                    className="flex gap-2"
                                >
                                    <img
                                        src="/github-mark.png"
                                        className="object-fit h-6"
                                    />
                                    <p className="underline">Github page</p>
                                </Link>
                                <Link
                                    to="https://stray-animals-home.vercel.app/"
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
