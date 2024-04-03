import React, { useState } from "react";

export default function ChequeDeposit() {
  const [formData, setFormData] = useState({
    fromAccountNo: "",
    fromIfsc: "",
    toAccountNo: "",
    toIfsc: "",
    amount: "",
  });
  const [message, setMessage] = useState("");
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
      const response = await fetch("http://localhost:8686/cheque-deposit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setMessage(data.message);
      setError("");
    } catch (error) {
      setMessage("");
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[50%] bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Cheque Deposit</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fromAccountNo" className="block mb-1">
              From Account No:
            </label>
            <input
              type="number"
              id="fromAccountNo"
              name="fromAccountNo"
              value={formData.fromAccountNo}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-md"
              min="100000"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fromIfsc" className="block mb-1">
              From IFSC Code:
            </label>
            <input
              type="text"
              id="fromIfsc"
              name="fromIfsc"
              value={formData.fromIfsc}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="toAccountNo" className="block mb-1">
              To Account No:
            </label>
            <input
              type="number"
              id="toAccountNo"
              name="toAccountNo"
              value={formData.toAccountNo}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-md"
              min="100000"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="toIfsc" className="block mb-1">
              To IFSC Code:
            </label>
            <input
              type="text"
              id="toIfsc"
              name="toIfsc"
              value={formData.toIfsc}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-1">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Deposit Cheque
          </button>
        </form>
      </div>
    </div>
  );
}
