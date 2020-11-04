

export default function EmployeeList(props) {

    return (
        <table id="empData">
            <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>gender</th>
                <th>email</th>
                <th>phone number</th></tr>
            {props.location.state.users.user && props.location.state.users.user.map(user =>
                <tr><td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNo}</td></tr>)}
        </table>

    );
}