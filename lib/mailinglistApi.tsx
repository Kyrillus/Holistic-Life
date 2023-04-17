const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN;

const TEST_JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsImlhdCI6MTY4MTc1OTY4NSwiZXhwIjoxNjg0MzUxNjg1fQ.PVHYoHXMIZpNF676HRICZTPRGb_WeQ2ZqmlAHv7m770"

export async function getMailFromMailingList(email: string) {
    try {
        const response = await fetch(`${API_URL}/mailing-lists?filters[usermail][$eq]=${email}` , {
            method: 'GET',
            headers: {
                // Todo IT-19 use jwt token form user session
                Authorization: `Bearer ${TEST_JWT_TOKEN}`,
                'content-type': 'application/json;charset=UTF-8'
            }
        });
        if(response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    } catch (err) {
        return null;
    }
}

export async function unsubscribeFromMailingList(id: number) {
    try {
        const response = await fetch(`${API_URL}/mailing-lists/${id}`, {
            method: 'DELETE',
            headers: {
                // Todo IT-19 use jwt token form user session
                Authorization: `Bearer ${TEST_JWT_TOKEN}`,
                'content-type': 'application/json;charset=UTF-8'
            }
        });

        return response;
    } catch (err) {
        return null;
    }
}