import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { NewRoute } from "./NewRoute/NewRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewRoute" element={<NewRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
