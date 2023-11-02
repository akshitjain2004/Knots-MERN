import "./App.css";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import Review from "./component/testimonial/Review";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
