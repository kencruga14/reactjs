import React, { Component } from "react";
import UsersGrid from "../Organisms/UsersGrid";
import axios from 'axios';
class Users extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []

        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
    }


    render() {
        const { users } = this.state
        return <UsersGrid users={users} />
    }

}

export default Users;