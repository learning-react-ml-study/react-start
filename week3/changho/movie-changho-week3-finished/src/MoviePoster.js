import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './MoviePoster.css'

class MoviePoster extends Component {
	
	static propTypes = {
		title: PropTypes.string,
		image: PropTypes.string 
	}

	render() {
		
		return (
				<img className='movie__poster' src={this.props.image} alt={this.props.title} />
		);
	}
}
export default MoviePoster;