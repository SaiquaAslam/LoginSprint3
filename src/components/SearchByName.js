import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actions'

class SearchByName extends Component {

    constructor(props) {
        super(props)

        this.userName = React.createRef()
    }

    search() {
        this.props.onSearchByNames(this.userName.current.value)

    }

    componentDidMount() {
        this.props.clearState()
    }


    render() {

        let loginDetailsList = this.props.loginDetailsList.map((loginDetails, index) => {
            return (

                <tr key={index}>
                    <th>{loginDetails.registrationId}</th>
                    <td>{loginDetails.userName}</td>
                    <td>{loginDetails.emailId}</td>
                    <td>{loginDetails.password}</td>
                </tr>
            )
        })

        return (
            <div className="container">
                {/* <div className="mb-3 input-search-name "> */}
                <br />
                <div className="card col-md-4 offset-md-4 offset-md-4" style={{ marginLeft: "4px" }}>
                    <input type="text" ref={this.userName} className="form-control" id="name" placeholder=" Name" />
                </div>

                <div>
                    <button className="btn btn-success" onClick={this.search.bind(this)}>Search</button>
                </div>

                <hr />

                <div className="loginDetails-table-div">
                    <h2 span class="text-success" style={{ textShadow: "2px 2px black" }}>PLANTS WITH GIVEN NAME  !!! :)</h2>
                    <table className="table table-striped table-bordered " border="8">
                        <thead class="bg-success">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">email</th>
                                <th scope="col">Pass</th>



                            </tr>
                        </thead>
                        <tbody class="table-primary">
                            {loginDetailsList}
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        loginDetailsList: state.loginDetailsList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchByName: (userName) => dispatch(actionCreators.getloginDetailsByName(userName)),
        clearState: () => dispatch(actionCreators.clearState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchByName)