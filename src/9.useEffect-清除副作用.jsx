import { useState, useEffect } from "react";

function Test() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('定时器执行了');
    }, 1500);
    // 将定时器清除
    return () => {
      clearInterval(timer);
    }
  }, [])
  return (
    <div>
      this is testing
    </div>
  )
}

function App() {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      {flag ? <Test /> : null}
      <button onClick={() => setFlag(!flag)}>switch</button>
    </div>
  );
}

export default App;
