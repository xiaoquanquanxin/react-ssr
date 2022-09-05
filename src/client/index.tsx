import { BrowserRouter } from "react-router-dom";
import { App } from "@client/app";
// @ts-ignore
//	接收注水，保持最大化复用
ReactDOM.hydrate(
  // @ts-ignore
  <BrowserRouter>
    {/*@ts-ignore*/}
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
