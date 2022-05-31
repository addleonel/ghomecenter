import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import '../assets/styles/App.scss';

const App = ()  =>{
  return (
    <div className="App">
      <Router>
        <Header/>
          <div className="wrap">
              <div className="main">
                  <Routes>
                      <Route exact path="/" element={ <Main/> } />
                      <Route path="/intro" element={<Main/>} />
                      <Route path="/about" element={<Main/>} />
                      <Route path="/contact" element={<Main/>} />
                      {/* <Route path="/linkcard/" component={ LinkcardPage }/> */}
                  </Routes>
              </div>
          </div>
          <div className="footer">
              <Footer/>
          </div>  
      </Router>
    </div>
  );
}

export default App;
