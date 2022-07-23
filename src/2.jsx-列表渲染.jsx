// react如何完成列表渲染？
// 技术方案：map -> 重复渲染的是哪个模板，就return谁
// 注意事项：遍历列表是同样需要一个类型为number/string的不可重复的key,提高diff算法性能
// key属性是不会出现在真实的DOM节点中，仅仅是在虚拟DOM中使用
const songs = [
  { id: 1, name: "痴心绝对" },
  { id: 2, name: "像我这样的人" },
  { id: 3, name: "南山南" },
];

function App() {
  return (
    <div className="App">
      <ul>
        {songs.map((song, index) => (
          <li key={song.id}>{song.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
