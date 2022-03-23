import { useParams } from "react-router-dom";
import {Badge, Card, Col, Container, Image, Row, Table} from "react-bootstrap";
import {useEffect, useState} from "react";


export const BookPage = () => {

    const { bookKey } = useParams();
    const [book, setBook] = useState();

    useEffect(
        () => {
            const getDescription = (data) => {
                if (data.description.value) {
                    return data.description.value;
                }

                if (data.description) {
                    return data.description;
                }

                return "Description not found...";
            };

            const getFirstSentence = (data) => {
                if (data.excerpts && data.excerpts.length > 0) {
                    for (let i = 0; i < data.excerpts.length; i++) {
                        if (data.excerpts[i].comment === "first sentence") {
                            return data.excerpts[i].excerpt;
                        }
                    }

                    return "First sentence not available";
                }
            };

            const getCoverUrl = (data) => {
                if (data.covers && data.covers.length > 0) {
                    return `https://covers.openlibrary.org/b/id/${data.covers[0]}-M.jpg`
                }
            };

            const fetchBookData = async () => {
                if (bookKey !== "") {
                    const response = await fetch(`https://openlibrary.org/works/${bookKey}.json`);
                    const data = await response.json();

                    console.log("Book", data);

                    setBook({
                        title: data.title,
                        description: getDescription(data),
                        created: data.created.value,
                        first_sentence: getFirstSentence(data),
                        coverUrl: getCoverUrl(data),
                        subjects: data.subject_people || []
                    });
                }
            };

            fetchBookData();
        },
        []
    )

    if (book) {
        return (
            <div className="BookPage">
                <Container>
                    <Row>
                        <Col>
                            <h1>{book.title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Image src={book.coverUrl} alt={book.title} />
                        </Col>
                        <Col sm={8}>
                            <Table striped bordered hover size="sm">
                                <tr>
                                    <th>Description</th>
                                    <td>{book.description}</td>
                                </tr>
                                <tr>
                                    <th>Created</th>
                                    <td>{book.created}</td>
                                </tr>
                                <tr>
                                    <th>First Sentence</th>
                                    <td>{book.first_sentence}</td>
                                </tr>
                                <tr>
                                    <th>Subjects</th>
                                    <td>
                                        {book.subjects.map(subject => <Badge pill bg="secondary">{subject}</Badge>)}
                                    </td>
                                </tr>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    } else {
        return <p>Book not found</p>
    }
}
