// useState
// 1. 导入useState函数 react
// 2. 执行这个函数并且传入初始值 必须在函数组件中
// 3. [数据，修改数据的方法]
// 4. 使用数据 修改数据

// 状态的读取和修改
// const [count, setCount] = useState(0);
// 注意事项： 
// 1. useState传过来的参数：作为count的初始值
// 2. [count, setCount]这里的写法，是一个解构赋值的写法，useState返回值，是一个数组
// 3. [count, setCount]的名字是可以自定义的，保持语义化即可； 顺序不可以互换
// 4. setCount函数： 作用用来修改count, 依旧保持不能直接修改原值，还是生成一个新值替换原值
//    setCount（基于原值计算得到的新值），不能写++ --
// 5. count和setCount是一对， 是绑定一起的，setCount只能修改count


import { useState } from "react";
function App() {
  // useState会解构出来两个变量, 
  // count: 数据状态，setCount: 状态对应的修改方法（专有函数）
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

export default App;
