import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Movie.css';

class Movie extends Component {

  render() {
		console.info(this.props);
  	return (
			<div>
				<header>
					<h1>{this.props.title}</h1>
				</header>
				<MoviePoster title={this.props.title} image={this.props.image} />
			</div>
    );
  }
}

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
}

class MoviePoster extends Component {
	
	static propTypes = {
		title: PropTypes.string,
		image: PropTypes.string 
	}

	render() {
		
		return (
			<div>
				<img src={this.props.image} alt={this.props.title} />
			</div>
		);
	}
}




export default Movie;
