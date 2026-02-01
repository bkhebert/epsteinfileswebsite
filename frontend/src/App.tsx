import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./views/Home";
import Person from "./views/Person";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/person/:slug" element={<Person />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
