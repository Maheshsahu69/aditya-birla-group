import React, { useState } from 'react';
import './LoginPage.css';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const history = useHistory();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const onLogin = () => {
        if (userName === 'user1' && password === '12345') {
            history.push("/songlist");
        } else {
            alert(`enter username as "user1" and password as "12345"`);
        }
    }
    return (
        <div>
            <div className="top-bar"> Login page</div>
            <div className="username-input-box">
                <div className="ui fluid input">
                    <input type="text" placeholder="Enter username as user1" onChange={(e) => { setUserName(e.target.value) }} />
                </div>
            </div>
            <div className="password-input-box">
                <div className="ui fluid input">
                    <input type="password" placeholder="Enter password as 12345" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
            </div>
            <div className="button-field">
                <button className="ui primary button" onClick={onLogin}>Login</button>
                <button className="ui primary button">Signup</button>
            </div>
        </div>
    )
}
export default LoginPage;