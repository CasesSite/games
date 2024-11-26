import axios from "axios";

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