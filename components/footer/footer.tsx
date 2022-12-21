import React from 'react';
import Image from "next/image";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="flex flex-row mt-auto dark:bg-gray-900 h-24 w-full items-center justify-center border-t border-uranianBlue">
                <p className="text-gray-500 dark:text-white text-center">
                    © {currentYear} by RZ Productions. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}

export default Footer;