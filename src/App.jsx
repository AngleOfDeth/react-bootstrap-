import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Category from "./components/Category";
const App = () => {
  return (
    <header className='header position-relative'>
      <Navbar/>
      <Slider />
      <Category/>
    </header>
  )
}

export default App