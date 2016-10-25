import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/employee_list';

const App = () => {
  return (
    <div>
      Hello
      <EmployeeList />
    </div>
  );
};

Meteor.startup(() => {
  // react render call
  ReactDOM.render(<App />, document.querySelector('.container'));
});
