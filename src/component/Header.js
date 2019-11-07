import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <header>
                    <img src='//static2.cnodejs.org/public/images/cnodejs_light.svg'/>
                    <input type='search' />
                    <div style={{float:"right"}}>
                        <Link to='/firstPage'>首页</Link>
                        <Link to='/newUser'>新手入门</Link>
                        <Link to='/api'>API</Link>
                        <Link to='/about'>关于</Link>
                        <Link to='/loginout'>注册</Link>
                        <Link to='/loginin'>登录</Link>
                        <Link to='/topic'></Link>
                    </div>
                </header>
            </div>
        )
    }
}
