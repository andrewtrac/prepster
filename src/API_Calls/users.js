import axios from 'axios'

const registerUser = async (email, password) => {
  try {
    const res = axios.post(`https://prepster-api.herokuapp.com/users`, {
      email,
      password
    })
      .then((res) => res.data);
    return res
  } catch (error) {
    throw error;
  }
};

const loginUser = async (email, password) => {
  try {
    const res = axios.post(`https://prepster-api.herokuapp.com/users/authenticate`, {
      email
    })
      .then((res) => res.data);
    return res
  } catch (error) {
    throw error;
  }
};


export { registerUser, loginUser }
