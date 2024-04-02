import { useState } from "react";

export default function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondeNumber] = useState(0);
  const [thirdNumber , setThirdNumber] = useState(0)

  const pluseCount = () => {
    setThirdNumber(parseInt(firstNumber) + parseInt(secondNumber));
  };

  const minusCount = () => {
    if (firstNumber > secondNumber){

      setThirdNumber(parseInt(firstNumber) - parseInt(secondNumber));
    }
    else{
      setThirdNumber(-(parseInt(secondNumber) - parseInt(firstNumber)));
    }
  };

  const multiplyCount = () => {
    setThirdNumber(parseInt(firstNumber) * parseInt(secondNumber));
  };

  const divideCount = () => {
    
    setThirdNumber(parseInt(firstNumber) /  parseInt(secondNumber));

  };

  return (
    <div className="flex flex-col items-center p-2 justify-center w-full h-full text-4xl font-bold">
      <h1> calculater </h1>

      <div className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          onChange={(e) => setFirstNumber(e.target.value)}
          value={firstNumber}
          className="border border-gray-300"
        />

        <input
          type="text"
          onChange={(e) => setSecondeNumber(e.target.value)}
          value={secondNumber}
          className="border border-gray-300"
        />

        <div className="flex flex-row gap-2">
          <button
            onClick={() => pluseCount()}
            className="border border-red-500 w-10 h-10 p-6 bg-red-500 text-white flex justify-center items-center"
          >
            {" "}
            +{" "}
          </button>
          <button onClick={() => minusCount()} className="border border-blue-500 w-10 h-10 p-6 bg-blue-500 text-white flex justify-center items-center">
            {" "}
            -{" "}
          </button>

          <button onClick={() => multiplyCount()} className="border border-green-500 w-10 h-10 p-6 bg-green-500 text-white flex justify-center items-center">
            {" "}
            *{" "}
          </button>

          <button onClick={() => divideCount()} className="border border-pink-500 w-10 h-10 p-6 bg-pink-500 text-white flex justify-center items-center">
            {" "}
            / {" "}
          </button>
        </div>
        <div className="border border-gray-500 w-full p-4">{thirdNumber}</div>
      </div>
    </div>
  );
}