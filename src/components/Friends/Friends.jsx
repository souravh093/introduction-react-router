import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    const styleGrid = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)'
    }
    return (
        <div style={styleGrid}>
            {
                friends.map((friend, index) => <Friend friend={friend} key={friend.id}></Friend>)
            }
        </div>
    );
};

export default Friends;