import { createAction } from 'utility/redux/reduxActions';

const ACTION_HEADER = 'PAGES/HOME';

const NAVIGATE_TO_HYPERLOOP = `${ACTION_HEADER}/NAVIGATE_TO_HYPERLOOP`;
const navigateToHyperloop = createAction(NAVIGATE_TO_HYPERLOOP);

export { NAVIGATE_TO_HYPERLOOP, navigateToHyperloop };
