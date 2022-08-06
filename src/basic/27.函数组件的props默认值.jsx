import React from "react";
import PropTypes from "prop-types";

// 1.函数组件默认值 ： 1.1使用defaultProps
//                    1.2函数组件参数默认值

function Test({ pageSize = 10 }) {
  return (
    <div>
      Test
      {pageSize}
    </div>
  );
}
Test.propTypes = {
  list: PropTypes.array.isRequired,
};
// 1.1使用defaultProps
// Test.defaultProps = {
//   pageSize: 10, //如果不传，pageSize就是10
// };
class App extends React.Component {
  render() {
    return (
      <div>
        <Test pageSize={23} list={[1, 2, 3, 4]} />
      </div>
    );
  }
}

export default App;
