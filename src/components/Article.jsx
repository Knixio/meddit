import React, { Component } from 'react';
import { getArticle, upVoteArticle } from '../api';
import Comments from './Comments';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import Voter from '../components/Voter';

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

  handleClick = (event) => {
    upVoteArticle(this.state.article.article_id).then(() => {
      this.setState((currentState) => {
        const updatedState = {
          article: {
            ...currentState.article,
            votes: currentState.article.votes + 1,
          },
        };
        return updatedState;
      });
    });
  };

  render() {
    const { article, isLoading, hasError, errorMessage } = this.state;
    const newDate = article.created_at;
    const date = new Date(`${newDate}`);

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
          <div>
            <Voter votes={article.votes} article_id={article.article_id} />
          </div>
          <h3>Comments Section</h3>
          {/* insert comment adder here */}
          <Comments article_id={this.props.article_id} />
          <footer>
            <ul className="footer-ul">
              <li className="li-right">
                This article was written by user: {article.author}
              </li>
              <li className="li-left">
                This article was created on: {date.toString()}
              </li>
            </ul>
          </footer>
        </div>
      );
    }
  }
}

export default Article;

//State: number of comments, comments array, upvote counter, downvote counter

// <footer className="footer-right">
// This article was written by user: {article.author}
// </footer>
// <footer className="footer-left">
// This article was created on: {date.toString()}
// </footer>
