// 1. 导入useNavigate
import { useNavigate } from "react-router-dom";

const Login = () => {
  // 2. 执行useNavigate得到一个跳转函数
  const navigate = useNavigate();
  // 3. 跳转到关于页
  function goAbout() {
    // 4. 跳转函数传入 目标路径， {replace: true} ：不能后退，是以一个替换的模式
    // navigate("/about", { replace: true });

    // 5. 传入参数: useSearchParams 方式
    // navigate("/about?id=110", { replace: true });

    // 7. 传入参数：useParams 方式
    navigate("/about/110", { replace: true });
  }
  return (
    <div>
      Login
      <button onClick={goAbout}>跳转到关于</button>
    </div>
  );
};

export default Login;
