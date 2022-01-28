import useLocalStorage from "use-local-storage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Alcohols from "./pages/alcohols";
import Drinks from "./pages/drinks";
import Mixers from "./pages/mixers";
import Nav from "./components/nav";
import Signin from "./pages/signin";
import GlobalContext from "./context/globalContext";

function App() {
  const [global, setGlobal] = useLocalStorage("global", {});

  return (
    <GlobalContext.Provider value={{ global, setGlobal }}>
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
    </GlobalContext.Provider>
  );
}

export default App;
