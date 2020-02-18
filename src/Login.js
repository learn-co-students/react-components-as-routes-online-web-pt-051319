import  React, {Component} from 'react';

export default class Login extends Component {
	render() {
		return (
			<React.Fragment>
				<form>
					<div>
						<label htmlFor="username" >Username: </label>
						<input name="username" id="username" />
					</div>
					<div>
						<label htmlFor="password" >Password: </label>
						<input name="password" id="password" />
					</div>
					<button type="submit">Login</button>
				</form>
			</React.Fragment>
		)
	}
}

