import React, {useEffect, useState} from 'react';
import {WorkItemComponent} from "./WorkItemComponent";
import {LoadingComponent} from "./LoadingComponent";


export const WorkListsComponent = ({ authorKey }) => {

    const [loading, setLoading] = useState(true);

    const [works, setWorks] = useState();

    useEffect(
        () => {
            const fetchAuthorWorks = async () => {
                if (authorKey !== "") {
                    setLoading(true);
                    const response = await fetch(`https://openlibrary.org/authors/${authorKey}/works.json`);
                    const data = await response.json();

                    console.log("Works", data.entries);

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
        return (
            <div className="WorkListsComponent">
                Works for {authorKey} go here...

                {works.map(work => <WorkItemComponent key={work.key} work={work} />)}
            </div>
        );
    }
}
