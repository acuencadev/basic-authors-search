import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


export const SearchBarComponent = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleChange = (evt) => {
        setQuery(evt.target.value);
    }

    const handleKeyDown = (evt) => {
        if (evt.key === "Enter") {
            navigate(`/search/${query}`)
        }
    };

    return (
        <div className="SearchBarComponent">
            <input type="text" name="author" onKeyDown={handleKeyDown} onChange={handleChange} />
        </div>
    );
}
