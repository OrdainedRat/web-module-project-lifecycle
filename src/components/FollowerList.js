import axios from "axios";
import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {

    constructor() {
        super()
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/ordainedrat/followers')
            .then(res => {
                console.log('here is my res', res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return(
            <div>
                <h3>Follower List Working</h3>
                <Follower/>

            </div>
        )
    }
}

export default FollowerList