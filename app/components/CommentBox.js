'use strict'

import React from 'react';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
class CommentBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {comments:[]};
        this.getComments();
        setInterval(()=>this.getComments(),5000);
    }

    handleCommentSubmit(comment){
        console.log(comment);
        this.state.comments.push(comment);
        this.setState({comments:this.state.comments});
    }

    getComments(){
        $.ajax({
            url:this.props.url,
            dataType:'json',
            cache:false,
            success:data =>{
                this.setState({comments:data});
            },
            error:(xhr,status,error)=>{
                console.error(error);
            }
        })
    }
    componentWillMount(){
        console.log('will mount');

       /* var xhr = new XMLHttpRequest();
        xhr.open('GET',this.props.url,true);
        xhr.responseType = 'json';
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                this.setState({comments:xhr.response});
            }
        }.bind(this);
        xhr.send();*/
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div class="page-header">
                        <h1>评论</h1>
                    </div>
                    <CommentList comments={this.state.comments}/>
                </div>
                <div className="col-xs-12">
                    <CommentForm handleCommentSubmit={this.handleCommentSubmit.bind(this)}/>
                </div>
            </div>
        )
    }
}

export {CommentBox as default}