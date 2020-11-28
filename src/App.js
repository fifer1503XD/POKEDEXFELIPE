import React, {useState} from "react";
import './App.css';
import firebase, {auth} from "./firebase/config";
import SignIn from "./components/SignIn";
import {Route, Switch, useHistory} from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Pokedex from "./components/pokedex";

function App() {
  let history = useHistory();
  //Provedor de autenticacion con google
  let provider = new firebase.auth.GoogleAuthProvider();
  let facebookProvider = new firebase.auth.FacebookAuthProvider();
  let [user, setUser] = useState({});
  let [isLogged, setIsLogged] = useState(false);

  const signInGoogle = () => {
    auth.signInWithPopup(provider).then(result => {
      let user = result.user;
      setUser(user);
      setIsLogged(true);
      history.push('/panel');
    }).catch(error => {
      setIsLogged(false);
      console.log(error);
    })
  }

  const signInFacebook = () => {
    auth.signInWithPopup(facebookProvider).then(result => {
      let token = result.credential.accessToken;
      let user = result.user;
      setUser(user);
      setIsLogged(true);
      history.push('/panel');
      console.log(user);
    }).catch(error => {
      console.log(error);
    })
  }
  
  return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <SignIn signInGoogle={signInGoogle} signInFacebook={signInFacebook} logged={isLogged} setIsLogged={setIsLogged}/>
          </Route>
          <Route path="/registro">
            <SignUp />
          </Route>
          <PrivateRoute path="/panel" logged={isLogged} user={user} signInGoogle={signInGoogle} signInFacebook={signInFacebook}>
            <Pokedex />
          </PrivateRoute>
        </Switch>
      </div>
  );
}

export default App;
