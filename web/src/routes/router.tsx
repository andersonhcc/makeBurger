import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Cardapio from "../pages/Cardapio";
import NovaCategoria from "../pages/NovaCategoria";
import BasicPage from "../pages/BasicPage";
import Pedidos from "../pages/Pedidos";
import NotFound404 from "../pages/NotFound404";

export default function Router() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<SignIn />} />
          <Route path="/criar-conta" element={<SignUp />} />

          <Route path="/dashboard" element={<BasicPage />}>
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="nova-categoria" element={<NovaCategoria />} />
            <Route path="pedidos" element={<Pedidos />} />
          </Route>

          <Route path="*" element={<NotFound404 />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
