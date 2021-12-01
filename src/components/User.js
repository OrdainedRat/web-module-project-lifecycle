import axios from 'axios';
import React from 'react';
import FollowerList from './FollowerList';


class User extends React.Component {

    constructor() {
        
        super()
        this.state = {
            user: [],
        }

    }
  
componentDidMount() {
    axios.get('https://api.github.com/users/ordainedrat')
        .then(res => {
           this.setState({
            ...this.state,
            user: res.data
           })
        })
        .catch(err => {
            console.log(err)
        })
        
}



   
   render() {
        return(
            <div>
                <div>
                    <img src={this.state.user.avatar_url} />
                </div>
                <div>
                   <h2>{this.state.user.login} - {this.state.user.name}</h2> 
                   <p>{this.state.user.bio}</p>
                   <h3>TOTAL FOLLOWERS: {this.state.user.followers}</h3>
                   <h3>TOTAL REPOS: {this.state.user.public_repos}</h3>
                </div>
                <FollowerList/>
            </div>
        )
    }

}

export default User