import React from 'react';
import './PostDetails.css';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    const { body, title, id, userId} = post;
    const detailsStyle = {
        padding: '10px',
        width: '50%',
        background: '#333',
        margin: '0 auto'
    }
    const navigate = useNavigate()
    const handlerBack = () => {
        navigate('/posts')
    }
    
    return (
        <div>
            <h1>Post Details</h1>
            <div style={detailsStyle}>
                <h3>Post is id: {id}</h3>
                <h2>{title}</h2>
                <p>{body}</p>
                <button onClick={handlerBack}>Back to the post</button>
                <Link to={'/posts'}><button>Back Post</button></Link>
            </div>
        </div>
    );
};

export default PostDetails;