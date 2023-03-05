import React, {useState} from 'react';
import {ResponsiveRadar} from '@nivo/radar'
import {Input, InputGroup, InputRightElement} from "@chakra-ui/input";
import {Button} from "@chakra-ui/react";
import {MdAddCircle} from "react-icons/md";
import {MdAddTask} from "react-icons/md";
import {FaEdit} from "react-icons/md";


function Dashboard() {

    const [data, setData] = useState([]);
    const [lifeArea, setLifeArea] = useState("");
    const addLifeArea = () => {
        if (lifeArea != "") {
            const newData = [...data, {lifearea: lifeArea, current: 100, past: 10}]
            setData(newData);
            setLifeArea("");
        }
    }

    return (
        <section className="flex  w-full w-screen flex-row items-center gap-28 justify-center pr-20">
            <div className="flex dark:fill-white flex-row h-[550px] w-[550px] ml-10 p-2">
                <MyResponsiveRadar data={data}/>
            </div>
            <div className="flex flex-col items-center self-start pt-24">
                <div className="flex flex-row">
                    <Input className="outline-0 border p-1 rounded-lg text-sm"
                           width={150}
                           onChange={(event) => setLifeArea(event.target.value)}
                           value={lifeArea}
                           type='text'
                           placeholder='Add Life Area'
                    />
                    <Button h='1.75rem' pl={6} size='sm' onClick={addLifeArea}>
                        <MdAddCircle color={"green"} size={30}/>
                    </Button>
                </div>
            </div>
            <div className="self-start py-10">
                <MdAddTask size={20} color={"green"}/>
            </div>
        </section>
    );
}

const MyResponsiveRadar = ({data}: any) => (
    <ResponsiveRadar
        data={data}
        keys={['current', 'past']}
        indexBy="lifearea"
        valueFormat={(key, value) => {return key + "%"}}
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
)

export default Dashboard;