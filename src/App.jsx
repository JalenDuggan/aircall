import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import CallContainer from './components/CallContainer/index.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <CallContainer />
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
