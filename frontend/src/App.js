import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Signup from './Pages/Signup';

function App() {
  let component
  switch (window.location.pathname)
  {
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
