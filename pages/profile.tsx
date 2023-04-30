import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useEffect, useState} from "react";
import {TbGenderFemale, TbGenderMale} from 'react-icons/tb'
import {FaRegSave} from 'react-icons/fa';
import {useSession} from "next-auth/react";
import {updateUser, userDetails} from "../lib/userAPI";
import {profileForms} from "../types/User/Profile";
import LoadingSpinner from "../components/Loaders/LoadingSpinner";

function Profile() {
    const {data, status} = useSession<any>();
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    const [phoneFocus, setPhoneFocus] = useState<boolean>(false);
    const [profileData, setProfileData] = useState<profileForms>({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        birthday: new Date(),
        male: true,
        country: '',
        city: ''
    })

    useEffect(() => {
        if (data) {
            userDetails(data.user?.email).then((data) => {
                setProfileData({
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email,
                    phone: data.phone,
                    birthday: new Date(data.birthday != undefined ? data.birthday : new Date()),
                    male: data.male,
                    country: data.country,
                    city: data.city
                });
                setDataLoaded(true);
            });
        }

    }, [status]);

    const {firstname, lastname, email, phone, birthday, male, country, city} = profileData;

    const onChangeInput = (e: any) => {
        const {name, value} = e.target

        setProfileData({...profileData, [name]: value})
    }

    const onChangePhone = (phoneNumb: string) => {
        setProfileData({...profileData, phone: phoneNumb})
    }

    const onChangeBirthdate = (birthD: Date) => {
        setProfileData({...profileData, birthday: birthD})
    }

    const onGenderChange = (male: boolean) => {
        setProfileData({...profileData, male: male})
    }

    function onSubmitForm(e) {
        e.preventDefault();
        updateUser(data?.user.id, profileData).then((data) => {
            // TODO: show  toast
        });
    }

    return (
        <div className="flex justify-center items-center pb-12 pt-4">
            <div className="w-2/3 max-w-4xl mx-auto">
                <p className="font-bold text-xl py-2 pl-2 tracking-wide text-left">My Profile</p>
                {!dataLoaded ?
                    <div className="flex items-center justify-center w-full">
                        <LoadingSpinner/>
                    </div>
                    :
                    (status === "authenticated" ?
                            <div className="rounded-2xl border px-8 py-4 normalFont shadow">
                                <p className="text-2xl font-extrabold">Personal Information</p>
                                <form onSubmit={onSubmitForm} className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-5">
                                    <div className="flex flex-col gap-1">
                                        <p className="pl-1 text-gray-500">first name</p>
                                        <input name="firstname" value={firstname}
                                               onChange={onChangeInput}
                                               className="border rounded-lg focus:outline focus:outline-sky-500 px-2 py-1"
                                               type="text"/>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="pl-1 text-gray-500">last name</p>
                                        <input name="lastname" value={lastname}
                                               onChange={onChangeInput}
                                               className="border focus:outline focus:outline-sky-500 rounded-lg px-2 py-1"
                                               type="text"/>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="pl-1 text-gray-500">email</p>
                                        <input name="email" value={email} disabled={true}
                                               className="border focus:outline focus:outline-sky-500 rounded-lg px-2 py-1"
                                               type="text"/>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="pl-1 text-gray-500">phone</p>
                                        <PhoneInput
                                            className={"rounded-lg p-1 border " + (phoneFocus ? "border-sky-500" : "")}
                                            focusInputOnCountrySelection={true}
                                            onFocus={() => setPhoneFocus(true)}
                                            onBlur={() => setPhoneFocus(false)}
                                            international
                                            countryCallingCodeEditable={false}
                                            defaultCountry="AT"
                                            onChange={onChangePhone}
                                            value={phone}/>

                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="pl-1 text-gray-500">birthday</p>
                                        <div className="">
                                            <DatePicker
                                                className="border outline-none ring-0 focus:border-sky-500 px-2 py-1 rounded-lg h-fit w-full"
                                                selected={birthday} onChange={onChangeBirthdate}/>
                                        </div>

                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="pl-1 text-gray-500">sex</p>
                                        <div className="flex gap-3">
                                            <button type="button"
                                                    onClick={() => onGenderChange(true)}
                                                    className={"w-10 h-8 rounded-xl border flex items-center justify-center " + (male ? "bg-blue-200" : "")}>
                                                <TbGenderMale/></button>
                                            <button type="button"
                                                    onClick={() => onGenderChange(false)}
                                                    className={"w-10 h-8 rounded-xl border flex items-center justify-center " + (!male ? "bg-pink-200" : "")}>
                                                <TbGenderFemale/></button>

                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="pl-1 text-gray-500">country</p>
                                        <input onChange={onChangeInput} value={country} name="country"
                                               className="border focus:outline focus:outline-sky-500 rounded-lg px-2 py-1"
                                               type="text"/>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="pl-1 text-gray-500">city</p>
                                        <input onChange={onChangeInput} value={city} name="city"
                                               className="border focus:outline focus:outline-sky-500 rounded-lg px-2 py-1"
                                               type="text"/>
                                    </div>
                                    <div className="flex justify-end md:col-start-2">
                                        <button type="submit"
                                                className="rounded-lg shadow-lg px-3 py-1 text-white bg-sky-700 flex justify-center items-center gap-2">
                                            <FaRegSave className="mb-0.5"/>Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                            :
                            <p>Something went wrong!</p>
                    )}

            </div>
        </div>
    )
}

export default Profile;