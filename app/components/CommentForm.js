import React from 'react';
class CommentForm extends React.Component {
    constructor(){
        super();
    }
    handleSubmit(event){
        event.preventDefault();
        var author = this.refs.author.value;
        var text = this.refs.text.value;
        this.props.handleCommentSubmit({author,text,date:"刚刚"});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <input type="text" ref="author" className="form-control" defaultValue="姓名" name="author"/>
                </div>
                <div className="form-group">
                    <textarea class="form-control" ref="text" name="content" id="text" cols="60" rows="7" defaultValue="留言"></textarea>
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-primary">发表评论</button>
                </div>
            </form>
        )
    }
}

export {CommentForm as default}