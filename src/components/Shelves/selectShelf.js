import { useState } from "react";

const SelectShelf = ({ found, updateShelf }) => {
  const [shelfSelect, setShelfSelect] = useState(found.shelf);

  const handleShelf = (e) => {
    const shelfValue = e.target.value;
    setShelfSelect(shelfValue);
    console.log(shelfValue);
    updateShelf(found, shelfValue);
  };

  return (
    <div className="book-shelf-changer">
      <select value={shelfSelect} onChange={handleShelf}>
        
        <option value="currentlyReading" label="Currently" ></option>
        <option value="wantToRead" label="Want to Read"></option>
        <option value="read" label="Read"></option>
        <option value="none" defaultValue>None</option>
      </select>
    </div>
  );
};

export default SelectShelf;
