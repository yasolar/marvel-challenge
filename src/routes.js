import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../src/pages/home"
import HeroList from "../src/pages/hero-list"
import HeroDetails from "../src/pages/hero-details"

const Routess = () => {
   return(
    <BrowserRouter>
        <div style={{fontSize:'30px', fontWeight: 'bold', backgroundColor: 'lightgrey', paddingLeft: '10px',height: '70px', justifyContent: 'center', display: "flex", flexDirection: 'column'}}>MARVEL CHALLENGE</div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="HeroList/" element={<HeroList />} />
            <Route path="HeroDetails/" element={<HeroDetails />} />
        </Routes>
    </BrowserRouter>
   )
}

export default Routess