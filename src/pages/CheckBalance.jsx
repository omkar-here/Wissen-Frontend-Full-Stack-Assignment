import React, { useState } from "react";

export default function CheckBalance() {
  const [formData, setFormData] = useState({
    accountNo: "",
    ifsc: "",
  });
  const [balance, setBalance] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8686/balance/${formData.accountNo}?ifsc=${formData.ifsc}`
      );
      const data = await response;
      if (response.ok) {
        setBalance(data);
        setError("");
      } else {
        setBalance(null);
        setError(data.message || "An error occurred.");
      }
    } catch (error) {
      console.log(error);
      setBalance(null);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[50%] bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Check Balance</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <p className="text-green-500 mb-4">{balance}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="accountNo" className="block mb-1">
              Account No:
            </label>
            <input
              type="number"
              id="accountNo"
              name="accountNo"
              value={formData.accountNo}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-md"
              min="100000"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ifsc" className="block mb-1">
              IFSC Code:
            </label>
            <input
              type="text"
              id="ifsc"
              name="ifsc"
              value={formData.ifsc}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Check Balance
          </button>
        </form>
      </div>
    </div>
  );
}
