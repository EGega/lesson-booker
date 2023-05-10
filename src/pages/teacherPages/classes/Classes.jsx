import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://127.0.0.1:8000/lessons/classes/');
      setClasses(response.data);
    };
    fetchData();
  }, []);
  console.log(classes);
  return (
    <></>
  )
}

export default Classes