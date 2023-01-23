import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Modal({modalOpen, setModalOpen}: { modalOpen: any, setModalOpen: any }) {

    return (
        <>
            {modalOpen && (
                <div className="absolute w-screen h-screen  bg-gray-900 bg-opacity-75">
                    <div onBlur={() => setModalOpen(false)} className="relative w-96 h-96 m-auto bg-white rounded-lg">
                        <button onClick={() => setModalOpen(false)} className="absolute top-0 right-0 p-2">
                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;