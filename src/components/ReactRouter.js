import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import AddLoginDetails from './AddLoginDetails'
import Home from './Home'
import LoginPage from './LoginPage'
import Header from './Header';
import Footer from './Footer';
import SearchByName from './SearchByName'
function ReactRouter() {
    return (
        <Router>
            <Header />
            <Footer />
            <div>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/"><h6 class="text-primary">Home</h6></Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/add"><h6 class="text-primary">New Registration</h6></Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/loginPage"><h6 class="text-primary">Login</h6></Link>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>


                <Switch>
                    <Route path="/loginPage">
                        <LoginPage></LoginPage>
                    </Route>
                    <Route path="/add">
                        <AddLoginDetails></AddLoginDetails>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}

export default ReactRouter
