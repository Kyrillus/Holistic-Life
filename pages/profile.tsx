import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, {useEffect, useState} from "react";
import {TbGenderFemale, TbGenderMale} from 'react-icons/tb'
import {FaRegSave} from 'react-icons/fa';
import {useSession} from "next-auth/react";
import {updateUser, userDetails} from "../lib/userAPI";
import {profileForms} from "../types/User/Profile";
import {Box, Skeleton, Switch, useToast} from '@chakra-ui/react'
import {BsCheckCircleFill} from "react-icons/bs";
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
        city: '',
        mailerList: true,
    })

    const toast = useToast();

    useEffect(() => {
        if (data) {
            console.log(data);
            userDetails(data.user?.email).then((data) => {
                setProfileData({
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email,
                    phone: data.phone,
                    birthday: new Date(data.birthday != undefined ? data.birthday : new Date()),
                    male: data.male,
                    country: data.country,
                    city: data.city,
                    mailerList: data.mailerList,
                });
                setDataLoaded(true);
            });
        }

    }, [status]);

    const {firstname, lastname, email, phone, birthday, male, country, city, mailerList} = profileData;

    const [update, setUpdate] = useState(false);

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

    const onChangeMailingList = (e: any) => {
        setProfileData({...profileData, mailerList: e.target.checked})
    }

    function onSubmitForm(e: any) {
        setUpdate(true);
        e.preventDefault();
        updateUser(data?.user.id, profileData).then((data) => {
            setUpdate(false);
            toast({
                position: 'top-right',
                duration: 2500,
                 render: () => (
                        <Box color='black' p={3} bg='white' className="rounded shadow">
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <BsCheckCircleFill color="green" size="20"/>
                                <span>successfully updated profile</span>
                            </div>
                        </Box>
                    ),
            })
        });
    }

    return (
        <div className="flex justify-center items-center pb-12 pt-4">

            <div className="w-2/3 max-w-4xl mx-auto">
                <p className="font-bold text-xl py-2 pl-2 tracking-wide text-left dark:text-white">My Profile</p>
                {(status === "authenticated" ?
                            <div className="rounded-2xl border px-8 py-4 normalFont shadow">
                                <p className="text-2xl font-extrabold dark:text-white">Personal Information</p>
                                <form onSubmit={onSubmitForm} className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-5">
                                    <div className="flex flex-col gap-1">
                                        <p className="pl-1 text-gray-500 dark:text-white">first name</p>
                                        <Skeleton isLoaded={dataLoaded}>
                                            <input name="firstname" value={firstname}
                                                   onChange={onChangeInput}
                                                   className="border rounded-lg focus:outline focus:outline-sky-500 px-2 py-1 w-full"
                                                   type="text"/>
                                        </Skeleton>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="pl-1 text-gray-500 dark:text-white">last name</p>
                                        <Skeleton isLoaded={dataLoaded}>
                                            <input name="lastname" value={lastname}
                                                   onChange={onChangeInput}
                                                   className="border focus:outline focus:outline-sky-500 rounded-lg px-2 py-1 w-full"
                                                   type="text"/>
                                        </Skeleton>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="pl-1 text-gray-500 dark:text-white">email</p>
                                        <Skeleton isLoaded={dataLoaded}>
                                            <input name="email" value={email} disabled={true}
                                                   className="border focus:outline focus:outline-sky-500 rounded-lg px-2 py-1 w-full"
                                                   type="text"/>
                                        </Skeleton>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="pl-1 text-gray-500 dark:text-white">phone</p>
                                        <Skeleton isLoaded={dataLoaded}>
                                            <PhoneInput
                                                className={"rounded-lg p-1 border w-full bg-white " + (phoneFocus ? "border-sky-500" : "")}
                                                focusInputOnCountrySelection={true}
                                                onFocus={() => setPhoneFocus(true)}
                                                onBlur={() => setPhoneFocus(false)}
                                                international
                                                countryCallingCodeEditable={false}
                                                defaultCountry="AT"
                                                onChange={onChangePhone}
                                                value={phone}/>
                                        </Skeleton>

                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="pl-1 text-gray-500 dark:text-white">birthday</p>
                                        <Skeleton isLoaded={dataLoaded}>
                                            <div className="">
                                                <DatePicker
                                                    className="border outline-none ring-0 focus:border-sky-500 px-2 py-1 rounded-lg h-fit w-full"
                                                    selected={birthday} onChange={onChangeBirthdate}/>
                                            </div>
                                        </Skeleton>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="pl-1 text-gray-500 dark:text-white">sex</p>
                                        <Skeleton isLoaded={dataLoaded}>
                                            <div className="flex gap-3">
                                                <button type="button"
                                                        onClick={() => onGenderChange(true)}
                                                        className={"w-10 h-8 rounded-xl border flex items-center justify-center " + (male ? "bg-blue-200" : "dark:bg-gray-50")}>
                                                    <TbGenderMale/></button>
                                                <button type="button"
                                                        onClick={() => onGenderChange(false)}
                                                        className={"w-10 h-8 rounded-xl border flex items-center justify-center " + (!male ? "bg-pink-200" : "dark:bg-gray-50")}>
                                                    <TbGenderFemale/></button>

                                            </div>
                                        </Skeleton>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="pl-1 text-gray-500 dark:text-white">country</p>
                                        <Skeleton isLoaded={dataLoaded}>
                                            <input onChange={onChangeInput} value={country} name="country"
                                                   className="border focus:outline focus:outline-sky-500 rounded-lg px-2 py-1 w-full"
                                                   type="text"/>
                                        </Skeleton>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="pl-1 text-gray-500 dark:text-white">city</p>
                                        <Skeleton isLoaded={dataLoaded}>
                                            <input onChange={onChangeInput} value={city} name="city"
                                                   className="border focus:outline focus:outline-sky-500 rounded-lg px-2 py-1 w-full"
                                                   type="text"/>
                                        </Skeleton>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <Skeleton isLoaded={dataLoaded}>
                                                <Switch id="mailer-list" onChange={(e) => onChangeMailingList(e)} isChecked={mailerList}/>
                                            </Skeleton>
                                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Subscribed to mailing list</span>
                                        </label>
                                    </div>
                                    <div className="flex justify-end col-span-2">
                                        <button type="submit"
                                                className="rounded-lg shadow-lg px-3 py-1 text-white bg-sky-700 flex justify-center items-center gap-2">
                                            <FaRegSave className="mb-0.5"/>Save
                                            {
                                                update ? (<div className="w-5 h-5"> <LoadingSpinner/> </div>) : ""
                                            }
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