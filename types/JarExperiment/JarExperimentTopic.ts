import {jarExperimentPrompt} from "./JarExperimentPrompt";

export type jarExperimentTopic = {
    id: string;
    name: string;
    description: string;
    prompts: jarExperimentPrompt[];
};
