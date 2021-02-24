import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions'

class AddLoginDetails extends Component {

    constructor(props) {
        super(props)

        this.registrationId = React.createRef();
        this.userName = React.createRef();
        this.emailId = React.createRef();
        this.password = React.createRef();
    }

    componentDidMount() {
        this.props.clearState()
    }
    componentDidUpdate() {

        let check = this.props.returnedMessage.split(' ')
        if (check[0] === 'Successfully') {
            setTimeout(() => {
                this.props.history.push('/')
            }, 2000)
        }
    }
    add() {

        let newLoginDetails = {
            registrationId: this.registrationId.current.value,
            userName: this.userName.current.value,
            emailId: this.emailId.current.value,
            password: this.password.current.value
        }
        this.props.onAddLoginDetails(newLoginDetails)
    }




    render() {
        return (
            <div>


                <h2 class="text-primary" style={{ left: "25%", fontSize: "40px", textShadow: "2px 2px black" }}>REGISTER HERE !!!!!</h2>
                <div>
                    <br />
                    <br />
                    <div className="card col-md-3 offset-md-2 ">
                        <div className="mb-3 add-loginDetails">
                            <input type="number" ref={this.registrationId} pattern="[0-9]+" className="form-control" id="plantid" placeholder="ID Will be Auto Generated" />
                        </div>

                        <div className="mb-3 add-loginDetails">
                            <input type="text" ref={this.userName} className="form-control" id="plantname" placeholder="User Name" />
                        </div>

                        <div className="mb-3 add-loginDetails">
                            <input type="text" ref={this.emailId} className="form-control" id="plantheight" placeholder="email id" />
                        </div>
                        <div className="mb-3 add-loginDetails">
                            <input type="password" ref={this.password} className="form-control" id="plantmedicinaluse" placeholder="password" />
                        </div>

                    </div>
                    <div class="btn-show-inline-block">
                        <button type="button" onClick={this.add.bind(this)} className="btn btn-primary add-button" data-inline="true">Register</button>
                        <a href="/"><button className="btn btn-danger add-button" data-inline="true" style={{ marginLeft: "10px" }}>Cancel</button></a>
                    </div>

                </div>
                <div className={(this.props.returnedMessage === '') ? '' : "alert "} role="alert">
                    <h5><span class="text-white bg-dark">   {this.props.returnedMessage}</span></h5>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        returnedMessage: state.returnedMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddLoginDetails: (loginDetails) => {
            dispatch(actionCreators.addLoginDetails(loginDetails))
        },

        clearState: () => {
            dispatch(actionCreators.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddLoginDetails))