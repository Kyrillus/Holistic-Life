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
            <div className="flex justify-center py-10 px-4">
                <div className="flex-col flex gap-4">
                    <div className="flex">
                        <div className="flex w-full gap-5">
                            <img className="h-32 w-32 rounded-full object-cover" src="/profile/reyan.jpg"/>
                            <div className="flex flex-col pt-4">
                                <p className="font-extrabold">Reyan Zein</p>
                                <div className="pt-4">
                                    <p className="text-sm">Founder &amp; CEO</p>
                                    <p className="text-sm">holistic life</p>
                                    <p className="text-sm">raising consciousness &amp; awareness</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">

                        </div>
                    </div>
                    <div className="">
                        <button className="w-96 h-12 px-5 rounded-full border text-gray-500">
                            <p className="font-extrabold text-black">Exchange Contact</p>
                        </button>
                    </div>
                    <div className="flex flex-col gap-4 pt-4">
                        {socialIcons.map(item =>
                            <div
                                className="flex w-96 h-20 items-center cursor-pointer border-[0.15rem] border-aero hover:bg-uranianBlue  border rounded-3xl py-4 px-4">
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