/** @format */

import axios from 'axios';

const contentRepository = {
    boardsGet: async () => {
        try {
            const response = await axios.get('/boards');
            return response;
        } catch (error) {
            throw Error(error);
            return false;
        }
    },
    boardGet: async (boarderId) => {
        try {
            const response = await axios.get(`/board/${boarderId}`);
            return response;
        } catch (error) {
            throw Error(error);
            return false;
        }
    },
    boardDelete: async (boarderId) => {
        try {
            const response = await axios.delete(`/board/${boarderId}`);
            return response;
        } catch (error) {
            throw Error(error);
            return false;
        }
    },
    boardsUpdate: async (boarderId, queryObj) => {
        try {
            const response = await axios.put(`/board/${boarderId}`, queryObj);
            return response;
        } catch (error) {
            throw Error(error);
            return false;
        }
    },
    topicListGet: async () => {
        try {
            const response = await axios.get('/topics');
            return response;
        } catch (error) {
            throw Error(error);
            return false;
        }
    },
};
export default contentRepository;
