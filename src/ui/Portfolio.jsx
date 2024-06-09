import React from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
    return (
        <section id="portfolio" className="py-80">
            <div className="flex h-full flex-col items-center">
                <h1 className="mb-8 text-4xl font-semibold">Side project</h1>
                <div className="mx-4 gap-4 lg:flex">
                    <img
                        src="/project.png"
                        className="object-fit bg-cover bg-center lg:h-80"
                    />
                    <div className="my-4 flex-col text-wrap">
                        <h3 className="text-xl font-medium leading-8 tracking-wide">
                            此專案為旅遊電商網站，運用React串接後端API，使用者可以瀏覽商品詳細資訊，並將商品新增至購物車，也能搜尋商品並下訂單。
                        </h3>

                        <h2 className="my-4 text-xl font-semibold text-gray-800">
                            運用技術：
                        </h2>
                        <ul className="max-w-md list-inside list-disc space-y-1 text-xl text-gray-600">
                            <li>HTML / CSS / Tailwind CSS / JavaScript(ES6)</li>
                            <li>React / React Router / Vite</li>
                            <li>AJAX後端API串接</li>
                            <div className="flex gap-8 py-4 text-2xl font-medium">
                                <Link
                                    to="https://github.com/desmend2234/react-redux-project"
                                    className="flex gap-2"
                                >
                                    <img
                                        src="/github-mark.png"
                                        className="object-fit h-6"
                                    />
                                    <p className="underline">Github page</p>
                                </Link>
                                <Link
                                    to="https://reactvite-new.vercel.app/"
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
