import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";

import "./SearchBar.scss";

export const SearchBar = () => {

    return (
        <div className="search-bar" >
            <button>    
                <SearchIcon />
            </button>
            <input type="text" placeholder="Search for movies ..." />
        </div>
    )
}