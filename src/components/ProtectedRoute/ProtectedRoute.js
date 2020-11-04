import {Route, Redirect} from 'react-router-dom';

import authentication from '../../authentication';
export default function ProtectedRoute(props){
    return (
        <Route path={props.path} render = {data => authentication.getLoginStatus() ? 
        (<props.component {...data}></props.component>):
    (<Redirect to={{pathname : '/'}}></Redirect>)}></Route>
    )
}