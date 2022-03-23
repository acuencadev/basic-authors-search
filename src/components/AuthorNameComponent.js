import React from 'react';
import {Placeholder} from "react-bootstrap";
import {Link} from "react-router-dom";


export const AuthorNameComponent = ({author}) => {

    if (author) {
        return (
            <div className="AuthorNameComponent">
                <p>by <Link to={`/author/${author.key.split('/')[2]}`}>{author.name}</Link></p>
            </div>
        );
    } else {
        return (
            <Placeholder xs={4}  />
        )
    }
}
