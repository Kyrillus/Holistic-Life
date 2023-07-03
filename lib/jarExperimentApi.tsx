import { jarExperimentTopic } from "../types/JarExperiment/JarExperimentTopic";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BEARER_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN;

export async function getAllTopics(): Promise<jarExperimentTopic[]> {
    try {
        const response = await fetch(`${API_URL}/jar-experiment-topics?populate=*`, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
                'Content-Type': 'application/json',
            },
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