import * as BooksAPI from "../../BooksAPI";
import { useEffect, useState } from "react";
import CloseSearch from "./closeSearch";
import SearchFilter from "./searchFilter";

export const SearchBar = ({ setScreenPage, updateShelf, allBooks}) => {
  const [findBooks, setFindBooks] = useState([]);
  const [filterBooks, setFilterBooks] = useState([]);




  useEffect(() => {
    const getResults = (query) => {
      if (query.length > 0) {
        BooksAPI.search(query).then((data) => {
          if (data.error) {
            // too catch error

            setFilterBooks([]);
          } else {

            
            setFilterBooks(data);
            
          }
        });
      } else {
        setFilterBooks([]);
      }
    };
    getResults(findBooks); //findbooks only
  }, [findBooks, allBooks]); //findbooks only



  const checkShelf =allBooks.find((match) => match.id === filterBooks.id)
  checkShelf ? (checkShelf.shelf = filterBooks.shelf) : (filterBooks.shelf = "none") //added this to stop duplication of books


  const handleChange = (e) => {
    setFindBooks(e.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <CloseSearch setScreenPage={setScreenPage} />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={findBooks}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <SearchFilter filterBooks={filterBooks} updateShelf={updateShelf}/>
      </div>
    </div>
  );
};
