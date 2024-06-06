import { Link } from 'react-router-dom'
import climbImage from '/climb.jpg'
function Home() {
    return (
        <div className="mx-0 w-screen px-0">
            <section>
                <div className="relative flex h-dvh items-center justify-center bg-[#F4F1E8]">
                    <h1 className="absolute top-80 text-8xl italic text-slate-700">
                        Hello,
                    </h1>
                    <h3 className="bottom-100 absolute text-6xl not-italic text-[#5271FF]">
                        I am James!
                    </h3>
                    <h3 className="absolute bottom-20 text-6xl font-semibold italic text-[#9B4819] underline">
                        Hire me
                    </h3>
                    <div className="absolute bottom-48 flex gap-4">
                        <Link to="https://github.com/desmend2234">
                            <img
                                src="/github-mark.png"
                                className="h-10"
                            />
                        </Link>
                        <Link to="https://www.linkedin.com/in/james-li-924ba071/">
                            <img
                                src="/linkedin.png"
                                className="h-10"
                            />
                        </Link>{' '}
                        <Link to="desmend2234@gmail.com">
                            <img src="/email.png" className="h-10" />
                        </Link>
                    </div>{' '}
                    <Link
                        to="https://www.cakeresume.com/s--QW_Rta4jvL8LGLssoH14eA--/desmend2234"
                        className="absolute bottom-64"
                    >
                        <img src="/CakeResume.png" className="h-6" />
                    </Link>
                </div>
            </section>
            <section>
                <div className="grid h-screen items-center justify-center gap-4 bg-stone-200 px-12 md:grid-cols-1 lg:grid-cols-3">
                    <div className="grid-row-3 grid justify-self-center px-4 lg:col-span-2">
                        <h1 className="my-2 text-6xl font-semibold text-stone-800">
                            About
                        </h1>
                        <h3 className="text-wrap text-xl leading-10 tracking-wide text-stone-700">
                            具有多年金融業背景，跨界軟體工程師，熱愛新事物，擁有金融業細心謹慎以及擅長溝通協調的特質，透過自主學習前端開發技術，不斷積極進取精進能力，持續學習新技術運用，致力於打造穩健優質的前端使用者體驗，追求卓越與創新。
                        </h3>
                        <div className="mt-6 border-b-2 border-stone-500">
                            <h2 className="my-4 flex justify-center text-4xl">
                                Skill
                            </h2>
                            <div className="flex gap-6 p-4">
                                <div className="grow justify-center border-t-2 border-stone-500">
                                    <h2 className="p-4 text-2xl font-semibold text-gray-800">
                                        前端開發技術
                                    </h2>
                                    <ul className="max-w-md list-inside space-y-1 p-2 text-xl text-gray-700">
                                        <li className="flex items-center">
                                            <svg
                                                className="me-2 h-3.5 w-3.5 flex-shrink-0 text-green-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            JavaScript ES6
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="me-2 h-3.5 w-3.5 flex-shrink-0 text-green-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            HTML5 / CSS3
                                        </li>

                                        <li className="flex items-center">
                                            <svg
                                                className="me-2 h-3.5 w-3.5 flex-shrink-0 text-green-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            Tailwind CSS
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="me-2 h-3.5 w-3.5 flex-shrink-0 text-green-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            Bootstrap
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="me-2 h-3.5 w-3.5 flex-shrink-0 text-green-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            React / Redux Toolkit
                                        </li>
                                    </ul>
                                </div>
                                <div className="grow justify-center border-t-2 border-stone-500">
                                    <h2 className="m-4 text-2xl font-semibold text-gray-800">
                                        開發工具
                                    </h2>
                                    <ul className="m-2 max-w-md list-inside space-y-1 text-xl text-gray-700">
                                        <li className="flex items-center">
                                            <svg
                                                className="me-2 h-3.5 w-3.5 flex-shrink-0 text-green-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            Git
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="me-2 h-3.5 w-3.5 flex-shrink-0 text-green-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            VS Code
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="me-2 h-3.5 w-3.5 flex-shrink-0 text-green-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            Vite
                                        </li>
                                    </ul>
                                </div>
                                <div className="grow justify-center border-t-2 border-stone-500">
                                    <h2 className="m-4 text-2xl font-semibold text-gray-800">
                                        其他
                                    </h2>
                                    <ul className="m-2 max-w-md list-inside space-y-1 text-xl text-gray-700">
                                        <li className="flex items-center">
                                            <svg
                                                className="me-2 h-3.5 w-3.5 flex-shrink-0 text-green-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            TOEIC 865分
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="h-4/6 bg-cover bg-center xs:hidden lg:flex"
                        style={{
                            backgroundImage: `url(${climbImage})`,
                            borderRadius: '5rem',
                        }}
                    ></div>
                </div>
            </section>
            <section></section>
            <section>
                <div className="flex max-h-fit flex-col items-center bg-[#F4F1E8]">
                    <h1 className="my-8 text-4xl font-semibold">
                        Side project
                    </h1>
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
                                <li>
                                    HTML / CSS / Tailwind CSS / JavaScript(ES6)
                                </li>
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
                                        <p className="underline">
                                            Demo website
                                        </p>
                                    </Link>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <h1 className="my-8 text-4xl">Background</h1>
                    <div className="my-8 grid h-64 grid-cols-4 gap-4 border-b-2 border-stone-300 text-center text-xl">
                        <div>
                            <h2>清華大學</h2>
                            <div className="border-t-2 border-[#BD8F53] py-4">
                                <h2 className="font-semibold">經濟學系</h2>
                                <h3>學士,2010-2014</h3>
                            </div>
                        </div>
                        <div>
                            <h2>交通大學</h2>
                            <div className="border-t-2 border-[#BD8F53] py-4">
                                <h2 className="font-semibold">經營管理所</h2>
                                <h3>碩士,2014-2016</h3>
                            </div>
                        </div>
                        <div>
                            <h2>玉山銀行</h2>
                            <div className="border-t-2 border-[#BD8F53] py-4">
                                <h2 className="font-semibold">財富處</h2>
                                <h3>數位理財平台企劃,2018-2020</h3>
                            </div>
                        </div>
                        <div>
                            <h2>華南銀行</h2>
                            <div className="border-t-2 border-[#BD8F53] py-4">
                                <h2 className="font-semibold">高雄分行</h2>
                                <h3>儲備幹部,2020-2023</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{' '}
        </div>
    )
}

export default Home
