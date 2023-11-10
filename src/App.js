import { BrowserRouter, Route, Routes } from "react-router-dom";
import { dummy } from "./movieDummy.js";
import Movie from "./Components/Movie.jsx";
import "./index.css";
import Header from "./Components/Header.jsx";
import Movies from "./pages/Movies.jsx";
import TV from "./pages/TV.jsx";
import Celebrity from "./pages/Celebrity.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  document.body.style.margin = 0;
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Movie"
            element={
              <div className="App">
                {dummy.results.map((item) => {
                  return (
                    <Movie
                      name={item.title}
                      poster={item.poster_path}
                      date={item.release_date}
                      overview={item.overview}
                    />
                  );
                })}
              </div>
            }
          />
          <Route path="/TV" element={<TV />} />
          <Route path="/Celebrity" element={<Celebrity />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
