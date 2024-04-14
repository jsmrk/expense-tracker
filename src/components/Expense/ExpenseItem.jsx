/* eslint-disable react/prop-types */
// import { useState } from "react";
import Card from "../Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("updated");
  // };

  const getMonth = props.date.toLocaleString("en-US", { month: "long" });
  const getDay = props.date.toLocaleString("en-US", { month: "2-digit" });
  const getYear = props.date.getFullYear();

  return (
    <Card className="expense-item">
      <div className="expense-date">
        <div>{getMonth}</div>
        <div className=".expense-date__month">{getDay}</div>
        <div className=".expense-date__year">{getYear}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
