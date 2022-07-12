import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
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

      case "/Signup":
      component = <Signup />
      break;
  }
  return ( <div className="container" >
    <Navbar/>
    {component}
  </div>
  );
}

export default App;
