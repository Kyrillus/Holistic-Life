import React from "react";
import {Button} from "@chakra-ui/react";

function JarExperiment() {
    function start() {

    }

    return (
        <div className="flex justify-center items-center pb-12 pt-4">
            <div className="w-2/3 max-w-4xl mx-auto">
                <div className="grid gap-8 grid-cols-3 grid-rows-3 justify-items-center">
                    <div></div>
                    <div className="text-center"><h1>Jar Experiment</h1></div>
                    <div className="justify-self-end">
                        <Button colorScheme='blue' variant='outline'>show overview</Button>
                    </div>
                    <div className="col-span-3">
                        <p className="text-center">Welcome to the start of your joruney to experience Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. </p>
                    </div>
                    <div className="col-span-3">
                        <Button colorScheme='blue'>get a random prompt</Button>
                    </div>
                </div>
                <div className="pt-8 flex justify-center">
                    <img className="w-40" src="/jar-experiment/jar.jpg" alt="A jar"/>
                </div>
            </div>
        </div>
    )
}

export default JarExperiment;