import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import UserHome from './Pages/UserHome';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/userhome/:id" element={<UserHome/>} />
      </Routes>
    </BrowserRouter>  
  );
  
  /*
  let component
  switch (window.location.pathname)
  {
      case "/":
      component = <Home />
      break;

      case "/login":
      component = <Login />
      break;

      case "/home":
      component = <Home />
      break;

      case "/signup":
      component = <Signup />
      break;

      case "/userhome":
      component = <UserHome />
      break;
  }
  return ( 
  );
  */
}

export default App;
