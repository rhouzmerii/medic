import "./App.css"
import Sidebaar from "./components/Sidebar"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Progonosis from "./pages/Progonosis"
import PasswordRecovery from "./pages/PasswordRecovery"
import PasswordRecoveryPhone from "./pages/PasswordRecoveryPhone"
import Support from "./pages/support"

function App() {
  return (
    <div className=''>
      <Router>
       

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/prognosis' exact element={<Progonosis/>} />
          <Route path='/pro' exact element={<PasswordRecovery/>} />
          <Route path='/proh' exact element={<PasswordRecoveryPhone/>} />
          <Route path='/suppo' exact element={<Support/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
