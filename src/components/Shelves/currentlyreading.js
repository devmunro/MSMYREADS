import BookComponent from "../Books/Books";

const CurrentShelf = ({ allBooks, updateShelf}) => {
 
  
    const currentlyReading = allBooks.filter((a) => a.shelf === "currentlyReading");


  const CurrentlyReadingShelf = currentlyReading.map((found) => {
    return (
      <BookComponent key={found.id} found={found} updateShelf={updateShelf}  />
    );
  });

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{CurrentlyReadingShelf}</ol>
      </div>
    </div>
  );
};

export default CurrentShelf;
