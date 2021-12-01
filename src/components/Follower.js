import React from "react";

const Follower = (props) => {

    
    return(
        <div>
            <img src={props.follower.avatar_url} />
            <h4>{props.follower.login}</h4>
        </div>
    )
}

export default Follower;