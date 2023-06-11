import React, {useState} from 'react';

const FormPage = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const attributionValues =
        ["friends",
            "member of holistic life",
            "seminar or workshop",
            "blog, article or publication",
            "linkedin",
            "youtube",
        ];

    const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedOption(event.target.value);
    }

    const otherChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        if (event.target.value.length > 0) {
            setSelectedOption("other");
        } else {
            setSelectedOption("");
        }
    }

    return (
        <section className="relative overflow-hidden py-16 select-none">
            <div className="container relative z-10 mx-auto px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6">
                        <form autoComplete="off"
                              className="mx-auto rounded-xl py-14 text-center md:dark:bg-slate-800 shadow-gray-400 dark:shadow-black md:shadow-2xl md:max-w-xl">
                            <h2 className="font-heading pb-4 text-3xl font-bold text-prussianBlue dark:text-white px-4 md:px-16">How
                                did you discover holistic life?</h2>
                            <div className="flex w-full justify-center pt-4">
                                <div className="flex flex-col justify-self-center self-center items-center">
                                    <div className="flex flex-col items-start">
                                        {attributionValues.map((value, index) => {
                                            return (
                                                <div className="my-2" key={index}>
                                                    <input
                                                        id={value}
                                                        type="radio"
                                                        value={value}
                                                        checked={selectedOption === value}
                                                        onChange={handleOptionChange}
                                                        className="mr-2"/>
                                                    <label htmlFor={value}
                                                           className="text-base dark:text-white">{value}</label>
                                                </div>
                                            )
                                        })}
                                        <div className="my-2" key="other">
                                            <input
                                                id="other"
                                                type="radio"
                                                value="other"
                                                checked={selectedOption === "other"}
                                                onChange={handleOptionChange}
                                                className="mr-2"/>
                                            <input type="text" onChange={(e) => otherChange(e)}
                                                   className="text-base dark:text-white border rounded px-2 py-1 focus:outline-0"
                                                   placeholder="other"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-2/3 mx-auto pt-8">
                                <div className="group relative">
                                    <div
                                        className="absolute top-0 left-0 h-full w-full rounded-lg bg-white opacity-0  duration-300 ease-out group-hover:opacity-50"/>
                                    <button
                                        className="font-heading w-full overflow-hidden rounded-md  text-base font-medium text-black">
                                        <div
                                            className="relative overflow-hidden rounded-md border bg-transparent dark:bg-gray-900 bg-uranianBlue py-4 px-9">
                                            <div
                                                className="absolute top-0 left-0 h-full w-full -translate-x-full transform bg-gradient-to-r from-blueCrayola via-sky-500 to-fluorescentBlue transition duration-500 ease-in-out group-hover:-translate-x-0"/>
                                            <p className="relative z-10 font-medium dark:text-white group-hover:text-white transition-[color] duration-1000 group-hover:font-extrabold">Submit</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FormPage;
