import React from 'react'
import { useState } from 'react';

export default function App() {

  const[firstNumber , setFirstNumber] = useState(0);
  const[secondNumber , setSecondeNumber] = useState(0);
  const[result , setResult] = useState(0);

  const pluse = () => {
    setResult(parseInt(firstNumber) + parseInt(secondNumber));
  }

  const minus = () => {
    setResult(parseInt(firstNumber) - parseInt(secondNumber));
  };

  const mul = () => {
    setResult(parseInt(firstNumber) * parseInt(secondNumber));
  }
  const divide = () => {
    setResult(parseInt(firstNumber) / parseInt(secondNumber));
  }

  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-100 p-2">
      <div className="">
        <h1 className="text-4xl font-bold">calculator</h1>

        <div className="flex flex-col h-full gap-4 justify-center items-center mt-6">
          <input value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} type="text" className="border border-red-400 p-2 font-bold outline-red-400 " />
          <input value={secondNumber} onChange={(e) => setSecondeNumber(e.target.value)} type="text" className="border border-red-400 p-2 font-bold  outline-red-400" />
        </div>

        <div className="flex flex-row gap-4 justify-between items-center mt-4">
          <button onClick={pluse} className="border border-green-300 bg-green-300 p-4 rounded font-bold"> {" "}
            + {" "} </button>
          <button onClick={minus} className="border border-pink-300 bg-pink-300 p-4 rounded font-bold"> {" "}
            - {" "}</button>
          <button onClick={mul} className="border border-blue-300 bg-blue-300 p-4 rounded font-bold" > {" "}
            * {" "}</button>
          <button onClick={divide} className="border border-orange-300 bg-orange-300 p-4 rounded font-bold"> {" "}
            / {" "} </button>
        </div>
        <div className="border border-gray-400 p-5 font-bold  outline-gray-400 mt-4 rounded">{result}</div>

      </div>
    </div>
  )
}