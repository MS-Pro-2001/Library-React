import './App.css';
import {Route,Switch,BrowserRouter, Redirect} from 'react-router-dom';
import Home from './Home';
import Books from './Books';
import Admin from './Admin';
import Contact from './Contact';



function App() {
  return (
    <>
   

  
    
    

    <Switch>
      <Route exact path="/" component={Home}  />
      <Route exact path="/Books" component={Books}  />
      <Route exact path="/Admin" component={Admin}  />
      <Route exact  path="/Contact" component={Contact}  />
      <Redirect to="/"  />


    </Switch>
    
    
    </>
 
  );
}

export default App;
