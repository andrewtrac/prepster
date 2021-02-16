import axios from 'axios'

const getQuestion = async (category) => {
  try {
    const res = axios.get(`https://prepster-api.herokuapp.com/questions/${category}`)
      .then((res) => res.data);
    return res
  } catch (error) {
    throw error;
  }
};


export { getQuestion }
