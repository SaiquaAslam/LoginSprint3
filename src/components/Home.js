import React from 'react'
import { withRouter } from 'react-router-dom'

class Home extends React.Component {

    go() {
        console.log(' Yippeee ' + this.props)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <br />
                <h1 class="text-primary" style={{ left: "25%", fontSize: "40px", textShadow: "2px 2px black" }}><center>WELCOME TO HOME PAGE!!!!!!</center></h1>

            </div >
        )
    }
}


export default withRouter(Home)


