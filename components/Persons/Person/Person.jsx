import React from 'react';
import './Person.css';
import PersonInfo from './PersonInfo';
import PersonEdit from './PersonEdit';
import { Card, Button } from 'react-bootstrap'
import PropType from 'prop-types';

export default function Person(props) {
    
   
    return (
        <Card className="Person">
        
        {
            props.person.isEditMode ? 
            <PersonEdit person={props.person}/> :
            <PersonInfo person={props.person} 
            onButtonClick={props.callMeWhenYouWant}/>
            
        }

        </Card>

    

    );



}

Person.propTypes = {
    person: PropType.object,
    callMeWhenYouWant: PropType.func
  };
