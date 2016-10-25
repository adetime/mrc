import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const EmployeeList = (props) => {  
  return(
    <div>
      <div className="employee_list"></div>
        Employee List
        {props.employees.map(employee => <EmployeeDetail
            key={employee._id}
            employee={employee}
          />)}
    </div>
  );
};

export default createContainer(() => {
  // set up subscriptions
  Meteor.subscribe('employees');

  // return an object
  // whatever we return will be sent to EmployeeList
  // as props
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);
