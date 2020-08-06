import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter Text..."
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative -expense,positive -income)
          </label>
          <input
            type="number"
            placeholder="Enter Amount..."
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
