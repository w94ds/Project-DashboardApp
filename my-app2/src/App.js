import './App.scss'
import Home from './component/Pages/PageHome/home'
import Dashboard from './component/Pages/PageDashboard/dashboard'
import Contact from './component/Pages/PageContact/contact'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;