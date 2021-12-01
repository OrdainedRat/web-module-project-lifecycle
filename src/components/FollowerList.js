import axios from "axios";
import React from "react";
import Follower from "./Follower";

const FollowerList = (props) => {

    return(
        <div>
            <h1> workssss</h1>
            {props.followers.map(follow => (
                <Follower follower={follow} key={follow.id} />
    ))}
        </div>
    )
}

export default FollowerList