import React, { Component } from 'react'

export default class Topic extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    

    componentDidMount(){
        fetch("https://cnodejs.org/api/v1/topic/" + window.location.href.split("=")[1])
        .then((res) => res.json())
        .then((res) => {
            this.setState({
                data: res.data
            })
            console.log(this.state.data);
        })
    }

    // rend = () => {
    //     console.log(this.state.data);
    //     console.log(window.document.getElementsByClassName("topic_id").innerHTML);
    //     window.document.getElementsByClassName("topic_id").innerHTML = this.state.data.content;
    // }
   
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html:this.state.data.content}}>

            </div>
        )
    }
}
