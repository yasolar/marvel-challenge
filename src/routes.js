import React from "react"
import { Routes, Route } from 'react-router-dom'
import Home from "../src/pages/home"
import HeroList from "../src/pages/hero-list"
import HeroDetails from "../src/pages/hero-details"
import NavBar from '../src/components/navBar'

const MainRoutes = () => {
   return(
    <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="HeroList/" element={<HeroList />} />
            <Route path="HeroDetails/" element={<HeroDetails />} />
        </Routes>
    </>
   )
}

export default MainRoutes