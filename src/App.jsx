import "./assets/styles/output.css";
import { Route, Routes } from "react-router";
import { Home } from "./components/home/Home"
import { Man, ManRopa, ManZapatilla } from "./components/clothing/man/Man";
import { Women, WomenRopa, WomenZapatilla } from "./components/clothing/women/Women";
import { Kid, KidRopa, KidZapatilla } from "./components/clothing/kid/Kid";
import { BeachMan, BeachWomen } from "./components/clothing/beach/Beach";
import { Accessories } from "./components/clothing/accessories/Accessories";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/clothing/man" element={<Man />} />
        <Route path="/clothing/man/clothing" element={<ManRopa />} />
        <Route path="/clothing/man/shoes" element={<ManZapatilla />} />
        
        <Route path="/clothing/women" element={<Women />} />
        <Route path="/clothing/women/clothing" element={<WomenRopa />} />
        <Route path="/clothing/women/shoes" element={<WomenZapatilla />} />
        
        <Route path="/clothing/kid" element={<Kid />} />
        <Route path="/clothing/kid/clothing" element={<KidRopa />} />
        <Route path="/clothing/kid/shoes" element={<KidZapatilla />} />

        <Route path="/clothing/man/beach" element={<BeachMan />} />
        <Route path="/clothing/women/beach" element={<BeachWomen />} />

        <Route path="/clothing/accessories" element={<Accessories />} />
      </Routes>
    </div>
  )
}

export default App
