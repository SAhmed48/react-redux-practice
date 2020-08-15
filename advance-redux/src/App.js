import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/list-post/list-post.component';
import configureAppStore from './store/config';
import { Provider } from 'react-redux';

const appStore = configureAppStore();

function App() {
  return (
    <Provider store={appStore}>
      <PostList />
    </Provider>
  );
}

export default App;
