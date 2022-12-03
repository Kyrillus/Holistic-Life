import React from 'react';

function Notification({name, imgsrc, description}: any) {
    return (
        <div className="pointer-events-auto cursor-default w-full max-w-md rounded-lg bg-white">
                <div className="shadow-xs flex">
                    <div className="w-0 flex-1 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                                <img className="h-10 w-10 rounded-full cursor-pointer"
                                     src={imgsrc}
                                     alt=""/>
                            </div>
                            <div className="ml-3 w-0 flex-1">
                                <p className="text-sm font-medium leading-5 text-gray-900 cursor-pointer">{name}</p>
                                <p className="mt-1 text-sm leading-5 text-gray-500">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-gray-200">
                        <button
                            className="focus:shadow-outline-blue -ml-px flex w-full items-center justify-center rounded-r-lg border border-transparent p-4 text-sm font-medium leading-5 text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:border-blue-300 focus:outline-none active:bg-gray-50 active:text-indigo-700">View
                        </button>
                    </div>
                </div>
            </div>
    );
}

export default Notification;