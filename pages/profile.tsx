import {getMailFromMailingList, unsubscribeFromMailingList} from "../lib/mailinglistApi";
import {useSession} from "next-auth/react";

import {useEffect} from "react";
import {useRouter} from "next/router";

function Profile() {
    const {data: session, status} = useSession()
    const { push } = useRouter();
    if(status === "authenticated") {
        console.log(session.user?.email)
        console.log(session.user?.name)
        console.log(session.user?.image)
        return(
            <>
                <div>
                    <button className="bg-gray-50 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full"
                            onClick={() => {
                                getIdAndUnsubscribe(session.user?.email);
                            }}>
                        Unsubscribe from mailing list
                    </button>
                </div>
            </>
        )
    }
    else {
        useEffect(() => {
            push('/login');
        }, []);
        return <p></p>;
    }
};

async function getIdAndUnsubscribe(email: string | null | undefined) {
    if(email !== undefined && email !== null) {
        getMailFromMailingList(email).then((res) => {
            console.log(res);
            res?.json().then((json) => {
                unsubscribeFromMailingList(json.id);
            });
        })
    }
}

export default Profile;