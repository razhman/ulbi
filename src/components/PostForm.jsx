import React, {useState} from "react"
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput';

const PostForm = ({create})=>{
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e)=>{
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now() 
    }
    if(post.title && post.body){
      create(newPost)
      setPost({title: '', body: ''})
    }
    
  }

  return(
    <form action="">
    {/* Управляемый компонент */}
      <MyInput type="text" placeholder="Название поста" value={post.title} onChange={e=>setPost({...post, title: e.target.value})}/>
      <MyInput type="text" placeholder="Описание поста" value={post.body} onChange={e=>setPost({...post, body: e.target.value})} />
      {/*Неуправляемый/неконтролируемый компонент */}
      {/* <MyInput type="text" placeholder="Описание поста" ref={bodyInputRef} /> */}
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  )
}

export default PostForm