import {getMailFromMailingList, unsubscribeFromMailingList} from "../lib/mailinglistApi";
import {useSession} from "next-auth/react";

import {useEffect} from "react";
import {useRouter} from "next/router";

function Profile() {
    const {data: session, status} = useSession()
    const { push } = useRouter();
    if(status === "authenticated") {
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
        let response = getMailFromMailingList(email);
        response.then((res) => {
            unsubscribeFromMailingList(res.data[0].id);
        })
    }
}

export default Profile;