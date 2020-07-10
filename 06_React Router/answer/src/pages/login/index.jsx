import React from 'react';
import { message } from 'antd';

export default class Login extends React.Component {
    handleLogin = () => {
        localStorage.setItem('token', 'xixi');
        message.info('登录成功！');
    }
    handleLogout = () => {
        localStorage.removeItem('token');
        message.info('退出成功！');
    }
    render() {
        return (
            <div>
                <p><button className="btn btn-primary" onClick={this.handleLogin}>登陆</button></p>
                <p><button className="btn btn-danger" onClick={this.handleLogout}>退出</button></p>
            </div>
        );
    }
}