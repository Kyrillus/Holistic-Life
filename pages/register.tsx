import React, {useState} from 'react';
import Link from "next/link";
import {legalLinks} from "../types/vars";
import {getSession, signIn} from "next-auth/react";
import {registerUser, updateUserAttribution, userExists} from "../lib/userAPI";
import {Switch} from "@chakra-ui/react";
import {useRouter} from "next/router";
import LoadingSpinner from "../components/Loaders/LoadingSpinner";

function Register() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [attribution, setAttribution] = useState(false);
    const [registerLoading, setRegisterLoading] = useState(false);
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState('');
    const [other, setOther] = useState('');
    const attributionValues =
        [
            "friends",
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
            setOther(event.target.value);
        } else {
            setSelectedOption("");
            setOther("");
        }
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters");
            return;
        }
        userExists(email).then(res => {
            if (res) {
                setErrorMessage("Email is already taken");
            } else {
                setAttribution(true);
            }
        });
    }

    const attributionSubmit = (e: any) => {
        e.preventDefault();
        if (selectedOption.length > 0) {
            setRegisterLoading(true);
            registerUser(firstname, lastname, email, password)
                .then(async (createdUser) => {
                    setRegisterLoading(false);
                    updateUserAttribution(createdUser.user.id, selectedOption === "other" ? other : selectedOption)
                    await router.push({pathname: "/email-confirmation"});
                }).catch(async (error) => {
                setRegisterLoading(false);
                const err = await error;
                setErrorMessage("An error occurred. Please try again later.");
            });
        }
    };

    return (
        <div>
            {!attribution ?
                <section className="relative overflow-hidden py-16 select-none">
                    <div className="container relative z-10 mx-auto px-4">
                        <div className="-m-6 flex flex-wrap">
                            <div className="w-full p-6">
                                <form onSubmit={(e) => onSubmit(e)} autoComplete="off"
                                      className="mx-auto rounded-xl py-14 text-center md:dark:bg-slate-800 shadow-gray-400 dark:shadow-black md:shadow-2xl md:max-w-xl">
                                    <h2 className="font-heading pb-4 text-3xl font-bold text-prussianBlue dark:text-white">Create
                                        your
                                        account</h2>
                                    <div className=" mx-auto mb-5 flex max-w-md flex-wrap">
                                        <div className="flex flex-row">
                                            <div className="p-2 pt-4 w-1/2">
                                                <p className="p-1 text-start font-medium">First Name</p>
                                                <input
                                                    onChange={(e) => setFirstname(e.target.value)}
                                                    className="w-full dark:bg-black monoFont placeholder:opacity-90 hover:placeholder:opacity-70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-500 placeholder-gray-500 hover:border-sky-500 outline-none focus:border-sky-500"
                                                    required={true} type="text" placeholder="first name"
                                                    name="firstname"/>
                                            </div>
                                            <div className="p-2 pt-4 w-1/2">
                                                <p className="p-1 text-start font-medium">Last Name</p>
                                                <input
                                                    onChange={(e) => setLastname(e.target.value)}
                                                    className="w-full dark:bg-black monoFont placeholder:opacity-90 hover:placeholder:opacity-70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-500 placeholder-gray-500 hover:border-sky-500 outline-none focus:border-sky-500"
                                                    required={true} type="text" placeholder="last name"
                                                    name="lastname"/>
                                            </div>
                                        </div>

                                        <div className="w-full p-2">
                                            <p className="p-1 text-start font-medium">E-Mail</p>
                                            <input
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full dark:bg-black monoFont placeholder:opacity-90 hover:placeholder:opacity-70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-500 placeholder-gray-500 hover:border-sky-500 outline-none focus:border-sky-500"
                                                required={true} type="email" autoComplete="false"
                                                placeholder="email address"
                                                name="email"/>
                                        </div>
                                        <div className="w-full p-2">
                                            <div className="flex justify-between items-center">
                                                <p className="p-1 text-start font-medium">Password</p>
                                            </div>
                                            <input
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full dark:bg-black monoFont placeholder:opacity-90 hover:placeholder:opacity-70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-500 placeholder-gray-500 hover:border-sky-500 outline-none focus:border-sky-500"
                                                required={true} type="password" minLength={6} autoComplete="false"
                                                placeholder="password"
                                                name="password"/>
                                        </div>
                                        <div className="w-full p-2">
                                            <div className="flex justify-between items-center">
                                                <p className="p-1 text-start font-medium">Confirm Password</p>
                                            </div>
                                            <input
                                                onChange={(e) => setCPassword(e.target.value)}
                                                pattern={password}
                                                title="Passwords do not match."
                                                className="w-full dark:bg-black monoFont placeholder:opacity-90 hover:placeholder:opacity-70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-500 placeholder-gray-500 hover:border-sky-500 outline-none focus:border-sky-500"
                                                required={true} type="password" autoComplete="false"
                                                placeholder="confirm"
                                                name="confirm"/>
                                        </div>
                                        {errorMessage.length > 0 &&
                                            <div className="w-full p-2 text-sm text-red-600">
                                                {errorMessage}
                                            </div>
                                        }

                                        <div className="w-full p-2">
                                            <div className="group relative">
                                                <div
                                                    className="absolute top-0 left-0 h-full w-full rounded-lg bg-white opacity-0  duration-300 ease-out group-hover:opacity-50"/>
                                                <button
                                                    className="font-heading w-full overflow-hidden rounded-md  text-base font-medium text-black">
                                                    <div
                                                        className="relative overflow-hidden rounded-md border bg-transparent dark:bg-gray-900 bg-uranianBlue py-4 px-9">
                                                        <div
                                                            className="absolute top-0 left-0 h-full w-full -translate-x-full transform bg-gradient-to-r from-blueCrayola via-sky-500 to-fluorescentBlue transition duration-500 ease-in-out group-hover:-translate-x-0"/>
                                                        <p className="relative z-10 font-medium dark:text-white  group-hover:text-white transition-[color] duration-1000 group-hover:font-extrabold">Create</p>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t p-2 pt-6 w-5/6 mx-auto px-2 -m-2"/>
                                    <div className="px-20">
                                        <p className="font-regular text-sm text-gray-600 dark:text-white">
                                            <span>By clicking “Create Account”, you agree to our <br/></span>
                                            {legalLinks.map(((legal, index) =>
                                                    <span key={"link-" + index}>
                                                <Link className="text-blueCrayola rounded-lg font-bold"
                                                      href={legal.href}> {legal.name}</Link>
                                                        {index === legalLinks.length - 1 ? "." : (index === legalLinks.length - 2 ? " and" : ",")}
                                            </span>
                                            ))}
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <section className="relative overflow-hidden py-16 select-none">
                    <div className="container relative z-10 mx-auto px-4">
                        {registerLoading ? <LoadingSpinner /> : <><div className="-m-6 flex flex-wrap">
                            <div className="w-full p-6">
                                <form autoComplete="off"
                                      onSubmit={(e) => attributionSubmit(e)}
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
                                                {errorMessage.length > 0 &&
                                                    <div className="w-full p-2 text-sm text-red-600">
                                                        {errorMessage}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-2/3 mx-auto pt-8">
                                        <div className="group relative">
                                            <div
                                                className="absolute top-0 left-0 h-full w-full rounded-lg bg-white opacity-0  duration-300 ease-out group-hover:opacity-50"/>
                                            <button type="submit"
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
                        </div></>}

                    </div>
                </section>}

        </div>

    );
}

export default Register;

export async function getServerSideProps(context: any) {
    const session = await getSession(context);

    if (session) {
        context.res.writeHead(302, {Location: '/'});
        context.res.end();
        return {props: session};
    }
    return {
        props: {session},
    };
}