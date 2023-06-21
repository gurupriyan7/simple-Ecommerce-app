import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { paths } from "./path/path";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={paths.login} element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
