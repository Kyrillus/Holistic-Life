import React, {useState} from 'react';
import {socialIcons} from "../types/vars";
import clsx from "clsx";
import Modal from "../components/modal/ContactModal";

function Contact() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className="select-none">
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <div className="flex justify-center py-10 px-4 dark:text-white select-none">
                <div className="flex-col items-center flex gap-4">
                    <div className="flex justify-center">
                        <div className="flex justify-center gap-5">
                            <div className="flex w-1/3 md:w-auto">
                                <div className="rounded-full">
                                    <img onContextMenu={(e) => {
                                        e.preventDefault()
                                    }} className="md:w-32 md:w-32 w-24 h-24 rounded-full object-cover object-top"
                                           src="/profile/reyan.jpg" alt={"reyan"}/>
                                </div>
                            </div>
                            <div className="flex flex-col w-52 justify-center md:w-full pt-2">
                                <p className="font-extrabold">Reyan Zein</p>
                                <div className="pt-4">
                                    <p className="text-sm">Founder &amp; CEO</p>
                                    <p className="text-sm">holistic life</p>
                                    <p className="text-sm">raising consciousness &amp; awareness</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <button className="w-[20rem] sm:w-[22rem] md:w-96 h-12 px-5 rounded-full border text-gray-500">
                            <p className="font-extrabold text-black dark:text-white">Exchange Contact</p>
                        </button>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-4 pt-4">
                        {socialIcons.map(item =>
                            <a key={item.name} href={item.link} target={item.newTab ? "_blank" : ""}>
                                <div
                                    className="flex w-[20rem] sm:w-[22rem] md:w-96 h-20 group overflow-hidden dark:hover:text-black items-center cursor-pointer border-[0.15rem] border-aero hover:bg-uranianBlue  border rounded-3xl py-4 px-4">
                                    <div className={clsx(item.height, "w-16 flex justify-center")}>
                                        <img className={clsx(item.height, "w-auto")}
                                             src={"/social-icons/" + item.file + ".png"}/>
                                    </div>
                                    <div className="flex grow justify-center">
                                        <p className="font-medium group-hover:font-semibold dark:group-hover:font-extrabold">{item.name}</p>
                                    </div>

                                </div>
                            </a>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;