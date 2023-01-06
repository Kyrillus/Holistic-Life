import React, {useState} from 'react';
import {Fade as Hamburger} from 'hamburger-react'
import {useRouter} from "next/router";
import LightDarkModeSwitch from "./lightDarkModeSwitch";
import {moonColorDesktop, navItems, profileSettings, sunColorDesktop} from "../../types/vars";
import ArrowLink from "../links/ArrowLink";
import Image from 'next/image';
import {signIn, signOut, useSession} from "next-auth/react";

function Navbar({navbarOpen, setNavbarOpen}: { navbarOpen: any, setNavbarOpen: any }) {
    const [profileClicked, setProfileClicked] = useState(false);
    const toggleProfile = () => setProfileClicked(!profileClicked);
    const toggleBurgerMenu = () => setNavbarOpen(!navbarOpen);

    const {data, status} = useSession();
    const router = useRouter();

    return (
        <div className="select-none">
            <nav className="dark:bg-transparent bg-prussianBlue font-[Comfortaa]">
                <div className="px-6 lg:px-32">
                    <div className="flex h-16 justify-between">
                        <div className="flex items-center invisible z-[999] lg:hidden">
                            <div className="text-white">
                                <Hamburger/>
                            </div>
                        </div>
                        <div className="flex px-2 lg:px-0">
                            <div className="flex flex-shrink-0 items-center z-[999]">
                                <h1 onClick={async () => {
                                    await router.push('/')
                                    setNavbarOpen(false)
                                }}
                                    className="cursor-pointer font-regular text-white text-2xl header select-none">holistic
                                    life</h1>
                            </div>
                        </div>
                        {/* Menu Buttons */}
                        <div className="hidden lg:flex lg:items-center gap-10">
                            {navItems.map(item => <a key={item.name}
                                                     className="cursor-pointer inline-flex items-center h-[3.939rem] border-b-2 border-transparent px-1 pt-1 text-base font-normal leading-5 text-white transition duration-150 ease-in-out hover:border-white dark:hover:border-gray-300"
                                                     onClick={async () => {
                                                         await router.push(item.path)
                                                     }}>{item.name}</a>)}
                        </div>

                        {/* Burger Menu (hidden on lg and upwards) */}
                        <div onClick={toggleBurgerMenu} className="flex items-center z-[999] select-none lg:hidden">
                            <div className="text-white">
                                <Hamburger size={20} toggled={navbarOpen} toggle={setNavbarOpen}/>
                            </div>
                        </div>

                        <div className="hidden lg:ml-4 lg:flex gap-4 lg:items-center">
                            <LightDarkModeSwitch sunColor={sunColorDesktop} moonColor={moonColorDesktop} size={17}/>
                            {status === "loading" ? (<div/>) : (status === "authenticated" ? (
                                        <div className="relative flex-shrink-0">
                                            <div>
                                                <button
                                                    onBlur={() => setProfileClicked(false)}
                                                    onClick={toggleProfile}
                                                    className={"flex rounded-full border-2 text-sm focus:outline-none " + (profileClicked ? "border-gray-100" : "border-transparent")}
                                                    id="user-menu" aria-label="User menu" aria-haspopup="true">
                                                    <Image width={3024} height={4032} onContextMenu={(e) => {
                                                        e.preventDefault()
                                                    }} className="h-10 w-10 rounded-full object-cover object-top"
                                                           src={data?.user?.image ? data?.user?.image : "/profile/profileDefault.jpg"}
                                                           alt={"default"}/>
                                                </button>
                                            </div>
                                            {/* Settings Menu */}
                                            <div
                                                className={"absolute right-0 mt-2 z-10 origin-top-right rounded-md shadow-lg select-none " + (profileClicked ? 'block' : 'hidden')}>
                                                <div className="shadow-xl rounded-md bg-white overflow-hidden" role="menu"
                                                     aria-orientation="vertical" aria-labelledby="user-menu">
                                                    {profileSettings.map(item =>
                                                        (
                                                            <div
                                                                onMouseDown={ async (e) => {e.preventDefault(); await signOut()}}
                                                                className="grid grid-rows-1 grid-flow-col items-center pr-1 cursor-pointer transition-all duration-150 ease-in-out hover:bg-gray-100">
                                                                <div className="flex items-center justify-self-start">
                                                                    <p
                                                                        key={item.name}
                                                                        className="block px-3 py-2 text-sm leading-5 text-gray-700" role="menuitem"> {item.name}
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    className="flex items-center w-10 h-auto justify-center justify-self-end">
                                                                    {item.icon({className: `${item.size ? ("w-" + item.size + " h-" + item.size) : " w-6 h-6 "} text-sapphire`})}
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ) :
                                    (<div
                                        onClick={async () => {
                                            await router.push('/login')
                                        }}
                                        className="flex select-none gap-2 group cursor-pointer bg-gray-100 bg-opacity-10 hover:bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-full py-1 px-3 text-white justify-center items-center">
                                        <button className="font-light text-sm">Log in</button>
                                        <ArrowLink/>
                                    </div>)
                            )}

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;