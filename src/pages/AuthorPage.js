import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {WorkListsComponent} from "../components/WorkListsComponent";
import {LoadingComponent} from "../components/LoadingComponent";


export const AuthorPage = () => {

    const { authorKey } = useParams();
    const [author, setAuthor] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            const fetchAuthorData = async () => {
                setLoading(true);

                if (authorKey !== "") {
                    const response = await fetch(`https://openlibrary.org/authors/${authorKey}.json`);
                    const data = await response.json();

                    setAuthor(data);
                }

                setLoading(false);
            };

            fetchAuthorData();
        },
        []
    );

    if (loading) {
        return (
            <LoadingComponent />
        )
    } else {
        if (author) {
            return (
                <div className="AuthorPage">
                    <h1>{author.name}</h1>
                    <p>{author.bio}</p>

                    <WorkListsComponent authorKey={authorKey} />
                </div>
            );
        } else {
            return (
                <p>Author not found.</p>
            );
        }
    }
}
