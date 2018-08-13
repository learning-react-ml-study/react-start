import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import Axios from 'axios';




class App extends Component {
//   componentWillMount() {
//     console.log('component will mount')
//     // api 작업
//   };
  componentDidMount() {
    this.getMovies();
    console.log('1')
    // console.log('hello')
    // 시나리오를 관리하는 법을 프로미스로 
    // fetch(`https://yts.am/api/v2/list_movies.json?sort_by=rating`)
    // .then(res => res.json())
    // .then(data => console.log(data.data.movies))
    // .catch(err => console.log(err))
}
//  // 프롭스 스테이트 update
//  componentWillReceiveProps(props) {
//    console.log(props)
//  }
  constructor(props) {
    super(props);
    this.state = {
      loading: 'Loading'
    }
    this.renderMovie = this.renderMovie.bind(this);
    this.callApi = this.callApi.bind(this);
  } 

  async getMovies() {
    const  movies = await this.callApi();
    console.log(movies)
    console.log('2')
    this.setState({
      movies
    })

  }

  callApi() {
    return Axios.get(`https://yts.am/api/v2/list_movies.json?sort_by=download_count`)
    .then(res =>  res.data.data.movies)
    .catch(err => console.log(err));
  }

  renderMovie () {
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
      return <Movie key={movie.id} 
      genres={movie.genres}
      title={movie.title_english} 
      synopsis={movie.synopsis}
      image={movie.medium_cover_image} />
    }    // 인덱스를 사용하면 퍼포 측면에서 조금 느리다
  )
    return movies;
  }
  render() {
    console.log('render')
    return (
      <div className={this.state.movies ? 'App' : 'App__loading'}>
        {/* <h1>this is the react</h1> */}
          {/* {this.state.movies.map((movie) => (
            <Movie key={movie.title} title={movie.title} image={movie.image} />
          ))} */}
          {this.state.movies ? this.renderMovie() : this.state.loading}
      </div>
    );
  }
}


export default App;
