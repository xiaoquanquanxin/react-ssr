import React from "react";
/* 存放路由钩子 */
const routerObserveQueue = [];

/* 懒加载路由钩子 */
export const RouterHooks = {
  /* 路由组件加载之前 */
  beforeRouterComponentLoad: function (callback) {
    routerObserveQueue.push({
      type: "before",
      callback,
    });
  },
  /* 路由组件加载之后 */
  afterRouterComponentDidLoaded(callback) {
    routerObserveQueue.push({
      type: "after",
      callback,
    });
  },
};

/* 路由懒加载HOC */
export function AsyncRouter(loadRouter) {
  return class Content extends React.Component {
    static loadRouter: () => any;

    constructor(props) {
      super(props);
      Content.loadRouter = loadRouter;
      console.log("服务端执行嘛");
      /* 触发每个路由加载之前钩子函数 */
      this.dispatchRouterQueue("before");
    }

    state = { Component: null };

    dispatchRouterQueue(type) {
      console.log(this.props);
      routerObserveQueue.forEach((item) => {
        if (item.type === type) item.callback(history);
      });
    }

    componentDidMount() {
      if (this.state.Component) {
        return;
      }
      loadRouter()
        .then((module) => module.default)
        .then((Component) =>
          this.setState({ Component }, () => {
            /* 触发每个路由加载之后钩子函数 */
            this.dispatchRouterQueue("after");
          })
        );
    }

    render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : null;
    }
  };
}
