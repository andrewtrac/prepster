import axios from 'axios'

const getQuestion = async (category) => {
  try {
    const res = axios.get(`http://localhost:5000/questions/${category}`)
      .then((res) => res.data);
    return res
  } catch (error) {
    throw error;
  }
};


export { getQuestion }
