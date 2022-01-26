import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Alcohols from "./pages/alcohols";
import Drinks from "./pages/drinks";
import Mixers from "./pages/mixers";
import Nav from "./components/nav";
import Signin from "./pages/signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alcohols" element={<Alcohols />} />
          <Route path="/mixers" element={<Mixers />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
