import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Nomatch from './Components/Nomatch/Nomatch'
import Userinfo from './Components/Userinfo/Userinfo'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/users/:id' element={<Userinfo/>} />
        <Route path='*' element={<Nomatch/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
