import React from "react";
import {Button} from "@chakra-ui/react";

function JarExperiment() {
    function start() {

    }

    return (
        <div className="flex justify-center items-center pb-12 pt-4">
            <div className="w-2/3 max-w-4xl mx-auto">
                <div className="flex flex-col gap-8 justify-items-center">
                    <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-items-center place-content-between">
                        <div className="w-0 md:w-40"></div>
                        <div className="flex items-center justify-center">
                            <h1>Jar Experiment</h1>
                        </div>
                        <div className="flex  md:gap-0 items-center justify-center">
                            <Button className="md:w-40" colorScheme='blue' variant='outline'>show overview</Button>
                        </div>
                    </div>
                    <div>
                        <p className="text-center">Welcome to the start of your joruney to experience Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. </p>
                    </div>
                    <div className="flex justify-center">
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