const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN;

export async function fetchData(endpoint: string) {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
            },
        });
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject("error fetching data");
        }
    } catch (err) {
        return Promise.reject("error fetching data");
    }
}