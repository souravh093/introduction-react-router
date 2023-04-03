import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData()
    const {website, name, company} = friend;
    const navigate = useNavigate()
    const backHandler = () => {
        navigate(-1)
    }
    return (
        <div>
            <h4>{name}</h4>
            <h2>Website Name: {website}</h2>
            <h3>Company Name: {company.name}</h3>
            <Link to={'/friends'}><button>Back to the friend</button></Link>
            <button onClick={backHandler}>Back</button>
        </div>
    );
};

export default FriendDetails;