import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
//JSX : javascript 안에 있는 html 코드
// javascript xml
root.render(<App />);
//ExpenseItem을 위와 같은 방법으로 렌더링 하지 않을 것이다.
//왜냐면 루트컴포넌트를 위해 한번만 하는 작업이기 때문
