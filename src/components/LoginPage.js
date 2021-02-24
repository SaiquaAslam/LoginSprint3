import React from 'react'
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"


import * as actions from "../actions/actions"

class LoginPage extends React.Component {



    constructor(props) {
        super(props)

        this.state = {
            emailId: "",
            userName: "",
            password: "",
            emailerr: "",
            nameerr: "",
            passerr: ""
        }
    }

    valueChangeHandler = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    // valid() {
    //     let isValid = true;
    //     if (this.state.userName.length < 3 && this.state.password.length < 5) {
    //         this.setState(
    //             { nameerr: "Invalid name", passerr: "Weak Password" }
    //         )
    //         isValid = false;
    //     }
    //     if (this.state.userName.length < 3) {
    //         this.setState(
    //             { nameerr: "Invalid name" }
    //         )
    //         isValid = false;
    //     }
    //     if (this.state.password.length < 5) {
    //         this.setState(
    //             { passerr: "Weak Password" }
    //         )
    //         isValid = false;
    //     }
    //     return isValid
    // }

    go() {
        console.log(' Yippeee ' + this.props)
        this.props.history.push('/')
    }

    validateFormElements = () => {
        const formValue = this.state;

        if (!formValue.emailId || formValue.password) {
            return false
        }
        return true;
    }

    produceAuthPayLoad = () => {
        const formValue = this.state;

        return {
            "emailId": formValue.emailId,
            "password": formValue.password,
            "registrationId": Math.random(Math.random() * 9999),
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        if (!this.validateFormElements()) {
            alert("Missing data");
            return;
        }

        const authPayLoad = this.produceAuthPayLoad();

        this.props.startAuthentication(authPayLoad)

    }



    render() {

        if (this.props.message) {

            return <Redirect to="/" />
        }

        return (

            <div>
                <h2 class="text-primary" style={{ left: "25%", fontSize: "40px", textShadow: "2px 2px black" }}>LOGIN PAGE!!</h2>

                <br />
                <br />
                <form onSubmit={this.onFormSubmit}>
                    <div className="card col-md-3 offset-md-2 ">

                        <div className="mb-3 add-loginDetails">
                            <input type="text" ref={this.emailId} className="form-control" id="plantheight" placeholder="email id" name="emailId" onChange={this.valueChangeHandler} />
                        </div>
                        <div className="mb-3 add-loginDetails">
                            <input type="password" onChange={this.valueChangeHandler}
                                ref={this.password} className="form-control" id="plantmedicinaluse" placeholder="password" />
                            <p style={{ color: "red", fontSize: "12px" }}>{this.state.passerr}</p>
                        </div>

                    </div>
                    <div class="btn-show-inline-block">
                        <button type="submit" className="btn btn-primary add-button" data-inline="true">Login</button>
                        <a href="/"><button className="btn btn-danger add-button" data-inline="true" style={{ marginLeft: "10px" }}>Cancel</button></a>

                    </div>

                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginData: state.loginData,
        message: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAuthentication: (payLoad) => dispatch(actions.authenticateUser(payLoad)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
