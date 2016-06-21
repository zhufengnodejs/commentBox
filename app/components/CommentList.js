import React from 'react'
import Comment from './Comment.js'
class CommentList extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div className="list-group">
                {
                    this.props.comments.map((comment,index)=>{
                        return  <Comment key={index} author={comment.author} date={comment.date}>{comment.text}</Comment>
                    })
                }
            </div>
        )
    }
}

export {CommentList as default}