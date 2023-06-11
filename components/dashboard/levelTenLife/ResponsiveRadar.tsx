import {ResponsiveRadar} from "@nivo/radar";
import React from "react";


function Radar({data}: any) {
    return (
        <ResponsiveRadar
            data={data}
            keys={['current', 'past']}
            indexBy="lifearea"
            valueFormat={(key, value) => {
                return key + "%"
            }}
            margin={{top: 70, right: 80, bottom: 40, left: 90}}
            borderColor={{from: 'color', modifiers: []}}
            gridLevels={10}
            gridLabelOffset={18}
            dotSize={6}
            maxValue={100}
            dotColor={{theme: 'grid.line.stroke'}}
            dotBorderWidth={2}
            dotBorderColor={{from: 'color', modifiers: []}}
            colors={{scheme: 'category10'}}
            fillOpacity={0.4}
            blendMode="multiply"
            motionConfig="wobbly"
        />
    );
}

export default Radar;