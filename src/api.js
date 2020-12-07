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
