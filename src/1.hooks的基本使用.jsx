// useState
// 1. 导入useState函数 react
// 2. 执行这个函数并且传入初始值 必须在函数组件中
// 3. [数据，修改数据的方法]
// 4. 使用数据 修改数据

import { useState } from "react";
function App() {
  // useState会解构出来两个变量, 状态，及状态对应的修改方法
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

export default App;
