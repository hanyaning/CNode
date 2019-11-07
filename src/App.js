import React,{Component} from 'react'
import Header from './component/Header'
import './css/header.css'
import './css/content.css'
import './css/bottom_box.css'
import './css/loginin.css'
import {HashRouter as Router,Route} from 'react-router-dom'
import FirstPage from './component/FirstPage'
import NewUser from './component/NewUser'
import Api from './component/Api'
import About from './component/About'
import Loginout from './component/Loginout'
import Loginin from './component/Loginin'
import Bottom_box from './container/Bottom_box'
import Topic from './Topic'


export default class App extends Component{
        render() {
          return (
             <Router basename='/'>
               <div>
                  <Header/>
               </div>
               <div className='box_content'>
                  <div className='content'>
                     <div className='left'>
                        <Route path='/firstPage' component={FirstPage}/>
                        <Route path='/newUser' component={NewUser}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/loginout' component={Loginout}/>
                        <Route path='/loginin' component={Loginin}/>
                        <Route path='/topic' component={Topic}/>
                     </div>
                     <div className='right'>
                        <div className='login_div'>
                           <p className='login_div_title'>CNode：Node.js专业中文社区</p>
                           <p className='login_div_title2'>
                              您可以
                              <a>登录</a>
                              或
                              <a>注册</a>
                              ,也可以
                           </p>
                           <button className='login_div_btn'>通过GitHub登录</button>
                        </div>
                        <div className='login_div2'>
                           <a href="https://www.qiniu.com/events/cdn-package?code=cnode" target="_blank">
                              <img className='login_div2_img' src="//static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"/>
                           </a>
                           <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" >
                              <img className='login_div2_img' src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt=''/>
                           </a>
                           <a href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc_540_130&utm_campaign=huodong&utm_content=gift&ytag=cnodejs" target="_blank">
                              <img className='login_div2_img' src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt=''/>
                           </a>
                        </div>
                        <div className='login_div3'> 
                           <div className='login_div3_title'>
                              <p>无人回复的话题</p>
                              <ul className='login_div3_list'>
                                 <li>一种支持插件式开发的命令行工具开发模式</li>
                                 <li>请问缓存的内存模型是什么呢</li>
                                 <li>Hackers周刊第十期（2019-11-03）</li>
                                 <li>写了个在测试中，控制函数日志打印的npm包...</li>
                                 <li>libuv的定时器原理源码解析</li>
                              </ul>
                           </div>
                        </div>
                        <div className='login_div4'>
                           <div className='login_div4_title'>
                              <p>积分榜 TOP 100 >></p>
                           </div>                              
                           <ul className='login_div4_list'>
                              <li>21754 <span>i5ting</span></li>
                              <li>15675 <span>alsotang</span></li>
                              <li>9350 <span>leopon</span></li>
                              <li>9120 <span>atin25</span></li>
                              <li>8780 <span>jiyinyiyong</span></li>
                              <li>7335 <span>yakczh</span></li>
                              <li>6825 <span>im-here</span></li>
                              <li>6095 <span>DevinXian</span></li>
                              <li>5815 <span>chapgaga</span></li>
                              <li>5350 <span>magicdawn</span></li>
                           </ul>
                        </div>
                        <div className='login_div5'>
                           <div className='login_div4_title'>
                              <p>友情社区</p>
                           </div>
                           <ul className='login_div5_list'>
                              <li>
                                 <a href="https://ruby-china.org/" target="_blank">
                                    <img className='login_div5_img1'  src="//static2.cnodejs.org/public/images/ruby-china-20150529.png" alt=''/>
                                 </a>
                              </li>
                              <li>
                                 <a href="http://golangtc.com/" target='_blank'>
                                    <img className='login_div5_img2'  src="//static2.cnodejs.org/public/images/golangtc-logo.png" alt=''/>
                                 </a>
                              </li>
                              <li>
                                 <a href="http://phphub.org/" target='_blank' >
                                    <img className='login_div5_img1' src="//static2.cnodejs.org/public/images/phphub-logo.png" alt=''/>
                                 </a>
                              </li>
                              <li>
                                 <a href="https://testerhome.com/" target='_blank'>
                                    <img className='login_div5_img1' src="//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt=''/>
                                 </a>
                              </li>
                           </ul>
                        </div>
                        <div className='login_div6'>
                           <div className='login_div4_title'>
                              <p>客户端二维码</p>
                           </div>
                           <img className='Login_div6_img' src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/>
                           <p className='Login_div6_p'>客户端源码地址</p>
                        </div>
                     </div>
                  </div>
               </div>
               <Bottom_box/>
             </Router>
          )
        }
}
