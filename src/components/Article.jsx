import React, { Component } from 'react';
import { getArticle } from '../api';
import Comments from './Comments';

class Article extends Component {
  state = {
    article: {},
  };

  componentDidMount() {
    //console.log(this.props.article);
    getArticle(this.props.article_id).then((article) => {
      this.setState({ article });
    });
  }

  render() {
    const { article } = this.state;
    //console.log(article);
    return (
      <div>
        <h2>{article.title}</h2>
        <h3>This article is about {article.topic}</h3>
        <p>{article.body}</p>
        <p>This article was writen by user: {article.author}</p>
        <p>Number of votes: {article.votes}👍</p>
        <footer>This article was created: {article.created_at}</footer>
        <Comments article_id={this.props.article_id} />
      </div>
    );
  }
}

export default Article;

//State: number of comments, comments array, upvote counter, downvote counter
