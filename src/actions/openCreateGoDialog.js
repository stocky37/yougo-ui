import Modals from '../constants/Modals';
import openModal from './openModal';

export default () =>
	openModal({
		key: Modals.CREATE_GO.key,
		props: {},
	});
