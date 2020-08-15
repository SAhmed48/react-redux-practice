import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/list-post/list-post.component';
import StoreContext from './contexts/storeContext';
import configureAppStore from './store/config';

const store = configureAppStore();

function App() {
  return (
    <StoreContext.Provider value={store}>
      <PostList />
    </StoreContext.Provider>
  );
}

export default App;
