import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './AuthProvider/index.tsx'
import { Signin } from './Pages/Signin.tsx'
import { Home } from './Pages/Home.tsx'
import { Search } from './Pages/Search.tsx'
import DMovie from './Pages/Movie.tsx'
import { Signup } from './Pages/Signup.tsx'






createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home/>}/>
          <Route path="movie/:id" element={<DMovie/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path='signin' element={<Signin/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
