import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <section id='contact'>
            <div className="flex h-full flex-col items-center justify-center">
                <h3 className="text-base">Right now</h3>
                <h1 className="mb-12 text-[3rem] font-semibold">Contact</h1>
                <div className="mx-4 gap-4 w-[20rem] lg:w-[36rem]">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex h-[24rem] flex-col items-center justify-center gap-4 rounded-[2rem] border-[0.1rem] border-gray-500 text-center">
                            <ul className="grid gap-4 text-left text-2xl tracking-wide">
                                <li className="">
                                    <Link
                                        to="https://github.com/desmend2234"
                                        className="flex gap-2 transition duration-300 hover:text-sky-500 hover:underline"
                                    >
                                        <img
                                            src="/github-mark.png"
                                            className="h-6"
                                        />
                                        <p>Github</p>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link
                                        to="https://github.com/desmend2234"
                                        className="flex gap-2 transition duration-300 hover:text-sky-500 hover:underline"
                                    >
                                        <img
                                            src="/linkedin.png"
                                            className="h-6"
                                        />
                                        <p>Linkedin</p>{' '}
                                    </Link>
                                </li>
                                <li className="">
                                    {' '}
                                    <Link
                                        to="https://github.com/desmend2234"
                                        className="flex gap-2 transition duration-300 hover:text-sky-500 hover:underline"
                                    >
                                        <img src="/email.png" className="h-6" />
                                        <p>Email</p>
                                    </Link>
                                </li>
                            </ul>

                            <Link
                                to="https://www.cakeresume.com/s--QW_Rta4jvL8LGLssoH14eA--/desmend2234"
                                className="mx-4 duration-300"
                            >
                                <img
                                    src="/CakeResume.png"
                                    className="h-6 lg:h-8"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex h-[15vh] items-center justify-center">
                <h2>Copyright © 2024 James Li. All Rights Reserved.</h2>
            </div>
        </section>
    )
}

export default Contact
