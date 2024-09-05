import { useNavigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Router from "./pages/Router";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("loginData"));

    // 현재 경로가 로그인 페이지가 아닌 경우에만 리다이렉트 실행
    if (!loginData) {
      if (
        window.location.pathname !== "/login" &&
        window.location.pathname !== "/"
      ) {
        navigate("/login", { replace: true }); // 'replace'를 사용하여 페이지를 대체
      }
    }
  }, [navigate]);

  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
