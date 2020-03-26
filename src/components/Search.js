import React, {useState} from "react";

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearInputChanges = (e) => {
        setSearchValue(e.target.value);
    };

    const resetInputField = () => {
        setSearchValue('');
    }

    const searchHandler = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form className="search-form">
            <input
                type="text"
                className="search-form__input"
            />
            <input
                className="search-form__submit"
                onClick={searchHandler}
                type="submit"
                value="Search"
            />
        </form>
    );
}

export default Search;