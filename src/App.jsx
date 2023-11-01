import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Category from "./components/Category";
import Products from "./components/Products";
const App = () => {
  return (
    <div className='header position-relative'>
      <Navbar/>
      <Slider />
      <Category/>
      <Products/>
    </div>
  )
}

export default App