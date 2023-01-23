import React, {useState} from 'react';
import axios from 'axios';

function Modal({modalOpen, setModalOpen}: { modalOpen: any, setModalOpen: any }) {
    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [info, setInfo] = useState("");
    const [sending, setSending] = useState(false);
    const [error, setError] = useState("");

    const submitContact = async () => {
        setSending(true);
        try {
            await axios.post('/api/exchangeContact', {name: name, tel: tel, addInfo: info});
            setModalOpen(false);
        } catch (error) {
            setError("unexpected error");
        }
        setSending(false);
    }

    return (
        <>
            {modalOpen && (
                <div
                    className={"absolute w-full transform h-screen bg-gray-900 bg-opacity-10 transition-all delay-500 backdrop-filter backdrop-blur-sm"}>
                    <div
                        className="relative top-20 max-w-sm sm:w-96 h-96 w-[80vw] m-auto dark:bg-prussianBlue bg-white rounded-lg">
                        <button onClick={() => setModalOpen(false)} className="absolute top-0 right-0 p-2">
                            <svg className="fill-current dark:text-white text-sapphire"
                                 xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 18 18">
                                <path
                                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                            </svg>
                        </button>
                        <form onSubmit={submitContact} className="flex flex-col p-10 justify-center align-items-center space-y-7">
                            <input required={true} onChange={(e) => setName(e.target.value)}
                                   className="border-2 dark:bg-white border-gray-400 p-2 text-black dark:focus:border-black focus:border-sapphire outline-none rounded-xl"
                                   placeholder="Max Muster" type="text"/>
                            <input onChange={(e) => setTel(e.target.value)}
                                   className="border-2 dark:bg-white border-gray-400 p-2 text-black dark:focus:border-black focus:border-sapphire outline-none rounded-xl"
                                   inputMode="tel" placeholder="+43 676 401022" type="tel"/>
                            <textarea onChange={(e) => setInfo(e.target.value)}
                                      placeholder="Additional Info"
                                      className="border-2 text-black dark:focus:border-black dark:bg-white p-2 border-gray-400 focus:border-sapphire outline-none rounded-xl"/>
                            <button
                                    className="flex gap-3 flex-row justify-center align-center border-2 dark:bg-gray-800 text-white bg-prussianBlue border-gray-400 py-2 rounded-xl">Submit
                                <svg aria-hidden="true"
                                     className={"w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-aero " + (sending ? "" : "hidden")}
                                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"/>
                                </svg>
                            </button>
                            {error.length > 0 && <p className="text-center text-red-600">{error}</p>}
                        </form>

                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;