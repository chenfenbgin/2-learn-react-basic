import React from "react";
import PropTypes from "prop-types";

// 1.类组件默认值：
//    1.1. defaultProps
//    1.2 static.defaultProps类静态属性定义
class Test extends React.Component {
  // 1.2 静态属性
  static defaultProps = {
    pageSize: 333,
  };
  render() {
    return (
      <div>
        Test
        {this.props.pageSize}
      </div>
    );
  }
}

// 1.1使用defaultProps
// Test.defaultProps = {
//   pageSize: 10, //如果不传，pageSize就是10
// };
class App extends React.Component {
  render() {
    return (
      <div>
        <Test />
      </div>
    );
  }
}

export default App;
