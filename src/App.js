import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Quiz from "./components/quiz/Quiz";
import Registration from "./components/registration/Registration";


function App() {
  return (

    <div className="App">
      
      
      <Router>
      <Header/>
      <Quiz/>
        <Switch>
          
          <Route path={"/login"} exact component={Login}/>
          <Route path={"/registration"} exact component={Registration}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
