import CurrentShelf from "./Shelves/currentlyreading";
import WantToShelf from "./Shelves/wanttoread";
import ReadShelf from "./Shelves/read";


const Main = ({ allBooks, updateShelf }) => {
  return (
    <div className="list-books-content">
      <div>
        <CurrentShelf allBooks={allBooks} updateShelf={updateShelf} />
        <WantToShelf allBooks={allBooks} updateShelf={updateShelf} />
        <ReadShelf allBooks={allBooks} updateShelf={updateShelf} />
      </div>
    </div>
  );
};

export default Main;
