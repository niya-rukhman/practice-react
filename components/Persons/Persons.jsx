import React from 'react';
import './Persons.css';
import Person from './Person/Person';
import PropTypes from 'prop-types';

export default function Persons() {
  const personsData = [
    {
      "name": "Nida",
      "age": 11,
      "description": "chef",
      "isEditMode": false
    },
    {
      "name": "Rukhman",
      "age": 15,
      "description": "Marketing",
      "isEditMode": false
    },
    {
      "name": "Haniya",
      "age": 3,
      "description": "student",
      "isEditMode": false
    }
  ]

  const enableEdit = () => {
    // props.person = true;
    alert("pak");
  }

 return (
    <div className="Persons">
      <h1>Persons</h1>
      {
        personsData.map(person => 
        <Person person={person} 
        callMeWhenYouWant={enableEdit}/>)
      }
    </div>




  );

}

 Persons.propTypes = {
  // name: PropTypes.string
}
