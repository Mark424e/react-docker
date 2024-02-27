import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './MusicBlog.css';

const MusicBlog = ()=>{
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8080/wp-json/wp/v2/posts?_embed')
    .then((res)=>setPosts(res.data))
  },[])
  const postsJsx = posts.map((post) => (
    <div key={post.id} className="card">
      <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
    </div>
  ));
  
  return(
    <div className='container'>{postsJsx}</div>
  )
}
export default MusicBlog;