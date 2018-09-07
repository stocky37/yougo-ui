import {connect} from 'react-redux';
import {CREATE_GO_FAIL_SNACK} from '../../constants/components';
import reduxOpenComponent from '../../util/ui/reduxOpenComponent';
import DeleteGoSnackbar from './CreateGoFailSnackbar';

const mapDispatchToProps = () => ({
	action: () => {
		// eslint-disable-next-line no-console
		console.log('Retry delete...');
	},
});

export default reduxOpenComponent(CREATE_GO_FAIL_SNACK)(
	connect(
		null,
		mapDispatchToProps,
	)(DeleteGoSnackbar),
);