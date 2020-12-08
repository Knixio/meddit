import axios from 'axios';

const ncNewsApi = axios.create({
  baseURL: 'https://matthew-nc-news-api.herokuapp.com/api',
});

export const getArticles = () => {
  return ncNewsApi.get('/articles').then(({ data }) => {
    //console.log(data.articles);
    return data.articles;
  });
};

export const getArticle = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};
