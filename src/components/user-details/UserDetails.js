import React, {Component} from 'react';
import {userService} from "../../services/userService/userService";

class UserDetails extends Component {
    state = {
        user: null
    }

    userService = new userService();

    async componentDidMount() {
        let user = await this.userService.user(this.props.id);
        this.setState({user})
    }

    render() {
        const {user} = this.state;
        return (
            <div className={'xxx'}>
                {user &&
                    <div className="card col-10">
                        <div className="card-body">
                            <h4 className="card-title">{user.name}</h4>
                            <h6 className="card-subtitle mb-2">{user.username}</h6>
                            <hr/>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><b>Phone</b>: {user.phone}</li>
                                <li className="list-group-item"><b>Email</b>: {user.email}</li>
                                <li className="list-group-item"><b>Website</b>: {user.website}</li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default UserDetails;
