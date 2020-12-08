import { Router } from '@reach/router';
import './App.css';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Article path="/articles/:article_id" />
        <ArticleList path="/articles" />
      </Router>
    </div>
  );
}

export default App;

//move articlelist to router
