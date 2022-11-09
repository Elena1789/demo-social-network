import React from 'react';
import s from './Post.module.css';

type PropsType = {
  message: string
  likesCount: number
}

const Post: React.FC<PropsType> = (props) => {

  return (

<div className = {s.item}>
<img src = 'https://cdn-icons-png.flaticon.com/128/2922/2922688.png'/>
{props.message}
<div>
<span>like</span> {props.likesCount}
</div>
</div>
)
}

export default Post;
