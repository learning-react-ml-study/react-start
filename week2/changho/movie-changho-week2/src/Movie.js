import React from 'react';
import PropTypes from 'prop-types'
import './Movie.css';
import MoviePoster from './MoviePoster';

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

const Movie = ({title, image}) => {
	return (
		<div>
			<header>
				<h1>{title}</h1>
			</header>
			<MoviePoster title={title} image={image} />
		</div>
);
}

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
}





export default Movie;
