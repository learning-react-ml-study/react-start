import React from 'react';
import PropTypes from 'prop-types'
import './Movie.css';
import MoviePoster from './MoviePoster';

import LinesEllipsis from 'react-lines-ellipsis';

// class Movie extends Component {

//   render() {
// 		console.info(this.props);
//   	return (
// 			<div>
// 				<header>
// 					<h1>{this.props.title}</h1>
// 				</header>
// 				<MoviePoster title={this.props.title} image={this.props.image} />
// 			</div>
//     );
//   }
// }

const MovieGenres = ({genre}) => {
	return (
		<span className='movie__genre'>{genre } </span>
	)
}

const Movie = ({title, image, genres, synopsis}) => {
	return (
		<div className='Movie'>
			<div className='movie__columns'>
				<MoviePoster title={title} image={image} alt={title} />
			</div>
			<div className='movie__columns'>
				<h1>{title}</h1>
				<div className='movie__genres'>
					{genres.map((genre, i) => <MovieGenres genre={genre} key={i} />)}
				</div>
				<p className='movie__synopsis'>
					<LinesEllipsis text={synopsis} maxline='4' ellipsis='...more' 
					baseOn='letters'
					trimRight />
				</p>
			</div>
		</div>
);
}

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	genres: PropTypes.array.isRequired,
	synopsis: PropTypes.string.isRequired
}





export default Movie;
