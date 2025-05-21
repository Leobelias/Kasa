import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/header/header.jsx";
import Banner from "./page/home/Banner/Banner.jsx";
import Footer from "./layout/footer/footer.jsx";
import CardContainer from "./page/home/Cards/CardsContainer.jsx";
import Error from "./page/error/error.jsx";
import HomeInfo from "./page/Home-information/homeinfo.jsx";
import About from "./page/about/about.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Banner />
              <CardContainer />
              <Footer />
            </div>
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/homeinfo/:id" element={<HomeInfo />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
