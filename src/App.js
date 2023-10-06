import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { NewRoute } from "./NewRoute/NewRoute";
import { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home setCounter={setCounter} counter={counter} />}
          />
          <Route
            path="/NewRoute"
            element={<NewRoute setCounter={setCounter} counter={counter} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
