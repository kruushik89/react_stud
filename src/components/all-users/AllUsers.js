import React, {Component} from 'react';
import User from "../user/User";
import {userService} from "../../services/userService/userService";
import UserDetails from "../user-details/UserDetails";
import {Route, Switch} from "react-router";
import {withRouter} from "react-router-dom";
import {postService} from "../../services/postService/postService";
import AllPosts from "../all-posts/AllPosts";

class AllUsers extends Component {
    userService = new userService()

    state = {
        users: [],
        posts: [],
        post: null
    }

    postService = new postService();

    async componentDidMount() {
        let users = await this.userService.allUsers();
        this.setState({users})

        let posts = await this.postService.allPosts();
        this.setState({posts})
    }

    showPosts = (id) => {
        let arr = [];
        let findUserPosts = this.state.posts.filter(post => post.userId === id);
        arr.push(findUserPosts);
        this.setState({post: findUserPosts})
    }

    render() {
        let {users, post} = this.state;
        let { match: {url}} = this.props;
        return (
            <div>
                <h2 className={'text-center'}>Users</h2>
                <div className={'d-flex '}>
                    <div className="col-6">
                        <ul className={'list-group'}>
                            {
                                users.map(user=><User showPosts={this.showPosts} user={user} key={user.id}/>)
                            }
                        </ul>
                    </div>
                    <div className={'col-6'}>
                        <Switch>
                            <Route path={`${url}/:id`} render={(props) => {
                                let {match: {params: {id}}} = props;
                                return <UserDetails id={id} key={id}/>
                            }}/>

                            {/*<Route path={`${url}/:id`} render={(props)=> {*/}
                            {/*    let {match: {params: {id}}} = props;*/}
                            {/*    return <Post id={id} key={id}/>*/}
                            {/*}}/>*/}
                        </Switch>
                    </div>



                </div>
                <div className="container mt-5">
                    {post && <AllPosts posts={post}/>}
                </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);
