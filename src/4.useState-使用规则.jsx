// 一、useState
// 1. 导入useState函数 react
// 2. 执行这个函数并且传入初始值 必须在函数组件中
// 3. [数据，修改数据的方法]
// 4. 使用数据 修改数据

// 二、状态的读取和修改
// const [count, setCount] = useState(0);
// 注意事项：
// 1. useState传过来的参数：作为count的初始值
// 2. [count, setCount]这里的写法，是一个解构赋值的写法，useState返回值，是一个数组
// 3. [count, setCount]的名字是可以自定义的，保持语义化即可； 顺序不可以互换
// 4. setCount函数： 作用用来修改count, 依旧保持不能直接修改原值，还是生成一个新值替换原值
//    setCount（基于原值计算得到的新值），不能写++ --
// 5. count和setCount是一对， 是绑定一起的，setCount只能修改count

// 三、组件的更新
// 当调用setCount的时候，更新过程
// 1.首次渲染
//    1.1 首次被渲染的时候，组件内部的代码会被执行一次
//        其中useState也会跟着执行，这里重点注意,useState(0) 0初始值只在首次渲染时生效
//
// 2.更新渲染
//    2.1 app组件会再次渲染 这个函数会再次执行
//    2.2 useState再次执行， 得到的新的count值不是0，而是修改之后的1，模板会用新值渲染
// 注意：useState初始值只在首次渲染生效， 后续只要调用setCount整个app中代码都会执行
//      此时的count每次拿到的都是最新值
import { useState } from "react";
function App() {
  // useState会解构出来两个变量,
  // count: 数据状态，setCount: 状态对应的修改方法（专有函数）
  const [count, setCount] = useState(0);
  // useState() 函数可以使用多次;只能写在最外层，不可以写到函数里面中去，不可以写到判断语句中去；
  const [flag, setFlag] = useState(true);
  const [list, setList] = useState([]);

  // 第一次就打印了
  console.log(count);
  function test() {
    setCount(count + 1);
    setFlag(false);
    setList([1, 2, 3]);
  }
  return (
    <div>
      count: {count}
      falg: {flag}
      list:{list.join("-")}
      <button onClick={test}>{count}</button>
    </div>
  );
}

export default App;
