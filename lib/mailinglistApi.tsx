const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN;

export async function getMailFromMailingList(email: string) {
    try {
        const response = await fetch(`${API_URL}/mailing-lists?filters[email][$eq]=${email}` , {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
                'content-type': 'application/json;charset=UTF-8'
            }
        });

        return response.ok;
    } catch (err) {
        return false;
    }
}

export async function unsubscribeFromMailingList(id: number) {
    try {
        const response = await fetch(`${API_URL}/mailing-lists`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json;charset=UTF-8'
            }
        });

        return response.ok;
    } catch (err) {
        return false;
    }
}