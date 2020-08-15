import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as apiActions from '../../store/api';


class PostList extends Component {

    componentDidMount(){
        this.props.loadPosts();
    }

    render(){
        console.log('render', this.props);
        return (
            <div>
                Posts
            </div>
        )
    }
}


// posts: state.entities.list
const mapStateToProps = state => ({
    bugs: state.entities.bugs.list
});

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(apiActions.apiCallStart({
        url: '/post/list',
        onStart: 'bugRequested',
        onError: 'bugRequestedFailed',
        onSuccess: 'bugAdded'
    }))
});

// connect: Container Component
// PostList: presentational Component

export default connect(mapStateToProps, mapDispatchToProps)(PostList);