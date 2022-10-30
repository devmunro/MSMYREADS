import BookComponent from "../Books/Books";

const WantToShelf = ({ allBooks, updateShelf}) => {
 

    const wantToRead = allBooks.filter((a) => a.shelf === "wantToRead");


  const WantToReadShelf = wantToRead.map((found) => {
    return (
      <BookComponent key={found.id} found={found}  updateShelf={updateShelf}  />
    );
  });

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{WantToReadShelf}</ol>
      </div>
    </div>
  );
};

export default WantToShelf;
