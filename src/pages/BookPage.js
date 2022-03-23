import {React, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";


export const BookPage = () => {

    const { bookKey } = useParams();
    const [book, setBook] = useState()

    useEffect(
        () => {
            const fetchBookData = async () => {
                if (bookKey !== "") {
                    const response = await fetch(`https://openlibrary.org/works/${bookKey}.json`);
                    const data = await response.json();

                    console.log("Book", data);

                    setBook(data);
                }
            };

            fetchBookData();
        },
        []
    )

    if (book) {
        return (
            <div className="BookPage">
                <h1>{book.title}</h1>
            </div>
        );
    } else {
        return <p>Book not found</p>
    }
}
