import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, id, phone, username, website, email, address, company} = friend;
    return (
        <div className='friend'>
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button><Link to={`/friend/${id}`}>Details</Link></button>
        </div>
    );
};

export default Friend;