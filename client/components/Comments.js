import React, { Component } from 'react';

class Comments extends Component {

  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button 
            className="remove-comment" 
            onClick={() => this.props.removeComment(this.props.params.postId, i)}
          >
            &times;
          </button>
        </p>
      </div>
    )
  }
  
  render() {
    const { postId } = this.props.params;
    return (
      <div className="comments">
       {this.props.postComments.map(this.renderComment, this)}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={(e) => {
          e.preventDefault()
          const author = this.refs.author.value;
          const comment = this.refs.comment.value;
          this.props.addComment(postId, author, comment);
          this.refs.commentForm.reset();
        }}>
         <input type="text" ref="author" placeholder="author"/>
         <input type="text" ref="comment" placeholder="comment"/>
         <input type="submit" hidden/>
       </form>
      </div>
    );
  }
}

export default Comments;