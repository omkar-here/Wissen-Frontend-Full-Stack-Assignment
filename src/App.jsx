import "./App.css";
import Layout from "./Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/Registration";
import Deposit from "./pages/Deposit";
import Withdrawal from "./pages/Withdrawal";
import CheckBalance from "./pages/CheckBalance";
import ChequeDeposit from "./pages/ChequeDeposit";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Layout />}>
        <Route index element={<Registration />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/check-deposit" element={<ChequeDeposit />} />
        <Route path="/check-balance" element={<CheckBalance />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
