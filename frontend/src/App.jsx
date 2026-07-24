import Home from "./pages/home.jsx";
import Docs from "./pages/docs.jsx";
import Login from "./pages/login.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        window.location.href = "https://app.takumi.run/mvp";
      }
    };
    checkUser();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
  );
}

export default App;
