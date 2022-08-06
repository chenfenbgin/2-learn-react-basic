import { useWindowScroll } from "./hooks/useWindowScroll.jsx";
import { useLocalStorage } from "./hooks/useLocalStorage.jsx";

function App() {
  const [y] = useWindowScroll();
  const [message, setMessage] = useLocalStorage("hook-key", "狠人大帝");
  setTimeout(() => {
    setMessage('天选之子')
  }, 5000)
  return (
    <div style={{ height: "10000px" }}>
      {y}
      <div>{message}</div>
    </div>
  );
}

export default App;
