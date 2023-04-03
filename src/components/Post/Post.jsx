import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {title, id, body} = post;
    const navigate = useNavigate()
    const handleNavigation = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h2>{id}</h2>
            <h1>{title}</h1>
            <Link  style={{marginTop: 'auto'}} to={`/post/${id}`}><button>Details</button></Link>
            <button onClick={handleNavigation}>With navigate Details</button>
        </div>
    );
};

export default Post;