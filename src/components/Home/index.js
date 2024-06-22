// Write your code here
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickingButton = () => {
    this.setState(previousState => ({isLoggedIn: !previousState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="app-container">
        <div className="home-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onClickingButton} />
          ) : (
            <Login login={this.onClickingButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
