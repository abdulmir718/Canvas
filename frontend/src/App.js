import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import HomePage from './components/HomePage.js';
import PaintingDetails from './components/PaintingDetails.js';
import Cart from './components/Cart.js';
import Checkout from './components/Checkout';
import Login from './components/Login.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import './App.css';
function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path = '/' component = {HomePage}/>
          <Route exact path = '/about' component = {About} />
          <Route exact path = '/contact' component = {Contact} />
          <Route exact path = '/paintings/:id' component ={PaintingDetails} />
          <Route exact path = '/cart' component = {Cart} />
          <Route exact path = '/checkout' component = {Checkout}/>
          <Route exact path = '/login' component = {Login}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
