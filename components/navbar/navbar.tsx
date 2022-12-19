import React, {useState} from 'react';
import {Fade as Hamburger} from 'hamburger-react'
import {useRouter} from "next/router";

function Navbar() {
    const navItems = [
        {name: "Dashboard", path:"/dashboard"},
        {name:"Network", path: "/network"},
        {name:"Contact", path: "/contact"}
    ];
    const settingsItems = ["Your Profile", "Settings", "Sign Out"];
    const [profileClicked, setProfileClicked] = useState(false);
    const [burgerMenuClicked, setburgerMenuClicked] = useState(false);
    const [notificationBellClicked, setNotificationBellClicked] = useState(false);
    const toggleBurgerMenu = () => setburgerMenuClicked(!burgerMenuClicked);
    const toggleProfile = () => setProfileClicked(!profileClicked);
    const toggleNotificationBellClicked = () => setNotificationBellClicked(!notificationBellClicked);

    const router = useRouter();

    return (
        <div>
            <nav className="bg-prussianBlue shadow">
                <div className="px-6 lg:px-32">
                    <div className="flex h-16 justify-between">
                        <div className="lg:hidden"/>
                        <div className="flex px-2 lg:px-0">
                            <div className="flex flex-shrink-0 items-center">
                                <h1 onClick={async () => await router.push('/')} className="cursor-pointer font-regular text-white text-2xl header select-none">holistic life</h1>
                            </div>
                        </div>
                        {/* Menu Buttons */}
                        <div className="hidden lg:flex gap-10">
                            {navItems.map(item => <a key={item.name}
                                                     className="cursor-pointer inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-base font-normal leading-5 text-white transition duration-150 ease-in-out hover:border-gray-300"
                                                     onClick={async () => {await router.push(item.path)}}>{item.name}</a>)}
                        </div>
                        {/* Burger Menu (hidden on lg and upwards) */}
                        <div onClick={toggleBurgerMenu} className="flex items-center lg:hidden">
                            <div className="text-white">
                                <Hamburger/>
                            </div>
                        </div>
                        <div className="hidden lg:ml-4 lg:flex lg:items-center">
                            {/* Notification Bell */}
                            <div className="relative ml-4 flex-shrink-0">
                                <div>
                                    <button
                                        onBlur={() => setProfileClicked(false)}
                                        onClick={toggleProfile}
                                        className={"flex rounded-full border-2 text-sm focus:outline-none " + (profileClicked ? "border-gray-100" : "border-transparent")}
                                        id="user-menu" aria-label="User menu" aria-haspopup="true">
                                        <img className="h-10 w-10 rounded-full object-cover"
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
                <div className={"lg:hidden  " + (burgerMenuClicked ? 'block' : 'hidden')}>
                    <div className="pt-2 pb-3 cursor-pointer">
                        {navItems.map(item => <a
                            key={item.name}
                            className="block py-2 pl-3 pr-4 text-base font-medium text-white transition duration-150 ease-in-out"
                            onClick={async () => {await router.push(item.path)}}>{item.name}</a>
                        )}

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;