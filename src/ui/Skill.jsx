import React from 'react'

function Skill() {
    return (
        <section className='mb-72'>
            <div className="flex h-full flex-col items-center justify-center">
                <h3 className="text-base">Explore My</h3>
                <h1 className="mb-12 text-[3rem] font-semibold">Skill</h1>
                <div className="mx-4 gap-4">
                    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
                        <div className="flex h-[24rem] flex-auto flex-col items-center justify-evenly rounded-[2rem] border-[0.1rem] border-gray-500 text-center">
                            <h3 className="mx-6 text-3xl font-semibold">
                                Frontend development
                            </h3>
                            <ul className="grid grid-flow-col grid-rows-3 gap-4 text-left">
                                <li className="flex gap-2">
                                    <img src="/verify.png" className="h-6" />
                                    <p>JavaScript ES6</p>
                                </li>
                                <li className="flex gap-2">
                                    {' '}
                                    <img src="/verify.png" className="h-6" />
                                    HTML5 / CSS3
                                </li>
                                <li className="flex gap-2">
                                    {' '}
                                    <img src="/verify.png" className="h-6" />
                                    Tailwind CSS
                                </li>
                                <li className="flex gap-2">
                                    {' '}
                                    <img src="/verify.png" className="h-6" />
                                    Bootstrap
                                </li>
                                <li className="flex gap-2">
                                    {' '}
                                    <img src="/verify.png" className="h-6" />
                                    SCSS
                                </li>
                                <li className="flex gap-2">
                                    {' '}
                                    <img src="/verify.png" className="h-6" />
                                    React / Redux Toolkit
                                </li>
                            </ul>
                        </div>
                        <div className="flex h-[24rem] flex-auto flex-col items-center justify-evenly rounded-[2rem] border-[0.1rem] border-gray-500 text-center">
                            <h3 className="mx-6 text-3xl font-semibold">
                                Others
                            </h3>
                            <ul className="grid grid-flow-col grid-rows-3 gap-4 text-left">
                                <li className="flex gap-2">
                                    {' '}
                                    <img src="/verify.png" className="h-6" />
                                    Git
                                </li>
                                <li className="flex gap-2">
                                    {' '}
                                    <img src="/verify.png" className="h-6" />
                                    VS Code
                                </li>
                                <li className="flex gap-2">
                                    {' '}
                                    <img src="/verify.png" className="h-6" />
                                    Vite
                                </li>
                                <li className="flex gap-2">
                                    {' '}
                                    <img src="/verify.png" className="h-6" />
                                    TOEIC 865分
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill
