import React from 'react';
import './PersonEdit.css';
// import PropTypes from 'prop-types';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


function PersonEdit(props) {
    return (
            <Card.Body className="PersonInfo">
            <Card.Title>Edit Person</Card.Title>
            <Card.Text>
                <input value={props.person.name}/>
                <input type="number" value={props.person.age}/>
                <textarea>{props.person.description}</textarea>
            </Card.Text>
            <ButtonGroup className="button-group" aria-label="Basic example">
                <Button variant="light">
                    <FontAwesomeIcon className="text-info" icon={faCheck} />
                </Button>
                <Button variant="light">
                    <FontAwesomeIcon className="text-danger" icon={faTimes} />
                </Button>
            </ButtonGroup>
        </Card.Body>


    );



}

export default PersonEdit;
