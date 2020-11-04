import React, { Component } from "react";
import { connect } from 'react-redux';
import validateUser from '../../redux/actions/loginValidationAction';
import getEmployeeData from '../../redux/actions/employeeDataAction';
import authentication from '../../authentication';
import './Login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        const handleChange = (event) => {
            this.setState({ [event.target.name]: event.target.value })
        }

        const handleSubmit = async () => {
            await this.props.validateUser(this.state.email, this.state.password);
            if (this.props.isValid) {
                document.getElementById("error_message").style.display = 'none';
                await authentication.onLogin();
                await this.props.getEmployeeData();
                this.props.
                    history.push({
                        pathname: "/dashboard",
                        state: { users: this.props.users, isValid: this.props.isValid }
                    })
            }
            else {
                document.getElementById("error_message").style.display = 'block';
            }
        }

        return (
            <div className="container">
                <div className="login">
                <div>
                    <label htmlFor="userName">Email</label>
                    <input name="email" id="userName" type="email" placeholder="Enter your Email" required onChange={(event) => handleChange(event)}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" id="password" type="password" placeholder="Enter your Password" required onChange={(event) => handleChange(event)}></input>
                </div>
                <div>
                    <button id="login" type="submit" onClick={handleSubmit}> Login </button>
                </div>
                <div id="error_message" class="error" style={{ display: 'none' }}>Invalid Credentials</div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        isValid: state.login.isValid,
        users: state.employeeList.users
    }
}
function mapDispatchToProps(dispatch) {
    return {
        validateUser: (email, password) => {
            dispatch(validateUser(email, password))
        },
        getEmployeeData: () => {
            dispatch(getEmployeeData())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);