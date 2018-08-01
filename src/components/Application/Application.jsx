import PropTypes from 'prop-types';
import React from 'react';
import Body from '../Body/index';
import Header from '../Header/index';
import Modals from '../Modals/index';

class Application extends React.Component {
	componentDidMount() {
		const {load} = this.props;
		load();
	}

	render() {
		return (
			<div>
				<Header />
				<Body />
				<Modals />
			</div>
		);
	}
}

Application.propTypes = {
	load: PropTypes.func.isRequired,
};

export default Application;
