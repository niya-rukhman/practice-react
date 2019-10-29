import React from 'react';
import './PersonInfo.css';
import PropType from 'prop-types';
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function PersonInfo(props) {
        
    return (
        <Card.Body className="PersonInfo">
            <Card.Title>{props.person.name}, {props.person.age}</Card.Title>
            <Card.Text>
                {props.person.description}
            </Card.Text>
            <ButtonGroup className="button-group" aria-label="Basic example">
                <Button variant="light" onClick={props.onButtonClick}>
             
                    <FontAwesomeIcon className="text-info" icon={faEdit} />
                </Button>
                <Button variant="light">
                    <FontAwesomeIcon className="text-danger" icon={faTrash} />
                </Button>
            </ButtonGroup>
        </Card.Body>

    );

}

PersonInfo.propTypes = {
    person: PropType.object,
    onButtonClick: PropType.func
}

 
