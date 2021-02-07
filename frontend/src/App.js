import React, { useState } from "react";
import Register from "./components/auth/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./components/Dashboards/Dashboard";
// import Dos from "./components/dosDashboard/Dos";
import Classes from "./components/Dashboards/Master/Classes";
import Courses from "./components/Dashboards/Master/Courses";
import Teachers from "./components/Dashboards/Master/Teachers";
import Todo from "./components/Dashboards/Master/Todo";
import WhoAreYou from "./components/WhoAreYou/WhoAreYou";
import Wizard from "./components/Wizard/Wizard";
import Student from "./components/Dashboards/shared/Student/Students";
import Invite from "./components/Dashboards/Master/Invite";

export const credentialContext = React.createContext(null);

function App() {
  const [credentialState, setCredentials] = useState("Nothing");
  return (
    <div>
      <credentialContext.Provider value={{ credentialState, setCredentials }}>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/wizard" exact component={Wizard} />
            <Route path="/Login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/whoareyou" component={WhoAreYou} />
            {/* <Route path="/Dos" component={Dos} /> */}
            <Route path="/Classes" component={Classes} />
            <Route path="/Courses" component={Courses} />
            <Route path="/Teachers" component={Teachers} />
            <Route path="/Todo" component={Todo} />
            <Route path="/students" component={Student} />
            <Route path="/invite" component={Invite} />
          </Switch>
        </Router>
      </credentialContext.Provider>
    </div>
  );
}

export default App;
