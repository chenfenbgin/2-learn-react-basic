// 有一个type状态： 1 2 3
// 1 -> h1
// 2 -> h2
// 3 -> h3

// 原则：模板中的逻辑尽量保持精简
// 复杂的多分支的逻辑 -> 收敛为一个函数，通过一个专门函数来处理逻辑，然后在模板中进行调用即可

const getHtag = (type) => {
  if (type === 1) {
    return <h1>this is h1</h1>;
  }
  if (type === 2) {
    return <h2>this is h1</h2>;
  }
  if (type === 3) {
    return <h3>this is h1</h3>;
  }
};

function App() {
  return (
    <div className="App">
      {getHtag(1)}
      {getHtag(2)}
      {getHtag(3)}
    </div>
  );
}

export default App;
