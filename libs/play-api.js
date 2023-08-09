import axios from "axios";
import { API_URL } from "../config/constants";

export const getAllVideos = async () => {
    try {
        const response = await axios.get(`${API_URL}videos`);
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