import React, { createContext, useState, useContext } from "react";

const Context = createContext();
const ComA = () => {
  const count = useContext(Context);
  return (
    <div>
      A组件
      <br />
      app传过来的数据为： {count}
      <ComC />
    </div>
  );
};
const ComC = () => {
  const count = useContext(Context);
  return (
    <div>
      C组件 <br />
      app传过来的数据为： {count}
    </div>
  );
};
const App = () => {
  const [count, setCount] = useState(20);
  return (
    <Context.Provider value={count}>
      <div>
        <ComA />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </Context.Provider>
  );
};

export default App;
