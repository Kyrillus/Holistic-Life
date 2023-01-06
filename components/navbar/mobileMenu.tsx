import React, {useEffect} from 'react';
import {moonColorMobile, navItems, sunColorMobile} from "../../types/vars";
import LightDarkModeSwitch from "./lightDarkModeSwitch";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";

function MobileMenu({navbarOpen, setNavbarOpen}: { navbarOpen: any, setNavbarOpen: any }) {

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1024)
                setNavbarOpen(false)
        }

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    useEffect(() => {
        if (navbarOpen)
            document.body.style.overflow = "hidden"
        else
            document.body.style.overflow = "auto"
    }, [navbarOpen])

    const {data, status} = useSession()
    const router = useRouter();

    return (
        <div>
            <nav
                className={`select-none fixed flex top-0 left-0 w-full px-10 z-20 min-h-screen pt-28 overflow-y-hidden overflow-x-hidden text-4xl bg-aero dark:bg-prussianBlue transition-all transform duration-500 ${
                    navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}>
                <ul className="w-full flex flex-col gap-2 text-center">
                    {navItems.map((item) =>
                        <li
                            key={item.name}
                            className="flex hover:cursor-pointer w-full hover:scale-110 leading-8 list-none focus:outline-none group py-2 tracking-normal transition-transform opacity-100 duration-200 ease-in-out">
                            <a onClick={async () => {
                                await router.push(item.path);
                                setNavbarOpen(false);
                            }} className="h-full w-full py-2 text-white">
                                {item.name}
                            </a>
                        </li>
                    )}
                    <div
                        className="flex flex-col justify-center items-center self-center w-96 border-t border-t-2 mt-5">
                        <div className="pt-5">
                            {status === "loading" ? (<div> </div>) :
                                (status === "authenticated" ? (
                                <img src={"" + data?.user?.image} className={"rounded-full h-16"}
                                     alt={"profile"}/>) :
                                (<p onClick={async () => {await router.push("/login");setNavbarOpen(false);
                            }} className="text-white border rounded-xl py-2 px-8 text-3xl border border-white cursor-pointer">log in</p>))}

                        </div>
                        <div className="pt-5">
                            <LightDarkModeSwitch sunColor={sunColorMobile} moonColor={moonColorMobile} size={80}/>
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default MobileMenu;