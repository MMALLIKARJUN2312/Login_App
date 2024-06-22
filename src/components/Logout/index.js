// Write your code here

import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <button className="logot-button" type="button" onClick={logout}>
      Logout
    </button>
  )
}

export default Logout
