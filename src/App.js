import React from "react";
class Test extends React.Component {
  render() {
    return (
      <div>
        Test
      </div>
    );
  }
}

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
