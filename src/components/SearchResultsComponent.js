import { React } from 'react';
import {AuthorListItemComponent} from "./AuthorListItemComponent";


export const SearchResultsComponent = ({results}) => {

    if (results && results.length > 0) {
        return (
            <div className="SearchResultsComponent">
                {results.map(author => <AuthorListItemComponent key={author.key} author={author} />) }
            </div>
        );
    } else {
        return <p>No records found...</p>
    }
}
