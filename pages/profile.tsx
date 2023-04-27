import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useEffect, useState} from "react";
import {TbGenderFemale, TbGenderMale} from 'react-icons/tb'
import {FaRegSave} from 'react-icons/fa';
import {useSession} from "next-auth/react";
import {updateUser} from "../lib/userAPI";

function Profile() {
    const [phoneNumber, setPhoneNumber] = useState<any>();
    const [male, setMale] = useState<boolean>(true);
    const [startDate, setStartDate] = useState(new Date());
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const {data, status} = useSession<any>();

    useEffect(() => {
        if (data) {
            setFirstname(data.user?.firstname);
            setLastname(data.user?.lastname);
            setEmail(data.user?.email);
        }

    }, [status]);

    function saveUser() {
        updateUser(data, firstname, lastname);
    }

    return (
        <div className="flex justify-center items-center pb-12 pt-4">
            <div className="w-2/3 max-w-4xl">
                <p className="font-bold text-xl py-2 pl-2 tracking-wide">My Profile</p>
                <div className="rounded-2xl border px-8 py-4 normalFont shadow">
                    <p className="text-2xl font-extrabold">Personal Information</p>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-5">
                        <div className="flex flex-col gap-1">
                            <p className="pl-1 text-gray-500">first name</p>
                            <input value={firstname} onChange={(e) => setFirstname(e.target.value)}
                                   className="border rounded-lg focus:outline focus:outline-sky-500 px-2 py-1"
                                   type="text"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="pl-1 text-gray-500">last name</p>
                            <input value={lastname} onChange={(e) => setLastname(e.target.value)}
                                   className="border focus:outline focus:outline-sky-500 rounded-lg px-2 py-1"
                                   type="text"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="pl-1 text-gray-500">email</p>
                            <input value={email} onChange={(e) => setEmail(e.target.value)}
                                   className="border focus:outline focus:outline-sky-500 rounded-lg px-2 py-1"
                                   type="text"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="pl-1 text-gray-500">phone</p>
                            <PhoneInput
                                className="rounded-lg p-1 border"
                                focusInputOnCountrySelection={true}
                                international
                                countryCallingCodeEditable={false}
                                defaultCountry="AT"
                                value={phoneNumber}
                                onChange={setPhoneNumber}/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="pl-1 text-gray-500">birthday</p>
                            <DatePicker
                                className="border focus:outline focus:outline-sky-500 rounded-lg px-2 py-1 w-full"
                                selected={startDate} onChange={(date) => setStartDate(date)}/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="pl-1 text-gray-500">sex</p>
                            <div className="flex gap-3">
                                <button onClick={() => setMale(true)}
                                        className={"w-10 h-8 rounded-xl border flex items-center justify-center " + (male ? "bg-blue-200" : "")}>
                                    <TbGenderMale/></button>
                                <button onClick={() => setMale(false)}
                                        className={"w-10 h-8 rounded-xl border flex items-center justify-center " + (!male ? "bg-pink-200" : "")}>
                                    <TbGenderFemale/></button>

                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="pl-1 text-gray-500">country</p>
                            <input className="border focus:outline focus:outline-sky-500 rounded-lg px-2 py-1"
                                   type="text"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="pl-1 text-gray-500">city</p>
                            <input className="border focus:outline focus:outline-sky-500 rounded-lg px-2 py-1"
                                   type="text"/>
                        </div>
                        <div onClick={() => saveUser()} className="flex justify-end md:col-start-2">
                            <button
                                className="rounded-lg shadow-lg px-3 py-1 text-white bg-sky-700 flex justify-center items-center gap-2">
                                <FaRegSave className="mb-0.5"/>Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;