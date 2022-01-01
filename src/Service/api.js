import axios from 'axios';

const url = "http://localhost:5000";

export const addApplicant = async (applicantData) => {
  return await axios.post(`${url}/hostelApplicants`, applicantData);
}

export const getApplicant = async () => {
    return await axios.get(`${url}/viewApplicants`);
}

export const delApplicant = async () => {

    return await axios.delete(`${url}/deleteApplicants`)

}


