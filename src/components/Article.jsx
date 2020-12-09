import React, { Component } from 'react';
import { getArticle } from '../api';
import Comments from './Comments';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    hasError: false,
    errorMessage: '',
  };

  componentDidMount() {
    //console.log(this.props.article);
    getArticle(this.props.article_id)
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch((error) => {
        const {
          response: { status, statusText },
        } = error;
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: `Article not found ${status}! ${statusText}`,
        });
      });
  }

  render() {
    const { article, isLoading, hasError, errorMessage } = this.state;
    if (isLoading) {
      return <Loading />;
    } else if (hasError) {
      return <ErrorMessage errorMessage={errorMessage} />;
    } else {
      return (
        <div className="article-list">
          <h2>{article.title}</h2>
          <h3>This article is about {article.topic}</h3>
          <p>{article.body}</p>
          <p>This article was written by user: {article.author}</p>
          <p>Number of votes: {article.votes}👍</p>
          <h3>Comments Section</h3>
          <Comments article_id={this.props.article_id} />
          {/* insert comment adder here */}
          <footer className="footer">
            This article was created at: {article.created_at}
          </footer>
        </div>
      );
    }
  }
}

export default Article;

//State: number of comments, comments array, upvote counter, downvote counter
