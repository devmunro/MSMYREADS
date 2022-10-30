import BookComponent from "../Books/Books";


const ReadShelf = ({ allBooks, updateShelf}) => {



   const read = allBooks.filter((a) => a.shelf === "read");


  const readShelf = read.map((found) => {
    return (
      <BookComponent key={found.id} found={found}  updateShelf={updateShelf} />
    );
  });

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{readShelf}</ol>
      </div>
    </div>
  );
};

export default ReadShelf;
