import {batchActions} from 'redux-batched-actions';
import arr from '../utils/arr';

export default (request, onSuccess = [], onFailure = []) => async dispatch => {
	const response = await dispatch(request);
	return dispatch(batchActions(arr(response.error ? onFailure : onSuccess)));
};