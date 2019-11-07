import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Banner extends Component {
    constructor(){
        super();
        this.state={
            page:1
        }
    }
    render(){
        return(
            <div className='nav'>
                <button><Link to='/firstpage/whole'>全部</Link></button>
                <Link className='a_title' to='/firstpage/good'>精华</Link>
                <Link className='a_title' to='/firstpage/share'>分享</Link>
                <Link className='a_title' to='/firstpage/ask'>问答</Link>
                <Link className='a_title' to='/firstpage/job'>招聘</Link>
                <Link className='a_title' to='/firstpage/test'>客户端测试</Link>
            </div>
        )
    }

}
