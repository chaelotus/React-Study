//사용자 지정 컴포넌트 임포트
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, SetExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    //새로운 expense가 추가될 때 마다 실행됨
    console.log("In App.js", expense);
    SetExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};
//ExpenseItem을 html태그 처럼 사용가능하다.
//단, 위의 방법으로 JSX코드를 사용할 떄 무조건 대문자로 시작되어야 한다. => 그림 리액트가 사용자지정 컴포넌트를 감지할 수 있다.
//소문자로 시작하는 태그는 html태그이므로 내장요소로 찾을 것이고 대문자느 사용자에 의해 정의된 요소
export default App;
