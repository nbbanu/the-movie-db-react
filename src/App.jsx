import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./pages/Home/Home";
import DetailPage from "./pages/Detail";


const App = () => {
  return (
    <div>
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:movieId" element={<DetailPage />} />
        </Routes>
    
      <Footer />
    </div>
  );
};

export default App;
