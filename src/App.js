import "./App.scss";
import Navbar from "./components/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Footer from "./components/common/Footer";
import WhatsApp from "./components/common/WhatsApp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        {/* <Route path="/about" exact element={<About />} />
        <Route path="/accomodation" exact element={<Accomodation/>} />
        <Route path="/activity" exact element={<Activity/>} />
        <Route path="/blog" exact element={<Blog/>} />
        <Route path="/cancellation" exact element={<Cancellation/>} />
        <Route path="/contact" exact element={<Contact/>} />
        <Route path="/gallery" exact element={<Gallery/>} />
        <Route path="/policy" exact element={<Policy/>} />
        <Route path="/groupretreats-page" exact element={<GroupRetreatsPage/>} />
        <Route path="/selfguided-page" exact element={<SelfGuidedPage/>} />
        <Route path="/terms" exact element={<Terms/>} /> */}
      </Routes>
      <Footer />
      <WhatsApp/>
    </div>
  );
}

export default App;
