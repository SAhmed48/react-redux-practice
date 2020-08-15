import React, { Component } from 'react';
import StoreContext from '../../contexts/storeContext';


class PostList extends Component {

    static contextType = StoreContext;

    componentDidMount(){
        console.log('context',this.context);
    }

    render(){
        return (
            <div>
                Posts
            </div>
        )
    }
}

export default PostList;