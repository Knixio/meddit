import React, { Component } from 'react';
import { getArticles } from '../api';
import { Link } from '@reach/router';

class Nav extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    getArticles().then((articles) => {
      //console.log(articles);
      this.setState({ articles });
    });
  }

  render() {
    const { articles } = this.state;
    //console.log(articles);
    return (
      <nav>
        {articles.map((article) => {
          return (
            <Link
              className="article-list"
              to={`/articles/${article.article_id}`}
              key={article.article_id}
            >
              {article.title}
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default Nav;

//State: articles array, number of upvotes (for sorting),
