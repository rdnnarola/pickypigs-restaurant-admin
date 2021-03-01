import React,{lazy,Suspense } from 'react';
import { Route, Switch } from "react-router-dom"
import './App.css';
import Routes from './routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AlertSystemPage from './view/AlertSystemPage/AlertSystemPage'
import LoadonTop from './components/LoadonTop';
import TokenVerificationPage from './view/TokenVerificationPage';

const LoginPage = lazy(() => import('./view/LoginPage/LoginPage'));
const ResetPasswordPage = lazy(() => import('./view/ResetPasswordPage/ResetPasswordPage'));
// const Signup = lazy(() => import('./view/Signup/Signup'));
const TheWhoPage = lazy(() => import("./view/TheWhoPage/TheWhoPage"));
const TheFaqPage = lazy(() => import("./view/TheFaqPage/TheFaqPage.jsx"));
const TermsAndConditionPage = lazy(() => import("./view/TermsAndConditionPage/TermsAndConditionPage.jsx"));
const HowItWorksPage = lazy(() => import("./view/HowItWorksPage/HowItWorksPage.jsx"));

function App() {
  return (
    <React.Fragment>
    <Suspense fallback={<div></div>}>
        <div>
          <AlertSystemPage/>
        </div>
        <LoadonTop/>
      <Switch> 
        <Route exact path="/reset_password/:token" render={(props) => <ResetPasswordPage {...props} />} />
        <Route exact path="/login/:logintoken" render={(props) => <TokenVerificationPage {...props} />} />
        {/* <Route exact path="/home" render={(props) => <LoginPage {...props} />} /> */}

        {/* <Route exact path="/who" render={(props) => <TheWhoPage {...props} />} />
        <Route exact path="/faq" render={(props) => <TheFaqPage {...props} />} />
        <Route exact path="/terms" render={(props) => <TermsAndConditionPage {...props} />} />
        <Route exact path="/how" render={(props) => <HowItWorksPage {...props} />} /> */}
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
