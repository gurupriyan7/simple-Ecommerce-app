import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import { Login } from "./pages/login";
import { paths } from "./path/path";
import { Register } from "./pages/register";
import { AddOrder } from "./pages/add-order";
import { LIstOrder } from "./pages/list-order";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={paths.login} element={<Login />} />
          <Route path={paths.register} element={<Register />} />
          <Route path={paths.add_order} element={<AddOrder />} />
          <Route path={paths.list_order} element={<LIstOrder />} />
        </Routes>
      </Router>
      <ToastContainer limit={1}/>
    </>
  );
}

export default App;
