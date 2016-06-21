
import React from 'react';
class Comment extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="list-group-item">
                {this.props.author}:
                {this.props.date}:
                {this.props.children}
            </div>
        )
    }
}
export {Comment as default}