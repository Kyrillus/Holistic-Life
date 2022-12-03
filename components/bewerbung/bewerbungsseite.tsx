import React from 'react';

function Bewerbungsseite() {
    const prop = "Holistic Life";
    return (
        <div>
            <div className="relative bg-white overflow-hidden">
                <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
                    <div className="relative h-full max-w-screen-xl mx-auto">
                        <svg
                            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                            width="404" height="784" fill="none" viewBox="0 0 404 784">
                            <defs>
                                <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20"
                                         patternUnits="userSpaceOnUse">
                                    <rect className="text-gray-200" x="0" y="0" width="4" height="4"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
                        </svg>
                        <svg
                            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                            width="404" height="784" fill="none" viewBox="0 0 404 784">
                            <defs>
                                <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20"
                                         patternUnits="userSpaceOnUse">
                                    <rect className="text-gray-200" x="0" y="0" width="4" height="4"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"/>
                        </svg>
                    </div>
                </div>
                <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
                        <div className="text-center">
                            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                                <span className="mr-1">Welcome to </span>
                                <span className="text-indigo-600">{prop}
                                </span>
                            </h2>
                            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">We're changing the future.
                                </p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Bewerbungsseite;