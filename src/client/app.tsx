//  设置重定向
import { Navigate } from "react-router-dom";
import React from "react";
import { routes } from "@shared/routes";
import { Routes } from "react-router-dom";
import { RenderByRoutes } from "@shared/basic";
import { Layout } from "@shared/components/layout/layout";
import "@client/assets/css/index.css";

routes.push({
  path: "*",
  element: (
    <>
      <Navigate replace={true} to={"/"} />
    </>
  ),
  redirectTo: "/",
  key: "-1",
});

//  服务端app
const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Layout key={1} />
      <Routes>{RenderByRoutes(routes)}</Routes>
    </div>
  );
};

export { App };
