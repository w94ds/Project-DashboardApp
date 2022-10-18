import './App.scss'
import Home from './component/Pages/PageHome/home'
// import Dashboard1 from './component/Pages/PageDashboard/dashboard1'
// import Dashboard2 from './component/Pages/PageDashboard/dashboard2'
// import Contact from './component/Pages/PageContact/contact'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* <Route path="dashboard1" element={<Dashboard1 />} />
            <Route path="dashboard2" element={<Dashboard2 />} />
            <Route path="contact" element={<Contact />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;