import React from "react";

// 渲染列表
function ListItem({ children }) {
  children[2]();
  return (
    <div>
      ListItem
      <div>{children[0]}</div>
      <div>{children[3]}</div>
      {/* <div>{children.map((item) => item)}</div> */}
    </div>
  );
}
class App extends React.Component {
  render() {
    return (
      <div>
        <ListItem>
          {/* 会自动出现在children属性里面 */}
          this is child
          <div>this is child</div>
          {() => console.log(132)}
          {
            <div>
              <p>{"this is p"}</p>
            </div>
          }
        </ListItem>
      </div>
    );
  }
}

export default App;