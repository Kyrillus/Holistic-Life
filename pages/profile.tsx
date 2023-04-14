import {getMailFromMailingList, unsubscribeFromMailingList} from "../lib/mailinglistApi";
import {useSession} from "next-auth/react";

import Link from "next/link";
async function getIdAndUnsubscribe(email: string) {
    getMailFromMailingList(email).then((res) => {
        console.log(res);
        res?.json().then((json) => {
            unsubscribeFromMailingList(json.id);
        });
    })
}

function Profile() {
    const {data: session, status} = useSession()
    if(status === "authenticated") {
        console.log(session.user?.email)
        console.log(session.user?.name)
        console.log(session.user?.image)

        let name: string;
        const onTodoChange = (value: string) => {
            name = value
        }
        return(
            <>
                <div>
                    <input onChange={e => onTodoChange(e.target.value)}/>
                </div>
                <div>
                    <button className="bg-gray-50 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full"
                            onClick={() => {
                                getIdAndUnsubscribe(name);
                            }}>
                        Unsubscribe from mailing list
                    </button>
                </div>
            </>
        )
    }
    else {
        return(
            <div>
                <p>You are not logged in</p>
                <Link href="/login">Go to login</Link>
            </div>
        )
    }
}

export default Profile;