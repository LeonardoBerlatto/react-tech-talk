import React from "react";
import { SearchBar } from "../../components"

import { ReactComponent as MoviefyIcon } from '../../assets/icons/moviefy-icon.svg';

import "./Header.scss";

export const Header = ({ onSearch }) => {

    const handleSearchChange = (event) => {
        onSearch(event.target.value);
    }

    return (
        <header>
            <div className="title">
                <MoviefyIcon />
                <span>MOVIEFY</span>
            </div>

            <SearchBar
                onSearchChange={handleSearchChange}
                onSearch={() => { }} />
        </header>
    );
}