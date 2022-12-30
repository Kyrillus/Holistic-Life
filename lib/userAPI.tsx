const API_URL = process.env.API_URL;
const BEARER_TOKEN = process.env.BEARER_TOKEN;

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
            throw new Error(`Error fetching ${endpoint}`);
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}