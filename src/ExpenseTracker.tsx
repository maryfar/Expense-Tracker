import { useEffect, useState } from "react";
import type { Transaction } from "./Transactions";

export default function ExpenseTracker() {
  const [transactions, setTransaction] = useState<Transaction[]>(() => {
    let saveTrans = localStorage.getItem("transactions");
    return saveTrans ? JSON.parse(saveTrans) : [];
  });
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

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

  function delteTransaction(id: number) {
    setTransaction(transactions.filter((item) => item.id != id));
  }

  let total = 0;
  transactions.map((item) => (total += item.amount));

  let income = 0;
  let expense = 0;
  transactions.map((item) => {
    if (item.amount > 0) {
      income += item.amount;
    } else {
      expense += item.amount;
    }
  });
  return (
    <div className="border border-b-blue-950 p-4 rounded-2xl flex flex-col items-center justify-center min-w-80">
      <h2>maryam tracker</h2>
      <div className="flex flex-col gap-2 w-full mb-2">
        <div>Balance: $ {total}</div>
        <div>income: $ {income}</div>
        <div>expense: $ {expense}</div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <input
          type="text"
          className="p-2 border border-gray-400 rounded-lg"
          placeholder="Enter Description"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          type="number"
          className="p-2 border border-gray-400 rounded-lg"
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
      <ul className="flex flex-col pt-4 gap-2 w-full ">
        {transactions.map((item, index) => (
          <div className=" flex justify-between border border-gray-500 rounded-2xl py-2 px-3 w-full">
            <li
              key={index}
              className={item.amount > 0 ? "text-green-500" : "text-red-500"}
            >
              {item.text} - {item.amount}{" "}
            </li>
            <button
              className="text-red-500 cursor-pointer"
              onClick={() => delteTransaction(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
