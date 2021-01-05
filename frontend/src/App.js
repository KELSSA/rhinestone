import React , { useState }from 'react';
import Register from './components/auth/Register';
import {BrowserRouter as  Router,Route,Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import  Dashboard from './components/Dashboard';
import Dos from './components/dosDashboard/Dos';
import Classes from './components/dosDashboard/Classes';
import Courses from './components/dosDashboard/Courses';
import Teachers from './components/dosDashboard/Teachers';
import Todo from './components/dosDashboard/Todo';

export const  credentialContext = React.createContext(null);

function App() {

  const credentialState = useState(null);
  return (
   
    <div>
      <credentialContext.Provider value={credentialState}>
      <Router>
        <Switch>
          <Route path='/' exact component={ Register}/>
          <Route path="/Login" component={Login}/>
        <Route path="/Dashboard" component={Dashboard}/>
        <Route path ="/Dos" component={Dos}/>
        <Route path ="/Classes" component={Classes}/>
        <Route path ="/Courses" component={Courses}/>
        <Route path ="/Teachers" component={Teachers}/>
        <Route path ="/Todo" component={Todo}/>


        </Switch>
      </Router>
      </credentialContext.Provider>

    </div>
  );
}
 
export default App;
