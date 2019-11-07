import React, { Component, Fragment } from 'react'
import Banner from '../container/Banner'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Whole from '../container/Whole'
import Good from '../container/Good';
import Share from '../container/Share';
import Ask from '../container/Ask';
import Job from '../container/Job';
import Test from '../container/Test';

export default class FirstPage extends Component {
 render() {
        return (
                    <div>
                        <Banner/>
                        <Switch>
                            <Route path='/firstpage/whole' component={Whole}/>
                            <Route path='/firstpage/good' component={Good}/>
                            <Route path='/firstpage/share' component={Share}/>
                            <Route path='/firstpage/ask' component={Ask}/>
                            <Route path='/firstpage/job' component={Job}/>
                            <Route path='/firstpage/test' component={Test}></Route>
                        </Switch>
                    </div>
        )
    }
}
