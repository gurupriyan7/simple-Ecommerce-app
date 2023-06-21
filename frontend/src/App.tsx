import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { paths } from "./path/path";
import { Home } from "./pages/home";
import { Register } from "./pages/register";
import { AddOrder } from "./pages/add-order";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={paths.login} element={<Login />} />
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.register} element={<Register />} />
          <Route path={paths.add_order} element={<AddOrder />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
