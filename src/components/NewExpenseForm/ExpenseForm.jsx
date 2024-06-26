/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // SINGLE STATE APPROACH
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // MULTI STATE APPROACH
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //  setUserInput((prevState) => {
    //    return { ...prevState, enteredTitle: event.target.value };
    //  });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //  setUserInput((prevState) => {
    //    return { ...prevState, enteredAmount: event.target.value };
    //  });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //  setUserInput((prevState) => {
    //    return { ...prevState, enteredDate: event.target.value };
    //  });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //  console.log(expenseData);

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            min={"0.01"}
            step={"0.01"}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min={"2024-01-01"}
            max={"2095-12-31"}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
