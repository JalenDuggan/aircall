import React from 'react';

export default function Container(props) {

  const callTime = new Date(props.created_at);
  const callTimeString = `${callTime.getHours()}:${callTime.getMinutes()}`
  return (
    <article className='CallBox'>
      <div>
        {props.direction === "inbound" && <img src="https://camo.githubusercontent.com/edbad1f00b8681ed5616f038295c934edb797f021d7c9b41d2530be72d8dff4f/687474703a2f2f7777772e666c617469636f6e2e636f6d2f706e672f3235362f31373231372e706e67" />}
        {props.direction === "outbound" && <img src="https://camo.githubusercontent.com/d255840a533c10323830ef4f437014d92ce922b96f9fdc8abada436513104756/687474703a2f2f7777772e666c617469636f6e2e636f6d2f706e672f3235362f31373832362e706e67" />}
      </div>
      <div className="CallInfo">
        <div>
          <h4>{props.from}</h4>
        </div>
        <div>
          <p>{props.via}</p>
          <p>{callTimeString}</p>
        </div>
      </div>

    </article>

  );
}