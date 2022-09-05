import * as React from "react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import lessModule from "./test.module.less";
import lessStyle from "./test.style.module.less";

interface InterfaceP {
  count: number;
  setCount?: Dispatch<SetStateAction<number>>;
}

// 创造一个上下文
const P = createContext<InterfaceP>(null);

interface InterfaceB {
  value?: number;
  count?: number;
}

// 创造一个上下文 带默认值
const B = createContext<InterfaceB>({ value: 11111, count: 22222 });

// 子组件      √√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√
const Pa = () => {
  // 获取 P--Context
  const p = useContext(P);
  const { count, setCount } = p;
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      pa==P==={count}
    </button>
  );
};

// 孙子组件
const Bb = () => {
  // 获取 P--Context
  const { count } = useContext(P);
  // 获取 B--Context
  const { value } = useContext(B);
  return (
    <ul>
      <li>Bb==B==={value}</li>
      <li>Pb--P==={count}</li>
    </ul>
  );
};

// 子组件
const Pb = () => {
  // 获取 P--Context
  const { count } = useContext(P);
  return (
    <>
      <div>Pb==P==={count}</div>
      <hr />
      {/* 加入新的 P--Context */}
      <P.Provider value={{ count: 2222 }}>
        <B.Provider value={{ value: 1111 }}>
          <Bb />
        </B.Provider>
      </P.Provider>
    </>
  );
};

// 顶级组件
const Test = () => {
  const [count, setCount] = useState(0);
  return (
    <P.Provider value={{ count, setCount }}>
      <div className={`${lessModule.test} ${lessStyle.test}`}>
        {/*<div className={`${lessStyle}`}>*/}
        <Pa />
        <hr />
        <Pb />
        <hr />
        <p>
          <a>希望可以吃到烤鱼</a>
        </p>
      </div>
    </P.Provider>
  );
};

export default Test;
