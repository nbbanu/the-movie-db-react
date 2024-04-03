import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
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
