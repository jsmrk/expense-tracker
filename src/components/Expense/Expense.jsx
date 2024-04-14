/* eslint-disable react/prop-types */
import Card from "../Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expense.css";
import { useState } from "react";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangedHandler}
      ></ExpensesFilter>

      {props.items.map((data) => (
        <ExpenseItem
          key={data.date + data.amount}
          title={data.title}
          amount={data.amount}
          date={data.date}
        />
      ))}
    </Card>
  );
};

export default Expense;
