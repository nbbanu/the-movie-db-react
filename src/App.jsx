import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import DetailPage from "./pages/Detail";


const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:movieId" element={<DetailPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
