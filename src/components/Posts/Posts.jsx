import React from 'react';
import './Posts.css';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className='posts'>
            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }
        </div>
    );
};

export default Posts;