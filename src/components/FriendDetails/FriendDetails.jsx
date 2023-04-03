import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData()
    console.log(friend)
    return (
        <div>
            <h4>{friend.name}</h4>
        </div>
    );
};

export default FriendDetails;