import { Component } from 'react';
import { connect } from 'react-redux';
import getEmployeeList from '../../redux/thunks/employeeDataThunk';
import './EmployeeList.css';

class EmployeeList extends Component {

    componentDidMount(){
        this.props.getEmployeeList();
    }
    render(){
    return (
        <table id="empData">
            <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>gender</th>
                <th>email</th>
                <th>phone number</th></tr>
            {this.props.users && this.props.users.data && this.props.users.data.map(user =>
                <tr><td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNo}</td></tr>)}
        </table>

    );
}
}
function mapStateToProps(state) {
    return {
        users: state.employeeList.users
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getEmployeeList: () => {
            dispatch(getEmployeeList())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);