import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import AddCategoria from "./pages/AddCategoria";
import Categoria from "./pages/GetCategoria";

function App() {
  return (
    <Router>
        <NavBar />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/categoria/create" element={<AddCategoria/>} />
            <Route exact path="/categoria/" element={<Categoria/>} />
          </Routes>
        </Container>
    </Router>
  );
}

export default App;
