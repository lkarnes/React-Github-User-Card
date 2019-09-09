import React from 'react';

function UserCard({data, follow}) {
    console.log(follow)
    if(!follow){
        return(<p>loading...</p>)
    }
        return(
            <div className='user-card'>
                <h1 className='card-header'>{data.login}</h1>
                
                <div className='user-info'>
                    <img className='user-img' src={data.avatar_url}/>
                    <p>{data.name}</p>
                    <p>Located: {data.location}</p>
                    <p>Public Repos: {data.public_repos}</p>
                    <h3 className='f-header'>Followers: {data.followers}</h3>    
                </div>
                
                
                <div className='following-box'>
                    <h3 className='f-header'>Following:</h3>
                    {follow.map(user=>(
                        <div className='user'>
                            <img className='following-img' src={user.avatar_url}/>
                            <p>{user.login}</p>
                        </div>
                        
                    ))}
                </div>
            </div>
        )
}

export default UserCard;