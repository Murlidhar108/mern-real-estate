import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import PrivateRoute from '../../backend/controllers/PrivateRoute'

export default function App() {
  return (
    <>
      <BrowserRouter>

        {/* header is outside of the "Routes" tag , so that it is available for all pages */}
        <Header /> 

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route element={<PrivateRoute />}>
           <Route path='/profile' element={<Profile />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

