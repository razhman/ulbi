import { useState } from 'react';
import React from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton.jsx'

import './components/styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 1', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ])
 
  return (
    <div className="App">
    <form action="">
      <input type="text" placeholder="Название поста" />
      <input type="text" placeholder="Описание поста" />
      <MyButton>Создать пост</MyButton>
    </form>
    <PostList posts={posts} title="Посты про JS"/>
    
    
    </div>
  );
}

export default App;

