import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";  // 引入getUpcomingMovies
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const UpcomingMoviesPage = () => {
  // 使用getUpcomingMovies通过useQuery获取即将上映的电影数据
  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;  // 显示加载动画
  }

  if (isError) {
    return <h1>{error.message}</h1>;  // 显示错误信息
  }

  const movies = data.results;  // 获取电影列表

  const favorites = movies.filter(m => m.favorite);  // 过滤出收藏的电影
  localStorage.setItem('favorites', JSON.stringify(favorites));  // 将收藏的电影存储到本地

  const addToFavorites = (movieId) => true;  // 添加到收藏的功能

  return (
    <PageTemplate
      title="Upcoming Movies"  // 设置页面标题
      movies={movies}  // 将获取的电影数据传递给PageTemplate组件
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;  // 每部电影的收藏按钮
      }}
    />
  );
};

export default UpcomingMoviesPage;
