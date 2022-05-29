import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import '../assets/styles/App.css';
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const App = ()  =>{
  return (
    <div className="App">
      <Router>
        <Header/>
          <div className="wrap">
              <div className="main">
                  <Routes>
                      <Route exact path="/" component={ Main } />
                      {/* <Route path="/intro" component={ Introduction }/>
                      <Route path="/linkcard/" component={ LinkcardPage }/> */}
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
