import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';




class App extends Component {
//   componentWillMount() {
//     console.log('component will mount')
//     // api 작업
//   };
  componentDidMount() {
    console.log('component did mount');
    // data를 작업
    setTimeout(() => {
      let addMovie = [
        {
        title: 'addMovie1 ',
        image: 'http://ticketimage.interpark.com/Movie/still_image/V16/V1600647p_s01.gif'
      }
    ]
     this.setState({
      movies:  [
        {
          title: 'jasonBourne',
          image: 'http://ticketimage.interpark.com/Movie/still_image/V16/V1600647p_s01.gif'
        },
        {
          title: 'Matrix',
          image: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        {
          title: 'OldBoy',
          image: 'https://agcrump.files.wordpress.com/2011/07/oldboy02.jpg'
        },
        {
          title: 'hunger Games',
          image: 'https://is2-ssl.mzstatic.com/image/thumb/Music1/v4/ac/08/3d/ac083d70-0149-0a0a-4b90-7647203edbe0/UMG_cvrart_00602547178466_01_RGB72_1500x1500_14UMGIM51157.jpg/1200x630bb.jpg'
        }
      ]
     })
  }, 5000)
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
  } 

  renderMovie () {
    const movies = this.state.movies.map((movie) => (
      <Movie key={movie.title} title={movie.title} image={movie.image} />
    ))
    return movies;
  }
  render() {
    console.log('render')
    return (
      <div className="App">
        <h1>this is the react</h1>
          {/* {this.state.movies.map((movie) => (
            <Movie key={movie.title} title={movie.title} image={movie.image} />
          ))} */}
          {this.state.movies ? this.renderMovie() : this.state.loading}
      </div>
    );
  }
}


export default App;
