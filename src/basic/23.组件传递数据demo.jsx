import React from "react";

// 渲染列表组件
function ListItem({ item, delItem }) {
  return (
    <>
      {/* 3. 使用props解构出来的item */}
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.info}</p>
      {/* 4.子传父： 子组件调用父组件的方法 */}
      <button onClick={() => delItem(item.id)}>删除</button>
    </>
  );
}

// 数据提供组件， 渲染ListItem 组件 App-ListItem
// 1.先不抽离组件，完成基础渲染之后，在抽离组件
class App extends React.Component {
  // 1. 提供数据
  state = {
    list: [
      {
        id: 1,
        name: "超级好吃的棒棒糖",
        price: 18.8,
        info: "开业大酬宾，全场8折",
      },
      {
        id: 2,
        name: "超级好吃的大鸡腿",
        price: 34.2,
        info: "开业大酬宾，全场8折",
      },
      {
        id: 3,
        name: "超级无敌的冰激凌",
        price: 14.2,
        info: "开业大酬宾，全场8折",
      },
    ],
  };
  // 5. 给子组件传递的函数
  delItem = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  };
  render() {
    return (
      <div>
        {this.state.list.map((item) => (
          // 2. 父传子
          <ListItem key={item.id} item={item} delItem={this.delItem} />
        ))}
      </div>
    );
  }
}

export default App;
