import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './movie.css';

class Movie extends Component{

  static propTypes = {
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
  }

  render(){
    return (
      <div className="Movie">
        <div className="Movie_Column">
         <MoviePoster poster={this.props.poster} alt={this.props.title} />
        </div>
        <div className="Movie_Column">
          <h1>{this.props.title}</h1>
          <div className="Movie_Genres">
            {this.props.genres.map(genre => <MovieGenre genre={genre} key={this.props.id} />)}
          </div>
          <div className="Movie_Synopsis">
            <LinesEllipsis
              text={this.props.synopsis}
              maxLine='3'
              ellipsis='...'
              trimRight
              basedOn='letters'
              />
          </div>
        </div>
        
      </div>
    )
  }
}

function MovieGenre({genre}){
  return (
    <span className="Movie_Genres">{genre} </span>
  )   
}

// class MoviePoster extends Component{

//   static propTypes = {
//     poster: PropTypes.string.isRequired
//   }
//   render(){
//     return(
//       <img src={this.props.poster} />
//     )
//   }
// }

function MoviePoster ({poster, alt}){
  return (
    <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
  )
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

export default Movie;
