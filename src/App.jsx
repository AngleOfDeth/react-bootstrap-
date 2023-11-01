import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
const App = () => {
  return (
    <header className='header position-relative'>
      <Navbar/>
      <section className="h-75"> <Slider /> </section>
    </header>
  )
}

export default App