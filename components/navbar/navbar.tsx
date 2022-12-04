import React, {useState} from 'react';
import {Fade as Hamburger} from 'hamburger-react'
import Notification from "./notification";

function Navbar() {
    const navItems = ["Dashboard", "Network", "Contact"];
    const settingsItems = ["Your Profile", "Settings", "Sign Out"];
    const [profileClicked, setProfileClicked] = useState(false);
    const [burgerMenuClicked, setburgerMenuClicked] = useState(false);
    const [notificationBellClicked, setNotificationBellClicked] = useState(false);
    const toggleBurgerMenu = () => setburgerMenuClicked(!burgerMenuClicked);
    const toggleProfile = () => setProfileClicked(!profileClicked);
    const toggleNotificationBellClicked = () => setNotificationBellClicked(!notificationBellClicked);

    return (
        <div>
            <nav className="bg-stiBlue shadow">
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="lg:hidden"/>
                        <div className="flex px-2 lg:px-0">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-96 py-8 w-auto cursor-pointer"
                                     src="/holistic-life-logo.png"
                                     alt=""/>
                            </div>
                            <div className="hidden lg:ml-6 lg:flex">
                                {navItems.map(item => <a key={item}
                                                         className="ml-8 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-base font-normal leading-5 text-white transition duration-150 ease-in-out hover:border-gray-300"
                                                         href="#">{item}</a>)}
                            </div>
                        </div>
                        {/* Burger Menu (hidden on lg and upwards) */}
                        <div onClick={toggleBurgerMenu} className="flex items-center lg:hidden">
                            <div className="text-white">
                                <Hamburger/>
                            </div>
                        </div>
                        <div className="hidden lg:ml-4 lg:flex lg:items-center">
                            {/* Notification Bell */}
                            <button
                                onBlur={() => setNotificationBellClicked(false)}
                                onClick={toggleNotificationBellClicked}
                                className={"flex-shrink-0 rounded-full border-2 border-transparent p-1 hover:text-gray-400 " + (notificationBellClicked ? "bg-gray-100 text-gray-500" : "bg-transparent text-gray-300")}
                                aria-label="Notifications">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                                </svg>
                            </button>
                            <div className="relative ml-4 flex-shrink-0">
                                <div>
                                    <button
                                        onBlur={() => setProfileClicked(false)}
                                        onClick={toggleProfile}
                                        className={"flex rounded-full border-2 text-sm focus:outline-none " + (profileClicked ? "border-gray-100" : "border-transparent")}
                                        id="user-menu" aria-label="User menu" aria-haspopup="true">
                                        <img className="h-8 w-8 rounded-full"
                                             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                             alt=""/>
                                    </button>
                                </div>
                                {/* Notification Menu */}
                                <div
                                    className={"absolute right-12 mt-2 z-10 w-96 origin-top-right rounded-md shadow-lg " + (notificationBellClicked ? 'block' : 'hidden')}>
                                    <div className="shadow-xs rounded-md bg-white py-1" role="menu"
                                         aria-orientation="vertical" aria-labelledby="user-menu">
                                        <Notification name="Emilia Gates" description="Neue Bewerbung hinzugefügt!"
                                                      imgsrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.2&amp;w=160&amp;h=160&amp;q=80"/>
                                        <Notification name="Francis Dera" description="Neue Bewerbung hinzugefügt!"
                                                      imgsrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8;auto=format&amp;fit=facearea&amp;facepad=2.2&amp;w=160&amp;h=160&amp;q=80"/>
                                    </div>
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
                    <div className="pt-2 pb-3">
                        {navItems.map(item => <a
                            key={item}
                            className="block py-2 pl-3 pr-4 text-base font-medium text-white transition duration-150 ease-in-out"
                            href="#">{item}</a>
                        )}

                    </div>
                    <div className="border-t border-gray-200 pt-4 pb-3">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full"
                                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                     alt=""/>
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium leading-6 text-white">Tom Cook</div>
                                <div className="text-sm font-medium leading-5 text-gray-300">tom@example.com</div>
                            </div>
                        </div>
                        <div className="mt-3">
                            {settingsItems.map(item =>
                                <a
                                    key={item}
                                    className="mt-1 block px-4 py-2 text-base font-medium text-white"
                                    href="#">{item}</a>
                            )}

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;