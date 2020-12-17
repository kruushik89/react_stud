import React, {Component} from 'react';
import Post from "../post/Post";


class AllPosts extends Component {

    render() {
        const {posts} = this.props;
        return (
            <div className={'row '}>
                {posts.map(post => <Post post={post}/>)}
            </div>
        );
    }
}

export default AllPosts;
