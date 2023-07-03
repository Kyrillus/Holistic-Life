import {jarExperimentTopic} from "./JarExperimentTopic";

export type jarExperimentPrompt = {
    id: string;
    content: string;
    topic: jarExperimentTopic;
};