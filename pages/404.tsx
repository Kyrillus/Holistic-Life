import React from 'react';
import Link from 'next/link'

function FourOhFour() {
    return (
        <div className="flex justify-center items-center min-h-[70vh] dark:text-white">
            <div className="flex flex-col gap-4">
                <p>404 | Page not found!</p>
                <div className="flex items-center gap-1 rounded-full border px-4 py-1 shadow">
                    <Link href="/">
                        <p>
                            Back to Home
                        </p>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default FourOhFour;