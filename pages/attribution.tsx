import React, { useState } from 'react';

const FormPage = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const attributionValues = ["A friend", "Google", "At a meet up"];

    const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        console.log(event.target.value);
        setSelectedOption(event.target.value);
    }

    return (
        <div className="bg-gray-200 min-h-screen p-6">
            <h1 className="text-2xl font-medium">Where did you hear about us?</h1>
            <form>
                <div className="my-4">
                    <input
                        type="radio"
                        value="google"
                        checked={selectedOption === 'google'}
                        onChange={handleOptionChange}
                        className="mr-2"
                    />
                    <label className="text-base">Google</label>
                </div>
                <div className="my-4">
                    <input
                        type="radio"
                        value="friend"
                        checked={selectedOption === 'friend'}
                        onChange={handleOptionChange}
                        className="mr-2"
                    />
                    <label className="text-base">A friend</label>
                </div>
                <div className="my-4">
                    <input
                        type="radio"
                        value="other"
                        checked={selectedOption === 'other'}
                        onChange={handleOptionChange}
                        className="mr-2"
                    />
                    <label className="text-base">Other</label>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Submit</button>
            </form>
        </div>
    );
}

export default FormPage;
