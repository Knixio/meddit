import React, { Component } from 'react';
import { getArticles } from '../api';
import { Link } from '@reach/router';
import Loading from '../components/Loading';
class Nav extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    getArticles().then((articles) => {
      //console.log(articles);
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles, isLoading } = this.state;
    //console.log(articles);
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <ul>
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
        </ul>
      );
    }
  }
}

export default Nav;

//State: articles array, number of upvotes (for sorting),
