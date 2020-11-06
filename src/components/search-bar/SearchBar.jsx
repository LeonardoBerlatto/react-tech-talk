import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";

import "./SearchBar.scss";

const ENTER_CHARCODE = 13;

export const SearchBar = ({ onSearchChange, onSearch }) => {

    const handleSearchBarKeyDown = (event) => {
        if(event.charCode === ENTER_CHARCODE) {
            onSearch();
        }
    }

    return (
        <div className="search-bar" >
            <button onClick={() => { onSearch() }}>    
                <SearchIcon />
            </button>
            <input 
                type="text" 
                placeholder="Search for movies ..." 
                onChange={onSearchChange}
                onKeyPress={handleSearchBarKeyDown}/>
        </div>
    )
}