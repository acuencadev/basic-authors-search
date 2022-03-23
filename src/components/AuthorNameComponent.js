import React from 'react';
import {Placeholder} from "react-bootstrap";


export const AuthorNameComponent = ({author}) => {

    if (author) {
        return (
            <div className="AuthorNameComponent">
                <p>by {author.name}</p>
            </div>
        );
    } else {
        return (
            <Placeholder xs={4}  />
        )
    }
}
