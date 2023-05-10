import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import userEvent from "@testing-library/user-event";
//비용 아이템 저장
//파일 이름 정할 때 첫글자 대문자
//리액트에 있는 컴포넌트는 단지 자바스크립트 함수일 뿐
//관습상 함수 이름을 파일이름으로
const ExpenseItem = (props) => {
  //반환하는 요소안에 루트요소가 하나만 있어야 함
  //여기서 보이는 코드는 html처럼 보이지만 리액트팀에서 만든 특별한 jsx구문이고 여전히 js코드이다.
  //그래서 대부분의 속성들이 같지만 모두 똑같지는 않다.
  //여기서는 class를 className으로 사용하는데 class는 자바스크립트에서 예약된 단어이기 때문이다.

  //Data는 내장객체이기 때문에 텍스트로 출력될 수 없다.
  //모든 Date 객체에 사용 가능한 내장 메서드인 toISOString을 사용할 수 있다.

  const [title, setTitle] = useState(props.title);
  //리액트 훅이라고도 한다. 다른 중요한 훅들도 있겠지만 이것은 가중 중요한 훅 중 하나
  //이런 훅들은 이름이 use로 시작하여 쉽게 알아차릴 수 있다.
  //리액트 컴포넌트 함수 안에서 실행되어야 함(중첩 함수 안에도 안됨)
  //useState()는 기본적인 state값 대신 userState()로 특별한 종류의 변수 생성함
  //변수의 변경사항으로 인해 컴포넌트 함수가 다시 호출될 수 있음

  const clickHandler = () => {
    setTitle("Update!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};
//여기서 반환하는 코드 html코드는 jsx코드로 컴포넌트로 화면에 불러 와야한다.
//컴포넌트는 html코드를 반환하는 함수일 뿐이다.
//컴포넌트에서 반환하는 html코드는 컴포넌트가 화면에 렌더링하는것이 무엇인가에 따라 다르다.

//이 파일에서 내보니어 다른 파일에서도 사용할 수 있게끔
export default ExpenseItem;
//이 함수를 이 파일의 기본 함수로 내보내겠다.
//그럼 이 파일을 다른 파일에서 import할 수 있다.
