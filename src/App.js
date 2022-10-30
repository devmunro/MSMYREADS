import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { SearchBar } from "./components/Search/searchpage";
import OpenSearch from "./components/Search/openSearch";
import Main from "./components/mainpage";

function App() {
  const [screenPage, setScreenPage] = useState("mainPage");

  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const response = await BooksAPI.getAll();
      setAllBooks(response);
    };

    getAllBooks();
  }, [allBooks]);


 
    const updateShelf = (bookID, shelf) => {
      const bookitem = allBooks.filter((find) => find.id !== bookID.id);
      BooksAPI.update(bookID, shelf);

      if (shelf === "none") {
        setAllBooks(bookitem);
        console.log("none");
      } else {

        setAllBooks((add) => [add, bookID]);
        console.log("addedto ", shelf);
      }
    };


  return (
    <div className="app">
      {screenPage === "mainPage" && (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <Main updateShelf={updateShelf} allBooks={allBooks} />
          <OpenSearch setScreenPage={setScreenPage} />
        </div>
      )}
      {screenPage === "searchPage" && (
        <SearchBar
          setScreenPage={setScreenPage}
          updateShelf={updateShelf}
          allBooks={allBooks}
        />
      )}
    </div>
  );
}

export default App;
