import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
    </div>
  )
}

export default App