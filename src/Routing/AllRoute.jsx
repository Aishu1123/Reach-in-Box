import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import FirstPage from '../Components/FirstPage'

const AllRoute = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/first" element={<FirstPage />}/>
    </Routes>
    </>
  )
}

export default AllRoute