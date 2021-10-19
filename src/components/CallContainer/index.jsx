import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function CallContainer() {

  const [data, setData] = useState({
    calls: []
  });

  useEffect(() => {
    axios.get('https://aircall-job.herokuapp.com/activities')
    .then((res) => {
      console.log(res.data);
    })
  },[])

  return (
    <span>
      dsffdsf
    </span>
  );
};
