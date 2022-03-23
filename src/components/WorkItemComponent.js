import React from 'react';
import {Link} from "react-router-dom";
import {ListGroupItem} from "react-bootstrap";


export const WorkItemComponent = ({work}) => {

    const bookRoute = `/book/${work.key.split("/")[2]}`;

    return (
        <div className="WorkItemComponent">
            <ListGroupItem><Link to={bookRoute}>{work.title}</Link></ListGroupItem>
        </div>
    );
}
