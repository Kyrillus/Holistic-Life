import React from 'react';
import Image from "next/image";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="flex flex-row mt-auto h-24 w-full items-center justify-center border-t">
                <p className="text-gray-500">
                    © {currentYear} by RZ Productions. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}

export default Footer;