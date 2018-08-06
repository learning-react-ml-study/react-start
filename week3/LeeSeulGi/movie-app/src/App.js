import React, { Component } from 'react';

import './App.css';

import Movie from './Movie';


class App extends Component {

  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callAppi() // await가 걸리면서 return 값이 나올 때까지 기다림;
    this.setState({
      movies,
    })
  }

  _callAppi = () => {
    // return 을 안쳐주지 fetch가  실행이 안되고 json.data.moves 가 undefined 뜸
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
      .then(req => req.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
