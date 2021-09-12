import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { checkAuth } from "./redux/actions/user.ac";
import SignUp from "./components/SignUp/SignUp";
import SignOut from "./components/SignOut/SignOut";
import SignIn from "./components/SignIn/SignIn";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [])
  return (
   
      <Router>
     <div className="container py-5">
        <Switch>
          <Route path="/auth/signup">
            <SignUp />
          </Route>
          <Route path="/auth/signin">
            <SignIn />
          </Route>
          <Route path="/auth/signout">
            <SignOut />
          </Route>
          <Route path="/">
            <Header />
            <Main />
          </Route>
        </Switch>
  </div>
    </Router>
     
   
  );
}

export default App;
