import React from 'react';

function UserCard({data}) {
        return(
            <div>
                <h1>User Card</h1>
                <h2>{data.login}</h2>
                <img src={data.avatar_url}/>
                <p>{data.name}</p>
                <p>Located: {data.location}</p>
                <p>Public Repos: {data.public_repos}</p>
            </div>
        )
}

export default UserCard;