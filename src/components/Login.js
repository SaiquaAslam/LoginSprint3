// import React, { Component } from 'react';
// import { Redirect } from "react-router-dom"
// import { connect } from "react-redux"


// import * as actions from "../actions/actions"

// class Login extends Component {

//     constructor() {
//         super();
//         this.state = {
//             emailId: null,
//             password: null
//         }
//     }

//     valueChangeHandler = ({ target }) => {
//         this.setState({ [target.emailId]: target.value })
//     }

//     validateAuthDetails = () => {
//         if (!this.state.emailId || !this.state.password) {
//             return false;
//         }
//         return true;
//     }

//     handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!this.validateAuthDetails()) {
//             alert("Login details are required");
//         }

//         const authBody = this.state;

//         try {
//             this.props.getLogin(authBody);
//         }
//         catch (error) {
//             console.log(error.message)
//         }

//     }

//     render() {

//         if (this.props.message) {
//             return <Redirect to='/' />
//         }


//         return (

//             <form onSubmit={this.handleSubmit} >
//                 <section className="background" style={{ backgroundImage: "url(./bgm1.jpg)" }}></section>

//                 <h2 style={{ left: "25%", fontSize: "40px", textShadow: "2px 2px black" }}> LOGIN PAGE </h2>

//                 <div className="form-group">
//                     <label>Email-Id</label>
//                     <input type="emailId" className="form-control" placeholder="user name" name="email-id"
//                         onChange={this.valueChangeHandler} />
//                 </div>

//                 <div className="form-group">
//                     <label>PASSWORD</label>
//                     <input type="password" className="form-control" placeholder="password"
//                         name="password"
//                         onChange={this.valueChangeHandler}
//                     />
//                 </div>

//                 <button className="btn btn-primary btn-block" type="submit">LOGIN</button>
//             </form>

//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         loginData: state.loginData,
//         message: state.returnedMessage
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getLogin: (payLoad) => dispatch(actions.getLogin(payLoad)),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login);