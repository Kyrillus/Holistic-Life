import React from 'react';
import {FcGoogle} from 'react-icons/fc'
import Link from "next/link";
import {legalLinks} from "../types/vars";
import {signIn} from "next-auth/react";

function Register() {
    return (
        <section className="relative overflow-hidden py-16 select-none">
            <div className="container relative z-10 mx-auto px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6">
                        <div
                            className="mx-auto rounded-xl py-14 text-center md:dark:bg-slate-800 shadow-gray-400 dark:shadow-black md:shadow-2xl md:max-w-xl">
                            <h2 className="font-heading pb-10 text-3xl font-bold text-prussianBlue dark:text-white">Create
                                your
                                account</h2>
                            <div className="-m-2 mx-auto mb-5 flex max-w-md flex-wrap">
                                <div className="w-full p-2 pb-2">
                                    <div
                                        onClick={() => signIn("google")}
                                        className="w-full items-center dark:bg-black bg-gray-50 gap-2 justify-center hover:border-sky-500 hover:bg-gray-100 flex py-3 cursor-pointer border border-gray-300 rounded-lg">
                                        <FcGoogle size={25}/>
                                        <p className="font-medium dark:text-white transition-[color] duration-1000">Continue
                                            with Google</p>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="w-full p-2 pt-4 w-1/2">
                                        <p className="p-1 text-start font-medium">First Name</p>
                                        <input
                                            className="w-full dark:bg-black monoFont placeholder:opacity-90 hover:placeholder:opacity-70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-500 placeholder-gray-500 hover:border-sky-500 outline-none focus:border-sky-500"
                                            type="text" placeholder="first name" name="firstname"/>
                                    </div>
                                    <div className="w-full p-2 pt-4 w-1/2">
                                        <p className="p-1 text-start font-medium">Last Name</p>
                                        <input
                                            className="w-full dark:bg-black monoFont placeholder:opacity-90 hover:placeholder:opacity-70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-500 placeholder-gray-500 hover:border-sky-500 outline-none focus:border-sky-500"
                                            type="text" placeholder="last name" name="lastname"/>
                                    </div>
                                </div>

                                <div className="w-full p-2">
                                    <p className="p-1 text-start font-medium">E-Mail</p>
                                    <input
                                        className="w-full dark:bg-black monoFont placeholder:opacity-90 hover:placeholder:opacity-70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-500 placeholder-gray-500 hover:border-sky-500 outline-none focus:border-sky-500"
                                        type="text" placeholder="email address" name="email"/>
                                </div>
                                <div className="w-full p-2">
                                    <div className="flex justify-between items-center">
                                        <p className="p-1 text-start font-medium">Password</p>
                                    </div>
                                    <input
                                        className="w-full dark:bg-black monoFont placeholder:opacity-90 hover:placeholder:opacity-70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-500 placeholder-gray-500 hover:border-sky-500 outline-none focus:border-sky-500"
                                        type="password" placeholder="password" name="password"/>
                                </div>
                                <div className="w-full p-2">
                                    <div className="flex justify-between items-center">
                                        <p className="p-1 text-start font-medium">Confirm Password</p>
                                    </div>
                                    <input
                                        className="w-full dark:bg-black monoFont placeholder:opacity-90 hover:placeholder:opacity-70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-500 placeholder-gray-500 hover:border-sky-500 outline-none focus:border-sky-500"
                                        type="password" autoComplete="off" placeholder="confirm" name="confirm"/>
                                </div>
                                <div className="w-full p-2">
                                    <div className="group relative">
                                        <div
                                            className="absolute top-0 left-0 h-full w-full rounded-lg bg-white opacity-0  duration-300 ease-out group-hover:opacity-50"/>
                                        <button
                                            className="font-heading w-full overflow-hidden rounded-md  text-base font-medium text-black">
                                            <div
                                                className="relative overflow-hidden rounded-md border bg-transparent dark:bg-gray-900 bg-uranianBlue py-4 px-9">
                                                <div
                                                    className="absolute top-0 left-0 h-full w-full -translate-x-full transform bg-gradient-to-r from-blueCrayola via-sky-500 to-fluorescentBlue transition duration-500 ease-in-out group-hover:-translate-x-0"/>
                                                <p className="relative z-10 font-medium dark:text-white  group-hover:text-white transition-[color] duration-1000 group-hover:font-extrabold">Create</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t p-2 pt-6 w-5/6 mx-auto px-2 -m-2"/>
                            <div className="px-20">
                                <p className="font-regular text-sm text-gray-600 dark:text-white">
                                    <span>By clicking “Create Account”, you agree to our <br/></span>
                                    {legalLinks.map(((legal, index) =>
                                            <>
                                                <Link key={index} className="text-blueCrayola rounded-lg font-bold"
                                                      href={legal.href}> {legal.name}</Link>
                                                {index === legalLinks.length - 1 ? "." : (index === legalLinks.length - 2 ? " and" : ",")}
                                            </>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Register;