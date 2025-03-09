import React, { useState } from 'react';
import axios from 'axios';

const PredictionForm = () => {
  const [inputs, setInputs] = useState({
    nitrogen: '',
    phosphate: '',
    potassium: '',
    temperature: '',
    ph: '',
    humidity: '',
    rainfall: '',
  });

  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    try {
      const response = await axios.post('http://localhost:5000/predict', inputs);
      setPrediction(response.data.prediction); // Set prediction from response
    } catch (err) {
      setError('Prediction failed, please check your inputs and try again.');
      console.error(err); // Log error for debugging
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Crop Prediction</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['nitrogen', 'phosphate', 'potassium', 'temperature', 'ph', 'humidity', 'rainfall'].map((field) => (
              <div key={field} className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type="number"
                  name={field}
                  value={inputs[field]}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            >
              Predict
            </button>
          </div>
        </form>
        {prediction && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-6">
            <strong className="font-bold">Prediction: </strong>
            <span className="block sm:inline">{prediction}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PredictionForm;
