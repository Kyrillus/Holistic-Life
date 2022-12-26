import React from 'react';
import {FcGoogle} from 'react-icons/fc'

function Login() {
    return (
        <section className="relative overflow-hidden py-16 select-none">
            <div className="container relative z-10 mx-auto px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6">
                        <div className="mx-auto rounded-xl py-20 text-center shadow-2xl md:max-w-xl">
                            <h2 className="font-heading pb-10 text-3xl font-bold text-prussianBlue">Log in to your
                                account</h2>
                            <div className="-m-2 mx-auto mb-5 flex max-w-md flex-wrap">
                                <div className="w-full py-2 pb-4 p-2">
                                    <div
                                        className="w-full items-center gap-2 justify-center flex py-3 cursor-pointer border border-gray-300 rounded-lg">
                                        <FcGoogle size={24}/>
                                        <p className="font-medium">Continue with Google</p>
                                    </div>
                                </div>
                                <div className="w-full p-2">
                                    <p className="p-1 text-start font-medium">E-Mail</p>
                                    <input
                                        className="w-full monoFont rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-500 placeholder-gray-500 outline-none focus:ring-4 focus:ring-sky-500"
                                        type="text" placeholder="email address" name="email"/>
                                </div>
                                <div className="w-full p-2">
                                    <div className="flex justify-between items-center">
                                        <p className="p-1 text-start font-medium ">Password</p>
                                        <p className="text-[0.65rem] font-bold cursor-pointer select-none text-gray-400 pt-4 pr-1">Forgot
                                            your password?</p>
                                    </div>
                                    <input
                                        className="w-full rounded-lg monoFont border border-gray-200 bg-white px-5 py-2.5 text-gray-500 placeholder-gray-500 outline-none focus:ring-4 focus:ring-[#147AFF]"
                                        type="password" placeholder="password" name="password"/>
                                </div>
                                <div className="w-full p-2">
                                    <div className="group relative">
                                        <div
                                            className="absolute top-0 left-0 h-full w-full rounded-lg bg-white opacity-0  duration-300 ease-out group-hover:opacity-50"/>
                                        <button
                                            className="font-heading w-full overflow-hidden rounded-md  text-base font-medium text-black">
                                            <div
                                                className="relative overflow-hidden rounded-md border bg-transparent bg-uranianBlue py-4 px-9">
                                                <div
                                                    className="absolute top-0 left-0 h-full w-full -translate-x-full transform bg-gradient-to-r from-[#147AFF] via-sky-500 to-[#48F0E2] transition duration-500 ease-in-out group-hover:-translate-x-0"/>
                                                <p className="relative z-10 font-medium group-hover:text-white transition-[color] duration-1000 group-hover:font-extrabold">Log
                                                    in</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t p-2 pt-6 w-5/6 mx-auto px-2 -m-2"/>
                            <p className="font-regular text-gray-600">
                                <span>Don&rsquo;t have an account? </span>
                                <a className="text-blueCrayola rounded-lg p-1 font-bold pl-1" href="#">Sign-Up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Login;