import React, {useEffect, useState} from 'react';
import {AuthorListItemComponent} from "../components/AuthorListItemComponent";
import {useParams} from "react-router-dom";
import {ListGroup} from "react-bootstrap";
import {LoadingComponent} from "../components/LoadingComponent";


export const SearchPage = () => {
    const { query } = useParams();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            const searchAuthors = async () => {
                setLoading(true);

                console.log(query);

                if (query !== "") {
                    const response = await fetch(`https://openlibrary.org/search/authors.json?q=${query}`);
                    const data = await response.json();

                    console.log(data);

                    setResults(data.docs);
                }

                setLoading(false);
            };

            searchAuthors();
        },
        []
    );

    if (loading) {
        return (
            <LoadingComponent />
        )
    } else {
        if (results && results.length > 0) {
            return (
                <div className="SearchPage">
                    <ListGroup>
                        {results.map(author => <AuthorListItemComponent key={author.key} author={author}/>)}
                    </ListGroup>

                    <p>Found {results.length} authors...</p>
                </div>
            );
        } else {
            return <p>No records found</p>
        }
    }
}
