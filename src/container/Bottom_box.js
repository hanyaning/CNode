import React from 'react'

export default function Bottom_box(){
    return(
        <div className='bottom_box'>
            <div className='bottom_box_content'>
                    <ul className='top_ul'>
                        <li><a href='https://cnodejs.org/rss'>RSS</a></li>
                        <li>|</li>
                        <li className='address'><a style={{color:"black"}} href="https://github.com/cnodejs/nodeclub/">源码地址</a></li>
                    </ul>
                    <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                    <p>服务器赞助商为 
                        <span>
                            <img className='img-size1' alt='' src="//static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9"/>
                        </span>
                        ，存储赞助商为
                        <span>
                            <a href="http://www.qiniu.com/?ref=cnode">
                                <img className='img-size2' src="//static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" alt='' title='七牛云存储'/>
                            </a>
                        </span>
                        ,由
                        <span>
                            <a href="https://www.aliyun.com/product/nodejs?ref=cnode">
                                <img className='img-size3' src="//static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" title="alinode" alt=''/>
                            </a>
                        </span>
                        提供应用性能服务。
                    </p>
                    <p>
                        新手搭建 Node.js 服务器，推荐使用无需备案的
                        <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a>
                    </p>
            </div>
        </div>
    )
}