import './App.css'
import Header from './Component/Header'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Signup from './Pages/Signup'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  

  return (
    <>
    <ToastContainer/>
      <BrowserRouter>
      <Header/>
      <Routes>

        <Route path="/" element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
