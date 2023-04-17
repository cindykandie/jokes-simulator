import "./App.css";
import AppRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
