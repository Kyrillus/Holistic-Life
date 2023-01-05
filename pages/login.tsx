import React, {useEffect, useState} from 'react';
import {FcGoogle} from 'react-icons/fc'
import {useRouter} from "next/router";
import {loginUser} from '../lib/userAPI';
import useUserStore from "../lib/useStore";
import {getSession, signIn} from "next-auth/react";
import Link from "next/link";

function Login() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const router = useRouter();
    const userSate = useUserStore((state) => state.userState);
    const setUser = useUserStore((state) => state.login);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {

    }, []);

    const verifyUser = async () => {
        console.log(email);
        console.log(password);
        loginUser(email, password)
            .then(async () => {
                await signIn("credentials", {username: email, password: password});
            })
            .catch(() => {
                console.log("error")
            })
    }
    return (
        <section className="relative overflow-hidden md:py-16 select-none">
            <div className="container relative z-10 mx-auto px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6">
                        <div
                            className="mx-auto rounded-xl py-20 text-center md:dark:bg-slate-800 shadow-gray-400 dark:shadow-black md:shadow-2xl md:max-w-xl">
                            <div className="flex justify-center items-center w-full">
                                <h2 className="font-heading pb-10 text-2xl md:text-3xl font-bold text-prussianBlue dark:text-white md:w-full">Log
                                    in to your
                                    account</h2>
                            </div>
                            <div className="-m-2 mx-auto mb-5 flex max-w-md flex-wrap">
                                <div className="w-full p-2 pb-2">
                                    <div onClick={() => signIn("google")}
                                         className="w-full items-center dark:bg-black bg-gray-50 gap-2 justify-center hover:border-sky-500 hover:bg-gray-100 flex py-3 cursor-pointer border border-gray-300 rounded-lg">
                                        <FcGoogle size={25}/>
                                        <p className="font-medium dark:text-white transition-[color] duration-1000">Continue
                                            with Google</p>
                                    </div>
                                </div>
                                <div className="w-full p-2 pt-4">
                                    <p className="p-1 text-start font-medium">E-Mail</p>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full dark:bg-black monoFont placeholder:opacity-90 hover:placeholder:opacity-70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-500 placeholder-gray-500 hover:border-sky-500 outline-none focus:border-sky-500"
                                        type="text" placeholder="email address" name="email"/>
                                </div>
                                <div className="w-full p-2">
                                    <div className="flex justify-between items-center">
                                        <p className="p-1 text-start font-medium">Password</p>
                                        <p className="text-[0.65rem] font-bold cursor-pointer select-none text-gray-400 dark:text-quickSilver pt-4 pr-1">Forgot
                                            your password?</p>
                                    </div>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full dark:bg-black monoFont placeholder:opacity-90 hover:placeholder:opacity-70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-500 placeholder-gray-500 hover:border-sky-500 outline-none focus:border-sky-500"
                                        type="password" placeholder="password" name="password"/>
                                </div>
                                <div className="w-full p-2">
                                    <div className="group relative">
                                        <div
                                            className="absolute top-0 left-0 h-full w-full rounded-lg bg-white opacity-0  duration-300 ease-out group-hover:opacity-50"/>
                                        <button
                                            onClick={verifyUser}
                                            className="font-heading w-full overflow-hidden rounded-md  text-base font-medium text-black">
                                            <div
                                                className="relative overflow-hidden rounded-md border bg-transparent dark:bg-gray-900 bg-uranianBlue py-4 px-9">
                                                <div
                                                    className="absolute top-0 left-0 h-full w-full -translate-x-full transform bg-gradient-to-r from-blueCrayola via-sky-500 to-fluorescentBlue transition duration-500 ease-in-out group-hover:-translate-x-0"/>
                                                <p className="relative z-10 font-medium dark:text-white  group-hover:text-white transition-[color] duration-1000 group-hover:font-extrabold">Log
                                                    in</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t p-2 pt-6 w-5/6 mx-auto px-2 -m-2"/>
                            <p className="font-regular text-gray-600 dark:text-white cursor-pointer">
                                <span>Don&rsquo;t have an account? </span>
                                <Link className="text-blueCrayola rounded-lg p-1 font-bold pl-1" onClick={async () => {
                                    await router.push("/register");
                                }} href={"/register"}>Create Account</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Login;

export async function getServerSideProps(context: any) {
    const session = await getSession(context);

    if (session) {
        context.res.writeHead(302, {Location: '/'});
        context.res.end();
        return {props: session};
    }
    return {
        props: {session},
    };
}
