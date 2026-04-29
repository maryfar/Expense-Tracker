import ExpenseTracker from "./ExpenseTracker";

export default function App() {
  return (
    <div className=" flex flex-col items-center justify-center gap-6 mt-20">
      <h1 className="text-red-900 text-3xl  ">Expense Tracker</h1>
      <ExpenseTracker />
    </div>
  );
}
