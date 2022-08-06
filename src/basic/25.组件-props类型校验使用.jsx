import React from "react";
import PropTypes from "prop-types";

function Test({ list }) {
  return (
    <div>
      Test
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}
Test.propTypes = {
  // 定义各种规则
  list: PropTypes.array, //这里限定list参数的类型必须是一个数组类型
};
class App extends React.Component {
  render() {
    return (
      <div>
        <Test list={[1, 2, 3, 4]}  />
      </div>
    );
  }
}

export default App;
