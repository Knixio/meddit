import React, { Component } from 'react';
import { getComments, postComment } from '../api';
import Loading from '../components/Loading';
import CommentAdder from '../components/CommentAdder';
import ArticleVoter from '../components/ArticlesVoter';

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
  };
  componentDidMount() {
    getComments(this.props.article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }

  addComment = (commentToPost) => {
    const { article_id } = this.props;
    postComment(commentToPost, article_id).then((newComment) => {
      this.setState((currentState) => {
        return {
          comments: [newComment, ...currentState.comments],
        };
      });
    });
  };

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div>
          <CommentAdder addComment={this.addComment} />
          {comments.map((comment) => {
            return (
              <div className="comments-list" key={comment.comment_id}>
                <ul className="articles-votes">
                  <li>
                    <ArticleVoter
                      votes={comment.votes}
                      article_id={comment.article_id}
                    />
                  </li>
                  <li>
                    <h5 className="user-comment">
                      <strong>posted by: </strong>u/{comment.author}
                    </h5>
                  </li>
                </ul>

                <p>{comment.body}</p>
                <footer className="comment-footer">
                  Posted on: {comment.created_at}
                </footer>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Comments;
