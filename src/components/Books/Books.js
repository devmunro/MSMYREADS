import SelectShelf from "../Shelves/selectShelf";

const BookComponent = ({found, updateShelf}) => {
    return ( 


<li key={found.id}>
            <div className="book">
              <div className="book-top">
              <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${found.imageLinks ? found.imageLinks.smallThumbnail : `https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo-Image-Placeholder.svg&psig=AOvVaw1MPXkScC8J8-rvr9floJrJ&ust=1667119568055000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjZ676GhfsCFQAAAAAdAAAAABAE`})`, //same dont have image whyyyyyyyyyyyyyyyyyyyy
                  }}
                ></div>
                
                  <SelectShelf found={found} updateShelf={updateShelf} />

              </div>
              <div className="book-title">{found.title}</div>
              <div className="book-authors">{found.author}</div>
            </div>
          </li>

        
     );
}
 
export default BookComponent;