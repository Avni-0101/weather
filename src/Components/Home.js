import React from 'react';

export default function Home({ city, setCity, setCheck }) {

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCheck(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <form>
        <input
          type='text'
          value={city}
          placeholder='Enter City Name'
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          type='submit'
          onClick={handleSubmit}
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Get Weather Details
        </button>
      </form>
    </div>
  );
}
