import React, {useEffect, useState} from 'react';
import {Fade as Hamburger} from 'hamburger-react'
import {useRouter} from "next/router";
import LightDarkModeSwitch from "./lightDarkModeSwitch";
import {moonColorDesktop, navItems, sunColorDesktop} from "../../types/vars";

function Navbar({navbarOpen, setNavbarOpen}: { navbarOpen: any, setNavbarOpen: any }) {
    const settingsItems = ["Your Profile", "Settings", "Sign Out"];
    const [profileClicked, setProfileClicked] = useState(false);
    const toggleBurgerMenu = () => setNavbarOpen(!navbarOpen);
    const toggleProfile = () => setProfileClicked(!profileClicked);

    const router = useRouter();

    return (
        <div>
            <nav className="dark:bg-transparent bg-prussianBlue">
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
                                }} className="cursor-pointer font-regular text-white text-2xl header select-none">holistic life</h1>
                            </div>
                        </div>
                        {/* Menu Buttons */}
                        <div className="hidden lg:flex lg:items-center gap-10">
                            {navItems.map(item => <a key={item.name}
                                                     className="cursor-pointer inline-flex items-center h-[3.939rem] border-b-2 border-transparent px-1 pt-1 text-base font-normal leading-5 text-white transition duration-150 ease-in-out hover:border-white dark:hover:border-gray-300"
                                                     onClick={async () => {await router.push(item.path)}}>{item.name}</a>)}
                        </div>

                        {/* Burger Menu (hidden on lg and upwards) */}
                        <div onClick={toggleBurgerMenu} className="flex items-center z-[999] select-none lg:hidden">
                            <div className="text-white">
                                <Hamburger toggled={navbarOpen} toggle={setNavbarOpen}/>
                            </div>
                        </div>

                        <div className="hidden lg:ml-4 lg:flex gap-4 lg:items-center">
                            <LightDarkModeSwitch sunColor={sunColorDesktop} moonColor={moonColorDesktop} size={17}/>
                            <div className="relative flex-shrink-0">
                                <div>
                                    <button
                                        onBlur={() => setProfileClicked(false)}
                                        onClick={toggleProfile}
                                        className={"flex rounded-full border-2 text-sm focus:outline-none " + (profileClicked ? "border-gray-100" : "border-transparent")}
                                        id="user-menu" aria-label="User menu" aria-haspopup="true">
                                        <img className="h-10 w-10 rounded-full object-cover object-top"
                                             src="/profile/reyan.jpg"
                                             alt=""/>
                                    </button>
                                </div>
                                {/* Settings Menu */}
                                <div
                                    className={"absolute right-0 mt-2 z-10 w-48 origin-top-right rounded-md shadow-lg " + (profileClicked ? 'block' : 'hidden')}>
                                    <div className="shadow-xs rounded-md bg-white py-1" role="menu"
                                         aria-orientation="vertical" aria-labelledby="user-menu">
                                        {settingsItems.map(item =>
                                            <a
                                                key={item}
                                                className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                                href="#" role="menuitem"> {item}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;