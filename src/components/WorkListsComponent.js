import React, {useEffect, useState} from 'react';
import {WorkItemComponent} from "./WorkItemComponent";
import {LoadingComponent} from "./LoadingComponent";
import {ListGroup} from "react-bootstrap";


export const WorkListsComponent = ({ authorKey }) => {

    const [loading, setLoading] = useState(true);

    const [works, setWorks] = useState([]);

    useEffect(
        () => {
            const fetchAuthorWorks = async () => {
                if (authorKey !== "") {
                    setLoading(true);
                    const response = await fetch(`https://openlibrary.org/authors/${authorKey}/works.json`);
                    const data = await response.json();

                    if (data && data.entries) {
                        setWorks(data.entries);
                    }

                    setLoading(false);
                }
            }

            fetchAuthorWorks();
        },
        []
    );

    if (loading) {
        return (
            <LoadingComponent />
        )
    } else {
        if (works && works.length > 0) {
            return (
                <div className="WorkListsComponent">
                    <p>Found {works.length} works for this author...</p>

                    <ListGroup>
                        {works.map(work => <WorkItemComponent key={work.key} work={work} />)}
                    </ListGroup>
                </div>
            );
        }
    }
}
