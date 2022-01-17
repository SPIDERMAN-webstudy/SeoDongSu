import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filter, setFilter] = useState("");
  const setUpdate = (data) => {
    setFilter(data);
    console.log(filter);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onUpdate={setUpdate} />
        {props.items
          .filter((expense) => parseInt(filter) === expense.date.getFullYear())
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
