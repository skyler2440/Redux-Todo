import {CREATE_TASK} from './index';
export const createTask = (request) => {
    return {
        type: CREATE_TASK,
        payload: request
    }
};