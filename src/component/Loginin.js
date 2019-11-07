import React from 'react'
import {useHistory} from 'react-router-dom'

const Loginin = () => {
    let history = useHistory();
    function changePage(){
        history.push('/firstpage/whole');
    }
    return (
        <div className='Login_div'>
            <div className='Loginin_title'>
                <ul>
                    <li>主页</li>
                    <li>/</li>
                    <li>登录</li>
                </ul>
            </div>
            <div className='Loginin_input'>
                <label>用户名</label>
                <input type='text'/>
            </div>
            <div className='Loginin_input2'>
                <label>密码</label>
                <input type='text'/>
            </div>
            <button className='loginin_btn' onClick={changePage}>登录</button>
        </div>
    )
}

export default Loginin