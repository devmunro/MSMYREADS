import * as BooksAPI from "../../BooksAPI";
import { useEffect, useState } from "react";
import CloseSearch from "./closeSearch";
import SearchFilter from "./searchFilter";

export const SearchBar = ({ setScreenPage, updateShelf, allBooks }) => {
  const [findBooks, setFindBooks] = useState([]);
  const [filterBooks, setFilterBooks] = useState([]);

  useEffect(() => {
    const getResults = (query) => {
      if (query.length > 0) {
        BooksAPI.search(query).then((data) => {
          if (data.error) {
            // could use instead !data.status === 200
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
  }, [findBooks]); //findbooks only

  allBooks.find((match) => {
    //added this to stop duplication of books

    if (match.id === filterBooks.id) {
      console.log("check here");
      return (filterBooks.shelf = match.shelf);
    } else {
      return (filterBooks.shelf = "none");
    }
  });

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
        <SearchFilter filterBooks={filterBooks} updateShelf={updateShelf} />
      </div>
    </div>
  );
};
