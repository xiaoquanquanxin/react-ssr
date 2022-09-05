import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import style from "./layout.module.less";

function Layout() {
  return (
    <div className={style.layout}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="test">Test</Link>
          </li>
          <li>
            <Link to="redirect">redirect</Link>
          </li>
          <li>
            <Link to="production">Production</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export { Layout };
