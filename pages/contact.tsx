const socialIcons = [
    {file: "google_contact", name:"contact", height: "14"},
    {file: "gmail", name:"e-mail", height: "10"},
    {file: "linkedin", name:"linkedin", height: "12"}
    // {file: "whatsapp", name:"whatsapp", height: "18"},
    // {file: "paypal", name:"paypal", height: "12"},
    // {file: "patreon", name:"patreon", height: "12"},
    // {file: "donate", name:"donate", height: "18"}
    ];

import React from 'react';
function Contact() {

    return (
        <div className="">
            <div className="flex justify-center py-10 px-4 dark:text-white select-none">
                <div className="flex-col items-center flex gap-4">
                    <div className="flex justify-center">
                        <div className="flex gap-5">
                            <div className="flex w-1/3 md:w-auto">
                                <img className="md:w-32 md:w-32 w-24 h-24 rounded-full object-cover object-top" src="/profile/reyan.jpg"/>
                            </div>
                            <div className="flex flex-col justify-center w-2/3 md:w-full pt-2">
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
                            <div
                                key={item.name}
                                className="flex w-[20rem] sm:w-[22rem] md:w-96 h-20 overflow-hidden dark:hover:text-black items-center cursor-pointer border-[0.15rem] border-aero hover:bg-uranianBlue  border rounded-3xl py-4 px-4">
                                <div className="w-16 flex justify-center">
                                    <img className={"h-" + item.height + " w-auto"}
                                         src={"/social-icons/" + item.file + ".png"}/>
                                </div>
                                <div className="flex grow justify-center">
                                    <p className="font-normal">{item.name}</p>
                                </div>

                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;