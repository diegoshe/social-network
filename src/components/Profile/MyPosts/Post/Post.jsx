import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	console.log(props.newPostText)
	return (
		<div className={s.item}>
			<img src="https://image.shutterstock.com/image-vector/vector-illustration-cute-sitting-baby-260nw-129372287.jpg"/>
			{props.message}
			<div>
				<span>like</span> {props.likeCount}
			</div>
		</div>
	);
};

export default Post;
