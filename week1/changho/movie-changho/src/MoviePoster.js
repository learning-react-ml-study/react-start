import React, { Component } from 'react';
import PropTypes from 'prop-types'


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
export default MoviePoster;