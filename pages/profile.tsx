import {getMailFromMailingList, unsubscribeFromMailingList} from "../lib/mailinglistApi";
function Profile() {
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
                    getMailFromMailingList(name).then((value) => { console.log(value)});
                }}>
                    Unsubscribe from mailing list
                </button>
            </div>
        </>
    )
}

export default Profile;