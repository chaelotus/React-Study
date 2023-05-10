import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [selectYear, setSelectYear] = useState("2020");

  const selectYearHandler = (event) => {
    setSelectYear(event.target.value);
  };
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectYear={selectYear}
        selectYearHandler={selectYearHandler}
      />

      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })
      ) : (
        <p>No expenses foune.</p>
      )}
    </Card>
  );
};

export default Expenses;
