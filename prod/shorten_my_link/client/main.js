import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

const App = () => {
  return (
    <div>
      <h1>
        Heloooo
      </h1>
      <div>
        <Header />
      </div>
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});
