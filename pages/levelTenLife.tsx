import React, {useState} from 'react';
import {ResponsiveRadar} from '@nivo/radar'
import {Input} from "@chakra-ui/input";
import {
    Button,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from "@chakra-ui/react";
import {MdAddCircle, MdAddTask, MdEdit} from "react-icons/md";
import {Reorder} from 'framer-motion';

export interface graphData {
    lifearea: string;
    current: number;
    past: number;
}

function LevelTenLife() {
    const [data, setData] = useState<graphData[]>([]);
    const [lifeArea, setLifeArea] = useState("");

    const addLifeArea = () => {
        if (lifeArea != "" && data.filter(o => o.lifearea === lifeArea).length === 0) {
            let newData = [...data, {lifearea: lifeArea, current: 50, past: 10}]
            setData(newData);
            setLifeArea("");
        }
    }

    const onChangePercentage = (current: number, lifearea: string) => {
        if (current < 0 || current > 100)
            return;
        if (Math.floor(current) === current)
            current = Math.floor(current);
        let newData: graphData[] = data.map(area => {
            if (area.lifearea === lifearea)
                area.current = current;
            return area;
        });
        setData(newData);
    }

    return (
        <section className="flex w-full w-screen flex-col md:flex-row  items-center pr-20 pb-12">
            <div className="flex dark:fill-white flex-row h-[400px] w-[400px] p-2">
                <MyResponsiveRadar data={data}/>
            </div>
            <div className="flex flex-col items-center self-start pt-24 pl-12">
                <div className="self-end pt-2">
                    <MdEdit className="ml-3" size={20} color={"#01adb4"}/>
                </div>
                <div className="flex flex-row self-start">
                    <Input className="outline-0 border p-1 rounded-lg text-sm"
                           width={150}
                           maxLength={16}
                           onChange={(event) => setLifeArea(event.target.value)}
                           value={lifeArea}
                           type='text'
                           placeholder='Add Life Area'
                    />
                    <Button h='1.75rem' pl={6} size='sm' onClick={addLifeArea}>
                        <MdAddCircle color={"green"} size={30}/>
                    </Button>
                </div>
                <Reorder.Group className="pt-8 flex-col self-start w-[16rem] space-y-3 pl-2" values={data}
                               onReorder={setData}>
                    {data.map(item => (
                        <Reorder.Item className="cursor-pointer flex flex-row  justify-between"
                                      key={item.lifearea}
                                      value={item}>
                            <p className="w-full break-all">{item.lifearea}</p>
                            <NumberInput
                                allowMouseWheel={true}
                                step={0.1}
                                precision={1}
                                size='xs'
                                maxW={87}
                                defaultValue={50}
                                onChange={(valString, valNum) => onChangePercentage(valNum, item.lifearea)}
                                max={100}
                                min={0}
                                className="flex flex-row -space-y-1 ">
                                <NumberInputField className="flex focus:font-bold focus:ring-0 focus:outline-0"/>
                                <p className="flex pt-1 self-center pr-10">%</p>
                                <NumberInputStepper className="scale-75">
                                    <NumberIncrementStepper className="text-sapphire"/>
                                    <NumberDecrementStepper className="text-sapphire"/>
                                </NumberInputStepper>
                            </NumberInput>
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            </div>
        </section>
    );
}

const MyResponsiveRadar = ({data}: any) => (
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
)

export default LevelTenLife;