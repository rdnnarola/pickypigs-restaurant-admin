import React,{lazy,Suspense } from 'react';
import { Route, Switch } from "react-router-dom"
import './App.css';
import Routes from './routes';

const LoginPage = lazy(() => import('./view/LoginPage/LoginPage'));
// const Signup = lazy(() => import('./view/Signup/Signup'));

function App() {
  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route exact path="/login" render={(props) => <LoginPage {...props} />} />
        {/* <Route exact path="/signup" render={(props) => <Signup {...props} />} /> */}
        <Routes />
      </Switch>
    </Suspense>
  );
}

export default App;
