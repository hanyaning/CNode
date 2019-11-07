import React, { Component } from 'react'
import { Pagination } from 'antd'

export default class Job extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            page : 1
        }
        
    }
    
    onchange = (page) => {
       this.setState({
           page : page
       });
    }

    componentDidMount() {
        fetch('https://cnodejs.org/api/v1/topics?tab=job&page=1')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })

    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.page !== prevState.page){
            fetch('https://cnodejs.org/api/v1/topics?tab=job&page=' + this.state.page)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
        }
        
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.data.map((item, index) => {
                            return (
                                <ul className='list-content' key={index}>
                                    <li className='img1'><img className='img-size' alt='' src={item.author.avatar_url} /></li>
                                    <li className='view'><p className='p1'>{`${item.reply_count}`}</p><p className='p2'>/</p><p className='p3'>{`${item.visit_count}`}</p></li>
                                    <li className={item.top || item.good ? 'top' : item.tab === 'ask' || item.tab === 'share' ? 'tab' : ''}>
                                        {item.top ? '置顶' : item.good ? '精华' : item.tab === 'ask' ? '问答' : item.tab === 'share' ? '分享' : ''}
                                    </li>
                                    <li className='conent_title' onClick={()=>{window.location.href = `https://hanyaning.github.io/CNode/build/#/topic?id=${item.id}`}}>{item.title}</li>
                                    <li className='user-img'><img className='user-img-size' alt='' src={item.author.avatar_url} /></li>
                                    <li className='time'>1天前</li>
                                </ul>
                            )
                        })
                    }
                </div>
                <Pagination onChange={this.onchange} defaultCurrent={1} total={100} style={{margin:'-7px 0px 0px 10px'}}/>
            </div>
        )
    }
}
