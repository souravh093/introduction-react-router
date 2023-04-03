import React from 'react';
import './Friend.css';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const navigate = useNavigate()
    const backHandler = () => {
        navigate(-1)
    }
    const {name, id, phone, username, website, email, address, company} = friend;
    return (
        <div className='friend'>
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/friend/${id}`}><button>Details</button></Link>
            <button onClick={backHandler}>Back</button>
        </div>
    );
};

export default Friend;