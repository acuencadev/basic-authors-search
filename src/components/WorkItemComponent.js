import React from 'react';
import {Link} from "react-router-dom";


export const WorkItemComponent = ({work}) => {

    const bookRoute = `/book/${work.key.split("/")[2]}`;

    return (
        <div className="WorkItemComponent">
            <Link to={bookRoute}>{work.title}</Link>
        </div>
    );
}
