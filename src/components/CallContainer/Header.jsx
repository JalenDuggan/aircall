import React from 'react';

export default function Header(props) {
  return (
    <header className="call-date">
      <h4 className="text--semi-bold">{props.date}</h4>
      <hr className="call-separator" />
    </header>

  );
}