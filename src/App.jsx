import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/homePage/Home";
import NavBar from "./components/navBar/NavBar";
import Search from "./components/search/Search";
import Individual from "./pages/individualMovie/Individual";
import "./App.css";
import Movies from "./pages/trendingMovies/Movies";
import Tv from "./pages/tv/Tv";
import FeatureItems from "./pages/featureItems/FeatureItems";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="flex gap-2">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending-movies" element={<Movies />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/feature" element={<FeatureItems />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
