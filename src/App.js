import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css';
import AllProducts from './Interface/QuickMember/AllProducts';
import DashboardBase from './Interface/Dashboard/DashboardBase';
import Sidebar from './Interface/SideBar/Sidebar';
import Users from './Interface/QuickMember/Users/Users';
import AdminLogin from './Interface/Registration/AdminLogin';
import NotFound from './Interface/NotFound';
import EditProduct from './Interface/QuickMember/EditProduct';
import UploadProduct from './Interface/QuickMember/CreateProduct/UploadProduct';
import Testing from './Interface/Testing';
import EditUser from './Interface/QuickMember/Users/EditUser';
import { useState } from 'react';


function App() {
  // const [loginState, setloginState] = useState()
  // useEffect(() => {
  let loginState = JSON.parse(localStorage.getItem('Adminuser'));
  const [loacation, setloacation] = useState()
  // console.log(loacation)



  return (
    // <div className="Appu">
    <Router>
      {loacation === '/' ? null : <div className="pr-40"><Sidebar /></div>}
      <Routes>
        <Route path='/' element={!loginState ? (<AdminLogin setloacation={setloacation} />) : <Navigate replace to={"/home"} />}></Route>
        <Route path='/home' element={<DashboardBase />}></Route>
        <Route path='/AllProducts' element={<AllProducts />}></Route>
        <Route path='/UploadProduct' element={<UploadProduct />}></Route>
        <Route path='/User' element={<Users />}></Route>
        <Route path='/editProduct/:id' element={<EditProduct />}></Route>
        <Route path='/EditUser/:id' element={<EditUser />}></Route>

        <Route path='/Testing' element={<Testing />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </Router>
    // </div>
  );
}

export default App;      
