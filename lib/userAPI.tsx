const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN;

export async function registerUser(firstname: string, lastname: string, email: string, password: string) {
    try {
        const response = await fetch(`${API_URL}/auth/local/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                username: email,
                email: email,
                password: password
            }),
        });

        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.json());
        }
    } catch (err) {
        return Promise.reject(err);
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

export async function userExists(email: string) {
    try {
        const response = await fetch(`${API_URL}/users?filters[email][$eq]=` + email, {
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

export async function confirmUser(cofirmationCode: string) {
    try {
        const response = await fetch(`${API_URL}/auth/email-confirmation?confirmation=` + cofirmationCode, {
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