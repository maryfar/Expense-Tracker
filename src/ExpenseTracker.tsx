import { useState } from "react";
import type { Transaction } from "./Transactions";

export default function ExpenseTracker() {
  const [transactions, setTransaction] = useState<Transaction[]>([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  function addTransaction() {
    if (!text || !amount) return;
    const newTransaction: Transaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };
    setTransaction([newTransaction, ...transactions]);
    setText("");
    setAmount("");
  }
  return (
    <div className="border border-b-blue-950 p-4 rounded-2xl flex flex-col items-center justify-center">
      <h2>maryam tracker</h2>
      <div className="flex flex-col gap-2">
        <div>income</div>
        <div>expense</div>
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Enter Description"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button
          className="border border-green-700 bg-green-600 text-white p-2 rounded-lg cursor-pointer"
          onClick={addTransaction}
        >
          Add Transaction
        </button>
      </div>
      <ul className="flex flex-col p-4 gap-2 ">
        {transactions.map((item, index) => (
          <li key={index} className="border border-gray-500 rounded-2xl p-2">
            {item.text} - {item.amount}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
