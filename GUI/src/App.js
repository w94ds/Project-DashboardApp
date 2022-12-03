
import Home from './component/PageHome/home'
import Dashboard1 from './component/PageDashboard/dashboard1'
import Dashboard2 from './component/PageDashboard/dashboard2'
import Contact from './component/PageContact/contact'

import './Asset/App.scss'
import './Asset/navbar.scss'
import './Asset/hContain.scss'
import './Asset/d1Contain.scss'
import './Asset/d2Contain.scss'
import './Asset/cContain.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="dashboard1" element={<Dashboard1 />} />
            <Route path="dashboard2" element={<Dashboard2 />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;