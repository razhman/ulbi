import React, {useState, useMemo} from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

import './components/styles/App.css'
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'аа', body: 'У'},
    {id: 2, title: 'вв', body: 'С'},
    {id: 3, title: 'гг', body: 'фв'}
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts(){
   
  }

  const sortedPosts = useMemo(()=>{
    if(selectedSort){
      return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
     }
     return posts
  }, [selectedSort, posts])

  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
  }

  const removePost = (post)=>{
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortPosts = (sort)=>{
    setSelectedSort(sort)
  }
 
  return (
    <div className="App">
   <PostForm create={createPost}/>
   <hr style={{margin: '15px 0px'}} />
   <div>
   <MyInput 
   value={searchQuery}
   onChange={e => setSearchQuery(e.target.value)}
   placeholder="Поиск..." />
    <MySelect 
    value={selectedSort}
    onChange={sortPosts}
     defaultValue='Сортировка'
      options={[
      {value: 'title', name: 'По названию'},
      {value: 'body', name: 'По описанию'}
    ]}/>
     
   
    
   </div>
   {posts.length !== 0 
   ?
    <PostList remove={removePost} posts={sortedPosts} title="Посты про JS"/> 
    : 
    <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>}
  
    </div>
  );
}

export default App;

