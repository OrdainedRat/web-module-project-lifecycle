import axios from 'axios';
import React from 'react';
import FollowerList from './FollowerList';


class User extends React.Component {

    constructor() {
        
        super()
        this.state = {
            user: [],
            followers: []
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
        axios.get('https://api.github.com/users/ordainedrat/followers')
        .then(res => {
            this.setState({
                ...this.state,
                followers: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
        
}



   
   render() {
       console.log('followers', this.state.followers)
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
                <FollowerList followers={this.state.followers} />
            </div>
        )
    }

}

export default User