import React, { Component } from "react";
import { connect } from 'react-redux';
import validateUser from '../../redux/actions/loginValidationAction';
import getEmployeeData from '../../redux/actions/employeeDataAction';
import authentication from '../../authentication';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        // const [email, setEmail] = useState("");
        // const [password, setPassword] = useState("");

        const handleChange = (event) => {
            this.setState({ [event.target.name]: event.target.value })
        }


        const handleSubmit = async () => {
            await this.props.validateUser(this.state.email, this.state.password);
            console.log(this.props.isValid);
            if (this.props.isValid) {
                await authentication.onLogin();
                await this.props.getEmployeeData();
                this.props.
                    history.push({
                        pathname: "/dashboard",
                        state: { users: this.props.users, isValid: this.props.isValid }
                    })
            }
            console.log(this.state.email);
            console.log(this.state.password);

        }

        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="userName">Email</label>
                        <input name="email" id="userName" type="email" placeholder="Enter your Email" required onChange={(event) => handleChange(event)}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input name="password" id="password" type="password" required onChange={(event) => handleChange(event)}></input>
                    </div>
                    <div>
                        <button type="submit" onClick={handleSubmit}> Login </button>
                    </div>
                    <small style={{ display: 'none' }}>Invalid Credentials</small>
                </form>
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