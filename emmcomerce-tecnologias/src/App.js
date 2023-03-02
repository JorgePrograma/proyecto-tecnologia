import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import Register from "./pages/Register";
import Usuarios from "./pages/Usuarios";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productos" element={<ProductsList />} />
        <Route exact path="/producto" element={<Product />} />
        <Route exact path="/loguin" element={<Login />} />
        <Route exact path="/registrar" element={<Register />} />
        <Route exact path="/usuarios" element={<Usuarios />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
