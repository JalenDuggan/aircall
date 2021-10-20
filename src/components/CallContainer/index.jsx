import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from './Header.jsx';
import Container from './Container.jsx';

import './styles.css';

export default function CallContainer() {

  const [data, setData] = useState();

  const callDates = function (callsArray) {
    const allCalls = callsArray.map(call => {
      
      // return(
      //   <Appointment
      //     key={appointment.id}
      //     id={appointment.id}
      //     time={appointment.time}
      //     interview={getInterview(state, appointment.interview)}
      //     interviewers={interviewers}
      //     bookInterview={bookInterview}
      //     deleteInterview={deleteInterview}
      //   />
      // )
    })
  }

  useEffect(() => {
    axios.get('https://aircall-job.herokuapp.com/activities')
    .then((res) => {
      console.log(res.data);
      callDates(res.data)
    })
  },[])

  const date = 'October 5, 2021';
  return (
    <article>
      <Header date={date} />
      <Container
        created_at="2018-04-18T16:59:48.000Z"
        direction="outbound"
        from="Jonathan Anguelov"
        via="NYC Office"
      />
    </article>
  );
};
