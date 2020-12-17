import React, {Component} from 'react';

import {Link, withRouter} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";

class User extends Component {
    render() {
        let {user, match: {url}, showPosts} = this.props;
        return (

                <li className={'list-group-item'}>
                    {/*<Link to={`${url}/${user.id}`}></Link>*/}
                    {user.id}. {user.name}
                    <div>
                        <Link to={`${url}/${user.id}`} className={'btn btn-info mr-3'}>Details</Link>
                        <button onClick={()=>showPosts(user.id)} className={'btn btn-success'}>Post</button>
                    </div>
                </li>


        );
    }
}

export default withRouter(User);
