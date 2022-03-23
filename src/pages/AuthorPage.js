import {React, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


export const AuthorPage = () => {

    const { authorKey } = useParams();
    const [author, setAuthor] = useState();

    useEffect(
        () => {
            const fetchAuthorData = async () => {
                if (authorKey !== "") {
                    const response = await fetch(`https://openlibrary.org/authors/${authorKey}.json`);
                    const data = await response.json();

                    console.log("Author", data);

                    setAuthor(data);
                }
            };

            fetchAuthorData();
        },
        []
    );

    if (author) {
        return (
            <div className="AuthorPage">
                <h1>Author Page #{authorKey}</h1>
                <p>{author.name}</p>
            </div>
        );
    } else {
        return (
            <p>Author not found.</p>
        );
    }
}
