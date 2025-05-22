import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/header/header.jsx";
import Footer from "./layout/footer/footer.jsx";
import Error from "./page/error/error.jsx";
import HomeInfo from "./page/Home-information/homeinfo.jsx";
import About from "./page/about/about.jsx";
import Home from "./page/home/home.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/homeinfo/:id" element={<HomeInfo />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
