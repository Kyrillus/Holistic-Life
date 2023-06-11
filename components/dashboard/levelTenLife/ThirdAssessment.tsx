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
import {MdAddCircle, MdEdit} from "react-icons/md";
import {FcDeleteRow} from "react-icons/fc";
import {Reorder} from 'framer-motion';
import Radar from "./ResponsiveRadar";

export interface graphData {
    lifearea: string;
    current: number;
    past: number;
}

function ThirdAssessment() {
    const [data, setData] = useState<graphData[]>([]);
    const [lifeArea, setLifeArea] = useState("");
    const addLifeArea = () => {
        if (lifeArea != "" && data.filter(o => o.lifearea === lifeArea).length === 0) {
            let newData = [...data, {lifearea: lifeArea, current: 50, past: 10}]
            setData(newData);
            setLifeArea("");
        }
    }

    const deleteLifeArea = (lifearea: string) => {
        let newData = data.filter(o => o.lifearea !== lifearea)
        setData(newData);
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

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addLifeArea();
        }
    };

    return (
        <section className="flex w-full flex-col md:flex-row  items-center md:pr-20 pb-12">
            <div className="flex dark:fill-white flex-row h-[400px] w-[400px] p-2">
                <Radar data={data}/>
            </div>
            <div className="flex flex-col items-center md:self-start pt-24 pl-12">
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
                           onKeyDown={handleKeyDown}
                    />
                    <Button h='1.75rem' pl={6} size='sm' onClick={addLifeArea}>
                        <MdAddCircle color={"green"} size={30}/>
                    </Button>
                </div>
                <Reorder.Group className="pt-8 flex-col self-start w-[19rem] space-y-3 pl-2" values={data}
                               onReorder={setData}>
                    {data.map(item => (
                        <Reorder.Item className="cursor-pointer flex flex-row  justify-between group"
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
                            <div className="w-16">
                                <FcDeleteRow onClick={() => deleteLifeArea(item.lifearea)}
                                             className="ml-3 group-hover:block hidden" size={20} color={"#01adb4"}/>
                            </div>
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            </div>
        </section>
    );
}

export default ThirdAssessment;