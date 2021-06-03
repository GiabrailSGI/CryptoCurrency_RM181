import './App.css';
import CryptoCurrencyPage from "./pages/CryptoCurrencyPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';

function App() {

  return (
      <>
          <Router>
              <Navbar />
              <Switch>
                  <Route path='/' exact component={CryptoCurrencyPage} />
                  <Route path='/about' component={About} />
              </Switch>
          </Router>
          {/* <CryptoCurrencyPage /> */}
      </>
  );
}

export default App;
