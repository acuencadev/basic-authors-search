import React from 'react';
import { Link } from "react-router-dom";
import {ListGroupItem} from "react-bootstrap";


export const AuthorListItemComponent = ({author}) => {
    const authorRoute = `/author/${author.key}`;

    return (
        <div className="AuthorListItemComponent">
            <ListGroupItem><Link to={authorRoute}>{author.name} ({author.work_count})</Link></ListGroupItem>
        </div>
    );
}