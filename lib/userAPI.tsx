const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN;

export async function fetchData(endpoint: string, filters?: string) {
    try {
        const response = await fetch(`${API_URL}/${endpoint}${filters ? "/" + filters : ""}`, {
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

export async function loginUser(email: string, password: string) {
    try {
        const response = await fetch(`${API_URL}/auth/local`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                identifier: email,
                password: password
            }),
        });

        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.json());
        }
    } catch (err) {
        return Promise.reject("error fetching data");
    }
}