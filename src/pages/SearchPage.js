import React, {useEffect, useState} from 'react';
import {AuthorListItemComponent} from "../components/AuthorListItemComponent";
import {useParams} from "react-router-dom";


export const SearchPage = () => {
    const { query } = useParams();
    const [results, setResults] = useState([]);

    useEffect(
        () => {
            const searchAuthors = async () => {
                console.log(query);

                if (query !== "") {
                    const response = await fetch(`https://openlibrary.org/search/authors.json?q=${query}`);
                    const data = await response.json();

                    console.log(data);

                    setResults(data.docs);
                }
            };

            searchAuthors();
        },
        []
    );

    if (results && results.length > 0) {
        return (
            <div className="SearchPage">
                <h1>Home Page</h1>

                {results.map(author => <AuthorListItemComponent key={author.key} author={author} />) }
            </div>
        );
    } else {
        return <p>No records found</p>
    }
}
