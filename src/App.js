import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Testimonial from './Pages/Testimonial/Testimonial';
import Gallery from './Pages/Gallery/Gallery';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="">
      <Header />
      <About></About>
      <Services></Services>
      <Testimonial></Testimonial>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
