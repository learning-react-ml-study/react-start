import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie';



class App extends Component {

  state = {
  }

  componentWillMount(){
    console.log('will mount');
    //api에 작업 요청
  }

componentDidMount(){
  this._getMovies();
  //데이터 관련 작업 마무리
}

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie);
      return <Movie 
        title={movie.title_long} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis={movie.synopsis} /> 
    })
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=ranking')
    .then(response => response.json())
    .then(json => json.data.movies) 
    .catch(err => console.log(err));
 }

  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;

/*
component update!!

1. 요소 검사
_renderMovies에 console.log(movie);
 small_cover_image
 title
 genre
 summary
 */ 