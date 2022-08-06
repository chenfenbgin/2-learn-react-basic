// jsx的支持/使用：
// 1. 识别常规的变量
// 2. 原生方法的调用
// 3. 三元运算符（常用）
// 注：if 语句/ switch-case 语句/ 变量声明语句，这些叫做语句，不是表达式，不能出现在 {} 中！
const name = "尘封";
const getAge = () => {
  return 22;
};
const flag = true;

function App() {
  return (
    <div className="App">
      app： {name}
      {getAge()}
      {flag ? "黑曜蓝" : "玫瑰红"}
    </div>
  );
}

export default App;
