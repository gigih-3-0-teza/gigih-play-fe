import axios from "axios";
import { API_URL } from "../config/constants";

export const getAllVideos = async (search) => {
    try {
        const response = await axios.get(`${API_URL}videos`, {
            params: {
                search,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getVideoById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}videos/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const addComment = async (data) => {
    try {
        const response = await axios.post(`${API_URL}comments`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};
