import React,{lazy,Suspense } from 'react';
import { Route, Switch } from "react-router-dom"
import './App.css';
import Routes from './routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AlertSystemPage from './view/AlertSystemPage/AlertSystemPage'

const LoginPage = lazy(() => import('./view/LoginPage/LoginPage'));
const ResetPasswordPage = lazy(() => import('./view/ResetPasswordPage/ResetPasswordPage'));
// const Signup = lazy(() => import('./view/Signup/Signup'));

function App() {
  return (
    <React.Fragment>
    <Suspense fallback={<div></div>}>
        <div>
          <AlertSystemPage/>
        </div>
      <Switch> 
        <Route exact path="/reset_password/:token" render={(props) => <ResetPasswordPage {...props} />} />
        <Route exact path="/login" render={(props) => <LoginPage {...props} />} />
        {/* <Route exact path="/signup" render={(props) => <Signup {...props} />} /> */}
        <PrivateRoute>
          <Routes />
        </PrivateRoute>
      </Switch>
    </Suspense>
    </React.Fragment>
  );
}

export default App;
