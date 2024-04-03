import React, { useState } from "react";

export default function Registration() {
  const [userData, setUserData] = useState({
    name: "",
    accountNo: "",
    ifsc: "",
    amount: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);

    try {
      const response = await fetch("http://localhost:8686/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log("userData", userData);
      const data = await response.json();
    } catch (error) {
      console.log(error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[50%] bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Registration</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name:
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="accountNo" className="block mb-1">
              Account No:
            </label>
            <input
              required
              type="number"
              id="accountNo"
              name="accountNo"
              value={userData.accountNo}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-md"
              min="100000"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-1">
              Initial Amount:
            </label>
            <input
              required
              type="number"
              id="amount"
              name="amount"
              value={userData.amount}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ifsc" className="block mb-1">
              IFSC Code:
            </label>
            <input
              required
              type="text"
              id="ifsc"
              name="ifsc"
              value={userData.ifsc}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
