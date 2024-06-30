import './SearchBox.scss';
import { FormEventHandler } from 'react';


type SearchBoxProps = {
  label: string;
  searchTerm: string;
  onInput: FormEventHandler<HTMLInputElement>;
}

const SearchBox = ({label, searchTerm, onInput}: SearchBoxProps) => {
  return (
    <div className='search-box'>
      <input className='search-box__text' type="text"
      id={label}
      name={label} 
      value={searchTerm} 
      placeholder={label}
      onInput={onInput}
      />
    </div>
  )
}

export default SearchBox
