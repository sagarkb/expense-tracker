import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((items) => items > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = amount
    .filter((items) => items < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense2 = expense * -1;
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">-${expense2}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
