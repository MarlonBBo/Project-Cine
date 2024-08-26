import { Outlet } from 'react-router-dom'

import './index.css'
import { Navbar } from './components/Navbar'


function App() {
  

  return (
   
      <div>
        <Navbar/>
        <Outlet/>
      </div>
  )
}

export default App
