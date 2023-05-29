import React, {useEffect, useState} from 'react';
import Confetti from 'react-confetti'
import { useRef } from 'react';
function EmailConfirmation() {
    const [numberOfConfetti, setNumberOfConfetti] = useState(500);
    const [confetti, setConfetti] = useState(true);

    const [screenSize, getDimension] = useState({
        dynamicWidth: 0,
        dynamicHeight: 0
    });
    const setDimension = () => {
        getDimension({
            dynamicWidth: window ? window.innerWidth : 0,
            dynamicHeight: window ? window.innerHeight : 0
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setNumberOfConfetti(0);
        }, 2000);
        setTimeout(() => {
            setConfetti(false);
        }, 4000);
        setDimension();
        }, [])

    useEffect(() => {

        window.addEventListener('resize', setDimension);

        return(() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])


    return (
        <div className="flex flex-col justify-center items-center py-16">
            <div className="w-fit h-fit p-2 border border-gray-50 rounded-full shadow">
                {confetti && <Confetti
                    className={"absolute"}
                    numberOfPieces={numberOfConfetti}
                    width={screenSize.dynamicWidth - 30}
                    height={screenSize.dynamicHeight - 10}
                />}


                <img className="w-14 h-14" src="/confirmation/envelope.svg" alt="mail-image"></img>
            </div>

            <div className="flex flex-col justify-center items-center pt-6">
                <h1 className="text-3xl font-extrabold">E-Mail Confirmation</h1>
                <p className="text-lg">We have sent you a confirmation E-Mail.</p>
            </div>

        </div>
    );
}

export default EmailConfirmation;