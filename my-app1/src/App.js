import Home from './pages/home/home'
import List from './pages/list/list'
import Login from './pages/login/login'
import Single from './pages/single/single'
// import Users from './pages/users/users'
// import New from './pages/new/new'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              {/* <Route path="new" element={<New inputs={userInputs} title="Add New User" />} /> */}
            </Route>
          </Route>

          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            {/* <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
