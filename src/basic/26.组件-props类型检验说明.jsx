import React from "react";
import PropTypes from "prop-types";

function Test() {
  return (
    <div>
      Test
    </div>
  );
}
Test.propTypes = {
  // 定义各种规则
  list: PropTypes.array.isRequired, 
};
class App extends React.Component {
  render() {
    return (
      <div>
        <Test list={[1, 2, 3, 4]} />
      </div>
    );
  }
}

export default App;
