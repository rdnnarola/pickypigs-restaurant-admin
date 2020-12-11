import React, { lazy } from "react";
// import Header from "./Header/Header";
import { withRouter } from "react-router-dom";
import "./Layout.scss"

const Header = lazy(() => import('./Header/Header'));
const SideMenu = lazy(() => import('./SideMenu/SideMenu'));

// import { isAuth } from "../../shared/funs";
class Layout extends React.PureComponent {
    // state = {
    //     open: false,
    //     isLogin: true
    // };
    render() {
        return (
            <div>
               
                <Header />
                <SideMenu />
                <section className="main-content">
                    {this.props.children}
                </section>

            </div>
        );
    }
    // componentDidUpdate() {
    //     if (!isAuth()) {
    //         this.props.history.push("/login");
    //     }
    // }
    // componentDidMount() {
    //     document.body.classList.add("body-main");
    //     if (!isAuth()) {
    //         this.props.history.push("/login");
    //     }
    // }
}

export default withRouter(Layout);
