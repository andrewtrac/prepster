import React, {useState, useEffect} from 'react'
import axios from 'axios'


const registerUser = async (email, password) => {
  try {
    const res = axios.post(`http://localhost:5000/users`, {
      email,
      password
    })
      .then((res) => res.data);
    return res
  } catch (error) {
    throw error;
  }
};


export { registerUser }
