
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import AdminLogin from "./components/admin/adminlogin/AdminLogin";
import Dashboard from "./components/admin/adminlogin/Dashboard";
import HomePage from "./components/userinterface/homepage/HomePage"
import ShowCategory from "./components/userinterface/homepage/ShowCategory";
import ProductDetailsCategory from "./components/userinterface/homepage/ProductDetailsCategory";
import MyMenuBar from "./components/userinterface/homepage/MyMenuBar";
import Header from "./components/userinterface/homepage/Header";
import Showitem from "./components/userinterface/homepage/Showitem";
import Scrollitem from "./components/userinterface/homepage/Scrollitem"
import Verification from "./components/userinterface/homepage/Verification";
import Signup from "./components/userinterface/homepage/Signup";
import Addcart from "./components/userinterface/homepage/AddCart";
function App() {
  return (
   <div>
    <Router>
    <Header />
      <Routes>
        <Route element ={<Scrollitem/>} path="/itemslider"></Route>
        <Route element={<AdminLogin/>} path="/adminlogin"></Route>
        <Route element={<Dashboard/>} path="/dashboard/*"></Route>
        <Route element={<HomePage/>} path="/homepage"></Route>
        <Route element={<ShowCategory/>} path="/showcategory"></Route>
        <Route element={<ProductDetailsCategory/>} path="/productdetailscategory"></Route>
        <Route element={<MyMenuBar/>} path="/mymenubar"></Route>
        <Route element={<Showitem/>} path="/showitem"></Route>
        <Route element={<Verification/>} path="/verification"></Route>
        <Route element={<Signup/>} path="/signup"></Route>
        <Route element={<Addcart/>} path="/addcart"></Route>
      </Routes>
    </Router>
   
   </div>
  );
}

export default App;
