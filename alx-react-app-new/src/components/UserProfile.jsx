import React from 'react';

const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ color: 'blue', fontSize: '1.5rem', marginBottom: '8px' }}>{props.name}</h2>
            <p style={{ fontSize: '1.1rem', margin: '4px 0' }}>
                Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{props.age}</span>
            </p>
            <p style={{ fontStyle: 'italic', color: '#555', margin: '4px 0' }}>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;