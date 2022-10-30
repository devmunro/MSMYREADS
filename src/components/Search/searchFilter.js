import BookComponent from "../Books/Books";

const SearchFilter = ({ filterBooks, updateShelf }) => {
  let searchDisplay;



  if (filterBooks.length) {
    searchDisplay = filterBooks.map((found) => {
      return <BookComponent key={found.id} found={found} updateShelf={updateShelf}/>;
    });
  } else {
    searchDisplay = <p>No Items Found</p>;
  }
  return <ol className="books-grid">{searchDisplay}</ol>;
};

export default SearchFilter;
