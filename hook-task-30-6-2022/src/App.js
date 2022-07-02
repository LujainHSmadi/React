import Home from "./components/Home";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
function App() {
  return (
    <BrowserRouter>
   
    
      <Routes>
        <Route path="/:movie_id" element={<Movie />} />
        <Route path="/" element={<Home />} />
    
     
    </Routes>
    </BrowserRouter>
     
    
  );
}

export default App;
