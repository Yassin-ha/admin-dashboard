import React, { ChangeEvent } from "react";

interface SearchBarProps {
    onSearch: (query: string | number) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    return (
        <input className="mb-5 outline-none px-2 py-1 rounded-md" type="text" placeholder="بحث..." onChange={handleSearch} />
    );
};

export default SearchBar;
