import React, { Component } from "react"

class Login extends Component {
    render() {
        return (
          <>
            <form>
              <div>
                <input type="text" name="username" id="username" placeholder="Username" />
                <label htmlFor="username">Username</label>
              </div>
              <div>
                <input type="password" name="password" id="password" placeholder="Password" />
                <label htmlFor="password">Password</label>
              </div>
              <input type="submit" value="Login"/>
            </form>
          </>
        )
      }
}

export default Login