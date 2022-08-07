import React from "react";
import Home from "./Home";
import About from "./About";
import Login from "./Login";

// 1. 进行路由配置
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    // 用来声明当前要用一个非hash模式的路由
    <BrowserRouter>
      {/* Link用来指定跳转的组件， to用来配置路由地址，Link点击后url发生变化，Route进行匹配 */}
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      {/* 路由出口：路由对应的组件会在这里进行渲染 */}
      <Routes>
        {/* 满足条件的路由组件会渲染到这里 */}
        {/* 指定路由和组件对应的关系 path代表路径 element代表组件 */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about/:id" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
