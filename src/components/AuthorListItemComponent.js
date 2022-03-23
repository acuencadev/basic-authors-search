import React from 'react';
import { Link } from "react-router-dom";


export const AuthorListItemComponent = ({author}) => {
    const authorRoute = `/author/${author.key}`;

    return (
        <div className="AuthorListItemComponent">
            <Link to={authorRoute}>{author.name} ({author.work_count})</Link><br/>
            <i>{author.birth_date}</i>
        </div>
    );
}