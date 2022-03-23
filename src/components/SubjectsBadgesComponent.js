import React from 'react';
import {Badge} from "react-bootstrap";


export const SubjectsBadgesComponent = ({subjects}) => {
    if (subjects && subjects.length > 0) {
        return (
            <div className="SubjectsBadgesComponent">
                {subjects.map(subject => <Badge key={subject} pill bg="secondary">{subject}</Badge>)}
            </div>
        );
    } else {
        return (
            <p>No subjects available.</p>
        )
    }
}
