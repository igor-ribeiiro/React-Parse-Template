import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            rememberMe: false
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRememberMeClick = this.handleRememberMeClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleRememberMeClick() {
        this.setState({rememberMe: !this.state.rememberMe});
    }

    handleUsernameChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        const user = new Parse.User();
        user.set("username", this.state.email);
        user.set("email", this.state.email);
        user.set("password", this.state.password);
        user.set("rememberMe", this.state.rememberMe);

        user.signUp(null).then(
            function(user) {
                alert('User created successfully with email: ' + user.get("email"));
            },

            function(error) {
                alert("Error " + error.code + ": " + error.message);
            }
        )

    }

    render() {
        return (
            <div className="container">
                <form className="form-signup" onSubmit={this.handleSubmit}>
                    <h2 className="form-signup-heading">Please sign up</h2>
                    <input type="text" className="form-control" placeholder="Email address" required
                           autoFocus onChange={this.handleUsernameChange}/>
                    <input type="password" className="form-control" placeholder="Password" required
                           onChange={this.handlePasswordChange}/>
                    <label className="checkbox">
                        <input type="checkbox" value="remember-me" onChange={this.handleRememberMeClick}/>
                        &nbsp; Remember me
                    </label>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                </form>
            </div>

        );
    }


}

export default SignUp;