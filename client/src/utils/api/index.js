import axios from 'axios';

const url = 'http://localhost:5000/mutant';

export const getMutant = () => axios.get(url);
export const postMutant = (data) => axios.post(url, data);