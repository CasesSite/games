import axios from "axios";
import axiosClient from "~/helper/axiosClient.js";

export const getCaseById = async (id) => {
    try {
        const response = await axios.get(`https://dev.24cases.ru/v1/cases/get/${id}`)
        return response.data;
    } catch (error) {
        console.error(
            "Error fetching case",
            error.response?.data || error.message,
        );
        throw error;
    }
}

export const getAllCases = async () => {
    try {
        const response = await axios.get('https://dev.24cases.ru/v1/cases/getall')
        return response.data;
    } catch (error) {
        console.error(
            "Error fetching case",
            error.response?.data || error.message,
        );
        throw error;
    }
}

export const openCase = async ({ userId, caseId }) => {
    try {
        const response = await axiosClient.post('https://dev.24cases.ru/v1/case/open', {
            caseId,
            userId,
        })
        console.log('response', response);
        return response.data;
    } catch (err) {
        console.error('Error opening case', err);
        throw err;
    }
}