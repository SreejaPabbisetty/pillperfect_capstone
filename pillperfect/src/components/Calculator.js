import React, { useState } from 'react';
import './Calculator.css';


const Calculator = () => {
  // State variables for BMI Calculator
  const [bmiHeight, setBMIHeight] = useState('');
  const [bmiWeight, setBMIWeight] = useState('');
  const [bmiCategory, setBMICategory] = useState('');


  // State variables for BMR Calculator
  const [bmrGender, setBMRGender] = useState('male');
  const [bmrAge, setBMRAge] = useState('');
  const [bmrWeight, setBMRWeight] = useState('');
  const [bmrHeight, setBMRHeight] = useState('');
  const [bmrResult, setBMRResult] = useState('');


  // State variables for Calorie Calculator
  const [calGender, setCalGender] = useState('male');
  const [calAge, setCalAge] = useState('');
  const [calWeight, setCalWeight] = useState('');
  const [calHeight, setCalHeight] = useState('');
  const [calActivityLevel, setCalActivityLevel] = useState('sedentary');
  const [caloriesResult, setCaloriesResult] = useState('');


  // State variables for Body Fat Calculator
  const [bodyFatGender, setBodyFatGender] = useState('male');
  const [bodyFatAge, setBodyFatAge] = useState('');
  const [bodyFatWaist, setBodyFatWaist] = useState('');
  const [bodyFatNeck, setBodyFatNeck] = useState('');
  const [bodyFatResult, setBodyFatResult] = useState('');


  // State variables for Ideal Weight Calculator
  const [idealWeightGender, setIdealWeightGender] = useState('male');
  const [idealWeightHeight, setIdealWeightHeight] = useState('');
  const [idealWeightAge, setIdealWeightAge] = useState('');
  const [idealWeightFrameSize, setIdealWeightFrameSize] = useState('medium');
  const [idealWeightResult, setIdealWeightResult] = useState('');


  return (
    <div className="p-6 space-y-8 max-w-3xl mx-auto custom-bg calculator_page">
      <div className="calculator_container grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* BMI Calculator */}
        <div className="calculator_card bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">BMI Calculator</h2>
          <input
            type="number"
            placeholder="Height (cm)"
            value={bmiHeight}
            onChange={(e) => setBMIHeight(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={bmiWeight}
            onChange={(e) => setBMIWeight(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <button
            onClick={() => console.log("Calculate BMI")}
            className="bg-blue-500 text-white rounded-lg p-2 w-[50%]"
          >
            Calculate BMI
          </button>
          {bmiCategory && <p className="mt-2 text-lg">Category: {bmiCategory}</p>}
        </div>

        {/* BMR Calculator */}
        <div className="calculator_card bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">BMR Calculator</h2>
          <select
            value={bmrGender}
            onChange={(e) => setBMRGender(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            type="number"
            placeholder="Age (years)"
            value={bmrAge}
            onChange={(e) => setBMRAge(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={bmrWeight}
            onChange={(e) => setBMRWeight(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={bmrHeight}
            onChange={(e) => setBMRHeight(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <button
            onClick={() => console.log("Calculate BMR")}
            className="bg-blue-500 text-white rounded-lg p-2 w-[50%]"
          >
            Calculate BMR
          </button>
          {bmrResult && <p className="mt-2 text-lg">BMR: {bmrResult} kcal/day</p>}
        </div>

        {/* Calorie Calculator */}
        <div className="calculator_card bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Calorie Calculator</h2>
          <select
            value={calGender}
            onChange={(e) => setCalGender(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            type="number"
            placeholder="Age (years)"
            value={calAge}
            onChange={(e) => setCalAge(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={calWeight}
            onChange={(e) => setCalWeight(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={calHeight}
            onChange={(e) => setCalHeight(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <select
            value={calActivityLevel}
            onChange={(e) => setCalActivityLevel(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            <option value="sedentary">Sedentary</option>
            <option value="lightlyActive">Lightly Active</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="veryActive">Very Active</option>
            <option value="extraActive">Extra Active</option>
          </select>
          <button
            onClick={() => console.log("Calculate Calories")}
            className="bg-blue-500 text-white rounded-lg p-2 w-[50%]"
          >
            Calculate Calories
          </button>
          {caloriesResult && <p className="mt-2 text-lg">Calories needed: {caloriesResult} kcal/day</p>}
        </div>

        {/* Body Fat Calculator */}
        <div className="calculator_card bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Body Fat Calculator</h2>
          <select
            value={bodyFatGender}
            onChange={(e) => setBodyFatGender(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            type="number"
            placeholder="Age (years)"
            value={bodyFatAge}
            onChange={(e) => setBodyFatAge(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <input
            type="number"
            placeholder="Waist circumference (cm)"
            value={bodyFatWaist}
            onChange={(e) => setBodyFatWaist(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <input
            type="number"
            placeholder="Neck circumference (cm)"
            value={bodyFatNeck}
            onChange={(e) => setBodyFatNeck(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <button
            onClick={() => console.log("Calculate Body Fat")}
            className="bg-blue-500 text-white rounded-lg p-2 w-full"
          >
            Calculate Body Fat
          </button>
          {bodyFatResult && <p className="mt-2 text-lg">Body Fat Percentage: {bodyFatResult}%</p>}
        </div>

        {/* Ideal Weight Calculator */}
        <div className="calculator_card bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Ideal Weight Calculator</h2>
          <select
            value={idealWeightGender}
            onChange={(e) => setIdealWeightGender(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            type="number"
            placeholder="Height (cm)"
            value={idealWeightHeight}
            onChange={(e) => setIdealWeightHeight(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <input
            type="number"
            placeholder="Age (years)"
            value={idealWeightAge}
            onChange={(e) => setIdealWeightAge(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <select
            value={idealWeightFrameSize}
            onChange={(e) => setIdealWeightFrameSize(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <button
            onClick={() => console.log("Calculate Ideal Weight")}
            className="bg-blue-500 text-white rounded-lg p-2 w-[50%]"
          >
            Calculate Ideal Weight
          </button>
          {idealWeightResult && <p className="mt-2 text-lg">Ideal Weight: {idealWeightResult} kg</p>}
        </div>
      </div>
    </div>
  );
}

  export default Calculator;