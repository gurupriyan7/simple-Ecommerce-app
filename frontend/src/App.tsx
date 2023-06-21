import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { paths } from "./path/path";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={paths.login} element={<Login />} />
          <Route path={paths.home} element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
