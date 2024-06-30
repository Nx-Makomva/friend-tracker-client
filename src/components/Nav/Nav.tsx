import { useState, FormEvent, useEffect } from "react";
import SearchBox from "../SearchBox/SearchBox";
import "./Nav.scss";
import { Link } from "react-router-dom";

type NavProps = {
  handleSearchInput: (event: FormEvent<HTMLInputElement>) => void;
  searchTerm: string;
};

const Nav = ({handleSearchInput, searchTerm}: NavProps) => {
  
  return (
    <div className='nav'>
      <Link to="/">
      <p>Home</p>
      </Link>
      <SearchBox 
        label="Search Name, Heritage or Profession"
        searchTerm={searchTerm}
        onInput={handleSearchInput}
      />
    </div>
  )
}

export default Nav
