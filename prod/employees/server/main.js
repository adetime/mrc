import _ from 'lodash';
import { image, helpers } from 'faker';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';

Meteor.startup(() =>{
  // great place to genarete some data

  // check if any data exists in our collection
  const numRecords = Employees.find({}).count(); // verifica tudo com {}
  //console.log(numRecords); aparece no teminal... nao no navegador
  if (!numRecords){
    // generate some data
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  }

  Meteor.publish('employees', function(){
    return Employees.find({}, { limit: 20 });
  });
});
