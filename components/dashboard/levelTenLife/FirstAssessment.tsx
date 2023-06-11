import React, {useState} from 'react';
import {graphData} from "./ThirdAssessment";
import Radar from "./ResponsiveRadar";

function FirstAssessment() {
    const initialData: graphData[] = [
        {lifearea: "Family", current: 50, past: 10},
        {lifearea: "Friends", current: 50, past: 10},
        {lifearea: "Significant Other", current: 50, past: 10},
        {lifearea: "Health", current: 50, past: 10},
        {lifearea: "Finances", current: 50, past: 10},
        {lifearea: "Career", current: 50, past: 10},
        {lifearea: "Personal Growth", current: 50, past: 10},
        {lifearea: "Fun & Recreation", current: 50, past: 10},
        {lifearea: "Physical Environment", current: 50, past: 10},
        {lifearea: "Spirituality", current: 50, past: 10},
    ];
    const [data, setData] = useState<graphData[]>(initialData);
    return (
        <div>
            <Radar data={data}/>
        </div>
    );
}

export default FirstAssessment;